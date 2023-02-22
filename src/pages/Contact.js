function Contact() {
  return (
    <div className="text-2xl p-4 mx-auto  max-w-2xl ">
      <div
        className="mt-4 block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
        style={{
          backgroundColor: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "saturate(200%) blur(25px)",
        }}
      >
        <h1 className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          Give Us <br />
          <span className="text-blue-600">Your Feedback</span>
        </h1>

        <textarea
          className="mb-2 outline-none focus:ring-offset-2 focus:ring-2 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="textarea"
          placeholder="Provide a summary of what you think about this app."
          rows="5"
        />
        <div className="text-center">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
