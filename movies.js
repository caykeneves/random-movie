﻿var elem = document.getElementById('nomeFilme');
var year = document.getElementById('year');
var rating = document.getElementById("rating");
var movieChoice; 
var moviesList = [
  {
    "position": 1,
    "const": "tt0062622",
    "created": "Tue Oct 20 18:28:43 2015",
    "modified": "Tue Oct 20 18:28:43 2015",
    "description": "",
    "Title": "2001: Uma Odisseia no Espaço",
    "Title type": "Feature Film",
    "Directors": "Stanley Kubrick",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 149,
    "Year": 1968,
    "Genres": "adventure, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 471771,
=======
    "Num. Votes": 473414,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1968-04-02",
    "URL": "http://www.imdb.com/title/tt0062622/"
  },
  {
    "position": 2,
    "const": "tt1024648",
    "created": "Tue Oct 20 18:29:40 2015",
    "modified": "Tue Oct 20 18:29:40 2015",
    "description": "",
    "Title": "Argo",
    "Title type": "Feature Film",
    "Directors": "Ben Affleck",
    "You rated": "",
    "IMDb Rating": 7.7,
    "Runtime (mins)": 120,
    "Year": 2012,
<<<<<<< HEAD
    "Genres": "biography, drama, history, thriller",
    "Num. Votes": 489508,
=======
    "Genres": "adventure, biography, drama, history, thriller",
    "Num. Votes": 490602,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-08-31",
    "URL": "http://www.imdb.com/title/tt1024648/"
  },
  {
    "position": 3,
    "const": "tt2562232",
    "created": "Tue Oct 20 18:33:17 2015",
    "modified": "Tue Oct 20 18:33:17 2015",
    "description": "",
    "Title": "Birdman ou (A Inesperada Virtude da Ignorância)",
    "Title type": "Feature Film",
    "Directors": "Alejandro G. Iñárritu",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 119,
    "Year": 2014,
    "Genres": "comedy, drama",
<<<<<<< HEAD
    "Num. Votes": 452558,
=======
    "Num. Votes": 454313,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2014-08-27",
    "URL": "http://www.imdb.com/title/tt2562232/"
  },
  {
    "position": 4,
    "const": "tt0083658",
    "created": "Tue Oct 20 18:33:44 2015",
    "modified": "Tue Oct 20 18:33:44 2015",
    "description": "",
    "Title": "Blade Runner, o Caçador de Andróides",
    "Title type": "Feature Film",
    "Directors": "Ridley Scott",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 117,
    "Year": 1982,
    "Genres": "sci_fi, thriller",
<<<<<<< HEAD
    "Num. Votes": 507560,
=======
    "Num. Votes": 510339,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1982-06-25",
    "URL": "http://www.imdb.com/title/tt0083658/"
  },
  {
    "position": 5,
    "const": "tt0498380",
    "created": "Tue Oct 20 18:34:57 2015",
    "modified": "Tue Oct 20 18:34:57 2015",
    "description": "",
    "Title": "Cartas de Iwo Jima",
    "Title type": "Feature Film",
    "Directors": "Clint Eastwood",
    "You rated": "",
    "IMDb Rating": 7.9,
    "Runtime (mins)": 141,
    "Year": 2006,
    "Genres": "drama, history, war",
<<<<<<< HEAD
    "Num. Votes": 138628,
=======
    "Num. Votes": 138885,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2006-11-15",
    "URL": "http://www.imdb.com/title/tt0498380/"
  },
  {
    "position": 6,
    "const": "tt2368749",
    "created": "Tue Oct 20 18:35:40 2015",
    "modified": "Tue Oct 20 18:35:40 2015",
    "description": "",
    "Title": "Depois de Lúcia",
    "Title type": "Feature Film",
    "Directors": "Michel Franco",
    "You rated": "",
    "IMDb Rating": 7.2,
    "Runtime (mins)": 103,
    "Year": 2012,
    "Genres": "drama",
<<<<<<< HEAD
    "Num. Votes": 5057,
=======
    "Num. Votes": 5081,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-05-21",
    "URL": "http://www.imdb.com/title/tt2368749/"
  },
  {
    "position": 7,
    "const": "tt0064116",
    "created": "Tue Oct 20 18:53:38 2015",
    "modified": "Tue Oct 20 18:53:38 2015",
    "description": "",
    "Title": "Era uma Vez no Oeste",
    "Title type": "Feature Film",
    "Directors": "Sergio Leone",
    "You rated": "",
    "IMDb Rating": 8.6,
    "Runtime (mins)": 164,
    "Year": 1968,
<<<<<<< HEAD
    "Genres": "western",
    "Num. Votes": 238005,
=======
    "Genres": "history, western",
    "Num. Votes": 238736,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1968-12-21",
    "URL": "http://www.imdb.com/title/tt0064116/"
  },
  {
    "position": 8,
    "const": "tt0338013",
    "created": "Tue Oct 20 18:54:08 2015",
    "modified": "Tue Oct 20 18:54:08 2015",
    "description": "",
    "Title": "Brilho Eterno de uma Mente Sem Lembranças",
    "Title type": "Feature Film",
    "Directors": "Michel Gondry",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 108,
    "Year": 2004,
    "Genres": "drama, romance, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 732609,
=======
    "Num. Votes": 734969,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2004-03-09",
    "URL": "http://www.imdb.com/title/tt0338013/"
  },
  {
    "position": 9,
    "const": "tt0119177",
    "created": "Tue Oct 20 19:02:27 2015",
    "modified": "Tue Oct 20 19:02:27 2015",
    "description": "",
    "Title": "Gattaca - Experiência Genética",
    "Title type": "Feature Film",
    "Directors": "Andrew Niccol",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 106,
    "Year": 1997,
    "Genres": "drama, sci_fi, thriller",
<<<<<<< HEAD
    "Num. Votes": 237208,
=======
    "Num. Votes": 237919,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1997-09-07",
    "URL": "http://www.imdb.com/title/tt0119177/"
  },
  {
    "position": 10,
    "const": "tt0831387",
    "created": "Tue Oct 20 19:02:57 2015",
    "modified": "Tue Oct 20 19:02:57 2015",
    "description": "",
    "Title": "Godzilla",
    "Title type": "Feature Film",
    "Directors": "Gareth Edwards",
    "You rated": "",
    "IMDb Rating": 6.4,
    "Runtime (mins)": 123,
    "Year": 2014,
    "Genres": "action, adventure, sci_fi, thriller",
<<<<<<< HEAD
    "Num. Votes": 322934,
=======
    "Num. Votes": 323478,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2014-05-08",
    "URL": "http://www.imdb.com/title/tt0831387/"
  },
  {
    "position": 11,
    "const": "tt1057500",
    "created": "Tue Oct 20 19:04:42 2015",
    "modified": "Tue Oct 20 19:04:42 2015",
    "description": "",
    "Title": "Invictus",
    "Title type": "Feature Film",
    "Directors": "Clint Eastwood",
    "You rated": "",
    "IMDb Rating": 7.4,
    "Runtime (mins)": 134,
    "Year": 2009,
    "Genres": "biography, drama, history, sport",
<<<<<<< HEAD
    "Num. Votes": 132060,
=======
    "Num. Votes": 132306,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2009-12-03",
    "URL": "http://www.imdb.com/title/tt1057500/"
  },
  {
    "position": 12,
    "const": "tt0358273",
    "created": "Wed Oct 21 09:25:44 2015",
    "modified": "Wed Oct 21 09:25:44 2015",
    "description": "",
    "Title": "Johnny & June",
    "Title type": "Feature Film",
    "Directors": "James Mangold",
    "You rated": "",
    "IMDb Rating": 7.9,
    "Runtime (mins)": 136,
    "Year": 2005,
    "Genres": "biography, drama, music, romance",
<<<<<<< HEAD
    "Num. Votes": 198403,
=======
    "Num. Votes": 198741,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2005-09-04",
    "URL": "http://www.imdb.com/title/tt0358273/"
  },
  {
    "position": 13,
    "const": "tt0449059",
    "created": "Wed Oct 21 09:26:11 2015",
    "modified": "Wed Oct 21 09:26:11 2015",
    "description": "",
    "Title": "Pequena Miss Sunshine",
    "Title type": "Feature Film",
    "Directors": "Jonathan Dayton, Valerie Faris",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 101,
    "Year": 2006,
    "Genres": "comedy, drama",
<<<<<<< HEAD
    "Num. Votes": 379760,
=======
    "Num. Votes": 380586,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2006-01-20",
    "URL": "http://www.imdb.com/title/tt0449059/"
  },
  {
    "position": 14,
    "const": "tt0095647",
    "created": "Wed Oct 21 09:26:52 2015",
    "modified": "Wed Oct 21 09:26:52 2015",
    "description": "",
    "Title": "Mississipi Em Chamas",
    "Title type": "Feature Film",
    "Directors": "Alan Parker",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 128,
    "Year": 1988,
    "Genres": "crime, drama, history, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 70291,
=======
    "Num. Votes": 70456,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1988-12-02",
    "URL": "http://www.imdb.com/title/tt0095647/"
  },
  {
    "position": 15,
    "const": "tt1210166",
    "created": "Wed Oct 21 09:27:03 2015",
    "modified": "Wed Oct 21 09:27:03 2015",
    "description": "",
    "Title": "O Homem Que Mudou o Jogo",
    "Title type": "Feature Film",
    "Directors": "Bennett Miller",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 133,
    "Year": 2011,
    "Genres": "biography, drama, sport",
<<<<<<< HEAD
    "Num. Votes": 301538,
=======
    "Num. Votes": 302127,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2011-09-09",
    "URL": "http://www.imdb.com/title/tt1210166/"
  },
  {
    "position": 16,
    "const": "tt0485947",
    "created": "Wed Oct 21 09:55:05 2015",
    "modified": "Wed Oct 21 09:55:05 2015",
    "description": "",
    "Title": "Sr. Ninguém",
    "Title type": "Feature Film",
    "Directors": "Jaco Van Dormael",
    "You rated": "",
    "IMDb Rating": 7.9,
    "Runtime (mins)": 141,
    "Year": 2009,
    "Genres": "drama, fantasy, romance, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 171996,
=======
    "Num. Votes": 172773,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2009-09-11",
    "URL": "http://www.imdb.com/title/tt0485947/"
  },
  {
    "position": 17,
    "const": "tt0408306",
    "created": "Wed Oct 21 09:55:16 2015",
    "modified": "Wed Oct 21 09:55:16 2015",
    "description": "",
    "Title": "Munique",
    "Title type": "Feature Film",
    "Directors": "Steven Spielberg",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 164,
    "Year": 2005,
    "Genres": "crime, drama, history, thriller",
<<<<<<< HEAD
    "Num. Votes": 185835,
=======
    "Num. Votes": 186179,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2005-12-23",
    "URL": "http://www.imdb.com/title/tt0408306/"
  },
  {
    "position": 18,
    "const": "tt0948470",
    "created": "Wed Oct 21 10:19:13 2015",
    "modified": "Wed Oct 21 10:19:13 2015",
    "description": "",
    "Title": "O Espetacular Homem-Aranha",
    "Title type": "Feature Film",
    "Directors": "Marc Webb",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 136,
    "Year": 2012,
    "Genres": "action, adventure",
<<<<<<< HEAD
    "Num. Votes": 483564,
=======
    "Num. Votes": 484424,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-06-13",
    "URL": "http://www.imdb.com/title/tt0948470/"
  },
  {
    "position": 19,
    "const": "tt0081505",
    "created": "Wed Oct 21 10:21:33 2015",
    "modified": "Wed Oct 21 10:21:33 2015",
    "description": "",
    "Title": "O Iluminado",
    "Title type": "Feature Film",
    "Directors": "Stanley Kubrick",
    "You rated": "",
    "IMDb Rating": 8.4,
    "Runtime (mins)": 146,
    "Year": 1980,
    "Genres": "drama, horror",
<<<<<<< HEAD
    "Num. Votes": 676362,
=======
    "Num. Votes": 678973,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1980-05-23",
    "URL": "http://www.imdb.com/title/tt0081505/"
  },
  {
    "position": 20,
    "const": "tt1817273",
    "created": "Wed Oct 21 10:29:48 2015",
    "modified": "Wed Oct 21 10:29:48 2015",
    "description": "",
    "Title": "O Lugar Onde Tudo Termina",
    "Title type": "Feature Film",
    "Directors": "Derek Cianfrance",
    "You rated": "",
    "IMDb Rating": 7.3,
    "Runtime (mins)": 140,
    "Year": 2012,
    "Genres": "crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 204696,
=======
    "Num. Votes": 205216,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-09-07",
    "URL": "http://www.imdb.com/title/tt1817273/"
  },
  {
    "position": 21,
    "const": "tt1560747",
    "created": "Wed Oct 21 10:30:03 2015",
    "modified": "Wed Oct 21 10:30:03 2015",
    "description": "",
    "Title": "O Mestre",
    "Title type": "Feature Film",
    "Directors": "Paul Thomas Anderson",
    "You rated": "",
    "IMDb Rating": 7.1,
    "Runtime (mins)": 144,
    "Year": 2012,
    "Genres": "drama",
<<<<<<< HEAD
    "Num. Votes": 115481,
=======
    "Num. Votes": 115850,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-09-01",
    "URL": "http://www.imdb.com/title/tt1560747/"
  },
  {
    "position": 22,
    "const": "tt0068646",
    "created": "Wed Oct 21 10:30:21 2015",
    "modified": "Wed Oct 21 10:30:21 2015",
    "description": "",
    "Title": "O Poderoso Chefão",
    "Title type": "Feature Film",
    "Directors": "Francis Ford Coppola",
    "You rated": "",
    "IMDb Rating": 9.2,
    "Runtime (mins)": 175,
    "Year": 1972,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 1264985,
=======
    "Num. Votes": 1268940,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1972-03-14",
    "URL": "http://www.imdb.com/title/tt0068646/"
  },
  {
    "position": 23,
    "const": "tt0071562",
    "created": "Wed Oct 21 10:30:24 2015",
    "modified": "Wed Oct 21 10:30:24 2015",
    "description": "",
    "Title": "O Poderoso Chefão II",
    "Title type": "Feature Film",
    "Directors": "Francis Ford Coppola",
    "You rated": "",
    "IMDb Rating": 9,
    "Runtime (mins)": 202,
    "Year": 1974,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 871587,
=======
    "Num. Votes": 874436,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1974-12-12",
    "URL": "http://www.imdb.com/title/tt0071562/"
  },
  {
    "position": 24,
    "const": "tt0399295",
    "created": "Wed Oct 21 10:32:12 2015",
    "modified": "Wed Oct 21 10:32:12 2015",
    "description": "",
    "Title": "O Senhor das Armas",
    "Title type": "Feature Film",
    "Directors": "Andrew Niccol",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 122,
    "Year": 2005,
    "Genres": "crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 260970,
=======
    "Num. Votes": 261441,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2005-09-16",
    "URL": "http://www.imdb.com/title/tt0399295/"
  },
  {
    "position": 25,
    "const": "tt0102926",
    "created": "Wed Oct 21 10:34:47 2015",
    "modified": "Wed Oct 21 10:34:47 2015",
    "description": "",
    "Title": "O Silêncio dos Inocentes",
    "Title type": "Feature Film",
    "Directors": "Jonathan Demme",
    "You rated": "",
    "IMDb Rating": 8.6,
    "Runtime (mins)": 118,
    "Year": 1991,
    "Genres": "crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 984911,
=======
    "Num. Votes": 988446,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1991-01-30",
    "URL": "http://www.imdb.com/title/tt0102926/"
  },
  {
    "position": 26,
    "const": "tt0110912",
    "created": "Wed Oct 21 10:35:03 2015",
    "modified": "Wed Oct 21 10:35:03 2015",
    "description": "",
    "Title": "Pulp Fiction: Tempo de Violência",
    "Title type": "Feature Film",
    "Directors": "Quentin Tarantino",
    "You rated": "",
    "IMDb Rating": 8.9,
    "Runtime (mins)": 154,
    "Year": 1994,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 1449940,
=======
    "Num. Votes": 1454394,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1994-05-21",
    "URL": "http://www.imdb.com/title/tt0110912/"
  },
  {
    "position": 27,
    "const": "tt0056592",
    "created": "Wed Oct 21 10:35:18 2015",
    "modified": "Wed Oct 21 10:35:18 2015",
    "description": "",
    "Title": "O Sol É Para Todos",
    "Title type": "Feature Film",
    "Directors": "Robert Mulligan",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 129,
    "Year": 1962,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 237973,
=======
    "Num. Votes": 238671,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1962-12-25",
    "URL": "http://www.imdb.com/title/tt0056592/"
  },
  {
    "position": 28,
    "const": "tt1663662",
    "created": "Wed Oct 21 10:35:39 2015",
    "modified": "Wed Oct 21 10:35:39 2015",
    "description": "",
    "Title": "Círculo de Fogo",
    "Title type": "Feature Film",
    "Directors": "Guillermo del Toro",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 131,
    "Year": 2013,
    "Genres": "action, adventure, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 406357,
=======
    "Num. Votes": 407168,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-07-01",
    "URL": "http://www.imdb.com/title/tt1663662/"
  },
  {
    "position": 29,
    "const": "tt1385956",
    "created": "Wed Oct 21 10:36:04 2015",
    "modified": "Wed Oct 21 10:36:04 2015",
    "description": "",
    "Title": "Particle Fever",
    "Title type": "Documentary",
    "Directors": "Mark Levinson",
    "You rated": "",
    "IMDb Rating": 7.4,
    "Runtime (mins)": 99,
    "Year": 2013,
    "Genres": "documentary",
<<<<<<< HEAD
    "Num. Votes": 6344,
=======
    "Num. Votes": 6366,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-06-14",
    "URL": "http://www.imdb.com/title/tt1385956/"
  },
  {
    "position": 30,
    "const": "tt3659388",
    "created": "Wed Oct 21 10:36:19 2015",
    "modified": "Wed Oct 21 10:36:19 2015",
    "description": "",
    "Title": "Perdido em Marte",
    "Title type": "Feature Film",
    "Directors": "Ridley Scott",
    "You rated": "",
    "IMDb Rating": 8,
    "Runtime (mins)": 144,
    "Year": 2015,
    "Genres": "adventure, drama, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 575558,
=======
    "Num. Votes": 578407,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-09-11",
    "URL": "http://www.imdb.com/title/tt3659388/"
  },
  {
    "position": 31,
    "const": "tt0168122",
    "created": "Wed Oct 21 10:36:58 2015",
    "modified": "Wed Oct 21 10:36:58 2015",
    "description": "",
    "Title": "Piratas da Informática: Piratas do Vale do Silício",
    "Title type": "TV Movie",
    "Directors": "Martyn Burke",
    "You rated": "",
    "IMDb Rating": 7.3,
    "Runtime (mins)": 95,
    "Year": 1999,
    "Genres": "biography, drama, history",
<<<<<<< HEAD
    "Num. Votes": 21479,
=======
    "Num. Votes": 21525,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1999-06-20",
    "URL": "http://www.imdb.com/title/tt0168122/"
  },
  {
    "position": 32,
    "const": "tt0058461",
    "created": "Wed Oct 21 10:37:25 2015",
    "modified": "Wed Oct 21 10:37:25 2015",
    "description": "",
    "Title": "Por Um Punhado de Dólares",
    "Title type": "Feature Film",
    "Directors": "Sergio Leone",
    "You rated": "",
    "IMDb Rating": 8,
    "Runtime (mins)": 99,
    "Year": 1964,
    "Genres": "western",
<<<<<<< HEAD
    "Num. Votes": 161136,
=======
    "Num. Votes": 161516,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1964-09-12",
    "URL": "http://www.imdb.com/title/tt0058461/"
  },
  {
    "position": 33,
    "const": "tt1446714",
    "created": "Wed Oct 21 10:37:54 2015",
    "modified": "Wed Oct 21 10:37:54 2015",
    "description": "",
    "Title": "Prometheus",
    "Title type": "Feature Film",
    "Directors": "Ridley Scott",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 124,
    "Year": 2012,
    "Genres": "adventure, mystery, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 500865,
=======
    "Num. Votes": 502325,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-04-11",
    "URL": "http://www.imdb.com/title/tt1446714/"
  },
  {
    "position": 34,
    "const": "tt0054215",
    "created": "Wed Oct 21 10:38:22 2015",
    "modified": "Wed Oct 21 10:38:22 2015",
    "description": "",
    "Title": "Psicose",
    "Title type": "Feature Film",
    "Directors": "Alfred Hitchcock",
    "You rated": "",
    "IMDb Rating": 8.5,
    "Runtime (mins)": 109,
    "Year": 1960,
    "Genres": "horror, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 466559,
=======
    "Num. Votes": 468293,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1960-06-16",
    "URL": "http://www.imdb.com/title/tt0054215/"
  },
  {
    "position": 35,
    "const": "tt0095953",
    "created": "Wed Oct 21 10:39:05 2015",
    "modified": "Wed Oct 21 10:39:05 2015",
    "description": "",
    "Title": "Rain Man",
    "Title type": "Feature Film",
    "Directors": "Barry Levinson",
    "You rated": "",
    "IMDb Rating": 8,
    "Runtime (mins)": 133,
    "Year": 1988,
    "Genres": "drama",
<<<<<<< HEAD
    "Num. Votes": 407065,
=======
    "Num. Votes": 407926,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1988-12-12",
    "URL": "http://www.imdb.com/title/tt0095953/"
  },
  {
    "position": 36,
    "const": "tt1706620",
    "created": "Wed Oct 21 10:54:57 2015",
    "modified": "Wed Oct 21 10:54:57 2015",
    "description": "",
    "Title": "Expresso do Amanhã",
    "Title type": "Feature Film",
    "Directors": "Bong Joon Ho",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 126,
    "Year": 2013,
<<<<<<< HEAD
    "Genres": "drama, sci_fi, thriller",
    "Num. Votes": 206097,
=======
    "Genres": "action, adventure, drama, sci_fi, thriller",
    "Num. Votes": 206932,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-07-29",
    "URL": "http://www.imdb.com/title/tt1706620/"
  },
  {
    "position": 37,
    "const": "tt0086250",
    "created": "Wed Oct 21 11:18:30 2015",
    "modified": "Wed Oct 21 11:18:30 2015",
    "description": "",
    "Title": "Scarface",
    "Title type": "Feature Film",
    "Directors": "Brian De Palma",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 170,
    "Year": 1983,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 588559,
=======
    "Num. Votes": 590365,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1983-12-01",
    "URL": "http://www.imdb.com/title/tt0086250/"
  },
  {
    "position": 38,
    "const": "tt0114369",
    "created": "Wed Oct 21 11:18:53 2015",
    "modified": "Wed Oct 21 11:18:53 2015",
    "description": "",
    "Title": "Seven: Os Sete Crimes Capitais",
    "Title type": "Feature Film",
    "Directors": "David Fincher",
    "You rated": "",
    "IMDb Rating": 8.6,
    "Runtime (mins)": 127,
    "Year": 1995,
    "Genres": "crime, drama, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 1128782,
=======
    "Num. Votes": 1132677,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1995-09-15",
    "URL": "http://www.imdb.com/title/tt0114369/"
  },
  {
    "position": 39,
    "const": "tt3077214",
    "created": "Wed Oct 21 11:19:19 2015",
    "modified": "Wed Oct 21 11:19:19 2015",
    "description": "",
    "Title": "As Sufragistas",
    "Title type": "Feature Film",
    "Directors": "Sarah Gavron",
    "You rated": "",
    "IMDb Rating": 6.9,
    "Runtime (mins)": 106,
    "Year": 2015,
    "Genres": "biography, drama, history",
<<<<<<< HEAD
    "Num. Votes": 28151,
=======
    "Num. Votes": 28284,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-09-04",
    "URL": "http://www.imdb.com/title/tt3077214/"
  },
  {
    "position": 40,
    "const": "tt0075314",
    "created": "Wed Oct 21 11:19:29 2015",
    "modified": "Wed Oct 21 11:19:29 2015",
    "description": "",
    "Title": "Taxi Driver",
    "Title type": "Feature Film",
    "Directors": "Martin Scorsese",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 113,
    "Year": 1976,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 560188,
=======
    "Num. Votes": 562071,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1976-02-07",
    "URL": "http://www.imdb.com/title/tt0075314/"
  },
  {
    "position": 41,
    "const": "tt0099077",
    "created": "Wed Oct 21 11:24:08 2015",
    "modified": "Wed Oct 21 11:24:08 2015",
    "description": "",
    "Title": "Tempo de Despertar",
    "Title type": "Feature Film",
    "Directors": "Penny Marshall",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 121,
    "Year": 1990,
    "Genres": "biography, drama",
<<<<<<< HEAD
    "Num. Votes": 100735,
=======
    "Num. Votes": 101091,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1990-12-12",
    "URL": "http://www.imdb.com/title/tt0099077/"
  },
  {
    "position": 42,
    "const": "tt0060196",
    "created": "Wed Oct 21 11:24:29 2015",
    "modified": "Wed Oct 21 11:24:29 2015",
    "description": "",
    "Title": "Três Homens em Conflito",
    "Title type": "Feature Film",
    "Directors": "Sergio Leone",
    "You rated": "",
    "IMDb Rating": 8.9,
    "Runtime (mins)": 161,
    "Year": 1966,
    "Genres": "western",
<<<<<<< HEAD
    "Num. Votes": 549419,
=======
    "Num. Votes": 551056,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1966-12-23",
    "URL": "http://www.imdb.com/title/tt0060196/"
  },
  {
    "position": 43,
    "const": "tt0081398",
    "created": "Wed Oct 21 11:24:47 2015",
    "modified": "Wed Oct 21 11:24:47 2015",
    "description": "",
    "Title": "Touro Indomável",
    "Title type": "Feature Film",
    "Directors": "Martin Scorsese",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 129,
    "Year": 1980,
    "Genres": "biography, drama, sport",
<<<<<<< HEAD
    "Num. Votes": 255704,
=======
    "Num. Votes": 256427,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1980-11-13",
    "URL": "http://www.imdb.com/title/tt0081398/"
  },
  {
    "position": 44,
    "const": "tt0073486",
    "created": "Wed Oct 21 11:25:15 2015",
    "modified": "Wed Oct 21 11:25:15 2015",
    "description": "",
    "Title": "Um Estranho no Ninho",
    "Title type": "Feature Film",
    "Directors": "Milos Forman",
    "You rated": "",
    "IMDb Rating": 8.7,
    "Runtime (mins)": 133,
    "Year": 1975,
    "Genres": "drama",
<<<<<<< HEAD
    "Num. Votes": 740688,
=======
    "Num. Votes": 742827,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1975-11-19",
    "URL": "http://www.imdb.com/title/tt0073486/"
  },
  {
    "position": 45,
    "const": "tt0111161",
    "created": "Wed Oct 21 11:25:28 2015",
    "modified": "Wed Oct 21 11:25:28 2015",
    "description": "",
    "Title": "Um Sonho de Liberdade",
    "Title type": "Feature Film",
    "Directors": "Frank Darabont",
    "You rated": "",
    "IMDb Rating": 9.3,
    "Runtime (mins)": 142,
    "Year": 1994,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 1852589,
=======
    "Num. Votes": 1858601,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1994-09-10",
    "URL": "http://www.imdb.com/title/tt0111161/"
  },
  {
    "position": 46,
    "const": "tt1568911",
    "created": "Wed Oct 21 11:25:45 2015",
    "modified": "Wed Oct 21 11:25:45 2015",
    "description": "",
    "Title": "Cavalo de Guerra",
    "Title type": "Feature Film",
    "Directors": "Steven Spielberg",
    "You rated": "",
    "IMDb Rating": 7.2,
    "Runtime (mins)": 146,
    "Year": 2011,
    "Genres": "drama, war",
<<<<<<< HEAD
    "Num. Votes": 124760,
=======
    "Num. Votes": 125036,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2011-12-04",
    "URL": "http://www.imdb.com/title/tt1568911/"
  },
  {
    "position": 47,
    "const": "tt0443706",
    "created": "Wed Oct 21 11:26:55 2015",
    "modified": "Wed Oct 21 11:26:55 2015",
    "description": "",
    "Title": "Zodíaco",
    "Title type": "Feature Film",
    "Directors": "David Fincher",
    "You rated": "",
    "IMDb Rating": 7.7,
    "Runtime (mins)": 157,
    "Year": 2007,
    "Genres": "crime, drama, history, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 340784,
=======
    "Num. Votes": 342326,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2007-02-28",
    "URL": "http://www.imdb.com/title/tt0443706/"
  },
  {
    "position": 48,
    "const": "tt1821549",
    "created": "Tue Nov 17 04:24:15 2015",
    "modified": "Tue Nov 17 04:24:15 2015",
    "description": "",
    "Title": "Nebraska",
    "Title type": "Feature Film",
    "Directors": "Alexander Payne",
    "You rated": "",
    "IMDb Rating": 7.7,
    "Runtime (mins)": 115,
    "Year": 2013,
    "Genres": "adventure, comedy, drama",
<<<<<<< HEAD
    "Num. Votes": 97560,
=======
    "Num. Votes": 97802,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-05-23",
    "URL": "http://www.imdb.com/title/tt1821549/"
  },
  {
    "position": 49,
    "const": "tt1705786",
    "created": "Sat Nov 21 08:47:09 2015",
    "modified": "Sat Nov 21 08:47:09 2015",
    "description": "",
    "Title": "Um Conto Chinês",
    "Title type": "Feature Film",
    "Directors": "Sebastián Borensztein",
    "You rated": "",
    "IMDb Rating": 7.3,
    "Runtime (mins)": 93,
    "Year": 2011,
    "Genres": "comedy, drama",
<<<<<<< HEAD
    "Num. Votes": 13715,
=======
    "Num. Votes": 13774,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2011-03-24",
    "URL": "http://www.imdb.com/title/tt1705786/"
  },
  {
    "position": 50,
    "const": "tt0206634",
    "created": "Sat Nov 21 08:58:25 2015",
    "modified": "Sat Nov 21 08:58:25 2015",
    "description": "",
    "Title": "Filhos da Esperança",
    "Title type": "Feature Film",
    "Directors": "Alfonso Cuarón",
    "You rated": "",
    "IMDb Rating": 7.9,
    "Runtime (mins)": 109,
    "Year": 2006,
    "Genres": "drama, sci_fi, thriller",
<<<<<<< HEAD
    "Num. Votes": 390258,
=======
    "Num. Votes": 391375,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2006-09-03",
    "URL": "http://www.imdb.com/title/tt0206634/"
  },
  {
    "position": 51,
    "const": "tt0816711",
    "created": "Sat Nov 21 08:59:09 2015",
    "modified": "Sat Nov 21 08:59:09 2015",
    "description": "",
    "Title": "Guerra Mundial Z",
    "Title type": "Feature Film",
    "Directors": "Marc Forster",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 116,
    "Year": 2013,
    "Genres": "action, adventure, horror, sci_fi, thriller",
<<<<<<< HEAD
    "Num. Votes": 505130,
=======
    "Num. Votes": 506566,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-06-02",
    "URL": "http://www.imdb.com/title/tt0816711/"
  },
  {
    "position": 52,
    "const": "tt0401792",
    "created": "Sat Nov 21 13:00:49 2015",
    "modified": "Sat Nov 21 13:00:49 2015",
    "description": "",
    "Title": "Sin City: A Cidade do Pecado",
    "Title type": "Feature Film",
    "Directors": "Frank Miller, Robert Rodriguez",
    "You rated": "",
    "IMDb Rating": 8,
    "Runtime (mins)": 124,
    "Year": 2005,
    "Genres": "crime, thriller",
<<<<<<< HEAD
    "Num. Votes": 688970,
=======
    "Num. Votes": 689642,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2005-03-28",
    "URL": "http://www.imdb.com/title/tt0401792/"
  },
  {
    "position": 53,
    "const": "tt0066921",
    "created": "Sat Jan  2 14:46:23 2016",
    "modified": "Sat Jan  2 14:46:23 2016",
    "description": "",
    "Title": "Laranja Mecânica",
    "Title type": "Feature Film",
    "Directors": "Stanley Kubrick",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 136,
    "Year": 1971,
    "Genres": "crime, drama, sci_fi",
<<<<<<< HEAD
    "Num. Votes": 612192,
=======
    "Num. Votes": 614142,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1971-12-19",
    "URL": "http://www.imdb.com/title/tt0066921/"
  },
  {
    "position": 54,
    "const": "tt2713180",
    "created": "Sat Jan  2 14:47:36 2016",
    "modified": "Sat Jan  2 14:47:36 2016",
    "description": "",
    "Title": "Corações de Ferro",
    "Title type": "Feature Film",
    "Directors": "David Ayer",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 134,
    "Year": 2014,
    "Genres": "action, drama, war",
<<<<<<< HEAD
    "Num. Votes": 339946,
=======
    "Num. Votes": 340954,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2014-10-15",
    "URL": "http://www.imdb.com/title/tt2713180/"
  },
  {
    "position": 55,
    "const": "tt0887912",
    "created": "Sat Jan  2 14:48:01 2016",
    "modified": "Sat Jan  2 14:48:01 2016",
    "description": "",
    "Title": "Guerra ao Terror",
    "Title type": "Feature Film",
    "Directors": "Kathryn Bigelow",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 131,
    "Year": 2008,
    "Genres": "drama, history, thriller, war",
<<<<<<< HEAD
    "Num. Votes": 358019,
=======
    "Num. Votes": 358781,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2008-09-04",
    "URL": "http://www.imdb.com/title/tt0887912/"
  },
  {
    "position": 56,
    "const": "tt1663202",
    "created": "Sat Jan  2 14:52:14 2016",
    "modified": "Sat Jan  2 14:52:14 2016",
    "description": "",
    "Title": "O Regresso",
    "Title type": "Feature Film",
    "Directors": "Alejandro G. Iñárritu",
    "You rated": "",
    "IMDb Rating": 8,
    "Runtime (mins)": 156,
    "Year": 2015,
    "Genres": "adventure, drama, thriller, western",
<<<<<<< HEAD
    "Num. Votes": 518497,
=======
    "Num. Votes": 521022,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-12-16",
    "URL": "http://www.imdb.com/title/tt1663202/"
  },
  {
    "position": 57,
    "const": "tt3397884",
    "created": "Sat Jan  2 14:53:20 2016",
    "modified": "Sat Jan  2 14:53:20 2016",
    "description": "",
    "Title": "Sicario: Terra de Ninguém",
    "Title type": "Feature Film",
    "Directors": "Denis Villeneuve",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 121,
    "Year": 2015,
    "Genres": "action, crime, drama, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 254556,
=======
    "Num. Votes": 256180,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-05-19",
    "URL": "http://www.imdb.com/title/tt3397884/"
  },
  {
    "position": 58,
    "const": "tt0434409",
    "created": "Wed Jan  6 03:53:22 2016",
    "modified": "Wed Jan  6 03:53:22 2016",
    "description": "",
    "Title": "V de Vingança",
    "Title type": "Feature Film",
    "Directors": "James McTeigue",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 132,
    "Year": 2005,
    "Genres": "action, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 863485,
=======
    "Num. Votes": 865834,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2005-12-11",
    "URL": "http://www.imdb.com/title/tt0434409/"
  },
  {
    "position": 59,
    "const": "tt0993846",
    "created": "Tue Feb 23 20:07:48 2016",
    "modified": "Tue Feb 23 20:07:48 2016",
    "description": "",
    "Title": "O Lobo de Wall Street",
    "Title type": "Feature Film",
    "Directors": "Martin Scorsese",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 180,
    "Year": 2013,
    "Genres": "biography, comedy, crime, drama",
<<<<<<< HEAD
    "Num. Votes": 890123,
=======
    "Num. Votes": 893721,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-12-17",
    "URL": "http://www.imdb.com/title/tt0993846/"
  },
  {
    "position": 60,
    "const": "tt1355683",
    "created": "Sat Feb 27 19:00:01 2016",
    "modified": "Sat Feb 27 19:00:01 2016",
    "description": "",
    "Title": "Aliança do Crime",
    "Title type": "Feature Film",
    "Directors": "Scott Cooper",
    "You rated": "",
    "IMDb Rating": 6.9,
    "Runtime (mins)": 123,
    "Year": 2015,
    "Genres": "biography, crime, drama, history",
<<<<<<< HEAD
    "Num. Votes": 139455,
=======
    "Num. Votes": 140045,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-09-04",
    "URL": "http://www.imdb.com/title/tt1355683/"
  },
  {
    "position": 61,
    "const": "tt2719848",
    "created": "Sat Feb 27 19:00:12 2016",
    "modified": "Sat Feb 27 19:00:12 2016",
    "description": "",
    "Title": "Evereste",
    "Title type": "Feature Film",
    "Directors": "Baltasar Kormákur",
    "You rated": "",
    "IMDb Rating": 7.1,
    "Runtime (mins)": 121,
    "Year": 2015,
    "Genres": "action, adventure, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 159508,
=======
    "Num. Votes": 160196,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-09-02",
    "URL": "http://www.imdb.com/title/tt2719848/"
  },
  {
    "position": 62,
    "const": "tt1596363",
    "created": "Mon Feb 29 18:46:44 2016",
    "modified": "Mon Feb 29 18:46:44 2016",
    "description": "",
    "Title": "A Grande Aposta",
    "Title type": "Feature Film",
    "Directors": "Adam McKay",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 130,
    "Year": 2015,
    "Genres": "biography, comedy, drama, history",
<<<<<<< HEAD
    "Num. Votes": 257833,
=======
    "Num. Votes": 259414,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-11-12",
    "URL": "http://www.imdb.com/title/tt1596363/"
  },
  {
    "position": 63,
    "const": "tt3682448",
    "created": "Mon Feb 29 18:46:45 2016",
    "modified": "Mon Feb 29 18:46:45 2016",
    "description": "",
    "Title": "Ponte dos Espiões",
    "Title type": "Feature Film",
    "Directors": "Steven Spielberg",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 142,
    "Year": 2015,
    "Genres": "drama, history, thriller",
<<<<<<< HEAD
    "Num. Votes": 226255,
=======
    "Num. Votes": 227308,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-10-04",
    "URL": "http://www.imdb.com/title/tt3682448/"
  },
  {
    "position": 64,
    "const": "tt2381111",
    "created": "Mon Feb 29 18:46:52 2016",
    "modified": "Mon Feb 29 18:46:52 2016",
    "description": "",
    "Title": "Brooklyn",
    "Title type": "Feature Film",
    "Directors": "John Crowley",
    "You rated": "",
    "IMDb Rating": 7.5,
    "Runtime (mins)": 117,
    "Year": 2015,
    "Genres": "drama, romance",
<<<<<<< HEAD
    "Num. Votes": 98441,
=======
    "Num. Votes": 98964,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-01-26",
    "URL": "http://www.imdb.com/title/tt2381111/"
  },
  {
    "position": 65,
    "const": "tt0810819",
    "created": "Mon Feb 29 18:46:56 2016",
    "modified": "Mon Feb 29 18:46:56 2016",
    "description": "",
    "Title": "A Garota Dinamarquesa",
    "Title type": "Feature Film",
    "Directors": "Tom Hooper",
    "You rated": "",
    "IMDb Rating": 7.1,
    "Runtime (mins)": 119,
    "Year": 2015,
    "Genres": "biography, drama, romance",
<<<<<<< HEAD
    "Num. Votes": 116062,
=======
    "Num. Votes": 116878,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-09-05",
    "URL": "http://www.imdb.com/title/tt0810819/"
  },
  {
    "position": 66,
    "const": "tt2402927",
    "created": "Mon Feb 29 18:47:00 2016",
    "modified": "Mon Feb 29 18:47:00 2016",
    "description": "",
    "Title": "Carol",
    "Title type": "Feature Film",
    "Directors": "Todd Haynes",
    "You rated": "",
    "IMDb Rating": 7.2,
    "Runtime (mins)": 118,
    "Year": 2015,
    "Genres": "drama, romance",
<<<<<<< HEAD
    "Num. Votes": 81116,
=======
    "Num. Votes": 81597,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-05-17",
    "URL": "http://www.imdb.com/title/tt2402927/"
  },
  {
    "position": 67,
    "const": "tt3076658",
    "created": "Mon Feb 29 18:47:04 2016",
    "modified": "Mon Feb 29 18:47:04 2016",
    "description": "",
    "Title": "Creed: Nascido para Lutar",
    "Title type": "Feature Film",
    "Directors": "Ryan Coogler",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 133,
    "Year": 2015,
    "Genres": "drama, sport",
<<<<<<< HEAD
    "Num. Votes": 181504,
=======
    "Num. Votes": 182413,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-11-19",
    "URL": "http://www.imdb.com/title/tt3076658/"
  },
  {
    "position": 68,
    "const": "tt0099685",
    "created": "Sat Mar 12 18:28:35 2016",
    "modified": "Sat Mar 12 18:28:35 2016",
    "description": "",
    "Title": "Os Bons Companheiros",
    "Title type": "Feature Film",
    "Directors": "Martin Scorsese",
    "You rated": "",
    "IMDb Rating": 8.7,
    "Runtime (mins)": 146,
    "Year": 1990,
    "Genres": "crime, drama",
<<<<<<< HEAD
    "Num. Votes": 798767,
=======
    "Num. Votes": 801294,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1990-09-09",
    "URL": "http://www.imdb.com/title/tt0099685/"
  },
  {
    "position": 69,
    "const": "tt0052357",
    "created": "Sun Mar 20 09:29:13 2016",
    "modified": "Sun Mar 20 09:29:13 2016",
    "description": "",
    "Title": "Um Corpo Que Cai",
    "Title type": "Feature Film",
    "Directors": "Alfred Hitchcock",
    "You rated": "",
    "IMDb Rating": 8.4,
    "Runtime (mins)": 128,
    "Year": 1958,
    "Genres": "mystery, romance, thriller",
<<<<<<< HEAD
    "Num. Votes": 276778,
=======
    "Num. Votes": 277729,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1958-05-09",
    "URL": "http://www.imdb.com/title/tt0052357/"
  },
  {
    "position": 70,
    "const": "tt0059578",
    "created": "Sun Mar 20 09:29:47 2016",
    "modified": "Sun Mar 20 09:29:47 2016",
    "description": "",
    "Title": "Por uns Dólares a Mais",
    "Title type": "Feature Film",
    "Directors": "Sergio Leone",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 132,
    "Year": 1965,
    "Genres": "western",
<<<<<<< HEAD
    "Num. Votes": 176041,
=======
    "Num. Votes": 176651,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1965-12-18",
    "URL": "http://www.imdb.com/title/tt0059578/"
  },
  {
    "position": 71,
    "const": "tt0266697",
    "created": "Sun Mar 20 09:30:06 2016",
    "modified": "Sun Mar 20 09:30:06 2016",
    "description": "",
    "Title": "Kill Bill: Volume 1",
    "Title type": "Feature Film",
    "Directors": "Quentin Tarantino",
    "You rated": "",
    "IMDb Rating": 8.1,
    "Runtime (mins)": 111,
    "Year": 2003,
    "Genres": "action, crime, thriller",
<<<<<<< HEAD
    "Num. Votes": 803294,
=======
    "Num. Votes": 805801,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2003-09-29",
    "URL": "http://www.imdb.com/title/tt0266697/"
  },
  {
    "position": 72,
    "const": "tt0085407",
    "created": "Thu Apr  7 18:32:19 2016",
    "modified": "Thu Apr  7 18:32:19 2016",
    "description": "",
    "Title": "A Hora da Zona Morta",
    "Title type": "Feature Film",
    "Directors": "David Cronenberg",
    "You rated": "",
    "IMDb Rating": 7.2,
    "Runtime (mins)": 103,
    "Year": 1983,
    "Genres": "horror, sci_fi, thriller",
<<<<<<< HEAD
    "Num. Votes": 48655,
=======
    "Num. Votes": 48940,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1983-10-21",
    "URL": "http://www.imdb.com/title/tt0085407/"
  },
  {
    "position": 73,
    "const": "tt0310775",
    "created": "Mon Apr 25 13:20:21 2016",
    "modified": "Mon Apr 25 13:20:21 2016",
    "description": "",
    "Title": "Mr. Vingança",
    "Title type": "Feature Film",
    "Directors": "Chan-wook Park",
    "You rated": "",
    "IMDb Rating": 7.7,
    "Runtime (mins)": 129,
    "Year": 2002,
    "Genres": "crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 50380,
=======
    "Num. Votes": 50558,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2002-03-29",
    "URL": "http://www.imdb.com/title/tt0310775/"
  },
  {
    "position": 74,
    "const": "tt0451094",
    "created": "Mon Apr 25 13:21:11 2016",
    "modified": "Mon Apr 25 13:21:11 2016",
    "description": "",
    "Title": "Lady Vingança",
    "Title type": "Feature Film",
    "Directors": "Park Chan Wook",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 115,
    "Year": 2005,
<<<<<<< HEAD
    "Genres": "crime, drama",
    "Num. Votes": 58403,
=======
    "Genres": "crime, drama, thriller",
    "Num. Votes": 58590,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2005-07-29",
    "URL": "http://www.imdb.com/title/tt0451094/"
  },
  {
    "position": 75,
    "const": "tt0086879",
    "created": "Thu Sep  8 16:33:59 2016",
    "modified": "Thu Sep  8 16:33:59 2016",
    "description": "",
    "Title": "Amadeus",
    "Title type": "Feature Film",
    "Directors": "Milos Forman",
    "You rated": "",
    "IMDb Rating": 8.3,
    "Runtime (mins)": 160,
    "Year": 1984,
    "Genres": "biography, drama, history, music",
<<<<<<< HEAD
    "Num. Votes": 297408,
=======
    "Num. Votes": 298332,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1984-09-06",
    "URL": "http://www.imdb.com/title/tt0086879/"
  },
  {
    "position": 76,
    "const": "tt0178868",
    "created": "Thu Sep  8 16:36:20 2016",
    "modified": "Thu Sep  8 16:36:20 2016",
    "description": "",
    "Title": "Ring: O Chamado",
    "Title type": "Feature Film",
    "Directors": "Hideo Nakata",
    "You rated": "",
    "IMDb Rating": 7.3,
    "Runtime (mins)": 96,
    "Year": 1998,
    "Genres": "horror, mystery",
<<<<<<< HEAD
    "Num. Votes": 54194,
=======
    "Num. Votes": 54317,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1998-01-31",
    "URL": "http://www.imdb.com/title/tt0178868/"
  },
  {
    "position": 77,
    "const": "tt0113277",
    "created": "Wed Oct  5 18:25:51 2016",
    "modified": "Wed Oct  5 18:25:51 2016",
    "description": "",
    "Title": "Fogo Contra Fogo",
    "Title type": "Feature Film",
    "Directors": "Michael Mann",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 170,
    "Year": 1995,
    "Genres": "action, crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 467822,
=======
    "Num. Votes": 469285,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1995-12-06",
    "URL": "http://www.imdb.com/title/tt0113277/"
  },
  {
    "position": 78,
    "const": "tt4034228",
    "created": "Fri Feb 17 20:55:18 2017",
    "modified": "Fri Feb 17 20:55:18 2017",
    "description": "",
    "Title": "Manchester À Beira-Mar",
    "Title type": "Feature Film",
    "Directors": "Kenneth Lonergan",
    "You rated": "",
    "IMDb Rating": 7.9,
    "Runtime (mins)": 137,
    "Year": 2016,
    "Genres": "drama",
<<<<<<< HEAD
    "Num. Votes": 155810,
=======
    "Num. Votes": 158298,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-01-23",
    "URL": "http://www.imdb.com/title/tt4034228/"
  },
  {
    "position": 79,
    "const": "tt4550098",
    "created": "Fri Feb 17 20:57:10 2017",
    "modified": "Fri Feb 17 20:57:10 2017",
    "description": "",
    "Title": "Animais Noturnos",
    "Title type": "Feature Film",
    "Directors": "Tom Ford",
    "You rated": "",
    "IMDb Rating": 7.5,
    "Runtime (mins)": 116,
    "Year": 2016,
    "Genres": "crime, drama, romance, thriller",
<<<<<<< HEAD
    "Num. Votes": 147683,
=======
    "Num. Votes": 150815,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-09-02",
    "URL": "http://www.imdb.com/title/tt4550098/"
  },
  {
    "position": 80,
    "const": "tt1355631",
    "created": "Fri Feb 17 21:25:44 2017",
    "modified": "Fri Feb 17 21:25:44 2017",
    "description": "",
    "Title": "Conexão Escobar",
    "Title type": "Feature Film",
    "Directors": "Brad Furman",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 127,
    "Year": 2016,
    "Genres": "biography, crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 49164,
=======
    "Num. Votes": 49854,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-07-06",
    "URL": "http://www.imdb.com/title/tt1355631/"
  },
  {
    "position": 81,
    "const": "tt3783958",
    "created": "Wed Mar  1 17:23:24 2017",
    "modified": "Wed Mar  1 17:23:24 2017",
    "description": "",
    "Title": "La La Land: Cantando Estações",
    "Title type": "Feature Film",
    "Directors": "Damien Chazelle",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 128,
    "Year": 2016,
    "Genres": "comedy, drama, music, musical, romance",
<<<<<<< HEAD
    "Num. Votes": 300660,
=======
    "Num. Votes": 305995,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-08-31",
    "URL": "http://www.imdb.com/title/tt3783958/"
  },
  {
    "position": 82,
    "const": "tt3741834",
    "created": "Wed Mar  1 17:23:53 2017",
    "modified": "Wed Mar  1 17:23:53 2017",
    "description": "",
    "Title": "Lion: Uma Jornada Para Casa",
    "Title type": "Feature Film",
    "Directors": "Garth Davis",
    "You rated": "",
    "IMDb Rating": 8.1,
    "Runtime (mins)": 118,
    "Year": 2016,
    "Genres": "biography, drama",
<<<<<<< HEAD
    "Num. Votes": 129605,
=======
    "Num. Votes": 132201,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-09-10",
    "URL": "http://www.imdb.com/title/tt3741834/"
  },
  {
    "position": 83,
    "const": "tt2119532",
    "created": "Wed Mar  1 17:24:58 2017",
    "modified": "Wed Mar  1 17:24:58 2017",
    "description": "",
    "Title": "Até o Último Homem",
    "Title type": "Feature Film",
    "Directors": "Mel Gibson",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 139,
    "Year": 2016,
    "Genres": "biography, drama, history, war",
<<<<<<< HEAD
    "Num. Votes": 256366,
=======
    "Num. Votes": 261317,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-09-04",
    "URL": "http://www.imdb.com/title/tt2119532/"
  },
  {
    "position": 84,
    "const": "tt5275892",
    "created": "Tue Mar  7 10:55:39 2017",
    "modified": "Tue Mar  7 10:55:39 2017",
    "description": "",
    "Title": "O.J.: Made in America",
    "Title type": "Documentary",
    "Directors": "Ezra Edelman",
    "You rated": "",
    "IMDb Rating": 9,
    "Runtime (mins)": 467,
    "Year": 2016,
    "Genres": "documentary, biography, crime, history",
<<<<<<< HEAD
    "Num. Votes": 11639,
=======
    "Num. Votes": 11796,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-01-22",
    "URL": "http://www.imdb.com/title/tt5275892/"
  },
  {
    "position": 85,
    "const": "tt2763304",
    "created": "Mon Mar 13 06:34:53 2017",
    "modified": "Mon Mar 13 06:34:53 2017",
    "description": "",
    "Title": "T2 Trainspotting",
    "Title type": "Feature Film",
    "Directors": "Danny Boyle",
    "You rated": "",
    "IMDb Rating": 7.3,
    "Runtime (mins)": 117,
    "Year": 2017,
    "Genres": "drama",
<<<<<<< HEAD
    "Num. Votes": 61270,
=======
    "Num. Votes": 62982,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2017-01-22",
    "URL": "http://www.imdb.com/title/tt2763304/"
  },
  {
    "position": 86,
    "const": "tt0211915",
    "created": "Fri Mar 17 03:38:18 2017",
    "modified": "Fri Mar 17 03:38:18 2017",
    "description": "",
    "Title": "O Fabuloso Destino de Amélie Poulain",
    "Title type": "Feature Film",
    "Directors": "Jean-Pierre Jeunet",
    "You rated": "",
    "IMDb Rating": 8.4,
    "Runtime (mins)": 122,
    "Year": 2001,
    "Genres": "comedy, romance",
<<<<<<< HEAD
    "Num. Votes": 584120,
=======
    "Num. Votes": 585977,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2001-04-25",
    "URL": "http://www.imdb.com/title/tt0211915/"
  },
  {
    "position": 87,
    "const": "tt1860357",
    "created": "Sat Mar 25 05:05:15 2017",
    "modified": "Sat Mar 25 05:05:15 2017",
    "description": "",
    "Title": "Horizonte Profundo: Desastre no Golfo",
    "Title type": "Feature Film",
    "Directors": "Peter Berg",
    "You rated": "",
    "IMDb Rating": 7.2,
    "Runtime (mins)": 107,
    "Year": 2016,
    "Genres": "action, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 102409,
=======
    "Num. Votes": 103830,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-09-13",
    "URL": "http://www.imdb.com/title/tt1860357/"
  },
  {
    "position": 88,
    "const": "tt4540710",
    "created": "Sat Mar 25 05:07:10 2017",
    "modified": "Sat Mar 25 05:07:10 2017",
    "description": "",
    "Title": "Armas na Mesa",
    "Title type": "Feature Film",
    "Directors": "John Madden",
    "You rated": "",
    "IMDb Rating": 7.4,
    "Runtime (mins)": 132,
    "Year": 2016,
    "Genres": "drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 26420,
=======
    "Num. Votes": 27744,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-11-11",
    "URL": "http://www.imdb.com/title/tt4540710/"
  },
  {
    "position": 89,
    "const": "tt5186714",
    "created": "Sat Mar 25 05:10:28 2017",
    "modified": "Sat Mar 25 05:10:28 2017",
    "description": "",
    "Title": "O Apartamento",
    "Title type": "Feature Film",
    "Directors": "Asghar Farhadi",
    "You rated": "",
    "IMDb Rating": 7.9,
    "Runtime (mins)": 124,
    "Year": 2016,
    "Genres": "drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 27650,
=======
    "Num. Votes": 28143,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-05-21",
    "URL": "http://www.imdb.com/title/tt5186714/"
  },
  {
    "position": 90,
    "const": "tt3841424",
    "created": "Sat Mar 25 05:11:15 2017",
    "modified": "Sat Mar 25 05:11:15 2017",
    "description": "",
    "Title": "Terra de Minas",
    "Title type": "Feature Film",
    "Directors": "Martin Zandvliet",
    "You rated": "",
    "IMDb Rating": 7.8,
    "Runtime (mins)": 100,
    "Year": 2015,
    "Genres": "drama, history, war",
<<<<<<< HEAD
    "Num. Votes": 16790,
=======
    "Num. Votes": 17261,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2015-09-10",
    "URL": "http://www.imdb.com/title/tt3841424/"
  },
  {
    "position": 91,
    "const": "tt3666024",
    "created": "Sat Mar 25 05:26:18 2017",
    "modified": "Sat Mar 25 05:26:18 2017",
    "description": "",
    "Title": "A Tartaruga Vermelha",
    "Title type": "Feature Film",
    "Directors": "Michael Dudok de Wit",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 80,
    "Year": 2016,
    "Genres": "animation, fantasy",
<<<<<<< HEAD
    "Num. Votes": 15122,
=======
    "Num. Votes": 15479,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-05-18",
    "URL": "http://www.imdb.com/title/tt3666024/"
  },
  {
    "position": 92,
    "const": "tt4048272",
    "created": "Sat Mar 25 05:27:07 2017",
    "modified": "Sat Mar 25 05:27:07 2017",
    "description": "",
    "Title": "Toni Erdmann",
    "Title type": "Feature Film",
    "Directors": "Maren Ade",
    "You rated": "",
    "IMDb Rating": 7.5,
    "Runtime (mins)": 162,
    "Year": 2016,
    "Genres": "comedy, drama",
<<<<<<< HEAD
    "Num. Votes": 28280,
=======
    "Num. Votes": 28755,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-05-14",
    "URL": "http://www.imdb.com/title/tt4048272/"
  },
  {
    "position": 93,
    "const": "tt0077928",
    "created": "Sun Mar 26 11:52:35 2017",
    "modified": "Sun Mar 26 11:52:35 2017",
    "description": "",
    "Title": "O Expresso da Meia-Noite",
    "Title type": "Feature Film",
    "Directors": "Alan Parker",
    "You rated": "",
    "IMDb Rating": 7.6,
    "Runtime (mins)": 121,
    "Year": 1978,
    "Genres": "biography, crime, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 58838,
=======
    "Num. Votes": 58985,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1978-05-18",
    "URL": "http://www.imdb.com/title/tt0077928/"
  },
  {
    "position": 94,
    "const": "tt1392214",
    "created": "Sun Mar 26 12:03:58 2017",
    "modified": "Sun Mar 26 12:03:58 2017",
    "description": "",
    "Title": "Os Suspeitos",
    "Title type": "Feature Film",
    "Directors": "Denis Villeneuve",
    "You rated": "",
    "IMDb Rating": 8.1,
    "Runtime (mins)": 153,
    "Year": 2013,
    "Genres": "crime, drama, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 445763,
=======
    "Num. Votes": 448039,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2013-08-30",
    "URL": "http://www.imdb.com/title/tt1392214/"
  },
  {
    "position": 95,
    "const": "tt1907668",
    "created": "Sun Mar 26 12:05:23 2017",
    "modified": "Sun Mar 26 12:05:23 2017",
    "description": "",
    "Title": "O Voo",
    "Title type": "Feature Film",
    "Directors": "Robert Zemeckis",
    "You rated": "",
    "IMDb Rating": 7.3,
    "Runtime (mins)": 138,
    "Year": 2012,
    "Genres": "drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 280018,
=======
    "Num. Votes": 280586,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-10-14",
    "URL": "http://www.imdb.com/title/tt1907668/"
  },
  {
    "position": 96,
    "const": "tt0120735",
    "created": "Sun Mar 26 12:06:32 2017",
    "modified": "Sun Mar 26 12:06:32 2017",
    "description": "",
    "Title": "Jogos, Trapaças e Dois Canos Fumegantes",
    "Title type": "Feature Film",
    "Directors": "Guy Ritchie",
    "You rated": "",
    "IMDb Rating": 8.2,
    "Runtime (mins)": 107,
    "Year": 1998,
    "Genres": "comedy, crime",
<<<<<<< HEAD
    "Num. Votes": 448319,
=======
    "Num. Votes": 449512,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1998-08-23",
    "URL": "http://www.imdb.com/title/tt0120735/"
  },
  {
    "position": 97,
    "const": "tt1942884",
    "created": "Sun Mar 26 12:11:10 2017",
    "modified": "Sun Mar 26 12:11:10 2017",
    "description": "",
    "Title": "Indie Game: The Movie",
    "Title type": "Documentary",
    "Directors": "Lisanne Pajot, James Swirsky",
    "You rated": "",
    "IMDb Rating": 7.7,
    "Runtime (mins)": 94,
    "Year": 2012,
    "Genres": "documentary, drama",
<<<<<<< HEAD
    "Num. Votes": 18728,
=======
    "Num. Votes": 18783,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2012-01-20",
    "URL": "http://www.imdb.com/title/tt1942884/"
  },
  {
    "position": 98,
    "const": "tt0454976",
    "created": "Sun Mar 26 12:11:53 2017",
    "modified": "Sun Mar 26 12:11:53 2017",
    "description": "",
    "Title": "Maradona by Kusturica",
    "Title type": "Documentary",
    "Directors": "Emir Kusturica",
    "You rated": "",
    "IMDb Rating": 6.8,
    "Runtime (mins)": 90,
    "Year": 2008,
    "Genres": "documentary, sport",
<<<<<<< HEAD
    "Num. Votes": 4873,
=======
    "Num. Votes": 4883,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2008-05-20",
    "URL": "http://www.imdb.com/title/tt0454976/"
  },
  {
    "position": 99,
    "const": "tt0100054",
    "created": "Wed Apr  5 20:40:15 2017",
    "modified": "Wed Apr  5 20:40:15 2017",
    "description": "",
    "Title": "O Senhor das Moscas",
    "Title type": "Feature Film",
    "Directors": "Harry Hook",
    "You rated": "",
    "IMDb Rating": 6.4,
    "Runtime (mins)": 90,
    "Year": 1990,
    "Genres": "adventure, drama, thriller",
<<<<<<< HEAD
    "Num. Votes": 23878,
=======
    "Num. Votes": 23957,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "1990-03-16",
    "URL": "http://www.imdb.com/title/tt0100054/"
  },
  {
    "position": 100,
    "const": "tt4606514",
    "created": "Fri Apr  7 17:37:14 2017",
    "modified": "Fri Apr  7 17:37:14 2017",
    "description": "",
    "Title": "Bobby",
    "Title type": "Documentary",
    "Directors": "Ron Scalpello",
    "You rated": "",
    "IMDb Rating": 7,
    "Runtime (mins)": 97,
    "Year": 2016,
    "Genres": "documentary, biography, sport",
<<<<<<< HEAD
    "Num. Votes": 248,
=======
    "Num. Votes": 251,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-05-27",
    "URL": "http://www.imdb.com/title/tt4606514/"
  },
  {
    "position": 101,
    "const": "tt1648190",
    "created": "Thu May  4 16:00:18 2017",
    "modified": "Thu May  4 16:00:18 2017",
    "description": "",
    "Title": "A Torre Negra",
    "Title type": "Feature Film",
    "Directors": "Nikolaj Arcel",
    "You rated": "",
    "IMDb Rating": 6,
    "Runtime (mins)": 95,
    "Year": 2017,
    "Genres": "action, adventure, fantasy, horror, sci_fi, western",
<<<<<<< HEAD
    "Num. Votes": 24539,
=======
    "Num. Votes": 27230,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2017-08-03",
    "URL": "http://www.imdb.com/title/tt1648190/"
  },
  {
    "position": 102,
    "const": "tt1031952",
    "created": "Sun May 28 16:26:07 2017",
    "modified": "Sun May 28 16:26:07 2017",
    "description": "",
    "Title": "Pablo Escobar, ángel o demonio",
    "Title type": "Documentary",
    "Directors": "Jorge Granier",
    "You rated": "",
    "IMDb Rating": 6.6,
    "Runtime (mins)": 87,
    "Year": 2007,
    "Genres": "documentary, drama",
    "Num. Votes": 145,
    "Release Date (month/day/year)": "2007-05-18",
    "URL": "http://www.imdb.com/title/tt1031952/"
  },
  {
    "position": 103,
    "const": "tt5013056",
    "created": "Thu Jul 27 06:49:44 2017",
    "modified": "Thu Jul 27 06:49:44 2017",
    "description": "",
    "Title": "Dunkirk",
    "Title type": "Feature Film",
    "Directors": "Christopher Nolan",
    "You rated": "",
    "IMDb Rating": 8.4,
    "Runtime (mins)": 106,
    "Year": 2017,
    "Genres": "action, drama, history, thriller, war",
<<<<<<< HEAD
    "Num. Votes": 204413,
=======
    "Num. Votes": 216935,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2017-07-13",
    "URL": "http://www.imdb.com/title/tt5013056/"
  },
  {
    "position": 104,
    "const": "tt5700672",
    "created": "Mon Sep  4 06:53:03 2017",
    "modified": "Mon Sep  4 06:53:03 2017",
    "description": "",
    "Title": "Invasão Zumbi",
    "Title type": "Feature Film",
    "Directors": "Sang-ho Yeon",
    "You rated": "",
    "IMDb Rating": 7.5,
    "Runtime (mins)": 118,
    "Year": 2016,
<<<<<<< HEAD
    "Genres": "drama, horror, thriller",
    "Num. Votes": 70742,
=======
    "Genres": "action, drama, horror, thriller",
    "Num. Votes": 72133,
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
    "Release Date (month/day/year)": "2016-05-13",
    "URL": "http://www.imdb.com/title/tt5700672/"
  },
  {
    "position": 105,
    "const": "tt2406566",
    "created": "Mon Sep  4 12:35:24 2017",
    "modified": "Mon Sep  4 12:35:24 2017",
    "description": "",
    "Title": "Atômica",
    "Title type": "Feature Film",
    "Directors": "David Leitch",
    "You rated": "",
    "IMDb Rating": 7.1,
    "Runtime (mins)": 115,
    "Year": 2017,
    "Genres": "action, mystery, thriller",
<<<<<<< HEAD
    "Num. Votes": 33712,
    "Release Date (month/day/year)": "2017-03-12",
    "URL": "http://www.imdb.com/title/tt2406566/"
=======
    "Num. Votes": 36917,
    "Release Date (month/day/year)": "2017-03-12",
    "URL": "http://www.imdb.com/title/tt2406566/"
  },
  {
    "position": 106,
    "const": "tt6293516",
    "created": "Mon Sep 18 06:12:24 2017",
    "modified": "Mon Sep 18 06:12:24 2017",
    "description": "",
    "Title": "Bingo: O Rei das Manhãs",
    "Title type": "Feature Film",
    "Directors": "Daniel Rezende",
    "You rated": "",
    "IMDb Rating": 8.5,
    "Runtime (mins)": 113,
    "Year": 2017,
    "Genres": "biography, comedy, drama",
    "Num. Votes": 968,
    "Release Date (month/day/year)": "2017-08-24",
    "URL": "http://www.imdb.com/title/tt6293516/"
  },
  {
    "position": 107,
    "const": "tt1396484",
    "created": "Mon Sep 18 06:15:16 2017",
    "modified": "Mon Sep 18 06:15:16 2017",
    "description": "",
    "Title": "It: A Coisa",
    "Title type": "Feature Film",
    "Directors": "Andy Muschietti",
    "You rated": "",
    "IMDb Rating": 8,
    "Runtime (mins)": 135,
    "Year": 2017,
    "Genres": "drama, horror, thriller",
    "Num. Votes": 107198,
    "Release Date (month/day/year)": "2017-09-05",
    "URL": "http://www.imdb.com/title/tt1396484/"
>>>>>>> 4fe322f8d7e6a16a55062b64aa18833a377cf072
  }
]

document.getElementById('btnSorteio').addEventListener('click', function(){

	movieChoice = Math.floor(Math.random() * moviesList.length) + 1;
	elem.innerHTML = '<p>' + moviesList[movieChoice]["Title"] + '</p>';
	rating.innerHTML = moviesList[movieChoice]["IMDb Rating"];
	runtime.innerHTML = moviesList[movieChoice]["Runtime (mins)"];
	console.log(moviesList[movieChoice]);
	document.querySelector(".messages").className = "active";
});
