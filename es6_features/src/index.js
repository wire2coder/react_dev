// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// Imperitive
// var numbers = [1,4,5,8,33,27];
// var sum = 0;

// for(var i=0; i<numbers.length; i++) {
//     sum = sum + numbers[i];
// }

// console.log(sum);

// sum = 0;

// Declaretive **
// // the forEach() method 'abstract' the for(var i=0; i<numbers.length; i++) line
// numbers.forEach(function(item1) {
//     // console.log(item1);
//     sum += item1;
// })

// console.log(sum);

// var array1 = [1,4,3,6,8,5,7];

// make array2 to have double the value of array1
// var array2 = [];

// use forEach
// array1.forEach(function(item1) {
    // array2.push(item1 * item1);
// })


// now use MAP 'method' instead
// array2 = array1.map(function(item1) {
//     return ( item1 * item1 );
// })

// console.log(array1);
// console.log(array2);

// const friends = [
//     {name:'Chandler', img: 'https://www.missmalini.com/wp-content/uploads/2014/09/Chandler-Bing1.jpg'},
//     {name: 'Joey', img: 'https://s-media-cache-ak0.pinimg.com/236x/e2/ec/89/e2ec892e4ea3611027d5a9b545624005.jpg'},
//     {name: 'Ross', img: 'http://cdn01.ts.infobae.com/adjuntos/164/imagenes/011/068/0011068055.jpg'}
// ];

// var friendUI = friends.map(function(theItem) {
//     return (
//         `
//         <h1>${theItem.name}</h1>
//         <p> <img src="${theItem.img}" style="height:300px; width:300px" />
//         `
//     )
// })

// document.getElementById('root').innerHTML = friendUI;


var movies = [
    {
      name: "The Shawshank Redemption",
      year: 1994,
      rating: 9.2,
      category: 'Crime drama'
    },
    {
      name: "The Godfather",
      year: 1972,
      rating: 9.2,
      category: 'Crime drama'
    },
    {
      name: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      category: 'Crime drama'
    },
    {
      name: "Fight Club",
      year: 1999,
      rating: 8.8,
      category: 'Action drama'
    },
    {
      name: "Inception",
      year: 2010,
      rating: 8.7,
      category: 'Sci-fi'
    },
    {
      name: "Interstellar",
      year: 2014,
      rating: 8.5,
      category: 'Sci-fi'
    }
]

var filteredMovies = [];

for(var i=0; i < movies.length; i++) {
    if ( movies[i].rating >= 8.9 ) {
        filteredMovies.push(movies[i])
    }
}

var filteredMovies2 = [];
// forEach() method
movies.forEach(function(movie) {
    
        if (movie.rating > 8.7) {
            filteredMovies2.push(movie);
        }
    
})


// filter() method, true or false