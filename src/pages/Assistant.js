/*Import of Packages*/
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Configuration, OpenAIApi } from "openai";

const storageKey = "open-ai-history";

function Assistant() {
  /*useState to track user input question*/
  const [userQuestion, setUserQuestion] = useState("");

  /*useState to display and hide modal holding AI response to user question*/
  const [isBusy, setIsBusy] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [responseDivClassName, setResponseDivClassName] = useState("hidden");

  let historyString = localStorage.getItem(storageKey);
  if (historyString == null || historyString == "") {
    historyString = "[]";
  }

  const [history, setHistory] = useState(JSON.parse(historyString));

  /*function to get user input*/
  const handleChange = (event) => {
    setUserQuestion(event.target.value);
  };

  /*Settings for openai key and fetch request and response*/
  const apiKey = process.env.REACT_APP_AI_API;

  console.log(apiKey);

  const promptAI = () => {
    //setResponseDivClassName('hidden');
    setIsBusy(true);
    const configuration = new Configuration({
      apiKey,
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt:
          userQuestion /*Passing the user input as the question to openai*/,
        max_tokens: 500,
      })
      .then((res) => {
        console.log(res);
        //setModalOpen(true);
        setUserQuestion("");
        setResponseDivClassName("");
        setAiResponse(res.data.choices[0].text);
        setIsBusy(false);
        history.unshift({ q: userQuestion, a: res.data.choices[0].text });  // add to begining of array
        const newHistory = history.slice(0, 10);
        setHistory(newHistory);
        localStorage.setItem(storageKey, JSON.stringify(newHistory));
      });
  };

  return (
    <div className="text-2xl p-4 mx-auto  max-w-2xl text-center">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-8">
        Assistant
      </h1>

      <input
        className="mb-2 outline-none focus:ring-offset-2 focus:ring-2 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={userQuestion}
        onChange={handleChange}
        type="text"
        placeholder="Type in your question"
      ></input>

      <button
        onClick={promptAI}
        disabled={isBusy}
        className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>

      <div
        className={`mt-4 p-2 rounded-xl ${responseDivClassName} font-sans text-lg`}
        style={{
          backgroundColor: "hsla(0%, 0%, 100%, 0.8)",
          backdropFilter: "saturate(200%) blur(25px)",
        }}
      >
        <div className="">{aiResponse}</div>
      </div>

      <div className="mt-2 text-sm font-sans text-left bg-blue-200 rounded-lg">
        <h2 className="text-2xl mt-4 mb-2 p-2 font-medium">History</h2>
        {history.map((value) => (
          <div className="border-t-2 border-gray-200 p-2 mb-2">
            <div className="font-bold ">{value.q}</div>
            <div className="">{value.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assistant;
