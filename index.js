


const dayNames = [
     "Sunday",
     "Monday",
     "Tuesday", 
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
     
 ]; 
 
  
 const months = [
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

 const todaysdate = new Date("2015-03-07");
 const dayName = dayNames [todaysdate.getDay()];
 const monthName = months [todaysdate.getMonth()];
 const currentdate = dayName + "," + todaysdate.getDate() + " " + monthName + "," + todaysdate.getFullYear();
 
 document.getElementById("time").innerHTML = todaysdate;