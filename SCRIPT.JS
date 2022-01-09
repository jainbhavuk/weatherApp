document.body.style.backgroundImage = "url('./img/clear.jpg')";
let cityName = document.getElementById('cityName');
let weatherDesc = document.getElementById('weatherDesc');
let temp = document.getElementById('tempData');
let cName = document.getElementById('cName');
let citylabel = document.getElementById('citylabel');
let templabel = document.getElementById('templabel');
let desclabel = document.getElementById('desclabel');
let imgWeather = document.getElementById('imageWeather');

function getData()
{
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1ee4e8347e751f60ad276c152361e9d7`).then((res)=>{
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
}).catch((err)=>{alert('Wrong City Name')});
}


// Data By Device Location

function getGeoData()
{
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
    }).catch((err)=>{alert("Can\'t get location. Please search by City name!")});;

})
}