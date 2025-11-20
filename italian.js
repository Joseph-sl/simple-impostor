var DATA = {
    // Categorie e parole
    categories: {
        "🎬 Film": [
            "Titanic", "Il Gladiatore", "Terminator", "Shrek", "Rocky", "Matrix",
            "Il Padrino", "Star Wars", "Jurassic Park", "Forrest Gump",
            "Ritorno al Futuro", "Il Signore degli Anelli", "Pulp Fiction",
            "Avatar", "Harry Potter", "Il Re Leone", "Barbie", "Oppenheimer",
            "Mamma, ho perso l'aereo", "Pirati dei Caraibi", "Fast & Furious",
            "The Mask", "E.T.", "La Fabbrica di Cioccolato",
            "IT", "Men in Black", "Indiana Jones", "La Vita è Bella"
        ],
        "📺 Serie TV": [
            "Stranger Things", "Dark", "You", "Élite", "Narcos", "The Witcher",
            "Black Mirror", "La Casa di Carta", "Sex Education", "Squid Game",
            "The Office", "Breaking Bad", "Friends", "Il Trono di Spade", "I Simpson",
            "Modern Family", "Malcolm", "Don Matteo",
            "The Walking Dead", "Peaky Blinders", "Grey's Anatomy", "Mare Fuori"
        ],
        "🦸 Supereroi": [
            "Batman", "Superman", "Spiderman", "Ironman", "Hulk", "Thor",
            "Captain America", "Flash", "Wolverine", "Deadpool", "Doctor Strange",
            "Wonder Woman", "Aquaman", "Black Panther", "Ant-Man",
            "Lanterna Verde", "Tartarughe Ninja", "Daredevil"
        ],
        "🎨 Cartoni Animati": [
            "Ben 10", "Kim Possible", "Due Fantagenitori",
            "SpongeBob", "Pokemon", "Dragon Ball", "Avatar", "Teen Titans",
            "Phineas e Ferb", "Leone il cane fifone", "Scooby Doo", "Tom & Jerry",
            "Futurama", "Holly e Benji", "La Pantera Rosa", "Garfield",
            "Le Superchicche", "I Cavalieri dello Zodiaco", "Hey Arnold", "Winx Club"
        ],
        "🏰 Personaggi Disney Pixar": [
            "Woody", "Buzz", "Elsa", "Oceania (Moana)", "Simba", "Topolino", "Nemo",
            "Shrek", "Mike Wazowski", "Saetta McQueen", "Wall-E", "Ratatouille",
            "Hercules", "Mulan", "Stitch", "Minions", "Winnie the Pooh",
            "Kung Fu Panda", "Il Genio", "Cattivissimo Me", "Tarzan", "La Sirenetta"
        ],
        "🎮 Videogiochi": [
            "Minecraft", "Fortnite", "GTA", "Valorant", "CSGO", "FIFA",
            "League of Legends", "Zelda", "Super Mario", "Call of Duty", "Pokemon",
            "Roblox", "Among Us", "Candy Crush", "Clash Royale",
            "Pacman", "Tetris", "Mortal Kombat", "Street Fighter",
            "Plants vs Zombies", "Wii Sports", "Assassin's Creed"
        ],
        "🌟 Celebrità": [
            "Tom Cruise", "Brad Pitt", "Angelina Jolie", "Scarlett Johansson",
            "Leonardo DiCaprio", "Keanu Reeves", "The Rock", "Zendaya",
            "Messi", "Cristiano Ronaldo", "Shakira", "Måneskin", "Pedro Pascal",
            "Chiara Ferragni", "Michael Jackson", "Will Smith", "Elon Musk",
            "Donald Trump", "Vasco Rossi", "Laura Pausini", "Taylor Swift"
        ],
        "🍽️ Pranzo / Cena": [
            "Spaghetti alla Carbonara", "Sushi", "Pizza Margherita", "Hamburger", "Lasagna",
            "Risotto", "Insalata Cesare", "Bistecca alla Fiorentina", "Pollo Arrosto",
            "Ceviche", "Lenticchie", "Parmigiana", "Tiramisù", "Pesce Fritto",
            "Gnocchi", "Piadina", "Pasta al Pesto", "Patatine Fritte", "Arancino", "Tacos", "Ossobuco"
        ],
        "🥨 Snack": [
            "Taralli", "Patatine", "Focaccia", "Biscotti", "Caramelle Gommose",
            "Arachidi", "Cioccolato", "Nutella", "Popcorn", "Nachos", "Gelato", "Cornetto"
        ],
        "🌍 Paesi": [
            "Cile", "Argentina", "Brasile", "Stati Uniti", "Spagna",
            "Germania", "Giappone", "Cina", "Messico", "Perù", "Francia",
            "Italia", "Russia", "Colombia", "Australia", "Egitto"
        ],
        "🎒 Nello Zaino": [
            "Quaderno", "Penna", "Borraccia", "Caricabatterie", "Computer",
            "Portafoglio", "Felpa", "Merenda", "Preservativi", "Accendino",
            "Astuccio", "Fazzoletti", "Cuffie", "Deodorante",
            "Trucchi", "Tachipirina", "Chiavi"
        ],
        "🚽 In Bagno": [
            "Spazzolino", "Dentifricio", "Sapone", "Asciugamano", "Shampoo", "Rasoio",
            "Carta Igienica", "Deodorante", "Crema", "Spugna", "Ceretta",
            "Tagliaunghie", "Cotton fioc", "Bidet", "Balsamo", "Cacca", "Pettine"
        ],
        "🔑 Oggetti che puoi perdere": [
            "Chiavi", "Cellulare", "Portafoglio", "Zaino",
            "Felpa", "Caricabatterie", "Anello", "Cuffie", "Occhiali",
            "Carta d'Identità", "Pazienza", "Calzino"
        ],
        "🔊 Cose che fanno rumore": [
            "Campana", "Clacson", "Sveglia", "Campanello", "Radio", "Autobus",
            "Lavatrice", "Asciugacapelli", "Moto", "Bollitore", "Frullatore", "Trapano",
            "Ambulanza", "Aspirapolvere"
        ],
        "®️ Marche": [
            "Nike", "Adidas", "Puma", "Samsung", "Apple", "Sony",
            "CocaCola", "Pepsi", "McDonalds", "Ferrari", "Fiat", "Gucci",
            "Ferrero", "Barilla", "Amazon", "Armani"
        ],
        "👃 Cose che puoi annusare": [
            "Fiori", "Profumo", "Spazzatura", "Sedere", "Ascella", "Piedi",
            "Formaggio", "Peto", "Pipì", "Alito", "Cibo",
            "Benzina", "Sapone", "Muffa", "Vomito", "Erba"
        ],
        "👅 Cose che puoi leccare/succhiare": [
            "Gelato", "Ghiaccio", "Caramella", "Pene", "Dito",
            "Seno", "Limone", "Cucchiaio", "Cannuccia",
            "Sigaretta", "Lecca-lecca", "Ghiacciolo"
        ],
        "🏙️ Cose vendute per strada": [
            "Acqua", "Castagne", "Panini", "Souvenir", "Occhiali da sole",
            "Kebab", "Dolci", "Hot Dog", "Fiori", "Caricabatterie",
            "Gelato", "Calzini", "Pizza al taglio"
        ],
        "💊 In Farmacia": [
            "Tachipirina", "Preservativi", "Ibuprofene", "Viagra", "Sciroppo",
            "Pannolini", "Crema", "Test di gravidanza", "Siringa",
            "Cerotti", "Lubrificante", "Pillola anticoncezionale", "Shampoo", "Integratori"
        ],
        "🦁 Animali": [
            "Cane", "Gatto", "Elefante", "Leone", "Giraffa", "Scimmia",
            "Mucca", "Maiale", "Gallina", "Aquila", "Serpente",
            "Coccodrillo", "Orso", "Squalo", "Topo", "Ragno"
        ],
        "🍎 Frutta e Verdura": [
            "Mela", "Banana", "Arancia", "Fragola", "Uva", "Anguria",
            "Ananas", "Avocado", "Limone", "Pomodoro", "Lattuga", "Patata",
            "Cipolla", "Mais", "Carota", "Aglio", "Basilico"
        ],
        "👷 Professioni": [
            "Dottore", "Insegnante", "Vigile del Fuoco", "Poliziotto", "Ingegnere", "Chef",
            "Avvocato", "Veterinario", "Musicista", "Attore", "Dentista",
            "Pilota", "Falegname", "Elettricista", "Soldato", "Meccanico", "Architetto"
        ],
        "🧠 Corpo Umano": [
            "Testa", "Mano", "Piede", "Occhio", "Bocca", "Naso",
            "Capelli", "Dito", "Ginocchio", "Sedere", "Cuore", "Pancia",
            "Lingua", "Dente", "Orecchio", "Cervello", "Polmone", "Fegato",
            "Osso", "Sangue", "Gomito", "Collo", "Ombelico", "Unghia",
            "Schiena", "Pelle", "Sopracciglio", "Gola"
        ],
        "👕 Abbigliamento": [
            "Maglietta", "Pantaloni", "Vestito", "Giacca", "Scarpe da ginnastica",
            "Calzini", "Mutande", "Reggiseno", "Felpa", "Occhiali",
            "Sciarpa", "Cappello", "Costume da bagno", "Pigiama"
        ],
        "🍹 Bevande (Alcoliche)": [
            "Spritz", "Birra", "Vino", "Negroni", "Tequila", "Rum",
            "Whisky", "Gin", "Prosecco", "Vodka", "Limoncello",
            "Champagne", "Amaro"
        ],
        "🔥 Luoghi per fare l'amore": [
            "Letto", "Macchina", "Motel", "Bagno", "Spiaggia", "Ascensore",
            "Cucina", "Divano", "Tenda", "Piscina",
            "Bosco", "Doccia", "Jacuzzi", "Cinema",
            "Camerino", "Ufficio", "Pavimento", "Balcone", "Parco"
        ],
        "👻 Cose che fanno paura": [
            "Ragno", "Pagliaccio", "Buio", "Altezza", "Topo", "Morte",
            "Fantasma", "Terremoto", "Scarafaggio",
            "Iniezione", "Dentista"
        ],
        "🎸 Strumenti Musicali": [
            "Chitarra", "Batteria", "Pianoforte", "Flauto", "Violino", "Tromba",
            "Basso", "Sassofono", "Arpa", "Fisarmonica", "Tamburello", "Ukulele",
            "Triangolo", "Xilofono", "Maracas", "Armonica"
        ],
        "🎁 Regali Secret Santa": [
            "Calzini", "Tazza", "Sapone", "Candela", "Cioccolato", "Portachiavi",
            "Deodorante", "Agenda", "Penna", "Sciarpa", "Crema", "Vino"
        ],
        "🏺 Cose che si rompono spesso": [
            "Bicchiere", "Cellulare", "Cuore", "Specchio", "Osso", "Preservativo",
            "Occhiali", "Piatto", "Schermo", "Cerniera", "Unghia"
        ],
        "🎈 Cose che si gonfiano": [
            "Palloncino", "Ruota", "Preservativo", "Pancia", "Bambola gonfiabile",
            "Materasso", "Palla", "Polmone", "Salvagente", "Gomma da masticare",
            "Gommone", "Busta", "Bolla", "Cuscino"
        ],
        "🤥 Scuse per non andare": [
            "Malato", "Postumi sbronza", "Traffico", "Funerale", "Commissioni", "Medico",
            "Internet non va", "Niente corrente", "Mi sono addormentato", "Pigrizia"
        ],
        "🛏️ Sotto il letto": [
            "Calzino", "Pelucchi", "Moneta", "Ragno", "Preservativo usato",
            "Scarpa", "Polvere", "Giocattolo", "Bottiglia", "Mostro", "Mutande"
        ],
        "🫣 Cose fatte di nascosto": [
            "Fumare", "Piangere", "Mangiare", "Rubare", "Masturbarsi", "Fare la cacca",
            "Controllare il telefono altrui", "Mettersi le dita nel naso", "Dormire"
        ],
        "🧹 Faccende di casa": [
            "Lavare i piatti", "Stirare", "Spazzare", "Cucinare", "Fare il letto",
            "Buttare la spazzatura", "Pulire il bagno", "Annaffiare", "Pulire i vetri"
        ],
        "⚽ Sport": [
            "Calcio", "Basket", "Tennis", "Nuoto", "Pallavolo",
            "Pugilato", "Golf", "Rugby", "Atletica", "Padel",
            "Ginnastica", "Karate", "Ping Pong", "Surf", "Ciclismo",
            "Formula 1", "Pattinaggio", "Arrampicata", "Baseball", "Sci", "Palestra"
        ],
        "🎶 Generi Musicali": [
            "Reggaeton", "Rock", "Pop", "Latino", "Elettronica",
            "Hip Hop", "Classica", "Jazz", "Metal", "Bachata",
            "Salsa", "Trap", "K-Pop", "Liscio", "Folk",
            "Opera", "Punk", "Blues", "Disco", "Indie",
            "Tango", "Ballata", "Reggae"
        ],
        "🛋️ Mobili ed Elettrodomestici": [
            "Divano", "Letto", "Tavolo", "Sedia", "TV", "Frigorifero",
            "Lavatrice", "Microonde", "Termosifone", "Ventilatore", "Lampada",
            "Specchio", "Comodino", "Scrivania", "Libreria", "Forno", "Ferro da stiro"
        ],
        "🏞️ Natura e Paesaggi": [
            "Montagna", "Spiaggia", "Bosco", "Deserto", "Vulcano", "Fiume",
            "Lago", "Neve", "Pioggia", "Sole", "Luna", "Nuvola",
            "Arcobaleno", "Albero", "Fiore", "Cascata", "Mare", "Isola"
        ],
        "🏢 Luoghi della Città": [
            "Piazza", "Centro Commerciale", "Supermercato", "Scuola", "Ospedale", "Polizia",
            "Cinema", "Stadio", "Chiesa", "Banca", "Farmacia", "Aeroporto",
            "Cimitero", "Palestra", "Ristorante", "Biblioteca", "Discoteca", "Parco"
        ],
        "🥤 Bevande": [
            "Coca Cola", "Aranciata", "Sprite", "Succo d'arancia", "Limonata", "Pepsi",
            "Acqua", "Succo", "Latte", "Caffè", "Tè", "Estathé",
            "Birra", "Vino", "Spritz", "Frappè", "Prosecco",
            "Red Bull", "Energy Drink", "Tè freddo", "Whisky",
            "Rum", "Gin", "Cioccolata Calda", "Cappuccino"
        ],
        "🚗 Veicoli": [
            "Macchina", "Autobus", "Moto", "Bicicletta", "Aereo", "Nave",
            "Treno", "Elicottero", "Camion", "Skateboard", "Monopattino",
            "Sottomarino", "Taxi", "Vespa", "Furgone", "Ambulanza",
            "Pattini", "Trattore", "Gru"
        ]
    },

    // UI
    ui: {
        configTitle: 'Configurazione Gioco',
        langSelectLabel: 'Lingua:',
        numPlayersLabel: 'Numero di Giocatori (min 3):',
        numImpostorsLabel: 'Numero di Impostori (min 1):',
        playerPlaceholder: 'Giocatore',
        confirmButton: 'Conferma Giocatori',

        categoryTitle: 'Scegli una Categoria',
        randomCategory: 'Categoria Casuale',
        backToConfig: '← Indietro (Giocatori)',

        gameTitle: 'Chi ha la parola?',
        gameSubText: 'Tocca il tuo nome per vedere la parola. Non farla vedere a nessuno!',
        categoryLabel: 'Categoria',
        backToCategories: '← Indietro (Categorie)',

        wordTitle: 'la tua parola è:',
        impostorText: 'SEI L\'IMPOSTORE',
        hideButton: 'Nascondi e Ritorna',

        minPlayersAlert: 'Servono almeno 3 giocatori.',
        impostorAlert: 'Ci deve essere almeno un giocatore che non sia impostore!',
        impostorMinAlert: 'Il numero di impostori deve essere almeno 1.'
    }
};