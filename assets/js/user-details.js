

// 1
/////////////////////////////////////////////////////////


// const userDetails = {
//     rahul:{
//         age:25,
//         place:"palakkad",
//         status:true
//     },
//     athul:{
//         age:12,
//         place:"kochin",
//         status:false
//     },
//     vinay:{
//         age:16,
//         place:"wayanad",
//         status:true
//     }
// }







// const sortUserData = (data)=> {
//    let details =Object.entries(data);
//    let list=  document.getElementById('viewUserDetails');
//    details.map(function ([name,valueofObj]) {
//     console.log(valueofObj.age);
//     let li=document.createElement("li")
//     li.innerText=`${name} has age ${valueofObj.age}`;
//     list.append(li);
//    })
   
// }
// console.log(sortUserData(userDetails));





// example 1

// const sortUserData = (data)=> {
//     let userDetailsArray = [];
//     for(let property in data){
//         userDetailsArray.push(property);
//         let li =document.createElement("li");
//         li.innerText=property;
//     }
//     return userDetailsArray
// }
// console.log(sortUserData(userDetails.rahul));



// array eg

// let places=["palakkad","kozhikode","malappuram"];
// for(let key in places){
//     console.log(key);
// }


// 2
/////////////////////////////////////////////////////////


let cars=[]
// console.log(cars)

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
cars.push(car1,car2,car3)


// map

// let carName= cars.map((item) =>{console.log(item); return item} );
// console.log(carName)


// for each
// let carName= cars.forEach(arryGet)

// function arryGet (value,index){
// console.log(value)
// console.log(index)
// }

// for loop
// for(let car of cars){
//     console.log(car);
// }


