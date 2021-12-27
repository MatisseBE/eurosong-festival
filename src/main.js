import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')












//ES5 variable decleration
// var firstname = "Matisse"
// var name = "Van Wezer"

// for(var i = 0;i<10;i++)
// {
//   console.log(i);
// }
// console.log(i); //variable is still known


//ES6
// const firstname = "Matisse" //value cannot be changed
// //firstname = "Matissee"
// let name = "Van Wezer" //value can be changed but behavior is as usual

// for(let i = 0;i<10;i++)
// {
//    console.log(i);
// }
// console.log(i)

// //ES5 concatenation
// var firstanme = "Matisse"
// var lastname = "Van Wezer"
// console.log(firstname + " " + lastname)


//ES6 concatenation
// let firsname = "Matisse"
// let lastname = "Van Wezer"
// let fullname = `${firsname}, ${lastname}`
// console.log(fullname)

//ES5 object
// var person = {
//   firstname : "Matisse",
//   name : "Van Wezer",
//   sawFullname : function() {
//     console.log(this.firstname + " " + this.name)
//   }
// }

// console.log(person.firstname)
// console.log(person.name)
// person.sawFullname()

// //ES6 object
// let person = {
//   firstname : "Matisse",
//   name : "Van Wezer",
//   sayfullname() {
//     console.log(`${this.firstname} ${this.name}`)
//   }
// }
// person.sayfullname()


//ES 5 this
// var person = {
//    firstname : "Matisse",
//    name : "Van Wezer",
//    sayFullname : function() {
//     console.log(this.firstname + " " + this.name)
//  }
// }
// console.log(person.firstname)
// console.log(person.name)
// person.sayFullname()

// var getfullname = person.sayFullname
// getfullname()


//es6
// let person = {
//   firstname : "Matisse",
//   name : "Van Wezer",
//   sayFullname : function() {
//    console.log(this.firstname + " " + this.name)
// }
// }
// console.log(person.firstname)
// console.log(person.name)
// person.sayFullname()

// let getfullname = person.sayFullname.bind(person)
// getfullname()


// const person = {
//   firstname : "Matisse",
//   name : "Van Wezer",
//   sayFullname : function() {
//     setTimeout(() => { //arrowfunction
      
//     }, 2000);
//    console.log(this.firstname + " " + this.name)
// }
// }
// console.log(person.firstname)
// console.log(person.name)
// person.sayFullname()

// var getfullname = person.sayFullname
// getfullname()

//ES5 functions
// var square = function(number){
//   return number * number
// }
// console.log(square(5))

//ES6 functions
// const square = (number) =>{
//   return number * number
// }

// const square = number =>{ //geen haakjes als je eene parameter hebt
//   return number * number
// }
// console.log(square(5))

// const square = number => number * number //als je direct iets returned
// console.log(square(5))

//ES5 mappping
// ["red","green","blue"]
// ["1.red","2.green","3.blue"]

// var colors = ["red","green","blue"]
// var newcolors = []
// for (var i = 0; i < colors.length; i++) {
//   newcolors.push((i+1) + "." + colors[i])  
// }

//ES6 mapping
// const colors = ["red","green","blue"]
// const newcolors = colors.map((color,index)=>`${index + 1}. ${color} `)

//ES5 object destructuring
// var person = {
//   firsname: "Matisse",
//   name: "Van Wezer"
// }
// var firsname = person.firsname
// var famname = person.name

//es6 object destructuring
// const person = {
//   firsname: "Matisse",
//   name: "Van Wezer"
// }
// const {firsname: voornaam,name} = person
// console.log(voornaam,name)

// const colors = ["blue","green","red"]
// cosnt [firstcolor,secondcolor] = colors


// let person = {
//   firstname : "Matisse",
//   name : "Van Wezer"
// }

// let personNew = {
//   ...person, //add all of person
//   age : 30 //and extra attributes
// }

// console.log(personNew)

//ES5 classes OO
// var user1 = {
//   firsname: "Matisse",
//   name : "Van Wezer",
//   getFullname : function(){
//     console.log(this.firsname + this.name)
//   }
// }

// var user2 = {
//   firsname: "Bratt",
//   name : "Pitt",
//   getFullname : function(){
//     console.log(this.firsname + this.name)
//   }
// }

// user1.getFullname()
// user2.getFullname()

//ES6 classes OO
// class User {
//   constructor(firstname,lastname) {
//     this.firstname = firstname
//     this.lastname = lastname
//   }
//   getFullname(){
//     console.log(this.firstname + " " + this.lastname)
//   }
// }
// import {User,Teacher} from "./js/classes/User"

// class Teacher extends User {
//   constructor(firstname,lastname,degree){
//     super(firstname,lastname) //fills up user first (the thing you extend)
//     this.degree = degree
//   }
//   teach(){
//     console.log("Hij geeft les")
//   }
// }

// let user1 = new User("Matisse","Van Wezer")
// let user2 = new User("Bratt","Pitt")

// let teacher1 = new Teacher("X","Y","Lager")
// teacher1.teach()

// user1.getFullname()
// teacher1.getFullname()
