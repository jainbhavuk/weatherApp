//document.body.style.backgroundImage = "url('./img/clear.jpg')";
let cityName = document.getElementById('cityName');
let weatherDesc = document.getElementById('weatherDesc');
let temp = document.getElementById('tempData');
let cName = document.getElementById('cName');
let citylabel = document.getElementById('citylabel');
let templabel = document.getElementById('templabel');
let desclabel = document.getElementById('desclabel');
let imgWeather = document.getElementById('imageWeather');
let tableHead = document.getElementById('tableHead');
let table = document.getElementById('forecast');
let day1Date = document.getElementById('day1Date');
let day2Date = document.getElementById('day2Date');
let day3Date = document.getElementById('day3Date');
//let day4Date = document.getElementById('day4Date');
//let day5Date = document.getElementById('day5Date');

let day1Icon = document.getElementById('day1Icon');
let day2Icon = document.getElementById('day2Icon');
let day3Icon = document.getElementById('day3Icon');
//let day4Icon = document.getElementById('day4Icon');
//let day5Icon = document.getElementById('day5Icon');

//Sunrise/Sunset
let sunriseData = document.getElementById('sunriseData');
let sunsetData  = document.getElementById('sunsetData');
let sunRiseSet = document.getElementById('sunRiseSet');
//console.log(new Date(1642038614*1000));
//console.log(new Date(1642038614*1000).getHours() +":"+ new Date(1642038614*1000).getMinutes()+" AM");
cityName.addEventListener("keydown",function (event) {
  
 
  if(event.key === "Enter"){
    event.preventDefault();
 // console.log(event);
    getData();
  }
  
});

function getData()
{
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1ee4e8347e751f60ad276c152361e9d7`).then((res)=>{
 // console.log(res);
  let weatherInfo = res['data']['weather'][0]['main'];
//Get Values
let weatherIconCode = res['data']['weather'][0]['icon'];
let weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";
//let city = data['name'];
let tempData = res['data']['main']['temp'];


//Getting Sunrise/Sunset Data to pass to sunrise_set();
let sunrise = new Date((res.data.sys.sunrise)*1000).getHours() +":"+ new Date((res.data.sys.sunrise)*1000).getMinutes();

let sunset = new Date((res.data.sys.sunset)*1000).getHours() +":"+ new Date((res.data.sys.sunset)*1000).getMinutes();
 

//Set Values
tempData = Math.ceil(tempData-273.15);
temp.innerHTML = "<b>" + tempData + "  <b>℃</b>";
//cName.innerHTML = " <b> " + city + " </b> ";
weatherDesc.innerHTML = "<b>" + weatherInfo +  " </b>";

//Set Image
imgWeather.setAttribute("src",weatherIconUrl);
imgWeather.setAttribute("height","150");
imgWeather.setAttribute("width","150");

//Set BG Image

if(weatherInfo == "Clear")
{
document.body.style.backgroundImage = "url('./img/clear.jpg')";
}
else if(weatherInfo == "Clouds")
{
  document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
}
else if(weatherInfo == "Mist")
{
  document.body.style.backgroundImage = "url('./img/mist.jpg')";
}
else if(weatherInfo == "Haze")
{
  document.body.style.backgroundImage = "url('./img/haze.jpg')";
}
else if(weatherInfo == "Snow")
{
  document.body.style.backgroundImage = "url('./img/snow.jpg')";
}
else if(weatherInfo == "Thunderstorm")
{
  document.body.style.backgroundImage = "url('./img/thunderstorm.jpg')";
}
else if(weatherInfo == "Rain")
{
  document.body.style.backgroundImage = "url('./img/rain.jpg')";
}
else if(weatherInfo == "Drizzle")
{
  document.body.style.backgroundImage = "url('./img/rain.jpg')";
}
else if(weatherInfo == "Smoke")
{
  document.body.style.backgroundImage = "url('./img/haze.jpg')";
}
else if(weatherInfo == "Fog")
{
  document.body.style.backgroundImage = "url('./img/mist.jpg')";
}
else
{
  document.body.style.backgroundImage = "url('./img/def.jpg')";
}
forecastFive();
sunrise_set(sunrise,sunset);
}).catch((err)=>{alert('Wrong City Name')});
}


// FORECAST SECTION
function forecastFive()
{
axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=1ee4e8347e751f60ad276c152361e9d7`).then((res)=>{
  //console.log(res);
  tableHead.textContent = "NEXT 3-DAYS FORECAST";
  tableHead.style.padding = "2px";
  table.style.backgroundColor="white";
  table.style.borderRadius="10px";

  //var date;
  for(let i=5; i<22; i=i+8)
  {
  let dayOneTemp = res['data']['list'][i]['dt_txt'];
  let weatherIconCode = res['data']['list'][i]['weather'][0]['icon'];
  forecastDay(dayOneTemp,weatherIconCode);
  }
  let weatherIconUrl1 = "http://openweathermap.org/img/wn/" + day1Ic + "@2x.png";
  let weatherIconUrl2 = "http://openweathermap.org/img/wn/" + day2Ic + "@2x.png";
  let weatherIconUrl3 = "http://openweathermap.org/img/wn/" + day3Ic + "@2x.png";
  //let weatherIconUrl4 = "http://openweathermap.org/img/wn/" + day4Ic + "@2x.png";
  //let weatherIconUrl5 = "http://openweathermap.org/img/wn/" + day5Ic + "@2x.png";

  day1Date.innerHTML = "<b>" + day1.slice(8,10) + "/" + day1.slice(5,7);
  day2Date.innerHTML = "<b>" + day2.slice(8,10) + "/" + day2.slice(5,7);
  day3Date.innerHTML = "<b>" + day3.slice(8,10) + "/" + day3.slice(5,7);
  //day4Date.innerHTML = "<b>" + day4.slice(8,10) + "/" + day4.slice(5,7);
  //day5Date.innerHTML = "<b>" + day5.slice(8,10) + "/" + day5.slice(5,7);

  day1Icon.setAttribute("src",weatherIconUrl1);
  day2Icon.setAttribute("src",weatherIconUrl2);
  day3Icon.setAttribute("src",weatherIconUrl3);
  //day4Icon.setAttribute("src",weatherIconUrl4);
  //day5Icon.setAttribute("src",weatherIconUrl5);
 

  //Adjust Icon Size
  day1Icon.setAttribute("height","100");
  day1Icon.setAttribute("width","100");
  day2Icon.setAttribute("height","100");
  day2Icon.setAttribute("width", "100");
  day3Icon.setAttribute("height","100");
  day3Icon.setAttribute("width", "100");
  //day4Icon.setAttribute("height","100");
  //day4Icon.setAttribute("width", "100");
  //day5Icon.setAttribute("height","100");
  //day5Icon.setAttribute("width", "100");
  // date = new Date(dayOneTemp*1000)
  // console.log(date.getMonth());


});
let day1,day2,day3,day4,day5;
let day1Ic, day2Ic, day3Ic, day4Ic, day5Ic;
let count=1;
function forecastDay(dayTemp, iconCode){
if(count==1){day1 = dayTemp;       day1Ic = iconCode; count++;}
else if(count==2){day2 = dayTemp;  day2Ic = iconCode; count++; }
else if(count==3){day3 = dayTemp;  day3Ic = iconCode;count++; }
else if(count==4){day4 = dayTemp;  day4Ic = iconCode;count++; }
else if(count==5){day5 = dayTemp;  day5Ic = iconCode;count++; }
}

}


