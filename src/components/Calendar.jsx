// Calendar.js
import React from "react";
import { format, startOfWeek, startOfMonth, endOfMonth, addDays, addMonths, subMonths, addWeeks, subWeeks, isToday } from "date-fns";
import { nl } from 'date-fns/locale';

const Calendar = ({ layout }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const renderDayNames = () => {
    const startDate = startOfWeek(currentDate, { weekStartsOn: 0 }); // Start week on Sunday
    const dayNames = [];

    for (let i = 0; i < 7; i++) {
      dayNames.push(
        <div className="day-name" key={i}>
          {format(addDays(startDate, i), "EEEE", { locale: nl })} {/* Day names in Dutch */}
        </div>
      );
    }

    return <div className="day-names-grid">{dayNames}</div>;
  };

  const renderWeekView = () => {
    const startDate = startOfWeek(currentDate, { weekStartsOn: 0 });
    const days = [];

    for (let i = 0; i < 7; i++) {
        const day = addDays(startDate, i);
        days.push(
        <div className="day" key={i}>
            <div className="dayname" key={i}>
                {format(addDays(startDate, i), "EEEE", { locale: nl })}  
            </div>
            <div className={`daynumber ${isToday(day) ? "currentDay" : ""}`} key={i}>
                {format(addDays(startDate, i), "d", { locale: nl })}
            </div>
        </div>
        );
    }

    return <div className="week-grid">{days}</div>;
  };

  // Generate monthly calendar
  const renderMonthView = () => {
    const startDate = startOfMonth(currentDate);
    const endDate = endOfMonth(currentDate);
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(
        <div className={`day ${isToday(day) ? "currentDay" : ""}`} key={format(day, "yyyy-MM-dd")}>
          {format(day, "d")}
        </div>
      );
      day = addDays(day, 1);
    }

    return <div className="month-grid">{days}</div>;
  };

  // Handle navigation
  const prev = () => {
    if (layout === "month") {
      setCurrentDate(subMonths(currentDate, 1)); // Go to previous month
    } else if (layout === "week") {
      setCurrentDate(subWeeks(currentDate, 1)); // Go to previous week
    }
  };

  const next = () => {
    if (layout === "month") {
      setCurrentDate(addMonths(currentDate, 1)); // Go to next month
    } else if (layout === "week") {
      setCurrentDate(addWeeks(currentDate, 1)); // Go to next week
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prev}>Vorige</button>
        <h2>{format(currentDate, "MMMM yyyy", { locale: nl })}</h2>
        <button onClick={next}>Volgende</button>
      </div>
      {layout === 'month' ? renderDayNames() : ''}
      {layout === "week" ? renderWeekView() : renderMonthView()}
    </div>
  );
};

export default Calendar;
