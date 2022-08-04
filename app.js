let movies = require("./movies.js")

let moviesDH = {
     movies: movies,

     listMovies: function(){
          let peliculasExistentes = []

          for (let i=0; i< this.movies.length; i++){
               peliculasExistentes.push(this.movies[i].title)
          }
          return peliculasExistentes
     },

     searchMovie: function(id, title ){
                    
          let peliculaEncontrada = this.movies.filter(function(p){
               if (p.id == id || p.title == title){
                    return p
               } 
          })

               if (peliculaEncontrada.length > 0){
                    return peliculaEncontrada
               } else {
                    return null
               }
     },

     searchMovieByGenre: function(genre){
          let peliculasPorGenero = []

          for (let i=0 ; i< this.movies.length; i++){
               if (genre == this.movies[i].genre){
                    peliculasPorGenero.push(this.movies[i].title)
               }
          } return peliculasPorGenero
     },
     
     totalPrice: function(){
                   
          let totalPrecio = this.movies.reduce(function(acum, p, index) {
               index = 0
               acum + p.price, index
               
          })
          return totalPrecio
     }
}

console.log(moviesDH.totalPrice()) 