//   Current Date and Time
function currentTime(){

    let today = new Date()
    let dayOfWeek = today.getDay()

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todayDay = days[dayOfWeek]
    let hours = today.getHours()
    let minutes = today.getMinutes()
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    let timeString = hours + ':' + minutes;
    document.getElementById("dayTime").textContent = `${todayDay} ${timeString}`
   }
   currentTime();
   setInterval(currentTime, 1000);

//    weatherReport Function
   
function weatherReport(){
    let city = document.getElementById("city").value; 
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
        .then((response) => {
            return response.json()
            
        })
        .then((jsonData) => {
            // console.log(jsonData);

            // Getting the data with the help oF DOM from HTML


            document.getElementById("temperature").textContent = `${(jsonData.days[0].temp)}°C`
            document.getElementById("location").textContent = `${jsonData.resolvedAddress}`
            document.getElementById("cloud").textContent = `${jsonData.currentConditions.conditions}`

            // Day wise Temperature for every hour

            document.getElementById("zero").textContent = `${(jsonData.days[0].hours[0].temp)}°C`
            document.getElementById("one").textContent = `${jsonData.days[0].hours[1].temp}°C`
            document.getElementById("two").textContent = `${jsonData.days[0].hours[2].temp}°C`
            document.getElementById("three").textContent = `${jsonData.days[0].hours[3].temp}°C`
            document.getElementById("four").textContent = `${jsonData.days[0].hours[4].temp}°C`
            document.getElementById("five").textContent = `${jsonData.days[0].hours[5].temp}°C`
            document.getElementById("six").textContent = `${jsonData.days[0].hours[6].temp}°C`
            document.getElementById("seven").textContent = `${jsonData.days[0].hours[7].temp}°C`
            document.getElementById("eight").textContent = `${jsonData.days[0].hours[8].temp}°C`
            document.getElementById("nine").textContent = `${jsonData.days[0].hours[9].temp}°C`
            document.getElementById("ten").textContent = `${jsonData.days[0].hours[10].temp}°C` 
            document.getElementById("eleven").textContent = `${jsonData.days[0].hours[11].temp}°C`
            document.getElementById("twelve").textContent = `${jsonData.days[0].hours[12].temp}°C`
            document.getElementById("thirteen").textContent = `${jsonData.days[0].hours[13].temp}°C`
            document.getElementById("fourteen").textContent = `${jsonData.days[0].hours[14].temp}°C`
            document.getElementById("fifteen").textContent = `${jsonData.days[0].hours[15].temp}°C`
            document.getElementById("sixteen").textContent = `${jsonData.days[0].hours[16].temp}°C`
            document.getElementById("seventeen").textContent = `${jsonData.days[0].hours[17].temp}°C`
            document.getElementById("eighteen").textContent = `${jsonData.days[0].hours[18].temp}°C`
            document.getElementById("ninteen").textContent = `${jsonData.days[0].hours[19].temp}°C`
            document.getElementById("twenty").textContent = `${jsonData.days[0].hours[20].temp}°C`
            document.getElementById("twentyOne").textContent = `${jsonData.days[0].hours[21].temp}°C`
            document.getElementById("twentyTwo").textContent = `${jsonData.days[0].hours[22].temp}°C`
            document.getElementById("twentyThree").textContent = `${jsonData.days[0].hours[23].temp}°C`

            // Conversion   of Fahrenheit To Celsius in Today Page

            function fahrenToCelsius()
            {
            document.getElementById("temperature").textContent = `${(jsonData.days[0].temp)}°C`
            document.getElementById("zero").textContent = `${(jsonData.days[0].hours[0].temp)}°C`
            document.getElementById("one").textContent = `${jsonData.days[0].hours[1].temp}°C`
            document.getElementById("two").textContent = `${jsonData.days[0].hours[2].temp}°C`
            document.getElementById("three").textContent = `${jsonData.days[0].hours[3].temp}°C`
            document.getElementById("four").textContent = `${jsonData.days[0].hours[4].temp}°C`
            document.getElementById("five").textContent = `${jsonData.days[0].hours[5].temp}°C`
            document.getElementById("six").textContent = `${jsonData.days[0].hours[6].temp}°C`
            document.getElementById("seven").textContent = `${jsonData.days[0].hours[7].temp}°C`
            document.getElementById("eight").textContent = `${jsonData.days[0].hours[8].temp}°C`
            document.getElementById("nine").textContent = `${jsonData.days[0].hours[9].temp}°C`
            document.getElementById("ten").textContent = `${jsonData.days[0].hours[10].temp}°C` 
            document.getElementById("eleven").textContent = `${jsonData.days[0].hours[11].temp}°C`
            document.getElementById("twelve").textContent = `${jsonData.days[0].hours[12].temp}°C`
            document.getElementById("thirteen").textContent = `${jsonData.days[0].hours[13].temp}°C`
            document.getElementById("fourteen").textContent = `${jsonData.days[0].hours[14].temp}°C`
            document.getElementById("fifteen").textContent = `${jsonData.days[0].hours[15].temp}°C`
            document.getElementById("sixteen").textContent = `${jsonData.days[0].hours[16].temp}°C`
            document.getElementById("seventeen").textContent = `${jsonData.days[0].hours[17].temp}°C`
            document.getElementById("eighteen").textContent = `${jsonData.days[0].hours[18].temp}°C`
            document.getElementById("ninteen").textContent = `${jsonData.days[0].hours[19].temp}°C`
            document.getElementById("twenty").textContent = `${jsonData.days[0].hours[20].temp}°C`
            document.getElementById("twentyOne").textContent = `${jsonData.days[0].hours[21].temp}°C`
            document.getElementById("twentyTwo").textContent = `${jsonData.days[0].hours[22].temp}°C`
            document.getElementById("twentyThree").textContent = `${jsonData.days[0].hours[23].temp}°C`

            }

             // Conversion   of Celsius To Fahrenheit in Today page
           


                   function convertToFahrenheit(celsius) {
                return ((celsius * 9 / 5) + 32).toFixed(1);  
           }

           

            function celsiusToFahrenheit(jsonData){
                document.getElementById("temperature").textContent = `${convertToFahrenheit(jsonData.days[0].temp)}°F`;
            document.getElementById("zero").textContent = `${convertToFahrenheit(jsonData.days[0].hours[0].temp)}°F`;
            document.getElementById("one").textContent = `${convertToFahrenheit(jsonData.days[0].hours[1].temp)}°F`;
            document.getElementById("two").textContent = `${convertToFahrenheit(jsonData.days[0].hours[2].temp)}°F`;
            document.getElementById("three").textContent = `${convertToFahrenheit(jsonData.days[0].hours[3].temp)}°F`;
            document.getElementById("four").textContent = `${convertToFahrenheit(jsonData.days[0].hours[4].temp)}°F`;
            document.getElementById("five").textContent = `${convertToFahrenheit(jsonData.days[0].hours[5].temp)}°F`;
            document.getElementById("six").textContent = `${convertToFahrenheit(jsonData.days[0].hours[6].temp)}°F`;
            document.getElementById("seven").textContent = `${convertToFahrenheit(jsonData.days[0].hours[7].temp)}°F`;
            document.getElementById("eight").textContent = `${convertToFahrenheit(jsonData.days[0].hours[8].temp)}°F`;
            document.getElementById("nine").textContent = `${convertToFahrenheit(jsonData.days[0].hours[9].temp)}°F`;
            document.getElementById("ten").textContent = `${convertToFahrenheit(jsonData.days[0].hours[10].temp)}°F`;
            document.getElementById("eleven").textContent = `${convertToFahrenheit(jsonData.days[0].hours[11].temp)}°F`;
            document.getElementById("twelve").textContent = `${convertToFahrenheit(jsonData.days[0].hours[12].temp)}°F`;
            document.getElementById("thirteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[13].temp)}°F`;
            document.getElementById("fourteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[14].temp)}°F`;
            document.getElementById("fifteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[15].temp)}°F`;
            document.getElementById("sixteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[16].temp)}°F`;
            document.getElementById("seventeen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[17].temp)}°F`;
            document.getElementById("eighteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[18].temp)}°F`;
            document.getElementById("ninteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[19].temp)}°F`;
            document.getElementById("twenty").textContent = `${convertToFahrenheit(jsonData.days[0].hours[20].temp)}°F`;
            document.getElementById("twentyOne").textContent = `${convertToFahrenheit(jsonData.days[0].hours[21].temp)}°F`;
            document.getElementById("twentyTwo").textContent = `${convertToFahrenheit(jsonData.days[0].hours[22].temp)}°F`;
            document.getElementById("twentyThree").textContent = `${convertToFahrenheit(jsonData.days[0].hours[23].temp)}°F`;
            }

            document.getElementById("cButton").addEventListener("click", function () {
                fahrenToCelsius();
                this.classList.toggle('active');
                document.getElementById("fButton").classList.remove('active')
            })
            
            document.getElementById("fButton").addEventListener("click", function () {
                celsiusToFahrenheit(jsonData);
                this.classList.toggle('active')
                document.getElementById("cButton").classList.remove('active')
            })

            // Adding week data Dynamically

            document.getElementById("todayPage").addEventListener("click", function () {
                this.classList.toggle('activeToday')
                document.getElementById("weekPage").classList.remove('activeToday')
                document.getElementById("weekData").style.display = "none"
                document.getElementById("todayData").style.display =""

            })

            document.getElementById("weekPage").addEventListener("click", function () {
                this.classList.toggle('activeToday');
                document.getElementById("todayData").classList.remove('activeToday')
                document.getElementById("weekData").style.display = "none"
                document.getElementById("todayData").style.display =""
            
            })


                // Adding day wise cards in weekpage Dynamically
            

            document.getElementById("weekPage").addEventListener("click", function () {
                document.getElementById("todayData").style.display = "none"
                document.getElementById("weekData").style.display = ""
                document.getElementById("weekData").innerHTML =
                    `
                    <section>
                    <h6>Wednesday</h6>
                    <img src="" alt="img" id="weekImage1">
                    <p class = "onedata">${jsonData.days[0].temp}°C</p>
                    </section>
 
        
                    <section>
                    <h6>Thursday</h6>
                    <img src="" alt="img" id="weekImage2">
                    <p class = "twodata">${jsonData.days[1].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Friday</h6>
                    <img src="" alt="img" id="weekImage3">
                    <p class = "threedata">${jsonData.days[2].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Saturday</h6>
                    <img src="" alt="img" id="weekImage4">
                    <p class = "fourdata">${jsonData.days[3].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Sunday</h6>
                    <img src="" alt="img" id="weekImage5">
                    <p class = "fivedata">${jsonData.days[4].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Monday</h6>
                    <img src="" alt="img" id="weekImage6">
                    <p class = "sixdata">${jsonData.days[5].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Tuesday</h6>
                    <img src="" alt="img" id="weekImage7">
                    <p class = "sevendata">${jsonData.days[6].temp}°C</p>
                    </section>

                  
                    `
                   // Conversion   of Celsius To Fahrenheit in Week page


                document.getElementById("fButton").addEventListener("click", function () {
                    

                    this.classList.toggle('active')
                    document.getElementById("cButton").classList.remove('active')
                    document.getElementById("temperature").textContent = `${convertToFahrenheit(jsonData.days[0].temp)}°F`;
                    document.querySelector(".onedata").textContent = `${convertToFahrenheit(jsonData.days[0].temp)}°F`
                    document.querySelector(".twodata").textContent = `${convertToFahrenheit(jsonData.days[1].temp)}°F`
                    document.querySelector(".threedata").textContent = `${convertToFahrenheit(jsonData.days[2].temp)}°F`
                    document.querySelector(".fourdata").textContent = `${convertToFahrenheit(jsonData.days[3].temp)}°F`
                    document.querySelector(".fivedata").textContent = `${convertToFahrenheit(jsonData.days[4].temp)}°F`
                    document.querySelector(".sixdata").textContent = `${convertToFahrenheit(jsonData.days[5].temp)}°F`
                    document.querySelector(".sevendata").textContent = `${convertToFahrenheit(jsonData.days[6].temp)}°F`
                })

               // Conversion   of Fahrenheit To Celsius  in Week page


                document.getElementById("cButton").addEventListener("click", function () {
                    document.getElementById("temperature").textContent = `${(jsonData.days[0].temp)}°C`;

                    this.classList.toggle('active');
                    document.getElementById("fButton").classList.remove('active')

                    document.querySelector(".onedata").textContent = `${(jsonData.days[0].temp)}°C`
                    document.querySelector(".twodata").textContent = `${jsonData.days[1].temp}°C`
                    document.querySelector(".threedata").textContent = `${jsonData.days[2].temp}°C`
                    document.querySelector(".fourdata").textContent = `${jsonData.days[3].temp}°C`
                    document.querySelector(".fivedata").textContent = `${jsonData.days[4].temp}°C`
                    document.querySelector(".sixdata").textContent = `${jsonData.days[5].temp}°C`
                    document.querySelector(".sevendata").textContent = `${jsonData.days[6].temp}°C`

                })

                    // Week page background images for day cards
              
                let weekBgImage = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/kBd2NTS/39.png", "https://i.ibb.co/rb4rrJL/26.png",  "https://i.ibb.co/1nxNGHL/10.png", "https://i.ibb.co/Kzkk59k/15.png"];

                if (jsonData.days[0].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage1").src = `${weekBgImage[0]}`
                } else if (jsonData.days[0].icon === "rain") {
                    document.getElementById("weekImage1").src = `${weekBgImage[1]}`
                } else if (jsonData.days[0].icon === "clear-day") {
                    document.getElementById("weekImage1").src = `${weekBgImage[2]}`
                } else if (jsonData.days[0].icon === "clear-night") {
                    document.getElementById("weekImage1").src = `${weekBgImage[3]}`
                } else if (jsonData.days[0].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage1").src = `${weekBgImage[4]}`
                }

                if (jsonData.days[1].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage2").src = weekBgImage[0]
                } else if (jsonData.days[1].icon === "rain") {
                    document.getElementById("weekImage2").src = weekBgImage[1]
                } else if (jsonData.days[1].icon === "clear-day") {
                    document.getElementById("weekImage2").src = weekBgImage[2]
                } else if (jsonData.days[1].icon === "clear-night") {
                    document.getElementById("weekImage2").src = weekBgImage[3]
                } else if (jsonData.days[1].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage2").src = weekBgImage[4]
                }

                if (jsonData.days[2].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage3").src = weekBgImage[0]
                } else if (jsonData.days[2].icon === "rain") {
                    document.getElementById("weekImage3").src = weekBgImage[1]
                } else if (jsonData.days[2].icon === "clear-day") {
                    document.getElementById("weekImage3").src = weekBgImage[2]
                } else if (jsonData.days[2].icon === "clear-night") {
                    document.getElementById("weekImage3").src = weekBgImage[3]
                } else if (jsonData.days[2].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage3").src = weekBgImage[4]
                }

                if (jsonData.days[3].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage4").src = weekBgImage[0]
                } else if (jsonData.days[3].icon === "rain") {
                    document.getElementById("weekImage4").src = weekBgImage[1]
                } else if (jsonData.days[3].icon === "clear-day") {
                    document.getElementById("weekImage4").src = weekBgImage[2]
                } else if (jsonData.days[3].icon === "clear-night") {
                    document.getElementById("weekImage4").src = weekBgImage[3]
                } else if (jsonData.days[3].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage4").src = weekBgImage[4]
                }

                if (jsonData.days[4].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage5").src = weekBgImage[0]
                } else if (jsonData.days[4].icon === "rain") {
                    document.getElementById("weekImage5").src = weekBgImage[1]
                } else if (jsonData.days[4].icon === "clear-day") {
                    document.getElementById("weekImage5").src = weekBgImage[2]
                } else if (jsonData.days[4].icon === "clear-night") {
                    document.getElementById("weekImage5").src = weekBgImage[3]
                } else if (jsonData.days[4].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage5").src = weekBgImage[4]
                }

                if (jsonData.days[5].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage6").src = weekBgImage[0]
                } else if (jsonData.days[5].icon === "rain") {
                    document.getElementById("weekImage6").src = weekBgImage[1]
                } else if (jsonData.days[5].icon === "clear-day") {
                    document.getElementById("weekImage6").src = weekBgImage[2]
                } else if (jsonData.days[5].icon === "clear-night") {
                    document.getElementById("weekImage6").src = weekBgImage[3]
                } else if (jsonData.days[5].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage6").src = weekBgImage[4]
                }

                if (jsonData.days[6].icon === "partly-cloudy-day") {
                    document.getElementById("weekImage7").src = weekBgImage[0]
                } else if (jsonData.days[6].icon === "rain") {
                    document.getElementById("weekImage7").src = weekBgImage[1]
                } else if (jsonData.days[6].icon === "clear-day") {
                    document.getElementById("weekImage7").src = weekBgImage[2]
                } else if (jsonData.days[6].icon === "clear-night") {
                    document.getElementById("weekImage7").src = weekBgImage[3]
                } else if (jsonData.days[6].icon === "partly-cloudy-night") {
                    document.getElementById("weekImage7").src = weekBgImage[4]
                }
            })


            // Main  Weather Icon 

            let weathericon = document.getElementById("headIcon");
            let changeImage = `${jsonData.days[0].icon}`;

            const imageurls = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
            };
            weathericon.src = imageurls[changeImage];


            // Today Highlight Cards Information

        
      
            document.getElementById("cloud").textContent = `${jsonData.days[0].conditions}`
            document.getElementById("precp").textContent = `Perc - ${jsonData.days[0].precip}%`

            document.getElementById("uvIndex").textContent = `${jsonData.days[0].uvindex}`

            if (jsonData.days[0].uvindex === 1 || jsonData.days[0].uvindex === 2) {
                document.getElementById("uvvalue").textContent = "Low"
            } else if (jsonData.days[0].uvindex === 3 || jsonData.days[0].uvindex === 4 || jsonData.days[0].uvindex === 5) {
                document.getElementById("uvvalue").textContent = "Moderate"
            } else if (jsonData.days[0].uvindex === 6 || jsonData.days[0].uvindex === 7) {
                document.getElementById("uvvalue").textContent = "High"
            } else if (jsonData.days[0].uvindex === 8 || jsonData.days[0].uvindex === 11 || jsonData.days[0].uvindex === 10) {
                document.getElementById("uvvalue").textContent = "Very high"
            } else {
                document.getElementById("uvvalue").textContent = "Extreme"
            }

            document.getElementById("windStatus").textContent = `${jsonData.days[0].windspeed}`

            document.getElementById("sunrise").textContent = `${jsonData.days[0].sunrise} AM`

            document.getElementById("sunset").textContent = `${jsonData.days[0].sunset} PM`

            document.getElementById("humidity").textContent = `${jsonData.days[0].humidity}%`

            if (jsonData.days[0].humidity < 30) {
                document.getElementById("humidityValue").textContent = "Low"
            } else if (jsonData.days[0].humidity >= 30 && jsonData.days[0].humidity < 60) {
                document.getElementById("humidityValue").textContent = "Moderate"
            } else if (jsonData.days[0].humidity >= 60) {
                document.getElementById("humidityValue").textContent = "High"
            }

            document.getElementById("visibility").textContent = `${jsonData.days[0].visibility}`


            if (jsonData.days[0].visibility <= 0.03) {
                document.getElementById("visibilityValue").textContent = "Dense Fog"
            } else if (jsonData.days[0].visibility >= 0.04 && jsonData.days[0].visibility <= 0.16) {
                document.getElementById("visibilityValue").textContent = "Moderate Fog"
            } else if (jsonData.days[0].visibility >= 0.17 && jsonData.days[0].visibility <= 0.35) {
                document.getElementById("visibilityValue").textContent = "light Fog"
            } else if (jsonData.days[0].visibility >= 0.36 && jsonData.days[0].visibility <= 1.13) {
                document.getElementById("visibilityValue").textContent = "Very light Fog"
            } else if (jsonData.days[0].visibility >= 1.14 && jsonData.days[0].visibility <= 2.16) {
                document.getElementById("visibilityValue").textContent = "light Mist"
            } else if (jsonData.days[0].visibility >= 2.17 && jsonData.days[0].visibility <= 5.4) {
                document.getElementById("visibilityValue").textContent = "Very light Mist"
            } else if (jsonData.days[0].visibility >= 5.41 && jsonData.days[0].visibility <= 10.8) {
                document.getElementById("visibilityValue").textContent = "Clear Air"
            } else if (jsonData.days[0].visibility >= 10.81) {
                document.getElementById("visibilityValue").textContent = "Very Clear Air"
            }

            // Air Quality Data

            let airData = document.getElementById("airquality");
            let airstore = jsonData.days[0].severerisk;

            airData.textContent = airstore;
            function airqualityCheck(airstore) {
                if (airstore < 50) {
                    document.getElementById("airValue").textContent = `Good👌`
                } else if (airstore >= 50 || airquality < 100) {
                    document.getElementById("airValue").textContent = `Moderate😐`
                } else if (airstore >= 100 || airquality < 150) {
                    document.getElementById("airValue").textContent = `Unhealthy😷`
                } else if (airstore >= 150 || airquality < 200) {
                    document.getElementById("airValue").textContent = `Very Unhealthy😨`
                } else if (airstore >= 200) {
                    document.getElementById("airValue").textContent = `Hazardous😱`
                }
            }
            airqualityCheck(airstore) 
            


            // Today page day wise cards Images

            let backImg = ["https://i.ibb.co/qNv7NxZ/pc.webp", "https://i.ibb.co/RDfPqXz/pcn.jpg", "https://i.ibb.co/h2p6Yhd/rain.webp", "https://i.ibb.co/WGry01m/cd.jpg", "https://i.ibb.co/kqtZ1Gx/cn.jpg"]

            if (jsonData.days[0].icon === "partly-cloudy-day") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[0]})`
            } else if (jsonData.days[0].icon === "partly-cloudy-night") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[1]})`
            } else if (jsonData.days[0].icon === "rain") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[2]})`
            } else if (jsonData.days[0].icon === "clear-day") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[3]})`
            } else if (jsonData.days[0].icon === "clear-night") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[4]})`
            }

            let dayImage = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/Kzkk59k/15.png", "https://i.ibb.co/kBd2NTS/39.png",  "https://i.ibb.co/rb4rrJL/26.png", "https://i.ibb.co/1nxNGHL/10.png"];


            if(jsonData.days[0].hours[0].icon === "partly-cloudy-day")
            {
            document.getElementById("zerothImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[0].icon === "partly-cloudy-night"){
                document.getElementById("zerothImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[0].icon === "rain"){
                document.getElementById("zerothImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[0].icon === "clear-day"){ 
                document.getElementById("zerothImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[0].icon === "clear-night"){
                document.getElementById("zerothImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[1].icon === "partly-cloudy-day")
            {
            document.getElementById("firstImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[1].icon === "partly-cloudy-night"){
                document.getElementById("firstImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[1].icon === "rain"){
                document.getElementById("firstImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[1].icon === "clear-day"){ 
                document.getElementById("firstImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[1].icon === "clear-night"){
                document.getElementById("firstImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[2].icon === "partly-cloudy-day")
            {
            document.getElementById("secondImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[2].icon === "partly-cloudy-night"){
                document.getElementById("secondImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[2].icon === "rain"){
                document.getElementById("secondImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[2].icon === "clear-day"){ 
                document.getElementById("secondImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[2].icon === "clear-night"){
                document.getElementById("secondImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[3].icon === "partly-cloudy-day")
            {
            document.getElementById("thirdImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[3].icon === "partly-cloudy-night"){
                document.getElementById("thirdImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[3].icon === "rain"){
                document.getElementById("thirdImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[3].icon === "clear-day"){ 
                document.getElementById("thirdImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[3].icon === "clear-night"){
                document.getElementById("thirdImage").src=`${dayImage[4]}`
            }

            
            if(jsonData.days[0].hours[4].icon === "partly-cloudy-day")
            {
            document.getElementById("fourthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[4].icon === "partly-cloudy-night"){
                document.getElementById("fourthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[4].icon === "rain"){
                document.getElementById("fourthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[4].icon === "clear-day"){ 
                document.getElementById("fourthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[4].icon === "clear-night"){
                document.getElementById("fourthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[5].icon === "partly-cloudy-day")
            {
            document.getElementById("fifthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[5].icon === "partly-cloudy-night"){
                document.getElementById("fifthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[5].icon === "rain"){
                document.getElementById("fifthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[5].icon === "clear-day"){ 
                document.getElementById("fifthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[5].icon === "clear-night"){
                document.getElementById("fifthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[6].icon === "partly-cloudy-day")
            {
            document.getElementById("sixthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[6].icon === "partly-cloudy-night"){
                document.getElementById("sixthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[6].icon === "rain"){
                document.getElementById("sixthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[6].icon === "clear-day"){ 
                document.getElementById("sixthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[6].icon === "clear-night"){
                document.getElementById("sixthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[7].icon === "partly-cloudy-day")
            {
            document.getElementById("seventhImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[7].icon === "partly-cloudy-night"){
                document.getElementById("seventhImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[7].icon === "rain"){
                document.getElementById("seventhImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[7].icon === "clear-day"){ 
                document.getElementById("seventhImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[7].icon === "clear-night"){
                document.getElementById("seventhImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[8].icon === "partly-cloudy-day")
            {
            document.getElementById("eighthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[8].icon === "partly-cloudy-night"){
                document.getElementById("eighthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[8].icon === "rain"){
                document.getElementById("eighthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[8].icon === "clear-day"){ 
                document.getElementById("eighthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[8].icon === "clear-night"){
                document.getElementById("eighthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[9].icon === "partly-cloudy-day")
            {
            document.getElementById("ninthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[9].icon === "partly-cloudy-night"){
                document.getElementById("ninthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[9].icon === "rain"){
                document.getElementById("ninthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[9].icon === "clear-day"){ 
                document.getElementById("ninthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[9].icon === "clear-night"){
                document.getElementById("ninthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[10].icon === "partly-cloudy-day")
            {
            document.getElementById("tenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[10].icon === "partly-cloudy-night"){
                document.getElementById("tenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[10].icon === "rain"){
                document.getElementById("tenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[10].icon === "clear-day"){ 
                document.getElementById("tenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[10].icon === "clear-night"){
                document.getElementById("tenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[11].icon === "partly-cloudy-day")
            {
            document.getElementById("eleventhImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[11].icon === "partly-cloudy-night"){
                document.getElementById("eleventhImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[11].icon === "rain"){
                document.getElementById("eleventhImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[11].icon === "clear-day"){ 
                document.getElementById("eleventhImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[11].icon === "clear-night"){
                document.getElementById("eleventhImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[12].icon === "partly-cloudy-day")
            {
            document.getElementById("twelthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[12].icon === "partly-cloudy-night"){
                document.getElementById("twelthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[12].icon === "rain"){
                document.getElementById("twelthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[12].icon === "clear-day"){ 
                document.getElementById("twelthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[12].icon === "clear-night"){
                document.getElementById("twelthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[13].icon === "partly-cloudy-day")
            {
            document.getElementById("thirteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[13].icon === "partly-cloudy-night"){
                document.getElementById("thirteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[13].icon === "rain"){
                document.getElementById("thirteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[13].icon === "clear-day"){ 
                document.getElementById("thirteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[13].icon === "clear-night"){
                document.getElementById("thirteenthImage").src=`${dayImage[4]}`
            }

            
            if(jsonData.days[0].hours[14].icon === "partly-cloudy-day")
            {
            document.getElementById("fourteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[14].icon === "partly-cloudy-night"){
                document.getElementById("fourteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[14].icon === "rain"){
                document.getElementById("fourteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[14].icon === "clear-day"){ 
                document.getElementById("fourteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[14].icon === "clear-night"){
                document.getElementById("fourteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[15].icon === "partly-cloudy-day")
            {
            document.getElementById("fifteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[15].icon === "partly-cloudy-night"){
                document.getElementById("fifteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[15].icon === "rain"){
                document.getElementById("fifteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[15].icon === "clear-day"){ 
                document.getElementById("fifteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[15].icon === "clear-night"){
                document.getElementById("fifteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[16].icon === "partly-cloudy-day")
            {
            document.getElementById("sixteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[16].icon === "partly-cloudy-night"){
                document.getElementById("sixteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[16].icon === "rain"){
                document.getElementById("sixteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[16].icon === "clear-day"){ 
                document.getElementById("sixteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[16].icon === "clear-night"){
                document.getElementById("sixteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[17].icon === "partly-cloudy-day")
            {
            document.getElementById("seventeenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[17].icon === "partly-cloudy-night"){
                document.getElementById("seventeenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[17].icon === "rain"){
                document.getElementById("seventeenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[17].icon === "clear-day"){ 
                document.getElementById("seventeenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[17].icon === "clear-night"){
                document.getElementById("seventeenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[18].icon === "partly-cloudy-day")
            {
            document.getElementById("eighteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[18].icon === "partly-cloudy-night"){
                document.getElementById("eighteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[18].icon === "rain"){
                document.getElementById("eighteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[18].icon === "clear-day"){ 
                document.getElementById("eighteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[18].icon === "clear-night"){
                document.getElementById("eighteenthImage").src=`${dayImage[4]}`
            }

            
            if(jsonData.days[0].hours[19].icon === "partly-cloudy-day")
            {
            document.getElementById("ninteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[19].icon === "partly-cloudy-night"){
                document.getElementById("ninteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[19].icon === "rain"){
                document.getElementById("ninteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[19].icon === "clear-day"){ 
                document.getElementById("ninteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[19].icon === "clear-night"){
                document.getElementById("ninteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[20].icon === "partly-cloudy-day")
            {
            document.getElementById("twenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[20].icon === "partly-cloudy-night"){
                document.getElementById("twenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[20].icon === "rain"){
                document.getElementById("twenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[20].icon === "clear-day"){ 
                document.getElementById("twenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[20].icon === "clear-night"){
                document.getElementById("twenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[21].icon === "partly-cloudy-day")
            {
            document.getElementById("twentyOneImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[21].icon === "partly-cloudy-night"){
                document.getElementById("twentyOneImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[21].icon === "rain"){
                document.getElementById("twentyOneImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[21].icon === "clear-day"){ 
                document.getElementById("twentyOneImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[21].icon === "clear-night"){
                // document.getElementById("twentyOneImage").src=`${dayImage[4]}`
                document.getElementById("twentyOneImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[22].icon === "partly-cloudy-day")
            {
            document.getElementById("twentyTwoImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[22].icon === "partly-cloudy-night"){
                document.getElementById("twentyTwoImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[22].icon === "rain"){
                document.getElementById("twentyTwoImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[22].icon === "clear-day"){ 
                document.getElementById("twentyTwoImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[22].icon === "clear-night"){
                document.getElementById("twentyTwoImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[23].icon === "partly-cloudy-day")
            {
            document.getElementById("twentyThreeImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[23].icon === "partly-cloudy-night"){
                document.getElementById("twentyThreeImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[23].icon === "rain"){
                document.getElementById("twentyThreeImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[23].icon === "clear-day"){ 
                document.getElementById("twentyThreeImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[23].icon === "clear-night"){
                document.getElementById("twentyThreeImage").src=`${dayImage[4]}`
            }
       
            
        }).catch((err)=>{
            alert("City Not Found in API");
            console.log(err);
        })
    }
    





    
    