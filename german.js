var DATA = {
    // Kategorien und Wörter
    categories: {
        "🎬 Filme": [
            "Titanic", "Gladiator", "Terminator", "Shrek", "Rocky", "Matrix",
            "Der Pate", "Star Wars", "Jurassic Park", "Forrest Gump",
            "Zurück in die Zukunft", "Der Herr der Ringe", "Pulp Fiction",
            "Avatar", "Harry Potter", "Der König der Löwen", "Barbie", "Oppenheimer",
            "Kevin – Allein zu Haus", "Fluch der Karibik", "Fast & Furious",
            "Die Maske", "E.T.", "Charlie und die Schokoladenfabrik",
            "ES", "Men in Black", "Indiana Jones", "Das Leben ist schön", "Das Boot"
        ],
        "📺 Serien": [
            "Stranger Things", "Dark", "You", "Elite", "Narcos", "The Witcher",
            "Black Mirror", "Haus des Geldes", "Sex Education", "Squid Game",
            "The Office", "Breaking Bad", "Friends", "Game of Thrones", "Die Simpsons",
            "Modern Family", "Malcolm mittendrin", "Tatort",
            "The Walking Dead", "Peaky Blinders", "Grey's Anatomy", "Babylon Berlin"
        ],
        "🦸 Superhelden": [
            "Batman", "Superman", "Spiderman", "Ironman", "Hulk", "Thor",
            "Captain America", "Flash", "Wolverine", "Deadpool", "Doctor Strange",
            "Wonder Woman", "Aquaman", "Black Panther", "Ant-Man",
            "Green Lantern", "Ninja Turtles", "Daredevil"
        ],
        "🎨 Zeichentrick": [
            "Ben 10", "Kim Possible", "Cosmo und Wanda",
            "SpongeBob", "Pokemon", "Dragon Ball", "Avatar", "Teen Titans",
            "Phineas und Ferb", "Courage der feige Hund", "Scooby Doo", "Tom und Jerry",
            "Futurama", "Die Kickers", "Der rosarote Panther", "Garfield",
            "Powerpuff Girls", "Saint Seiya", "Hey Arnold", "Die Sendung mit der Maus"
        ],
        "🏰 Disney Pixar Figuren": [
            "Woody", "Buzz", "Elsa", "Vaiana", "Simba", "Mickey", "Nemo",
            "Shrek", "Mike Glotzkowski", "Lightning McQueen", "Wall-E", "Ratatouille",
            "Herkules", "Mulan", "Stitch", "Minions", "Winnie Puuh",
            "Kung Fu Panda", "Dschinni", "Gru", "Tarzan", "Arielle"
        ],
        "🎮 Videospiele": [
            "Minecraft", "Fortnite", "GTA", "Valorant", "CSGO", "FIFA",
            "League of Legends", "Zelda", "Mario", "Call of Duty", "Pokemon",
            "Roblox", "Among Us", "Candy Crush", "Clash Royale",
            "Pacman", "Tetris", "Mortal Kombat", "Street Fighter",
            "Plants vs Zombies", "Wii Sports", "Die Sims"
        ],
        "🌟 Promis": [
            "Tom Cruise", "Brad Pitt", "Angelina Jolie", "Scarlett Johansson",
            "Leonardo DiCaprio", "Keanu Reeves", "The Rock", "Zendaya",
            "Messi", "Cristiano Ronaldo", "Shakira", "Heidi Klum", "Pedro Pascal",
            "Helene Fischer", "Michael Jackson", "Will Smith", "Elon Musk",
            "Donald Trump", "Arnold Schwarzenegger", "Taylor Swift"
        ],
        "🍽️ Mittagessen / Abendessen": [
            "Spaghetti", "Sushi", "Pizza", "Hamburger", "Lasagne",
            "Hähnchen mit Reis", "Caesar Salad", "Schnitzel", "Bratwurst",
            "Ceviche", "Linseneintopf", "Döner Kebab", "Steak", "Fisch",
            "Brathähnchen", "Currywurst", "Chop Suey", "Pommes Frites", "Hot Dog", "Tacos", "Sauerbraten"
        ],
        "🥨 Snacks": [
            "Salzstangen", "Doritos", "Chips", "Cheetos", "Gummibärchen",
            "Erdnüsse", "Kekse", "Schokolade", "Studentenfutter", "Schokoriegel", "Popcorn", "Nachos", "Brezel", "Pralinen"
        ],
        "🌍 Länder": [
            "Chile", "Argentinien", "Brasilien", "USA", "Spanien",
            "Deutschland", "Japan", "China", "Mexiko", "Peru", "Frankreich",
            "Italien", "Russland", "Kolumbien", "Australien", "Ägypten"
        ],
        "🎒 Im Rucksack": [
            "Heft", "Stift", "Wasserflasche", "Ladegerät", "Laptop",
            "Geldbeutel", "Kapuzenpulli", "Snacks", "Kondome", "Feuerzeug",
            "Mäppchen", "Drogen", "Taschentücher", "Kopfhörer", "Deo",
            "Schminke", "Schmerzmittel", "Schlüssel"
        ],
        "🚽 Im Badezimmer": [
            "Zahnbürste", "Zahnpasta", "Seife", "Handtuch", "Shampoo", "Rasierer",
            "Toilettenpapier", "Deo", "Creme", "Schwamm", "Wachs",
            "Nagelknipser", "Wattestäbchen", "Klostein", "Spülung", "Kacke", "Kamm", "Schmutzwäsche"
        ],
        "🔑 Dinge, die man verliert": [
            "Schlüssel", "Handy", "Geldbeutel", "Rucksack",
            "Pulli", "Ladegerät", "Ring", "Kopfhörer", "Brille",
            "Ausweis", "Geduld", "Socke"
        ],
        "🔊 Dinge, die Geräusche machen": [
            "Glocke", "Hupe", "Alarm", "Türklingel", "Radio", "Bus",
            "Waschmaschine", "Föhn", "Motorrad", "Wasserkocher", "Mixer", "Bohrmaschine",
            "Krankenwagen", "Staubsauger"
        ],
        "®️ Marken": [
            "Nike", "Adidas", "Puma", "Samsung", "Apple", "Sony",
            "CocaCola", "Pepsi", "McDonalds", "KFC", "Toyota", "Volkswagen",
            "BMW", "Mercedes", "Amazon", "Aldi", "Lidl"
        ],
        "👃 Dinge, die man riechen kann": [
            "Blumen", "Parfüm", "Müll", "Hintern", "Achsel", "Füße",
            "Käse", "Furz", "Pipi", "Atem", "Essen",
            "Benzin", "Seife", "Schimmel", "Erbrochenes", "Gras"
        ],
        "👅 Dinge, die man lecken/lutschen kann": [
            "Eis", "Eiswürfel", "Bonbon", "Penis", "Finger",
            "Brüste", "Zitrone", "Löffel", "Strohhalm",
            "Zigarette", "Muschel", "Lutscher"
        ],
        "🏙️ Dinge, die man auf der Straße kauft": [
            "Wasser", "Brezel", "Süßigkeiten", "Pflaster", "Sonnenbrille",
            "Döner", "Bratwurst", "Hot Dog", "Blumen", "Ladekabel",
            "Eis", "Socken", "Crepes"
        ],
        "💊 In der Apotheke": [
            "Paracetamol", "Kondome", "Ibuprofen", "Viagra", "Hustensaft",
            "Windeln", "Creme", "Schwangerschaftstest", "Spritze",
            "Pflaster", "Gleitgel", "Pille", "Shampoo", "Spülung"
        ],
        "🦁 Tiere": [
            "Hund", "Katze", "Elefant", "Löwe", "Giraffe", "Affe",
            "Kuh", "Schwein", "Huhn", "Adler", "Schlange",
            "Krokodil", "Bär", "Hai", "Maus", "Spinne"
        ],
        "🍎 Obst und Gemüse": [
            "Apfel", "Banane", "Orange", "Erdbeere", "Weintraube", "Wassermelone",
            "Ananas", "Avocado", "Zitrone", "Tomate", "Salat", "Kartoffel",
            "Zwiebel", "Mais", "Karotte", "Knoblauch", "Gurke"
        ],
        "👷 Berufe": [
            "Arzt", "Lehrer", "Feuerwehrmann", "Polizist", "Ingenieur", "Koch",
            "Anwalt", "Tierarzt", "Musiker", "Schauspieler", "Zahnarzt",
            "Pilot", "Tischler", "Elektriker", "Soldat", "Mechaniker", "Architekt"
        ],
        "🧠 Menschlicher Körper": [
            "Kopf", "Hand", "Fuß", "Auge", "Mund", "Nase",
            "Haare", "Finger", "Knie", "Po", "Herz", "Bauch",
            "Zunge", "Zahn", "Ohr", "Gehirn", "Lunge", "Leber",
            "Knochen", "Blut", "Ellenbogen", "Hals", "Bauchnabel", "Nagel",
            "Rücken", "Haut", "Augenbraue", "Kehle", "Rippe"
        ],
        "👕 Kleidung": [
            "T-Shirt", "Hose", "Kleid", "Jacke", "Turnschuhe",
            "Socken", "Boxershorts", "Unterwäsche", "Kapuzenpulli", "Brille",
            "Schal", "Mütze", "Badeanzug", "Schlafanzug", "Lederhose", "Dirndl"
        ],
        "🍹 Getränke (Alkohol)": [
            "Bier", "Wein", "Cocktail", "Tequila", "Rum",
            "Whisky", "Gin", "Sangria", "Wodka", "Radler",
            "Sekt", "Jägermeister", "Glühwein"
        ],
        "🔥 Orte zum Liebesspiel": [
            "Bett", "Auto", "Motel", "Badezimmer", "Strand", "Aufzug",
            "Küche", "Sofa", "Zelt", "Pool",
            "Wald", "Dusche", "Whirlpool", "Kino",
            "Umkleidekabine", "Büro", "Boden", "Balkon", "Park"
        ],
        "👻 Dinge, die gruselig sind": [
            "Spinne", "Clown", "Dunkelheit", "Höhe", "Ratte", "Tod",
            "Geist", "Erdbeben", "Kakerlake",
            "Spritze", "Zahnarzt"
        ],
        "🎸 Musikinstrumente": [
            "Gitarre", "Schlagzeug", "Klavier", "Flöte", "Geige", "Trompete",
            "Bass", "Saxophon", "Harfe", "Akkordeon", "Tamburin", "Ukulele",
            "Triangel", "Xylophon", "Rasseln", "Mundharmonika"
        ],
        "🎁 Wichtelgeschenke": [
            "Socken", "Tasse", "Seife", "Kerze", "Schokolade", "Schlüsselanhänger",
            "Deo", "Kalender", "Stift", "Schal", "Creme", "Wein"
        ],
        "🏺 Dinge, die oft kaputt gehen": [
            "Glas", "Handy", "Herz", "Spiegel", "Knochen", "Kondom",
            "Brille", "Teller", "Bildschirm", "Reißverschluss", "Nagel"
        ],
        "🎈 Dinge, die man aufbläst": [
            "Luftballon", "Reifen", "Kondom", "Bauch", "Gummipuppe",
            "Matratze", "Ball", "Lunge", "Schwimmreifen", "Kaugummi",
            "Schlauchboot", "Tüte", "Seifenblase", "Kissen", "Handschuh"
        ],
        "🤥 Ausreden": [
            "Krank", "Kater", "Stau", "Beerdigung", "Erledigungen", "Arzt",
            "Internet weg", "Stromausfall", "Verschlafen", "Kein Bock", "Zugverspätung"
        ],
        "🛏️ Unter dem Bett": [
            "Socke", "Fussel", "Münze", "Spinne", "Benutztes Kondom",
            "Schuh", "Staub", "Spielzeug", "Flasche", "Monster", "Unterwäsche"
        ],
        "🫣 Dinge, die man heimlich tut": [
            "Rauchen", "Weinen", "Essen", "Klauen", "Masturbieren", "Kacken",
            "Handy von anderen checken", "Popeln", "Schlafen"
        ],
        "🧹 Hausarbeit": [
            "Abwaschen", "Bügeln", "Fegen", "Kochen", "Bett machen",
            "Müll rausbringen", "Bad putzen", "Gießen", "Fenster putzen", "Staubsaugen"
        ],
        "⚽ Sportarten": [
            "Fußball", "Basketball", "Tennis", "Schwimmen", "Volleyball",
            "Boxen", "Golf", "Rugby", "Leichtathletik", "Padel",
            "Turnen", "Karate", "Tischtennis", "Surfen", "Radfahren",
            "Formel 1", "Eislaufen", "Klettern", "Baseball", "Skifahren", "Krafttraining", "Wandern"
        ],
        "🎶 Musikstile": [
            "Reggaeton", "Rock", "Pop", "Schlager", "Techno",
            "Hip Hop", "Klassik", "Jazz", "Metal", "Bachata",
            "Salsa", "Trap", "K-Pop", "Country", "Volksmusik",
            "Oper", "Punk", "Blues", "Disco", "Merengue",
            "Tango", "Ballade", "Reggae"
        ],
        "🛋️ Möbel & Geräte": [
            "Sofa", "Bett", "Tisch", "Stuhl", "Fernseher", "Kühlschrank",
            "Waschmaschine", "Mikrowelle", "Heizung", "Ventilator", "Lampe",
            "Spiegel", "Nachttisch", "Schreibtisch", "Regal", "Ofen", "Bügeleisen"
        ],
        "🏞️ Natur & Landschaft": [
            "Berg", "Strand", "Wald", "Wüste", "Vulkan", "Fluss",
            "See", "Schnee", "Regen", "Sonne", "Mond", "Wolke",
            "Regenbogen", "Baum", "Blume", "Wasserfall", "Meer", "Insel"
        ],
        "🏢 Orte in der Stadt": [
            "Park", "Einkaufszentrum", "Supermarkt", "Schule", "Krankenhaus", "Polizei",
            "Kino", "Stadion", "Kirche", "Bank", "Apotheke", "Flughafen",
            "Friedhof", "Fitnessstudio", "Restaurant", "Bibliothek", "Club", "Spielplatz"
        ],
        "🥤 Getränke": [
            "Coca Cola", "Fanta", "Sprite", "Orangensaft", "Limonade", "Pepsi",
            "Wasser", "Saft", "Milch", "Kaffee", "Tee", "Mate",
            "Bier", "Wein", "Spezi", "Milchshake", "Apfelschorle",
            "Red Bull", "Energy Drink", "Eistee", "Whisky",
            "Rum", "Gin", "Kakao"
        ],
        "🚗 Fahrzeuge": [
            "Auto", "Bus", "Motorrad", "Fahrrad", "Flugzeug", "Schiff",
            "Zug", "Hubschrauber", "LKW", "Skateboard", "Roller",
            "U-Boot", "Taxi", "Straßenbahn", "Transporter", "Krankenwagen",
            "Inlineskates", "Traktor", "Kran"
        ]
    },

    // UI Texte
    ui: {
        configTitle: 'Spielkonfiguration',
        langSelectLabel: 'Sprache:',
        numPlayersLabel: 'Anzahl Spieler (min 3):',
        numImpostorsLabel: 'Anzahl Impostor (min 1):',
        playerPlaceholder: 'Spieler',
        confirmButton: 'Spieler bestätigen',

        categoryTitle: 'Wähle eine Kategorie',
        randomCategory: 'Zufällige Kategorie',
        backToConfig: '← Zurück (Spieler)',

        gameTitle: 'Wer hat das Wort?',
        gameSubText: 'Tippe auf deinen Namen, um dein Wort zu sehen. Zeig es niemandem!',
        categoryLabel: 'Kategorie',
        backToCategories: '← Zurück (Kategorien)',

        wordTitle: 'Dein Wort ist:',
        impostorText: 'DU BIST DER IMPOSTOR',
        hideButton: 'Verstecken & Zurück',

        minPlayersAlert: 'Es werden mindestens 3 Spieler benötigt.',
        impostorAlert: 'Es muss mindestens einen Spieler geben, der kein Impostor ist!',
        impostorMinAlert: 'Es muss mindestens 1 Impostor geben.'
    }
};