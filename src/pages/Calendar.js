import { useEffect, useState } from "react";
import dateFormat from "dateformat";

function Calendar() {
  const [activeMonth, setActiveMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(activeMonth.getDate());

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [calendarTitle, setCalendarTitle] = useState("");

  const [events, setEvents] = useState([]);

  const [weeks, setWeeks] = useState([]);

  const updateCalendar = () => {
    weeks.splice(0, weeks.length); // empty the array

    const startOfMonth = new Date(
      activeMonth.getFullYear(),
      activeMonth.getMonth(),
      1
    );
    const lastOfMonth = new Date(
      activeMonth.getFullYear(),
      activeMonth.getMonth() + 1,
      0
    );

    // start on monday
    let currentWeek = {};
    let tempDate;

    for (let i = startOfMonth.getDate(); i <= lastOfMonth.getDate(); i++) {
      tempDate = new Date(
        startOfMonth.getFullYear(),
        startOfMonth.getMonth(),
        i
      );
      if (tempDate.getDay() == 0) {
        // start of new week
        if (i > 1) {
          weeks.push(currentWeek);
        }
        currentWeek = {};
      }
      currentWeek[daysOfWeek[tempDate.getDay()]] = { day: i, date: tempDate };
    }
    weeks.push(currentWeek);
    //setWeeks(weeks);
  };

  useEffect(() => {
    updateCalendar();
  }, [activeMonth]);

  //updateCalendar();

  useEffect(() => {
    setCalendarTitle("Calendar"); // triggers react to render everything
    if (events.length > 0) {
      return;
    }
    events.push({
      time: "9:00 AM",
      subject: "Front-end with Tailwind",
      description: "Learn about tailwind",
      id: uuidv4(),
    });
    console.log(events);
    updateCalendar();
    console.log("i fire once");
  }, []);

  const updateMonth = (value) => {
    setActiveMonth(
      new Date(activeMonth.getFullYear(), activeMonth.getMonth() + value, 1)
    );
    updateCalendar();
  };

  const showDay = (day) => {
    if (day?.day == selectedDate) {
      return (
        <p className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">
          {day?.day}
        </p>
      );
    } else {
      return (
        <p className="text-base text-gray-500 dark:text-gray-100 font-medium rounded-full w-8 h-8">
          {day?.day}
        </p>
      );
    }
  };

  const onDateClick = (day) => {
    console.log("clicked on ", day);
    setSelectedDate(day.day);
  };

  return (
    <div className="text-2xl p-4 mx-auto  max-w-2xl ">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
        {calendarTitle}
      </h1>

      <div className="flex items-center justify-center py-8 px-4">
        <div className="max-w-sm w-full shadow-lg">
          <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              <span
                tabIndex="0"
                className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
              >
                {dateFormat(activeMonth, "mmmm")} {activeMonth.getFullYear()}
              </span>
              <div className="flex items-center">
                <button
                  onClick={() => updateMonth(-1)}
                  aria-label="calendar backward"
                  className="hover:text-gray-400 text-gray-800 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </button>
                <button
                  onClick={() => updateMonth(+1)}
                  aria-label="calendar forward"
                  className="hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler  icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {daysOfWeek.map((d) => (
                      <th key={d}>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            {d}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, index) => (
                    <tr key={index}>
                      {daysOfWeek.map((day, index_2) => (
                        <td key={index + "-" + index_2}>
                          <div
                            onClick={() => onDateClick(week[day])}
                            className="px-2 py-2 cursor-pointer flex w-full justify-center"
                          >
                            {showDay(week[day])}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border-b pb-4 border-gray-400 border-dashed"
                >
                  <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                    {event.time}
                  </p>
                  <a
                    tabIndex="0"
                    className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                  >
                    {event.subject}
                  </a>
                  <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
