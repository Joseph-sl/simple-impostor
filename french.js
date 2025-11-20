var DATA = {
    // Catégories et mots
    categories: {
        "🎬 Films": [
            "Titanic", "Gladiator", "Terminator", "Shrek", "Rocky", "Matrix",
            "Le Parrain", "Star Wars", "Jurassic Park", "Forrest Gump",
            "Retour vers le Futur", "Le Seigneur des Anneaux", "Pulp Fiction",
            "Avatar", "Harry Potter", "Le Roi Lion", "Barbie", "Oppenheimer",
            "Maman, j'ai raté l'avion", "Pirates des Caraïbes", "Fast & Furious",
            "The Mask", "E.T.", "Charlie et la Chocolaterie",
            "Ça (IT)", "Men in Black", "Indiana Jones", "La Vie est Belle", "Amélie Poulain", "Intouchables"
        ],
        "📺 Séries TV": [
            "Stranger Things", "Dark", "You", "Elite", "Narcos", "The Witcher",
            "Black Mirror", "La Casa de Papel", "Sex Education", "Squid Game",
            "The Office", "Breaking Bad", "Friends", "Game of Thrones", "Les Simpson",
            "Modern Family", "Malcolm", "Dix pour cent",
            "The Walking Dead", "Peaky Blinders", "Grey's Anatomy", "Lupin"
        ],
        "🦸 Super-héros": [
            "Batman", "Superman", "Spiderman", "Ironman", "Hulk", "Thor",
            "Captain America", "Flash", "Wolverine", "Deadpool", "Doctor Strange",
            "Wonder Woman", "Aquaman", "Black Panther", "Ant-Man",
            "Green Lantern", "Tortues Ninja", "Daredevil", "Astérix"
        ],
        "🎨 Dessins Animés": [
            "Ben 10", "Kim Possible", "Danny Fantôme", "Mes parrains sont magiques",
            "Bob l'éponge", "Pokemon", "Dragon Ball", "Avatar", "Teen Titans",
            "Phineas et Ferb", "Courage le chien froussard", "Billy et Mandy", "Scooby Doo", "Tom et Jerry",
            "Futurama", "Olive et Tom", "La Panthère Rose", "Garfield",
            "Les Super Nanas", "Les Chevaliers du Zodiaque", "Hé Arnold", "Titeuf"
        ],
        "🏰 Personnages Disney Pixar": [
            "Woody", "Buzz", "Elsa", "Vaiana", "Simba", "Mickey", "Nemo",
            "Shrek", "Bob Razowski", "Flash McQueen", "Wall-E", "Ratatouille",
            "Hercule", "Mulan", "Stitch", "Les Minions", "Winnie l'Ourson",
            "Kung Fu Panda", "Le Génie", "Gru", "Tarzan", "La Petite Sirène"
        ],
        "🎮 Jeux Vidéo": [
            "Minecraft", "Fortnite", "GTA", "Valorant", "CSGO", "FIFA",
            "League of Legends", "Zelda", "Mario", "Call of Duty", "Pokemon",
            "Roblox", "Among Us", "Candy Crush", "Clash Royale",
            "Pacman", "Tetris", "Mortal Kombat", "Street Fighter",
            "Plantes contre Zombies", "Wii Sports", "Les Sims", "Dofus"
        ],
        "🌟 Célébrités": [
            "Tom Cruise", "Brad Pitt", "Angelina Jolie", "Scarlett Johansson",
            "Leonardo DiCaprio", "Keanu Reeves", "The Rock", "Zendaya",
            "Messi", "Cristiano Ronaldo", "Shakira", "Kylian Mbappé", "Pedro Pascal",
            "Zinedine Zidane", "Michael Jackson", "Will Smith", "Elon Musk",
            "Donald Trump", "Céline Dion", "David Guetta", "Taylor Swift"
        ],
        "🍽️ Déjeuner / Dîner": [
            "Spaghetti", "Sushi", "Pizza", "Burger", "Lasagnes",
            "Poulet-Riz", "Salade César", "Steak Frites", "Bœuf Bourguignon",
            "Ceviche", "Lentilles", "Cassoulet", "Tacos", "Poisson Pané",
            "Poulet Rôti", "Quesadillas", "Chop Suey", "Frites", "Hot Dog", "Raclette", "Fondue"
        ],
        "🥨 Snacks": [
            "Bâtonnets salés", "Doritos", "Chips", "Cheetos", "Bonbons",
            "Cacahuètes", "Biscuits", "Chocolat", "Barre chocolatée", "Popcorn", "Nachos", "Macarons", "Croissant", "Pain au chocolat"
        ],
        "🌍 Pays": [
            "Chili", "Argentine", "Brésil", "États-Unis", "Espagne",
            "Allemagne", "Japon", "Chine", "Mexique", "Pérou", "France",
            "Italie", "Russie", "Colombie", "Australie", "Égypte"
        ],
        "🎒 Dans un sac à dos": [
            "Cahier", "Stylo", "Bouteille d'eau", "Chargeur", "Ordinateur",
            "Portefeuille", "Sweat", "Snacks", "Préservatifs", "Briquet",
            "Trousse", "Drogue", "Mouchoirs", "Écouteurs", "Déodorant",
            "Maquillage", "Doliprane", "Clés"
        ],
        "🚽 Dans la salle de bain": [
            "Brosse à dents", "Dentifrice", "Savon", "Serviette", "Shampoing", "Rasoir",
            "Papier toilette", "Déodorant", "Crème", "Éponge", "Cire",
            "Coupe-ongles", "Coton-tige", "Nettoyant WC", "Après-shampoing", "Caca", "Peigne", "Linge sale"
        ],
        "🔑 Objets qu'on perd": [
            "Clés", "Téléphone", "Portefeuille", "Sac à dos",
            "Sweat", "Chargeur", "Bague", "Écouteurs", "Lunettes",
            "Carte d'identité", "Patience", "Chaussette"
        ],
        "🔊 Choses qui font du bruit": [
            "Cloche", "Klaxon", "Alarme", "Sonnette", "Radio", "Bus",
            "Machine à laver", "Sèche-cheveux", "Moto", "Bouilloire", "Mixeur", "Perceuse",
            "Ambulance", "Aspirateur"
        ],
        "®️ Marques": [
            "Nike", "Adidas", "Puma", "Samsung", "Apple", "Sony",
            "CocaCola", "Pepsi", "McDonalds", "KFC", "Renault", "Peugeot",
            "Louis Vuitton", "Carrefour", "Amazon", "Chanel", "L'Oréal"
        ],
        "👃 Odeurs": [
            "Fleurs", "Parfum", "Poubelle", "Fesses", "Aisselles", "Pieds",
            "Fromage", "Prt", "Pipi", "Haleine", "Nourriture",
            "Essence", "Savon", "Moisissure", "Vomi", "Herbe"
        ],
        "👅 Choses à lécher/sucer": [
            "Glace", "Glaçon", "Bonbon", "Pénis", "Doigt",
            "Seins", "Citron", "Cuillère", "Paille",
            "Cigarette", "Coquillage", "Sucette"
        ],
        "🏙️ Vendu dans la rue": [
            "Eau", "Crêpes", "Bonbons", "Pansements", "Lunettes de soleil",
            "Kebab", "Marrons chauds", "Hot Dogs", "Fleurs", "Chargeurs",
            "Glace", "Chaussettes", "Tour Eiffel miniature"
        ],
        "💊 À la pharmacie": [
            "Doliprane", "Préservatifs", "Ibuprofène", "Viagra", "Sirop",
            "Couches", "Crème", "Test de grossesse", "Seringue",
            "Pansement", "Lubrifiant", "Pilule contraceptive", "Shampoing", "Après-shampoing"
        ],
        "🦁 Animaux": [
            "Chien", "Chat", "Éléphant", "Lion", "Girafe", "Singe",
            "Vache", "Cochon", "Poule", "Aigle", "Serpent",
            "Crocodile", "Ours", "Requin", "Souris", "Araignée"
        ],
        "🍎 Fruits et Légumes": [
            "Pomme", "Banane", "Orange", "Fraise", "Raisin", "Pastèque",
            "Ananas", "Avocat", "Citron", "Tomate", "Laitue", "Pomme de terre",
            "Oignon", "Maïs", "Carotte", "Ail", "Courgette"
        ],
        "👷 Métiers": [
            "Médecin", "Professeur", "Pompier", "Policier", "Ingénieur", "Chef cuisinier",
            "Avocat", "Vétérinaire", "Musicien", "Acteur", "Dentiste",
            "Pilote", "Menuisier", "Électricien", "Soldat", "Mécanicien", "Architecte"
        ],
        "🧠 Corps Humain": [
            "Tête", "Main", "Pied", "Oeil", "Bouche", "Nez",
            "Cheveux", "Doigt", "Genou", "Fesses", "Cœur", "Ventre",
            "Langue", "Dent", "Oreille", "Cerveau", "Poumon", "Foie",
            "Os", "Sang", "Coude", "Cou", "Nombril", "Ongle",
            "Dos", "Peau", "Sourcil", "Gorge", "Côte"
        ],
        "👕 Vêtements": [
            "T-shirt", "Pantalon", "Robe", "Veste", "Baskets",
            "Chaussettes", "Caleçon", "Culotte", "Sweat", "Lunettes",
            "Écharpe", "Bonnet", "Maillot de bain", "Pyjama", "Béret"
        ],
        "🍹 Boissons (Alcool)": [
            "Rhum Coca", "Bière", "Vin", "Mojito", "Tequila", "Rhum",
            "Whisky", "Gin", "Sangria", "Vodka", "Kir",
            "Champagne", "Pastis", "Cidre"
        ],
        "🔥 Lieux pour faire l'amour": [
            "Lit", "Voiture", "Motel", "Salle de bain", "Plage", "Ascenseur",
            "Cuisine", "Canapé", "Tente", "Piscine",
            "Forêt", "Douche", "Jacuzzi", "Cinéma",
            "Cabine d'essayage", "Bureau", "Sol", "Balcon", "Parc"
        ],
        "👻 Choses effrayantes": [
            "Araignée", "Clown", "Obscurité", "Hauteur", "Rat", "Mort",
            "Fantôme", "Tremblement de terre", "Cafard",
            "Piqûre", "Dentiste"
        ],
        "🎸 Instruments de Musique": [
            "Guitare", "Batterie", "Piano", "Flûte", "Violon", "Trompette",
            "Basse", "Saxophone", "Harpe", "Accordéon", "Tambourin", "Ukulélé",
            "Triangle", "Xylophone", "Maracas", "Harmonica"
        ],
        "🎁 Cadeaux Secret Santa": [
            "Chaussettes", "Mug", "Savon", "Bougie", "Chocolat", "Porte-clés",
            "Déodorant", "Agenda", "Stylo", "Écharpe", "Crème", "Vin"
        ],
        "👅 Choses qui cassent souvent": [
            "Verre", "Téléphone", "Cœur", "Miroir", "Os", "Préservatif",
            "Lunettes", "Assiette", "Écran", "Fermeture éclair", "Ongle"
        ],
        "🎈 Choses qui gonflent": [
            "Ballon", "Pneu", "Préservatif", "Ventre", "Poupée gonflable",
            "Matelas", "Balle", "Poumon", "Bouée", "Chewing-gum",
            "Bateau", "Sac", "Bulle", "Coussin", "Gant"
        ],
        "🤥 Excuses pour ne pas venir": [
            "Malade", "Gueule de bois", "Bouchons", "Enterrement", "Administratif", "Médecin",
            "Plus d'internet", "Panne de courant", "Panne de réveil", "Flemme", "Grève"
        ],
        "🛏️ Sous le lit": [
            "Chaussette", "Moutons de poussière", "Pièce", "Araignée", "Préservatif usagé",
            "Chaussure", "Poussière", "Jouet", "Bouteille", "Monstre", "Sous-vêtement"
        ],
        "🫣 Choses faites en cachette": [
            "Fumer", "Pleurer", "Manger", "Voler", "Se masturber", "Faire caca",
            "Regarder le téléphone de l'autre", "Se curer le nez", "Dormir"
        ],
        "🧹 Tâches ménagères": [
            "Faire la vaisselle", "Repasser", "Balayer", "Cuisiner", "Faire le lit",
            "Sortir la poubelle", "Nettoyer les toilettes", "Arroser", "Faire les vitres"
        ],
        "⚽ Sports": [
            "Football", "Basketball", "Tennis", "Natation", "Volleyball",
            "Boxe", "Golf", "Rugby", "Athlétisme", "Padel",
            "Gymnastique", "Karaté", "Ping Pong", "Surf", "Cyclisme",
            "Formule 1", "Patinage", "Escalade", "Baseball", "Ski", "Musculation", "Pétanque"
        ],
        "🎶 Styles de Musique": [
            "Reggaeton", "Rock", "Pop", "Variété", "Électro",
            "Rap / Hip Hop", "Classique", "Jazz", "Metal", "Bachata",
            "Salsa", "Trap", "K-Pop", "Country", "Folk",
            "Opéra", "Punk", "Blues", "Disco", "Zouk",
            "Tango", "Ballade", "Reggae"
        ],
        "🛋️ Meubles et Électroménager": [
            "Canapé", "Lit", "Table", "Chaise", "Télé", "Frigo",
            "Machine à laver", "Micro-ondes", "Chauffage", "Ventilateur", "Lampe",
            "Miroir", "Table de nuit", "Bureau", "Étagère", "Four", "Fer à repasser"
        ],
        "🏞️ Nature et Paysages": [
            "Montagne", "Plage", "Forêt", "Désert", "Volcan", "Rivière",
            "Lac", "Neige", "Pluie", "Soleil", "Lune", "Nuage",
            "Arc-en-ciel", "Arbre", "Fleur", "Cascade", "Mer", "Île"
        ],
        "🏢 Lieux de la Ville": [
            "Parc", "Centre commercial", "Supermarché", "École", "Hôpital", "Commissariat",
            "Cinéma", "Stade", "Église", "Banque", "Pharmacie", "Aéroport",
            "Cimetière", "Salle de sport", "Restaurant", "Bibliothèque", "Boîte de nuit", "Jardin public"
        ],
        "🥤 Boissons": [
            "Coca Cola", "Fanta", "Sprite", "Jus d'orange", "Limonade", "Pepsi",
            "Eau", "Jus", "Lait", "Café", "Thé", "Sirop",
            "Bière", "Vin", "Diabolo", "Milkshake", "Orangina",
            "Red Bull", "Boisson énergisante", "Thé glacé", "Whisky",
            "Rhum", "Gin", "Monaco", "Chocolat chaud"
        ],
        "🚗 Véhicules": [
            "Voiture", "Bus", "Moto", "Vélo", "Avion", "Bateau",
            "Train", "Hélicoptère", "Camion", "Skateboard", "Trottinette",
            "Sous-marin", "Taxi", "Métro", "Camionnette", "Ambulance",
            "Rollers", "Tracteur", "Grue"
        ]
    },

    // Interface Utilisateur
    ui: {
        configTitle: 'Configuration',
        langSelectLabel: 'Langue :',
        numPlayersLabel: 'Nombre de joueurs (min 3) :',
        numImpostorsLabel: 'Nombre d\'imposteurs (min 1) :',
        playerPlaceholder: 'Joueur',
        confirmButton: 'Confirmer les joueurs',

        categoryTitle: 'Choisissez une catégorie',
        randomCategory: 'Catégorie aléatoire',
        backToConfig: '← Retour (Joueurs)',

        gameTitle: 'Qui a le mot ?',
        gameSubText: 'Touchez votre nom pour voir le mot. Ne le montrez à personne !',
        categoryLabel: 'Catégorie',
        backToCategories: '← Retour (Catégories)',

        wordTitle: 'votre mot est :',
        impostorText: 'VOUS ÊTES L\'IMPOSTEUR',
        hideButton: 'Cacher et Retourner',

        minPlayersAlert: 'Il faut au moins 3 joueurs.',
        impostorAlert: 'Il doit y avoir au moins un joueur qui n\'est pas imposteur !',
        impostorMinAlert: 'Le nombre d\'imposteurs doit être d\'au moins 1.'
    }
};