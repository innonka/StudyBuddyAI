/*Import of Packages*/
import { NavLink } from "react-router-dom";

function Home() {
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

            <div className="flex flex-row place-content-evenly">
              <NavLink to="/calendar">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Calendar
                </button>
              </NavLink>
              <NavLink to="/assistant">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  AI Assistant
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
