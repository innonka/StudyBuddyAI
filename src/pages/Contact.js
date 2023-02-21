function Contact() {
  return (
    <div className="text-2xl p-4 mx-auto  max-w-2xl ">
      <h3 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
        Tell Us What You Think About This App
      </h3>

      <textarea
              className="mb-2 outline-none focus:ring-offset-2 focus:ring-2 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="textarea"
              placeholder="Type in your question"
            />

    </div>
  );
}

export default Contact;
