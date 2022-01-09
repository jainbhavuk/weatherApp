document.body.style.backgroundImage = "url('./img/def.jpg')";
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
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=1ee4e8347e751f60ad276c152361e9d7')
.then(response =>  response.json())
.then(data => {
 console.log(data);
//Set Label
// citylabel.innerHTML="City:&nbsp;";
// templabel.innerHTML="Temperature:&nbsp;";
// desclabel.innerHTML="Conditions:&nbsp;";
let abc = data['weather'][0]['main'];
//Get Values
let weatherIconCode = data['weather'][0]['icon'];
let weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";
let city = data['name'];
let tempData = data['main']['temp'];

//Set Values
tempData = Math.ceil(tempData-273.15);
temp.innerHTML = "<b>" + tempData + "  <b>℃</b>";
//cName.innerHTML = " <b> " + city + " </b> ";
weatherDesc.innerHTML = "<b>" + abc +  " </b>";

//Set Image
imgWeather.setAttribute("src",weatherIconUrl);
imgWeather.setAttribute("height","150");
imgWeather.setAttribute("width","150");

//Set BG Image

if(abc == "Clear")
{
document.body.style.backgroundImage = "url('./img/clear.jpg')";
}
else if(abc == "Clouds")
{
  document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
}
else if(abc == "Mist")
{
  document.body.style.backgroundImage = "url('./img/mist.jpg')";
}
else if(abc == "Haze")
{
  document.body.style.backgroundImage = "url('./img/haze.jpg')";
}
else if(abc == "Snow")
{
  document.body.style.backgroundImage = "url('./img/snow.jpg')";
}
else if(abc == "Thunderstorm")
{
  document.body.style.backgroundImage = "url('./img/thunderstorm.jpg')";
}
else if(abc == "Rain")
{
  document.body.style.backgroundImage = "url('./img/rain.jpg')";
}
else if(abc == "Drizzle")
{
  document.body.style.backgroundImage = "url('./img/rain.jpg')";
}
else if(abc == "Smoke")
{
  document.body.style.backgroundImage = "url('./img/haze.jpg')";
}
else if(abc == "Fog")
{
  document.body.style.backgroundImage = "url('./img/mist.jpg')";
}
else
{
  document.body.style.backgroundImage = "url('./img/def.jpg')";
}
}).catch(err => alert('Wrong City Name'));

}









































// const Name = document.getElementById('Name');
//  const email = document.getElementById('email');
//  const password  = document.getElementById('password');
// let gender = document.getElementsByName('gender');
// const contact = document.getElementById('contact');
// console.log(contact);
// console.log(gender);

// const degree = document.getElementsByClassName('degree');
// const err = document.getElementsByClassName('err');
// const qual = document.getElementsByClassName('engineering');
// const hobbies = document.getElementsByClassName('hobbies');
// const address = document.getElementById('address');
// console.log(Name);
// console.log(Name);
// console.log(gender);
// console.log(degree);
// console.log(qual);
// console.log(hobbies);
// const firebaseConfig = {

//     apiKey: "AIzaSyCbKQnDA9iWTm3frVR94L0ZXisgOCvnSJk",

//     authDomain: "customformvalidation-be02d.firebaseapp.com",

//     projectId: "customformvalidation-be02d",

//     databaseURL: "https://customformvalidation-be02d-default-rtdb.firebaseio.com/",

//     storageBucket: "customformvalidation-be02d.appspot.com",

//     messagingSenderId: "637114396389",

//     appId: "1:637114396389:web:41fd37ac5cf0f52669ae0c"

//   };

// let inputObj;

// firebase.initializeApp(firebaseConfig);
// const reference= firebase.database().ref("/data");

// console.log(reference);

// function formSubmit(event)
// {
//     event.preventDefault();

  // let fnameValid =  checkEmptyInput(firstName, 0, "First Name Is Required");
  // let lnameValid =  checkEmptyInput(lastName, 1, "Last Name Is Required");
  // let emailValid = checkEmptyInput(email, 2, "Email Is Required");
  // let passValid =  checkEmptyInput(password, 3, "Password Is Required") ;

    // if(fnameValid && lnameValid && emailValid && passValid)
    // {

    //     setTimeout(()=>{
    //         alert('Submitted Successfully!');
    //     },500);

    //    inputObj = {
    //         fname: firstName.value,
    //         lname: lastName.value,
    //         email: email.value,
    //         pass: password.value
    //     } 

        // let newRef = reference.push();
        // newRef.set(inputObj);
 
    


//console.log(JSON.parse(localStorage.getItem('inputData')));


// function checkEmptyInput(inputField, errorClassId, errMsg)
// {
//     if(inputField.value.trim() === '')
//     {
//         inputField.style.border="2px solid red";
//         err[errorClassId].innerHTML = errMsg;
//         return false;
//     }
//     else
//     {
//         inputField.style.border="2px solid green";
//         err[errorClassId].textContent = '';
//         return true;
//     }
// }

// var ref = firebase.database().ref("/data");

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });


















// //Stringify
// let myobj = {
//     name : "Bhavuk",
//     age : 21,
//     qual : "PG"
// }

// //console.log(myobj);
// let stObj = JSON.stringify(myobj);
// console.log(stObj);
// localStorage.setItem('object',stObj);

// let parObj = JSON.parse(localStorage.getItem('object'));
// console.log(parObj);










// // function addNum(num1, num2)
// // {
// //     debugger
// //     return num1+num2;
// // }

// // console.log(addNum(20,30));

// // let user = prompt("Enter Name");
// // localStorage.setItem('username',user);




















// // let newDay = new Date(1641282119448);
// // console.log(newDay);
// // console.log(Math.ceil(Math.random()*1000000)+1);
// // function setPara()
// // {
// //   let para = document.createElement('p');
// //   para.append('ParaGraph');
// //     document.body.appendChild(para);
// // }

// // function setClass(event)
// // {
// //     let s = event.target.value;
// //     document.getElementById('header').innerHTML = s;
// // }
// // function keyDown()
// // {
// //     console.log('KEY PRESSED');
// // }

// // function mouseOver(event)
// // {
// //     console.log('Mouse Out');
// //     console.log(event);
// // }



// // let b = document.getElementById('btn');
// // b.addEventListener('click',()=>{
// //     console.log('BTN PRESSED');
// // })




// // function getDay()
// // {
// //     let d = document.getElementById('day').value;
// //     let m = document.getElementById('mon').value;
// //     let y = document.getElementById('year').value;
// //     let date = new Date(y,m-1,d);
// //     if(date.getDay() == 3){
// //     console.log('Wednesday');
// //     }
// // }














































// // // MY STOPWATCH
// // // let i = 1;
// // // let alive = true;
// // // let min = 0;
// // // let ele = document.getElementById('header');
// // // let ele2 = document.getElementById('header2');
// // // function sayHello()
// // // {
// // //    if(alive)
// // //    {

// // //    if(i>59)
// // //     {
// // //         min++;

// // //         i=0;
// // //         ele.innerHTML=min+" minutes and ";
// // //     }
// // //    else
// // //    {
// // //    ele2.innerHTML = i++ + " seconds elapsed.";
// // //    }
// // //    }
// // // }
// // // function startTimer()
// // // {
// // //     setInterval(sayHello,1000);
// // // } 

// // // function stopTimer()
// // // {
// // //   //clearInterval(sayHello,5000);
// // //   alive = false;
// // //  // ele.innerHTML="TOTAL TIME ELAPSED IS " + i;
// // // }


