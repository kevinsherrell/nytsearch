import React from "react";

const NavBottom = props => {
  let newDate = new Date();
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let getDay = weekday[newDate.getDay()];
  let getDate = newDate.getDate();
  let getMonth = month[newDate.getMonth()];
  let getYear = newDate.getFullYear();
  return (
    <nav className="navBottom">
      <div className="container">
        <div className="topMobileNavContainer2">
          <p className="date">
            {getDay}, {getMonth} {getDate} {getYear}
          </p>
          {/* <p className="bottomNavRight">
            <a href="#">SUBSCRIBE NOW</a> <span>|</span> <a href="#">LOG IN</a>
          </p> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBottom;
