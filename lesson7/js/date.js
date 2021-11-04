
    let daynames = [
        "Sunday",
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        
    ]; 
    
     
    let buwan = [
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

    let d = new Date();
    let dayName = daynames [d.getDay()];
    let monthName = buwan [d.getMonth()];
    let fulldate = dayName + "," + monthName + " " + d.getDate() + d.getFullYear();
    
    document.getElementById("currentdate").textContent= fulldate;

    try {
        let options = {
            weekdays: "short",
            day: "numeric",
            month: "long",
            year:"numeric",
        }
        document.getElementById("currentdate2").textContent = new Date[].toLocaleDateString("en-US", options);
    }

    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
     



