// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import registerServiceWorker from './registerServiceWorker';

// // ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();

// // Imperitive
// // var numbers = [1,4,5,8,33,27];
// // var sum = 0;

// // for(var i=0; i<numbers.length; i++) {
// //     sum = sum + numbers[i];
// // }

// // console.log(sum);

// // sum = 0;

// // Declaretive **
// // // the forEach() method 'abstract' the for(var i=0; i<numbers.length; i++) line
// // numbers.forEach(function(item1) {
// //     // console.log(item1);
// //     sum += item1;
// // })

// // console.log(sum);

// // var array1 = [1,4,3,6,8,5,7];

// // make array2 to have double the value of array1
// // var array2 = [];

// // use forEach
// // array1.forEach(function(item1) {
//     // array2.push(item1 * item1);
// // })


// // now use MAP 'method' instead
// // array2 = array1.map(function(item1) {
// //     return ( item1 * item1 );
// // })

// // console.log(array1);
// // console.log(array2);

// // const friends = [
// //     {name:'Chandler', img: 'https://www.missmalini.com/wp-content/uploads/2014/09/Chandler-Bing1.jpg'},
// //     {name: 'Joey', img: 'https://s-media-cache-ak0.pinimg.com/236x/e2/ec/89/e2ec892e4ea3611027d5a9b545624005.jpg'},
// //     {name: 'Ross', img: 'http://cdn01.ts.infobae.com/adjuntos/164/imagenes/011/068/0011068055.jpg'}
// // ];

// // var friendUI = friends.map(function(theItem) {
// //     return (
// //         `
// //         <h1>${theItem.name}</h1>
// //         <p> <img src="${theItem.img}" style="height:300px; width:300px" />
// //         `
// //     )
// // })

// // document.getElementById('root').innerHTML = friendUI;

// // an array
// var movies = [
//     {
//       name: "The Shawshank Redemption",
//       year: 1994,
//       rating: 9.2,
//       category: 'Crime drama'
//     },
//     {
//       name: "The Godfather",
//       year: 1972,
//       rating: 9.2,
//       category: 'Crime drama'
//     },
//     {
//       name: "Pulp Fiction",
//       year: 1994,
//       rating: 8.9,
//       category: 'Crime drama'
//     },
//     {
//       name: "Fight Club",
//       year: 1999,
//       rating: 8.8,
//       category: 'Action drama'
//     },
//     {
//       name: "Inception",
//       year: 2010,
//       rating: 8.7,
//       category: 'Sci-fi'
//     },
//     {
//       name: "Interstellar",
//       year: 2014,
//       rating: 8.5,
//       category: 'Sci-fi'
//     }
// ]

// var filteredMovies = [];

// for(var i=0; i < movies.length; i++) {
//     if ( movies[i].rating >= 8.9 ) {
//         filteredMovies.push(movies[i])
//     }
// }

// var filteredMovies2 = [];
// // forEach() method
// movies.forEach(function(movie) {
    
//         if (movie.rating > 8.7) {
//             filteredMovies2.push(movie);
//         }
    
// })

// // filter() method, true or false
// var filteredMoives3 = movies.filter(function(movie) {
//   // return true or false
//     return (movie.rating > 8.9) 
// })

// console.log(filteredMoives3)

// // find
// var find1 = movies.find(function(movie) {
//   // return true or false
//   return movie.name === 'Fight Club';
// })

// console.log(find1);

// // findIndex
// var find2 = movies.findIndex(function(movie) {
//   // return true or false
//   return movie.name === 'Fight Club';
// })

// console.log(find2);

// function isAdult() {

//   let age = 0;

//   if (age > 18) {
//     let isAdult = 'yes'
//   }

//   return isAdult
// }

// console.log(isAdult(34));

// // first name, middle name, last name
// const name = ["Same", "", "Worku"];

// /* 
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
//  */

//  /* 
//  // now let us use DE-STRUCTURING
//  const [firstName, middleName, lastName] = name;
//  console.log(firstName,middleName,lastName)
//  */

//  const dude1 = {
//    firstName: 'Ryan',
//    lastName: 'Henson',
//    age: '43'
//  }

// const {firstName, lastName, age, jim="this is jim"} = dude1;

// // we can rename the thing by doing this
// const {firstName: first, lastName: last, age:a } = dude1;
// console.log(first, last, a, 'hi')

// now do de-structuring in the function input
// function fillForm ({firstName, lastName}) {

//   // const {firstName, lastName} = input;

//   console.log('firstName: ', firstName)
//   console.log('lastName: ', lastName)
// }

// fillForm( {firstName: 'jim', lastName: 'henson'} )

// function splitName(input) {
//   return input.split(" ")
// }

// // do de-structuring with array
// var hi = "j k l";

// const [a, b, c] = splitName(hi)
// console.log(a, b, c)

// got an object
// const person = {
//   name: 'sam',
//   links: {
//     twitch: 'www.twitch',
//     url: 'nxcoding'
//   }
// }

// const person2 = {
//   name: 'Dean'
// }

// // function printPersonDetails( person ) {
// // de-structuring nested object
// function printPersonDetails( { name, links:{ twitch, url } = {} } ) { 

//   console.log( name );
//   console.log( twitch );
//   console.log( url );

// }

// printPersonDetails(person2)

function filterEvenNumber(number) {
  // arguments is a built-in variable

  // var evenArray = [];

  // // for loop
  // for(let i=0 ; i < arguments.length ; i++ ) {
  //   // do something to make even number
  //   if( arguments[i] % 2 === 0 ) {
  //     evenArray.push(arguments[i])
  //   }
  // }

  //   return evenArray;

  // very interesting line of code
  var jim1 = Array.prototype.filter.call(arguments, function(item) {
    return (item % 2 === 0)
  })

  return jim1;

}
console.log( filterEvenNumber(2,8,1,4,5,6,6,7)  ) 

// now use the 'spread/convert to array' operator
function filter2(...number) {

  return number.filter(function(asdf) {
    // return true or false
    return ( asdf%2 === 0 )
  })

}

console.log( filter2(6,3,8,5,3,2,8,3) ) 

// REST/group and SPREAD operator

