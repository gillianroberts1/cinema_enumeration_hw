const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');
const { resourceLimits } = require('worker_threads');
const exp = require('constants');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){

    const result = cinema.filmTitles()
    expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    assert.deepStrictEqual(expected, result)
  
  });


  it('should be able to find a film by title', function(){
    const result = cinema.findByTitle('Moonlight')
    expected = moonlight
    assert.deepStrictEqual(result, expected)
  });
    
  it('should be able to filter films by genre', function(){
    const result = cinema.filmsByProperty('genre', 'history')
    const expected = [dunkirk]
    assert.deepStrictEqual(result, expected)
  });

  it('shoud be able to filter film by year', (function(){
    const result = cinema.filmsByProperty('year', 2016)
    const expected = [moonlight]
    assert.deepStrictEqual(result, expected)
  }))

  it('should be able to check whether there are some films from a particular year', function(){
    const result = cinema.filterByYear(2018)
    const expected = true
    assert.deepStrictEqual(result, expected)
  });
  it('should be able to check whether there are no films from a particular year', function(){
    const result = cinema.filterByYear(2011)
    const expected = false
    assert.deepStrictEqual(result, expected)
  });

  it('should be able to check whether all films are over a particular length', function(){
    const result = cinema.allFilmsAreOverCertainLength(95)
    const expected = true
    assert.deepStrictEqual(result, expected)
  });

  it('should be able to check whether all films are not over a particular length', function(){
    const result = cinema.allFilmsAreOverCertainLength(100)
    const expected = false
    assert.deepStrictEqual(result, expected)
  });

  it('should be able to calculate total running time of all films', function(){
    const result = cinema.totalRunningTimeOfAllFilms(622)
    const expected = 622
    assert.deepStrictEqual(result, expected)
  });

});
