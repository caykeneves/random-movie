var elem = document.getElementById('nomeFilme');
var thumb = document.getElementById('movieThumb');
var movieChoice; 
var moviesList = [

 movie = { name: "Birdman",	image: "images/birdman.jpg" },
 movie2 = {	name: "Pulp Fiction",	image: "images/pulp-fiction.jpg" },
 movie3 = {	name: "Scarface",	image: "images/scarface.jpg" },
 movie4 = { name: "2001 - Uma Odisséia no Espaço", image: "images/2001.jpg" }, 
 movie5 = { name: "Argo", image: "images/argo.jpg" },
 /*movie6 = { name: 'Beasts of no Nation', image: 'images/beasts.jpg' },*/
 movie7 = { name: "Blade Runner", image: 'images/blade-runner.jpg'},
 movie8 = { name: "Cartas de Iwo Jima", image: "images/iwo-jima.jpg"},
 movie9 = { name: "Cisne Negro", image: "images/cisne-negro.jpg"},
 movie10 = { name: "Depois de Lúcia", image: "images/depois-de-lucia.jpg"},
 movie11 = { name: "Era uma vez no Oeste", image: "images/era-uma-vez-no-oeste.jpg" },
 movie12 = { name: "Brilho Eterno de Uma Mente Sem Lembranças", image: "images/brilho-eterno.jpg"},
 movie13 = { name: "Gattaca", image: "images/gattaca.jpg"},
 movie14 = { name: "Godzilla", image: "images/godzilla.jpg"},
 movie15 = { name: "Interestellar", image: "images/interestellar.jpg"},
 movie16 = { name: "Invictus", image: "images/invictus.jpg"},
 movie17 = { name: "Johnny & June", image: "images/johnny-june.jpg"},
 movie18 = { name: "Pequena Miss Sunchine", image: "images/miss-sunchine.jpg"},
 movie19 = { name: "Mississipi em Chamas", image: "images/mississipi-burnin.jpg"},
 movie20 = { name: "Moneyball", image: "images/moneyball.jpg"},
 movie21 = { name: "Mr. Nobody", image: "images/mr-nobody.jpg"},
 movie22 = { name: "Munich", image: "images/munich.jpg"},
 movie23 = { name: "O Espetacular Homem Aranha", image: "images/espetacular-homem-aranha.jpg"},
 movie24 = { name: "O Iluminado", image: "images/o-iluminado.jpg"},
 movie25 = { name: "O Lugar Onde Tudo Termina", image: "images/o-lugar-onde-tudo-termina.jpg"},
 movie26 = { name: "O Poderoso Chefão", image: "images/the-godfather.jpg"},
 movie27 = { name: "O Poderoro Chefão 2", image: "images/the-godfather-2.jpg"},
 movie28 = { name: "The Professional", image: "images/the-professional.jpg"},
 movie29 = { name: "Senhor das Armas", image: "images/senhor-das-armas.jpg"},
 movie30 = { name: "O Silêncio dos Inocentes", image: "images/silencio-inocentes.jpg"},
 movie31 = { name: "O Sol é Para Todos", image: "images/o-sol-e-para-todos.jpg"},
 movie32 = { name: "Pacific Rim", image: "images/pacific-rim.jpg"},
 movie33 = { name: "Particle Fever", image: "images/particle-fever.jpg"},
 movie34 = { name: "Perdido em Marte", image: "images/perdido-em-marte.jpg"},
 movie35 = { name: "Piratas do Vale do Silício", image: "images/piratas-do-vale-do-silicio.jpg"},
 movie36 = { name: "Por um Punhado de Dólares", image: "images/por-um-punhado-de-dolares.jpg"},
 movie37 = { name: "Prometheus", image: "images/prometheus.jpg"},
 movie38 = { name: "Psicose", image: "images/psicose.jpg"},
 movie39 = { name: "Rain Man", image: "images/rain-man.jpg"},
 movie40 = { name: "Expresso do Amanhã", image: "images/expresso-do-amanha.jpg"},
 movie41 = { name: "Se7en", image: "images/seven.jpg"},
 movie42 = { name: "As Sufragistas", image: "images/sufragistas.jpg"},
 movie43 = { name: "Taxi Driver", image: "images/taxi-driver.jpg"},
 movie44 = { name: "Tempo de Despertar", image: "images/tempo-de-despertar.jpg"},
 movie45 = { name: "Três Homens em Conflito", image: "images/tres-homens-em-conflito.jpg"},
 movie46 = { name: "Touro Indomável", image: "images/touro-indomavel.jpg"},
 movie47 = { name: "Um Estranho no Ninho", image: "images/um-estranho-no-ninho.jpg"},
 movie48 = { name: "Um Sonho de Liberdade", image: "images/um-sonho-de-liberdade.jpg"},
 movie49 = { name: "Cavalo de Guerra", image: "images/cavalo-de-guerra.jpg"},
 movie50 = { name: "Zodiaco", image: "images/zodiaco.jpg"},
 movie51 = { name: "Nebraska", image: "images/nebraska.jpg"},
 movie52 = { name: "Um Conto Chinês", image: "images/um-conto-chines.jpg"},
 movie53 = { name: "Filhos da Esperança", image: "images/filhos-da-esperanca.jpg"},
 movie54 = { name: "Guerra Mundial Z", image: "images/guerra-mundial-z.jpg"},
 movie55 = { name: "Sin City", image: "images/sin-city.jpg"},
 movie56 = { name: "Laranja Mecânica", image: "images/laranja-mecanica.jpg"},
 movie57 = { name: "Fury", image: "images/fury.jpg"},
 movie58 = { name: "Guerra ao Terror", image: "images/guerra-ao-terror.jpg"},
 movie59 = { name: "O Regresso", image: "images/o-regresso.jpg"},
 movie60 = { name: "Sicário", image: "images/sicario.jpg"},
 movie61 = { name: "Concussion", image: "images/concussion.jpg"},
 movie62 = { name: "V de Vingança", image: "images/v-de-vinganca.jpg"},
 movie63 = { name: "O Lobo de Wall Street", image: "images/logo-de-wall-street.jpg"},
 movie64 = { name: "Aliança do Crime", image: "images/alianca-do-crime.jpg"},
 movie65 = { name: "Everest", image: "images/everest.jpg"},
 movie66 = { name: "A Grande Aposta", image: "images/a-grande-aposta.jpg"},
 movie67 = { name: "Ponte dos Espiões", image: "images/ponte-dos-espioes.jpg"},
 movie68 = { name: "Brooklyn", image: "images/brooklyn.jpg"},
 movie69 = { name: "A Garota Dinamarquesa", image: "images/danish-girl.jpg"},
 movie70 = { name: "Carol", image: "images/carol.jpg"},
 movie71 = { name: "Creed", image: "images/creed.jpg"},
 movie72 = { name: "Goodfellas", image: "images/goodfellas.jpg"},
 // movie73 = { name: "Ex-Machina", image: "images/ex-machina.jpg"},
 // movie74 = { name: "Os Oito Odiados", image: "images/os-oito-odiados.jpg"},
 movie75 = { name: "Vertigo", image: "images/vertigo.jpg"},
 movie76 = { name: "Por uns Dólares a Mais", image: "images/por-uns-dolares-a-mais.jpg"},
 movie77 = { name: "Kill Bill: Volume 1", image: "images/kill-bill-vol1.jpg"},
 movie78 = { name: "Dead Zone", image: "images/dead-zone.jpg"},
 movie79 = { name: "Mr. Vingança", image: "images/mr-vinganca.jpg"},
 movie80 = { name: "Lady Vingança", image: "images/lady-vinganca.jpg"},
 movie81 = { name: "Amadeus", image: "images/amadeus.jpg"},
 movie82 = { name: "Ringu", image: "images/ringu.jpg"},
 movie83 = { name: "Fogo Contra Fogo", image: "images/fogo-contra-fogo.jpg"},
 // movie84 = { name: "O Predestinado", image: "images/o-predestinado.jpg"},
 movie85 = { name: "Manchester à Beira-Mar", image: "images/manchester-a-beira-mar.jpg"},
 movie86 = { name: "Animais Noturnos", image: "images/animais-noturnos.jpg"},
 movie87 = { name: "Conexão Escobar", image: "images/conexao-escobar.jpg"},
 movie88 = { name: "La La Land", image: "images/la-la-land.jpg"},
 movie89 = { name: "Lion", image: "images/lion.jpg"},
 movie90 = { name: "A Qualquer Custo", image: "images/a-qualquer-custo.jpg"},
 movie91 = { name: "Estrelas Além do Tempo", image: "images/estrelas-alem-do-tempo.jpg"},
 movie92 = { name: "Até o Último Homem", image: "images/ate-o-ultimo-homem.jpg"},
 movie93 = { name: "O.J.: Made in America", image: "images/oj.jpg"},
 movie94 = { name: "T2 Trainspotting", image: "images/t2.jpg"},
 movie95 = { name: "Nocaute", image: "images/nocaute.jpg"},
 movie96 = { name: "Invencível", image: "images/invencivel.jpg"},
 movie97 = { name: "O Fabuloso Destino de Amélie Poulain", image: "images/amelie.jpg"},
 movie98 = { name: "Horizonte Profundo: Desastre no Golfo", image: "images/horizonte-profundo.jpg"},
 movie99 = { name: "Armas na Mesa", image: "images/armas-na-mesa.jpg"},
 movie100 = { name: "Silêncio", image: "images/silencio.jpg"},
 movie101 = { name: "O Apartamento", image: "images/o-apartamento.jpg"},
 movie102 = { name: "Terra de Minas", image: "images/terra-de-minas.jpg"},
 // movie103 = { name: "Florence: Quem é Essa Mulher?", image: "images/florence.jpg"},
 movie104 = { name: "A Tartaruga Vermeelha", image: "images/a-tartaruga-vermelha.jpg"},
 movie105 = { name: "Toni Erdmann", image: "images/toni-erdman.jpg"},
 movie106 = { name: "Biutiful", image: "images/biutiful.jpg"},
 movie107 = { name: "O Expresso da Meia-Noite", image: "images/expresso-da-meia-noite.jpg"},
 movie108 = { name: "Senna", image: "images/senna.jpg"},
 movie109 = { name: "Watchmen", image: "images/watchmen.jpg"},
 movie110 = { name: "Os Suspeitos", image: "images/os-suspeitos.jpg"},
 movie111 = { name: "O Voo", image: "images/o-voo.jpg"},
 movie112 = { name: "Jogos, Trapaças e Dois Canos Fumegantes", image: "images/lock-stock.jpg"},
 movie113 = { name: "Chamas da Vingança", image: "images/chamas-da-vinganca.jpg"},
 movie114 = { name: "O Grande Mestre", image: "images/o-grande-mestre.jpg"},
 movie115 = { name: "Um Ato de Liberdade", image: "images/um-ato-de-liberdade.jpg"},
 movie116 = { name: "A Informante", image: "images/a-informante.jpg"},
 movie117 = { name: "Castelo de Areia", image: "images/castelo-de-areia.jpg"},
 movie118 = { name: "Indie Game: The Movie", image: "images/indie-game.jpg"},
 movie119 = { name: "Maradona by Kusturica", image: "images/maradona.jpg"},
 // movie120 = { name: "Team Foxcatcher", image: "images/team-foxcatcher.jpg"},
 movie121 = { name: "Jackie", image: "images/jackie.jpg"},
 movie122 = { name: "O Senhor das Moscas", image: "images/senhor-das-moscas.jpg"},
 movie123 = { name: "Bobby", image: "images/bobby.jpg"},
 movie124 = { name: "Deep Web", image: "images/deep-web.jpg"},
 movie125 = { name: "12 de Junho de 93 - O Dia da Paixão Palmeirense", image: "images/paixao-palmeirense.jpg"},
 movie126 = { name: "A Torre Negra", image: "images/torre-negra.jpg"},
 movie127 = { name: "Pablo Escobar, Anjo ou Demônio", image: "images/pablo-escobar.jpg"}

]

document.getElementById('btnSorteio').addEventListener('click', function(){
	movieChoice = Math.floor(Math.random() * moviesList.length) + 1;
	elem.innerHTML = '<p>' + moviesList[movieChoice].name + '</p>';
	thumb.innerHTML = '<img src="' + moviesList[movieChoice].image + '">'
});