function sunrise_set(sunrise, sunset)
{
  sunRiseSet.style.visibility="visible";
  sunriseData.innerHTML = sunrise;
  sunsetData.innerHTML = sunset;
}



















// Data By Device Location
/*
function getGeoData()
{

  setTimeout(()=>)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);}
  //let baseUrl = "api.openweathermap.org/data/2.5/weather?";
const apikey = '1ee4e8347e751f60ad276c152361e9d7';

navigator.geolocation.getCurrentPosition((pos)=>{
  
   // console.log(pos);
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    //console.log(lat);
    //console.log(long);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`).then((res)=>{
    //console.log(res);
    
    let weatherInfo = res['data']['weather'][0]['main'];
    //Get Values
    let weatherIconCode = res['data']['weather'][0]['icon'];
    let weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";
    //let city = data['name'];

 

    let tempData = res['data']['main']['temp'];
    
    //Set Values
    tempData = Math.ceil(tempData-273.15);
    temp.innerHTML = "<b>" + tempData + "  <b>℃</b>";
    //cName.innerHTML = " <b> " + city + " </b> ";
    weatherDesc.innerHTML = "<b>" + weatherInfo +  " </b>";
    
    //Set Image
    imgWeather.setAttribute("src",weatherIconUrl);
    imgWeather.setAttribute("height","150");
    imgWeather.setAttribute("width","150");
    


    //Set BG Image
    
    if(weatherInfo == "Clear")
    {
    document.body.style.backgroundImage = "url('./img/clear.jpg')";
    }
    else if(weatherInfo == "Clouds")
    {
      document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
    }
    else if(weatherInfo == "Mist")
    {
      document.body.style.backgroundImage = "url('./img/mist.jpg')";
    }
    else if(weatherInfo == "Haze")
    {
      document.body.style.backgroundImage = "url('./img/haze.jpg')";
    }
    else if(weatherInfo == "Snow")
    {
      document.body.style.backgroundImage = "url('./img/snow.jpg')";
    }
    else if(weatherInfo == "Thunderstorm")
    {
      document.body.style.backgroundImage = "url('./img/thunderstorm.jpg')";
    }
    else if(weatherInfo == "Rain")
    {
      document.body.style.backgroundImage = "url('./img/rain.jpg')";
    }
    else if(weatherInfo == "Drizzle")
    {
      document.body.style.backgroundImage = "url('./img/rain.jpg')";
    }
    else if(weatherInfo == "Smoke")
    {
      document.body.style.backgroundImage = "url('./img/haze.jpg')";
    }
    else if(weatherInfo == "Fog")
    {
      document.body.style.backgroundImage = "url('./img/mist.jpg')";
    }
    else
    {
      document.body.style.backgroundImage = "url('./img/def.jpg')";
    }

    let geoName = res['data']['name'];
    cityName.value = geoName;

    // let weatherIconCode = res['data']['weather'][0]['icon'];
    // let weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";

    // let geoTemp = (res['data']['main']['temp']) - 273.15;
    // //console.log(geoTemp);

    // let geoDesc = res['data']['weather'][0]['main'];
    // //console.log(geoDesc);

    // let geoName = res['data']['name'];
    // //console.log(geoName);
   
    }).catch((err)=>{alert("Can\'t get location. Please search by City name!")});

}, ()=>{
  enableHighAccuracy: false;
  timeout: 3000;
});
 
}
*/