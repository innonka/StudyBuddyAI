/*Import of Packages*/
import { useState } from 'react'; 

import { Configuration, OpenAIApi } from 'openai';

/*Basic Styling of The Modal Div*/
const styles = {
  modal : {
    border: 'solid 1px #ccc',
    marginTop: '10px',

  }
}



function Home() {
  /*useState to track user input question*/
  const [userQuestion, setUserQuestion] = useState('');

  /*useState to display and hide modal holding AI response to user question*/
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [showDiv, setShowDiv] = useState(true);

  /*function to get user input*/
  const handleChange = (event) => {

    setUserQuestion(event.target.value);

  };

  /*Settings for openai key and fetch request and response*/
  const apiKey = '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';

  const promptAI = () => {
    const configuration = new Configuration({
      apiKey,
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion({
      model: "text-davinci-003",
      prompt: userQuestion /*Passing the user input as the question to openai*/
    }).then(res => {
      setModalOpen(true);
      setModalData(res.data.choices[0].text); /*Setting the response from the API to display in a modal div*/
      setShowDiv(true);
      //console.log(res.data.choices[0].text);
    });
  }


  return (

    /*Input area for user to type in and modal for AI response*/
    <div>

      <h1>What Would You Like To Know?</h1>


      <input value={userQuestion} onChange={handleChange} type='text' placeholder='Type in your question'>
      </input>
      <button onClick={promptAI}>Submit</button> 

      {modalOpen && showDiv &&
        <div style={styles.modal}>
          <p><strong>Answer:</strong> {modalData}</p>
          <button onClick={() => {
            setShowDiv(false);
            setUserQuestion('');
          }}>Close</button>
        </div>
        }

    </div>
  );
}

export default Home;