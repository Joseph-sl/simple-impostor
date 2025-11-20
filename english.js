var DATA = {
    // Categories and words
    categories: {
        "🎬 Movies": [
            "Titanic", "Gladiator", "Terminator", "Shrek", "Rocky", "The Matrix",
            "The Godfather", "Star Wars", "Jurassic Park", "Forrest Gump",
            "Back to the Future", "Lord of the Rings", "Pulp Fiction",
            "Avatar", "Harry Potter", "The Lion King", "Barbie", "Oppenheimer",
            "Home Alone", "Pirates of the Caribbean", "Fast & Furious",
            "The Mask", "E.T.", "Charlie and the Chocolate Factory",
            "IT", "Men in Black", "Indiana Jones", "Life is Beautiful"
        ],
        "📺 TV Series": [
            "Stranger Things", "Dark", "You", "Elite", "Narcos", "The Witcher",
            "Black Mirror", "Money Heist", "Sex Education", "Squid Game",
            "The Office", "Breaking Bad", "Friends", "Game of Thrones", "The Simpsons",
            "Modern Family", "Malcolm in the Middle", "Seinfeld",
            "The Walking Dead", "Peaky Blinders", "Grey's Anatomy", "Ugly Betty"
        ],
        "🦸 Superheroes": [
            "Batman", "Superman", "Spiderman", "Ironman", "Hulk", "Thor",
            "Captain America", "Flash", "Wolverine", "Deadpool", "Doctor Strange",
            "Wonder Woman", "Aquaman", "Black Panther", "Ant-Man",
            "Green Lantern", "Ninja Turtles", "Daredevil"
        ],
        "🎨 Cartoons": [
            "Ben 10", "Kim Possible", "Danny Phantom", "Fairly OddParents",
            "SpongeBob", "Pokemon", "Dragon Ball", "Avatar", "Teen Titans",
            "Phineas and Ferb", "Courage the Cowardly Dog", "Billy and Mandy", "Scooby Doo", "Tom and Jerry",
            "Futurama", "Captain Tsubasa", "Pink Panther", "Garfield",
            "Powerpuff Girls", "Saint Seiya", "Hey Arnold"
        ],
        "🏰 Disney Pixar Characters": [
            "Woody", "Buzz", "Elsa", "Moana", "Simba", "Mickey", "Nemo",
            "Shrek", "Mike Wazowski", "Lightning McQueen", "Wall-E", "Ratatouille",
            "Hercules", "Mulan", "Stitch", "Minions", "Winnie the Pooh",
            "Kung Fu Panda", "Genie", "Gru", "Tarzan", "The Little Mermaid"
        ],
        "🎮 Video Games": [
            "Minecraft", "Fortnite", "GTA", "Valorant", "CSGO", "FIFA",
            "League of Legends", "Zelda", "Mario", "Call of Duty", "Pokemon", "Free Fire",
            "Roblox", "Among Us", "Candy Crush", "Clash Royale",
            "Pacman", "Tetris", "Mortal Kombat", "Street Fighter",
            "Plants vs Zombies", "Wii Sports", "Pou"
        ],
        "🌟 Celebrities": [
            "Tom Cruise", "Brad Pitt", "Angelina Jolie", "Scarlett Johansson",
            "Leonardo DiCaprio", "Keanu Reeves", "The Rock", "Zendaya",
            "Messi", "Cristiano Ronaldo", "Shakira", "Bad Bunny", "Pedro Pascal",
            "Beyonce", "Michael Jackson", "Will Smith", "Elon Musk",
            "Donald Trump", "Justin Bieber", "Kanye West", "Taylor Swift"
        ],
        "🍽️ Lunch / Dinner": [
            "Spaghetti", "Sushi", "Pizza", "Burger", "Lasagna",
            "Chicken and Rice", "Caesar Salad", "Steak and Mashed Potatoes", "BBQ Ribs",
            "Ceviche", "Lentils", "Beans", "Beef Stir Fry", "Fried Fish",
            "Roast Chicken", "Quesadillas", "Chop Suey", "French Fries", "Hot Dog", "Tacos", "Meatloaf"
        ],
        "🥨 Snacks": [
            "Pretzel Sticks", "Doritos", "Lay's", "Cheetos", "Gummy Bears",
            "Peanuts", "Cookies", "Chocolate", "Takis", "Chocolate Bar", "Popcorn", "Nachos", "Crackers", "Bonbons"
        ],
        "🌍 Countries": [
            "Chile", "Argentina", "Brazil", "United States", "Spain",
            "Germany", "Japan", "China", "Mexico", "Peru", "France",
            "Italy", "Russia", "Colombia", "Australia", "Egypt"
        ],
        "🎒 Things in a Backpack": [
            "Notebook", "Pen", "Water Bottle", "Charger", "Laptop",
            "Wallet", "Hoodie", "Snacks", "Condoms", "Lighter",
            "Pencil Case", "Drugs", "Tissues", "Headphones", "Deodorant",
            "Makeup", "Painkillers", "Keys"
        ],
        "🚽 Things in a Bathroom": [
            "Toothbrush", "Toothpaste", "Soap", "Towel", "Shampoo", "Razor",
            "Toilet Paper", "Deodorant", "Lotion", "Sponge", "Wax",
            "Nail Clipper", "Cotton Swabs", "Toilet Cleaner", "Conditioner", "Poop", "Comb", "Dirty Laundry"
        ],
        "🔑 Objects you can lose": [
            "Keys", "Phone", "Wallet", "Backpack",
            "Hoodie", "Charger", "Ring", "Headphones", "Glasses",
            "ID Card", "Patience", "Sock"
        ],
        "🔊 Things that make noise": [
            "Bell", "Horn", "Alarm", "Doorbell", "Radio", "Bus",
            "Washing Machine", "Hair Dryer", "Motorcycle", "Kettle", "Blender", "Drill",
            "Ambulance", "Vacuum Cleaner"
        ],
        "®️ Brands": [
            "Nike", "Adidas", "Puma", "Samsung", "Apple", "Sony",
            "CocaCola", "Pepsi", "McDonalds", "KFC", "Toyota", "Ford",
            "Nestle", "Walmart", "Target", "Chase"
        ],
        "👃 Things you can smell": [
            "Flowers", "Perfume", "Trash", "Butt", "Armpit", "Feet",
            "Smegma", "Fart", "Pee", "Breath", "Food",
            "Gasoline", "Soap", "Mold", "Vomit", "Weed"
        ],
        "👅 Things you can lick/suck": [
            "Ice Cream", "Ice", "Candy", "Penis", "Finger",
            "Boobs", "Lemon", "Spoon", "Straw",
            "Cigarette", "Shell", "Lollipop"
        ],
        "🏙️ Things sold on the street": [
            "Water", "Pretzels", "Candy Bar", "Band-aids", "Sunglasses",
            "Kebabs", "Sweets", "Hot Dogs", "Flowers", "Chargers",
            "Ice Cream", "Socks", "Tacos"
        ],
        "💊 Things sold at a pharmacy": [
            "Tylenol", "Condoms", "Ibuprofen", "Viagra", "Cough Syrup",
            "Diapers", "Lotion", "Pregnancy Test", "Syringe",
            "Band-aid", "Lube", "Birth Control Pills", "Shampoo", "Conditioner"
        ],
        "🦁 Animals": [
            "Dog", "Cat", "Elephant", "Lion", "Giraffe", "Monkey",
            "Cow", "Pig", "Chicken", "Eagle", "Snake",
            "Crocodile", "Bear", "Shark", "Mouse", "Spider"
        ],
        "🍎 Fruits and Vegetables": [
            "Apple", "Banana", "Orange", "Strawberry", "Grape", "Watermelon",
            "Pineapple", "Avocado", "Lemon", "Tomato", "Lettuce", "Potato",
            "Onion", "Corn", "Carrot", "Garlic"
        ],
        "👷 Professions": [
            "Doctor", "Teacher", "Firefighter", "Police Officer", "Engineer", "Chef",
            "Lawyer", "Vet", "Musician", "Actor", "Dentist",
            "Pilot", "Carpenter", "Electrician", "Soldier", "Mechanic", "Architect"
        ],
        "🧠 Human Body": [
            "Head", "Hand", "Foot", "Eye", "Mouth", "Nose",
            "Hair", "Finger", "Knee", "Butt", "Heart", "Stomach",
            "Tongue", "Tooth", "Ear", "Brain", "Lung", "Liver",
            "Bone", "Blood", "Elbow", "Neck", "Belly Button", "Nail",
            "Back", "Skin", "Eyebrow", "Throat", "Rib"
        ],
        "👕 Clothing": [
            "T-shirt", "Pants", "Dress", "Jacket", "Sneakers",
            "Socks", "Boxers", "Panties", "Hoodie", "Glasses",
            "Scarf", "Hat", "Swimsuit", "Pajamas"
        ],
        "🍹 Drinks (Alcoholic)": [
            "Rum & Coke", "Beer", "Wine", "Margarita", "Tequila", "Rum",
            "Whisky", "Gin", "Sangria", "Vodka", "Mimosa",
            "Champagne", "Pisco Sour"
        ],
        "🔥 Places to make love": [
            "Bed", "Car", "Motel", "Bathroom", "Beach", "Elevator",
            "Kitchen", "Couch", "Tent", "Pool",
            "Forest", "Shower", "Jacuzzi", "Cinema",
            "Fitting Room", "Office", "Floor", "Balcony", "Park"
        ],
        "👻 Things that are scary": [
            "Spider", "Clown", "Darkness", "Heights", "Rat", "Death",
            "Ghost", "Earthquake", "Cockroach",
            "Injection", "Dentist"
        ],
        "🎸 Musical Instruments": [
            "Guitar", "Drums", "Piano", "Flute", "Violin", "Trumpet",
            "Bass", "Saxophone", "Harp", "Accordion", "Tambourine", "Ukulele",
            "Triangle", "Xylophone", "Maracas", "Harmonica"
        ],
        "🎁 Secret Santa Gifts": [
            "Socks", "Mug", "Soap", "Candle", "Chocolate", "Keychain",
            "Deodorant", "Planner", "Pen", "Scarf", "Lotion", "Wine"
        ],
        "👅 Things that usually break": [
            "Glass", "Phone", "Heart", "Mirror", "Bone", "Condom",
            "Glasses", "Plate", "Screen", "Zipper", "Nail"
        ],
        "🎈 Things that inflate": [
            "Balloon", "Tire", "Condom", "Belly", "Inflatable Doll",
            "Mattress", "Ball", "Lung", "Lifebuoy", "Gum",
            "Boat", "Bag", "Bubble", "Cushion", "Glove"
        ],
        "🤥 Excuses to skip something": [
            "Sick", "Hangover", "Traffic", "Funeral", "Errands", "Doctor",
            "Bad Internet", "Power Outage", "Overslept", "Lazy"
        ],
        "🛏️ Things found under the bed": [
            "Sock", "Lint", "Coin", "Spider", "Used Condom",
            "Shoe", "Dust", "Toy", "Bottle", "Monster", "Underwear"
        ],
        "🫣 Things you do in secret": [
            "Smoke", "Cry", "Eat", "Steal", "Masturbate", "Poop",
            "Check someone else's phone", "Pick your nose", "Sleep"
        ],
        "🧹 House Chores": [
            "Wash Dishes", "Iron", "Sweep", "Cook", "Make the Bed",
            "Take out Trash", "Clean Bathroom", "Water Plants", "Clean Windows"
        ],
        "⚽ Sports": [
            "Soccer", "Basketball", "Tennis", "Swimming", "Volleyball",
            "Boxing", "Golf", "Rugby", "Track & Field", "Paddle",
            "Gymnastics", "Karate", "Ping Pong", "Surfing", "Cycling",
            "Formula 1", "Skating", "Climbing", "Baseball", "Skiing", "Weightlifting"
        ],
        "🎶 Music Styles": [
            "Reggaeton", "Rock", "Pop", "Cumbia", "Electronic",
            "Hip Hop", "Classical", "Jazz", "Metal", "Bachata",
            "Salsa", "Trap", "K-Pop", "Country", "Folk",
            "Opera", "Punk", "Blues", "Disco", "Merengue",
            "Tango", "Ballad", "Reggae"
        ],
        "🛋️ Furniture & Appliances": [
            "Couch", "Bed", "Table", "Chair", "TV", "Fridge",
            "Washing Machine", "Microwave", "Heater", "Fan", "Lamp",
            "Mirror", "Nightstand", "Desk", "Shelf", "Oven", "Iron"
        ],
        "🏞️ Nature & Landscapes": [
            "Mountain", "Beach", "Forest", "Desert", "Volcano", "River",
            "Lake", "Snow", "Rain", "Sun", "Moon", "Cloud",
            "Rainbow", "Tree", "Flower", "Waterfall", "Sea", "Island"
        ],
        "🏢 Places in the City": [
            "Park", "Mall", "Supermarket", "School", "Hospital", "Police Station",
            "Cinema", "Stadium", "Church", "Bank", "Pharmacy", "Airport",
            "Cemetery", "Gym", "Restaurant", "Library", "Club", "Park"
        ],

        "🥤 Drinks": [
            "Coca Cola", "Fanta", "Sprite", "Orange Juice", "Lemonade", "Pepsi",
            "Water", "Juice", "Milk", "Coffee", "Tea", "Yerba Mate",
            "Beer", "Wine", "Rum & Coke", "Milkshake", "Pisco Sour",
            "Red Bull", "Energy Drink", "Iced Tea", "Whisky",
            "Rum", "Gin", "Beer Cocktail", "Hot Chocolate"
        ],

        "🚗 Vehicles": [
            "Car", "Bus", "Motorcycle", "Bicycle", "Plane", "Ship",
            "Train", "Helicopter", "Truck", "Skateboard", "Scooter",
            "Submarine", "Taxi", "Cab", "Van", "Ambulance",
            "Rollerblades", "Tractor", "Crane"
        ]
    },

    // UI Texts
    ui: {
        // Page 1: Config
        configTitle: 'Game Setup',
        langSelectLabel: 'Language:',
        numPlayersLabel: 'Number of Players (min 3):',
        numImpostorsLabel: 'Number of Impostors (min 1):',
        playerPlaceholder: 'Player',
        confirmButton: 'Confirm Players',

        // Page 2: Categories
        categoryTitle: 'Choose a Category',
        randomCategory: 'Random Category',
        backToConfig: '← Back (Players)',

        // Page 3: Game
        gameTitle: 'Who has the word?',
        gameSubText: 'Please tap your name to see your word. Don\'t let anyone else see it!',
        categoryLabel: 'Category',
        backToCategories: '← Back (Categories)',

        // Page 4: Word
        wordTitle: 'your word is:',
        impostorText: 'YOU ARE THE IMPOSTOR',
        hideButton: 'Hide and Return',

        // Alerts and others
        minPlayersAlert: 'At least 3 players are needed.',
        impostorAlert: 'There must be at least one non-impostor player!',
        impostorMinAlert: 'Number of impostors must be at least 1.'
    }
};