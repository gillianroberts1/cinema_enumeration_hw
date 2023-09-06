const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  result = []
  this.films.forEach((film) => {
    foundFilmTitle = film.title
    result.push(foundFilmTitle)
  })
    return result;

  }

  Cinema.prototype.findByTitle = function(title){
    const result = this.films.find((film) => {
    return film.title === title
  
    })
    return result
  }

  Cinema.prototype.filterByGenre = function(genre){
    const result = this.films.filter((film) => {
      return film.genre === genre
    })
    return result
  }
  Cinema.prototype.filterByYear = function(year){
    const result = this.films.some((film) => {
      return film.year === year
    })
    return result
  }
  Cinema.prototype.allFilmsAreOverCertainLength = function(length){
    const result =this.films.every((film) => {
      return film.length >= length
    })
    return result
  }

  Cinema.prototype.totalRunningTimeOfAllFilms = function(length){
    const result = this.films.reduce((runningTotal, film) => {
      return runningTotal + film.length 
    }, 0)
    return result
  }

  Cinema.prototype.filmsByProperty = function(, search){
    const result = this.films.filter((film) => {
      return film[property] === search 
    })
    return result
  }




module.exports = Cinema;

