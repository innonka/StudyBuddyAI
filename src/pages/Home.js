/*Import of Packages*/
import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

/*Basic Styling of The Modal Div*/
const styles = {
  modal: {
    border: "solid 1px #ccc",
    marginTop: "10px",
  },
};

function Home() {
  /*useState to track user input question*/
  const [userQuestion, setUserQuestion] = useState("");

  /*useState to display and hide modal holding AI response to user question*/
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [showDiv, setShowDiv] = useState(true);

  /*function to get user input*/
  const handleChange = (event) => {
    setUserQuestion(event.target.value);
  };

  /*Settings for openai key and fetch request and response*/
  const apiKey = "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";

  const promptAI = () => {
    const configuration = new Configuration({
      apiKey,
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt:
          userQuestion /*Passing the user input as the question to openai*/,
      })
      .then((res) => {
        setModalOpen(true);
        setModalData(
          res.data.choices[0].text
        ); /*Setting the response from the API to display in a modal div*/
        setShowDiv(true);
        //console.log(res.data.choices[0].text);
      });
  };

  return (
    /*Input area for user to type in and modal for AI response*/
    <>
      <div className="container mx-auto  max-w-2xl">
        <div className="text-center text-gray-800">
          <div
            className="mt-4 block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
            style={{
              backgroundColor: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "saturate(200%) blur(25px)",
            }}
          >
            <h1 className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Study Buddy <br />
              <span className="text-blue-600">Your AI Assistant</span>
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>

        {modalOpen && showDiv && (
          <div style={styles.modal}>
            <p>
              <strong>Answer:</strong> {modalData}
            </p>
            <button
              onClick={() => {
                setShowDiv(false);
                setUserQuestion("");
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
