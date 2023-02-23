import { Configuration, OpenAIApi } from "openai";

exports.handler = async function (event, context) {
  try {
    const apiKey = process.env.REACT_APP_AI_API;

    const request = JSON.parse(event.body);

    const configuration = new Configuration({
      apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        request.userQuestion /*Passing the user input as the question to openai*/,
      max_tokens: 500,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ result: completion.data.choices[0].text }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error running open ai:" + err }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
