var DATA = {
    // Categorías y palabras
    categories: {
        "🎬 Películas": [
            "Titanic", "Gladiador", "Terminator", "Shrek", "Rocky", "Matrix",
            "El Padrino", "Star Wars", "Jurassic Park", "Forrest Gump",
            "Volver al Futuro", "El Señor de los Anillos", "Pulp Fiction",
            "Avatar", "Harry Potter", "El Rey León", "Barbie", "Oppenheimer",
            "Mi Pobre Angelito", "Piratas del Caribe", "Rápido y Furioso",
            "La Máscara", "E.T.", "Charlie y la Fábrica de Chocolate",
            "IT", "Hombres de Negro", "Indiana Jones", "La Vida es Bella"
        ],
        "📺 Series": [
            "Stranger Things", "Dark", "You", "Élite", "Narcos", "The Witcher",
            "Black Mirror", "La Casa de Papel", "Sex Education", "El Juego del Calamar",
            "The Office", "Breaking Bad", "Friends", "Game of Thrones", "Los Simpson",
            "Modern Family", "Malcolm el de en medio", "El Chavo del 8",
            "The Walking Dead", "Peaky Blinders", "Grey's Anatomy", "Betty la Fea"
        ],
        "🦸 Superhéroes": [
            "Batman", "Superman", "Spiderman", "Ironman", "Hulk", "Thor",
            "Capitán América", "Flash", "Wolverine", "Deadpool", "Doctor Strange",
            "Wonder Woman", "Aquaman", "Black Panther", "Ant-Man",
            "Linterna Verde", "Las Tortugas Ninja", "Chapulín Colorado"
        ],
        "🎨 Dibujos Animados": [
            "Ben 10", "Kim Possible", "Danny Phantom", "Los Padrinos Mágicos",
            "Bob Esponja", "Pokémon", "Dragon Ball", "Avatar", "Teen Titans",
            "Phineas y Ferb", "Coraje", "Billy y Mandy", "Scooby Doo", "Tom y Jerry",
            "Futurama", "Los Supercampeones", "La Pantera Rosa", "Garfield",
            "Las Chicas Superpoderosas", "Caballeros del Zodiaco", "Hey Arnold"
        ],
        "🏰 Personajes Disney Pixar": [
            "Woody", "Buzz", "Elsa", "Moana", "Simba", "Mickey", "Nemo",
            "Shrek", "Mike Wazowski", "Rayo McQueen", "Wall-E", "Ratatouille",
            "Hércules", "Mulan", "Stitch", "Minions", "Winnie the Pooh",
            "Kung Fu Panda", "El Genio", "Gru", "Tarzán", "La Sirenita"
        ],
        "🎮 Videojuegos": [
            "Minecraft", "Fortnite", "GTA", "Valorant", "CSGO", "FIFA",
            "LOL", "Zelda", "Mario", "Call of Duty", "Pokémon", "Free Fire",
            "Roblox", "Among Us", "Candy Crush", "Clash Royale",
            "Pacman", "Tetris", "Mortal Kombat", "Street Fighter",
            "Plantas vs Zombies", "Wii Sports", "Pou"
        ],
        "🌟 Famosos": [
            "Tom Cruise", "Brad Pitt", "Angelina Jolie", "Scarlett Johansson",
            "Leonardo DiCaprio", "Keanu Reeves", "La Roca", "Zendaya",
            "Messi", "Cristiano Ronaldo", "Shakira", "Bad Bunny", "Pedro Pascal",
            "Chayanne", "Michael Jackson", "Will Smith", "Elon Musk",
            "Donald Trump", "Luis Miguel", "Karol G", "Taylor Swift"
        ],
        "🍽️ Almuerzos": [
            "Espagueti / Pasta", "Sushi", "Pizza", "Hamburguesa", "Lasaña",
            "Pollo con arroz", "Ensalada César", "Bistec con puré", "Carne Asada",
            "Ceviche", "Lentejas", "Frijoles", "Tacos", "Pescado Frito",
            "Pollo Asado", "Quesadillas", "Chop Suey", "Papas Fritas", "Hot Dog / Perro Caliente", "Tamales", "Paella"
        ],
        "🥨 Snacks (dulces y salados)": [
            "Palitos Salados", "Doritos", "Papas Lays", "Cheetos", "Gomitas",
            "Maní / Cacahuates", "Galletas", "Chocolate", "Takis", "Barra de chocolate", "Palomitas de maíz", "Nachos", "Alfajor", "Bombones"
        ],
        "🌍 Países": [
            "Chile", "Argentina", "Brasil", "Estados Unidos", "España",
            "Alemania", "Japón", "China", "México", "Perú", "Francia",
            "Italia", "Rusia", "Colombia", "Australia", "Egipto"
        ],
        "🎒 Cosas en una Mochila": [
            "Cuaderno", "Lápiz", "Botella", "Cargador", "Computadora / Laptop",
            "Billetera / Cartera", "Sudadera", "Snacks", "Condones", "Encendedor",
            "Estuche / Cartuchera", "Droga", "Pañuelos", "Audífonos", "Desodorante",
            "Maquillaje", "Paracetamol", "Llaves"
        ],
        "🚽 Cosas en un Baño": [
            "Cepillo de dientes", "Pasta dental", "Jabón", "Toalla", "Champú", "Afeitadora",
            "Papel Higiénico", "Desodorante", "Crema", "Esponja", "Cera",
            "Cortauñas", "Hisopos", "Limpiador de inodoro", "Acondicionador", "Caca", "Peine", "Ropa sucia"
        ],
        "🔑 Objetos que puedes perder": [
            "Llaves", "Celular / Móvil", "Billetera", "Mochila",
            "Sudadera / Suéter", "Cargador", "Anillo", "Audífonos", "Lentes / Gafas",
            "Identificación / DNI", "Paciencia", "Calcetín"
        ],
        "🔊 Cosas que hacen ruido": [
            "Campana", "Bocina / Claxon", "Alarma", "Timbre", "Radio", "Autobús",
            "Lavadora", "Secador de pelo", "Moto", "Tetera", "Licuadora", "Taladro",
            "Ambulancia", "Aspiradora"
        ],
        "®️ Marcas": [
            "Nike", "Adidas", "Puma", "Samsung", "Apple", "Sony",
            "CocaCola", "Pepsi", "McDonalds", "KFC", "Toyota", "Ford",
            "Nestlé", "Walmart", "Amazon", "Santander"
        ],
        "👃 Cosas que puedes oler": [
            "Flores", "Perfume", "Basura", "Trasero", "Axila", "Pies",
            "Esmegma", "Pedo", "Orina", "Aliento", "Comida",
            "Gasolina", "Jabón", "Humedad", "Vómito", "Marihuana"
        ],
        "👅 Cosas que puedes chupar": [
            "Helado", "Hielo", "Dulce", "Pene", "Dedo",
            "Senos", "Limón", "Cuchara", "Pajita / Popote",
            "Cigarro", "Concha", "Chupetín / Paleta"
        ],
        "🏙️ Cosas que venden en la calle": [
            "Agua", "Churros", "Dulces", "Curitas", "Lentes de sol",
            "Brochetas", "Empanadas", "Flores", "Cargadores",
            "Helado", "Calcetines", "Tacos / Arepas"
        ],
        "💊 Cosas que venden en la farmacia": [
            "Paracetamol", "Condones", "Ibuprofeno", "Viagra", "Jarabe",
            "Pañales", "Crema", "Test de embarazo", "Jeringa",
            "Curitas / Tiritas", "Lubricante", "Pastillas anticonceptivas", "Champú", "Acondicionador"
        ],
        "🦁 Animales": [
            "Perro", "Gato", "Elefante", "León", "Jirafa", "Mono",
            "Vaca", "Cerdo", "Gallina", "Águila", "Serpiente",
            "Cocodrilo", "Oso", "Tiburón", "Ratón", "Araña"
        ],
        "🍎 Frutas y Verduras": [
            "Manzana", "Plátano / Banana", "Naranja", "Fresa", "Uva", "Sandía",
            "Piña", "Aguacate", "Limón", "Tomate", "Lechuga", "Papa",
            "Cebolla", "Maíz / Elote", "Zanahoria", "Ajo"
        ],
        "👷 Profesiones": [
            "Doctor", "Profesor", "Bombero", "Policía", "Ingeniero", "Chef",
            "Abogado", "Veterinario", "Músico", "Actor", "Dentista",
            "Piloto", "Carpintero", "Electricista", "Soldado", "Mecánico", "Arquitecto"
        ],
        "🧠 Cuerpo Humano": [
            "Cabeza", "Mano", "Pie", "Ojo", "Boca", "Nariz",
            "Pelo", "Dedo", "Rodilla", "Trasero / Glúteos", "Corazón", "Barriga / Estómago",
            "Lengua", "Diente", "Oreja", "Cerebro", "Pulmón", "Hígado",
            "Hueso", "Sangre", "Codo", "Cuello", "Ombligo", "Uña",
            "Espalda", "Piel", "Ceja", "Garganta", "Costilla"
        ],
        "👕 Ropa": [
            "Camiseta / Remera", "Pantalón", "Vestido", "Chaqueta", "Zapatillas / Tenis",
            "Calcetines", "Calzoncillos", "Ropa interior", "Sudadera", "Lentes / Gafas",
            "Bufanda", "Gorro", "Traje de baño", "Pijama"
        ],
        "🍹 Tragos": [
            "Cuba Libre", "Cerveza", "Vino", "Margarita", "Tequila", "Ron",
            "Whisky", "Gin", "Sangría", "Vodka", "Michelada",
            "Champagne", "Pisco Sour"
        ],
        "🔥 Lugares para hacer el amor": [
            "Cama", "Auto", "Motel", "Baño", "Playa", "Ascensor",
            "Cocina", "Sillón / Sofá", "Carpa / Tienda de campaña", "Piscina",
            "Bosque", "Ducha", "Jacuzzi", "Cine",
            "Probador", "Oficina", "Suelo", "Balcón", "Parque"
        ],
        "👻 Cosas que dan miedo": [
            "Araña", "Payaso", "Oscuridad", "Altura", "Rata", "Muerte",
            "Fantasma", "Terremoto", "Cucaracha",
            "Inyección", "Dentista"
        ],
        "🎸 Instrumentos Musicales": [
            "Guitarra", "Batería", "Piano", "Flauta", "Violín", "Trompeta",
            "Bajo", "Saxofón", "Arpa", "Acordeón", "Pandereta", "Ukelele",
            "Triángulo", "Xilófono", "Maracas", "Armónica"
        ],
        "🎁 Regalos de Amigo Secreto": [
            "Calcetines", "Taza", "Jabón", "Vela", "Chocolate", "Llavero",
            "Desodorante", "Agenda", "Lápiz / Bolígrafo", "Bufanda", "Crema", "Vino"
        ],
        "👅 Cosas que se suelen romper": [
            "Vaso", "Celular / Móvil", "Corazón", "Espejo", "Hueso", "Condón",
            "Lentes / Gafas", "Plato", "Pantalla", "Cierre / Cremallera", "Uña"
        ],
        "🎈 Cosas que se inflan": [
            "Globo", "Neumático / Llanta", "Condón", "Barriga", "Muñeca inflable",
            "Colchón", "Pelota", "Pulmón", "Salvavidas", "Chicle",
            "Bote", "Bolsa", "Burbuja", "Cojín", "Guante"
        ],
        "🤥 Excusas para faltar": [
            "Enfermo", "Resaca", "Tráfico", "Funeral", "Trámite", "Médico",
            "Internet malo", "Se cortó la luz", "Me quedé dormido", "Pereza"
        ],
        "🛏️ Cosas que encuentras bajo la cama": [
            "Calcetín", "Pelusa", "Moneda", "Araña", "Condón usado",
            "Zapato", "Polvo", "Juguete", "Botella", "Monstruo", "Ropa interior"
        ],
        "🫣 Cosas que haces a escondidas": [
            "Fumar", "Llorar", "Comer", "Robar", "Masturbarse", "Defecar",
            "Revisar celular ajeno", "Sacarse los mocos", "Dormir"
        ],
        "🧹 Tareas de la casa": [
            "Lavar los platos", "Planchar", "Barrer", "Cocinar", "Hacer la cama",
            "Sacar la basura", "Limpiar el baño", "Regar", "Limpiar vidrios"
        ],
        "⚽ Deportes": [
            "Fútbol", "Básquetbol", "Tenis", "Natación", "Voleibol",
            "Boxeo", "Golf", "Rugby", "Atletismo", "Pádel",
            "Gimnasia", "Karate", "Ping Pong", "Surf", "Ciclismo",
            "Fórmula 1", "Patinaje", "Escalada", "Béisbol", "Esquí", "Pesas"
        ],
        "🎶 Estilos de Música": [
            "Reguetón", "Rock", "Pop", "Cumbia", "Electrónica",
            "Hip Hop", "Clásica", "Jazz", "Metal", "Bachata",
            "Salsa", "Trap", "K-Pop", "Ranchera", "Folclore",
            "Ópera", "Punk", "Blues", "Disco", "Merengue",
            "Tango", "Balada", "Reggae"
        ],
        "🛋️ Muebles y Electrodomésticos": [
            "Sofá", "Cama", "Mesa", "Silla", "Televisor", "Refrigerador / Nevera",
            "Lavadora", "Microondas", "Estufa / Calefactor", "Ventilador", "Lámpara",
            "Espejo", "Mesita de noche", "Escritorio", "Estante", "Horno", "Plancha"
        ],
        "🏞️ Naturaleza y Paisajes": [
            "Montaña", "Playa", "Bosque", "Desierto", "Volcán", "Río",
            "Lago", "Nieve", "Lluvia", "Sol", "Luna", "Nube",
            "Arcoíris", "Árbol", "Flor", "Cascada", "Mar", "Isla"
        ],
        "🏢 Lugares de la Ciudad": [
            "Plaza / Parque", "Centro Comercial", "Supermercado", "Escuela / Colegio", "Hospital", "Comisaría / Estación de Policía",
            "Cine", "Estadio", "Iglesia", "Banco", "Farmacia", "Aeropuerto",
            "Cementerio", "Gimnasio", "Restaurante", "Biblioteca", "Discoteca / Antro", "Parque"
        ],

        "🥤 Bebidas": [
            "Coca Cola", "Fanta", "Sprite", "Jugo de Naranja", "Limonada", "Pepsi",
            "Agua", "Jugo", "Leche", "Café", "Té", "Mate",
            "Cerveza", "Vino", "Cuba Libre", "Margarita", "Pisco Sour",
            "Vino con cola", "Energética", "Limonada", "Whisky",
            "Ron", "Gin", "Michelada", "Chocolate Caliente"
        ],

        "🚗 Vehículos": [
            "Auto / Carro", "Autobús", "Moto", "Bicicleta", "Avión", "Barco",
            "Tren", "Helicóptero", "Camión", "Patineta", "Scooter",
            "Submarino", "Taxi", "Uber", "Furgoneta / Van", "Ambulancia",
            "Patines", "Tractor", "Grúa"
        ]
    },

    // Textos de la Interfaz de Usuario (UI)
    ui: {
        // Página 1: Configuración
        configTitle: 'Configurar Partida',
        langSelectLabel: 'Idioma:',
        numPlayersLabel: 'Número de Jugadores (mín. 3):',
        numImpostorsLabel: 'Número de Impostores (mín. 1):',
        playerPlaceholder: 'Jugador',
        confirmButton: 'Confirmar Jugadores',

        // Página 2: Categorías
        categoryTitle: 'Elige una Categoría',
        randomCategory: 'Categoría al Azar',
        backToConfig: '← Volver (Jugadores)',

        // Página 3: Juego
        gameTitle: '¿Quién tiene la palabra?',
        gameSubText: 'Por favor, pulsa tu nombre para ver tu palabra. ¡No dejes que nadie más la vea!',
        categoryLabel: 'Categoría',
        backToCategories: '← Volver (Categorías)',

        // Página 4: Palabra
        wordTitle: 'tu palabra es:',
        impostorText: 'ERES EL IMPOSTOR',
        hideButton: 'Ocultar y Volver',

        // Alertas y otros
        minPlayersAlert: 'Se necesitan al menos 3 jugadores.',
        impostorAlert: '¡Debe haber al menos un jugador que no sea impostor!',
        impostorMinAlert: 'El número de impostores debe ser al menos 1.'
    }
};