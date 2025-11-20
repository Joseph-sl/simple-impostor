// spanish.js

var DATA = {
    // Categorías y palabras
    categories: {
  "🎬 Peliculas": [
    "Titanic", "Gladiador", "Terminator", "Shrek", "Rocky", "Matrix",
    "El Padrino", "Star Wars", "Jurassic Park", "Forrest Gump",
    "Volver al Futuro", "El Señor de los Anillos", "Pulp Fiction",
    "Avatar", "Harry Potter", "El Rey Leon", "Barbie", "Oppenheimer",
    "Mi Pobre Angelito", "Piratas del Caribe", "Rapido y Furioso", 
    "La Mascara", "E.T.", "Charlie y la Fabrica de Chocolate", 
    "IT", "Hombres de Negro", "Indiana Jones", "La Vida es Bella"
  ],
"📺 Series": [
    "Stranger Things", "Dark", "You", "Elite", "Narcos", "The Witcher",
    "Black Mirror", "La Casa de Papel", "Sex Education", "El Juego del Calamar",
    "The Office", "Breaking Bad", "Friends", "Game of Thrones", "Los Simpson",
    "Casado con Hijos", "Malcolm el de en medio", "El Chavo del 8", 
    "The Walking Dead", "Peaky Blinders", "Grey's Anatomy", "Betty la Fea"
  ],

  "🦸 Superheroes": [
    "Batman", "Superman", "Spiderman", "Ironman", "Hulk", "Thor",
    "Capitan America", "Flash", "Wolverine", "Deadpool", "Doctor Strange",
    "Wonder Woman", "Aquaman", "Black Panther", "Ant-Man", 
    "Linterna Verde", "Las Tortugas Ninja", "Chapulin Colorado"
  ],

  "🎨 Dibujos Animados": [
    "Ben 10", "Kim Possible", "Danny Phantom", "Los Padrinos Magicos",
    "Bob Esponja", "Pokemon", "Dragon Ball", "Avatar", "Teen Titans",
    "Phineas y Ferb", "Coraje", "Billy y Mandy", "Scooby Doo", "Tom y Jerry",
    "Futurama", "Los Supercampeones", "La Pantera Rosa", "Garfield", 
    "Las Chicas Superpoderosas", "Caballeros del Zodiaco", "Hey Arnold"
  ],

  "🏰 Personajes Disney Pixar": [
    "Woody", "Buzz", "Elsa", "Moana", "Simba", "Mickey", "Nemo",
    "Shrek", "Mike Wazowski", "Rayo McQueen", "Wall-E", "Ratatouille",
    "Hercules", "Mulan", "Stitch", "Minions", "Winnie the Pooh", 
    "Kung Fu Panda", "El Genio", "Gru", "Tarzan", "La Sirenita"
  ],

  "🎮 Videojuegos": [
    "Minecraft", "Fortnite", "GTA", "Valorant", "CSGO", "FIFA",
    "LOL", "Zelda", "Mario", "Call of Duty", "Pokemon", "Free Fire",
    "Roblox", "Among Us", "Candy Crush", "Clash Royale",
    "Pacman", "Tetris", "Mortal Kombat", "Street Fighter", 
    "Plantas vs Zombies", "Wii Sports", "Pou"
  ],

  "🌟 Famosos": [
    "Tom Cruise", "Brad Pitt", "Angelina Jolie", "Scarlett Johansson",
    "Leonardo DiCaprio", "Keanu Reeves", "La Roca", "Zendaya",
    "Messi", "Cristiano Ronaldo", "Shakira", "Bad Bunny", "Pedro Pascal",
    "Chayanne", "Michael Jackson", "Will Smith", "Elon Musk", 
    "Donald Trump", "Alexis Sanchez", "Karol G", "Taylor Swift"
  ],

    "🍽️ Almuerzos": [
    "Tallarines con salsa", "Sushi", "Pizza", "Hamburguesa", "Lasaña",
    "Pollo con arroz", "Ensalada Cesar", "Bistec con pure", "Lomo a lo pobre",
    "Ceviche", "Lentejas", "Porotos", "Carne mongoliana", "Pescado Frito", 
    "Pollo Asado", "Quesadillas", "Chapsui", "Papas Fritas", "Completos", "Humitas", "Pastel de Choclo"
  ],
  "🇨🇱 Platos Chilenos": [
    "Empanada", "Cazuela", "Charquican", "Porotos", "Choripan",
    "Curanto", "Pastel de choclo", "Asado", "Humitas", "Completo",
    "Sopaipillas", "Terremoto", "Chorrillana", "Marraqueta"
  ],
  "🥨 Snacks (dulces y salados)": [
    "Ramitas", "Doritos", "Lays", "Cheetos", "Gomitas",
    "Mani", "Galletas", "Chocolate", "Takis", "Super 8", "Cabritas", "Serranita", "Tabletones", "bonobon"
  ],
  "🌍 Paises": [
    "Chile", "Argentina", "Brasil", "Estados Unidos", "España",
    "Alemania", "Japon", "China", "Mexico", "Peru", "Francia",
    "Italia", "Rusia", "Colombia", "Australia", "Egipto"
  ],
  "🎒 Cosas en una Mochila": [
    "Cuaderno", "Lapiz", "Botella", "Cargador", "Computador",
    "Billetera", "Poleron", "Snacks", "Condones", "Encendedor",
    "Estuche", "Droga", "Pañuelos", "Audifonos", "Desodorante",
    "Maquillaje", "Paracetamol", "Llaves"
  ],
  "🚽 Cosas en un Baño": [
    "Cepillo", "Pasta", "Jabon", "Toalla", "Shampoo", "Afeitadora",
    "Confort", "Desodorante", "Crema", "Esponja", "Cera",
    "Cortauñas", "Cotonitos", "Pato Purific", "Valsamo", "Caca", "Peineta", "Ropa sucia"
  ],
  "🔑 Objetos que puedes perder": [
    "Llaves", "Celular", "Billetera", "Mochila",
    "Poleron", "Cargador", "Anillo", "Audifonos", "Lentes",
    "Carnet", "Paciencia", "Calcetin"
  ],
  "🔊 Cosas que hacen ruido": [
    "Campana", "Bocina", "Alarma", "Timbre", "Radio", "Micro",
    "Lavadora", "Secador", "Moto", "Teteta", "Jugera", "Taladro",
    "Ambulancia", "Aspiradora"
  ],
  "®️ Marcas": [
    "Nike", "Adidas", "Puma", "Samsung", "Apple", "Sony",
    "CocaCola", "Pepsi", "McDonalds", "KFC", "Toyota", "Ford",
    "Colun", "Jumbo", "Lider", "BancoEstado"
  ],
  "👃 Cosas que puedes oler": [
    "Flores", "Perfume", "Basura", "Poto", "Axila", "Patas",
    "Esmegma", "Pedo", "Pichi", "Aliento", "Comida",
    "Bencina", "Jabon", "Humedad", "Vomito", "Marihuana"
  ],
  "👅 Cosas que puedes chupar": [
    "Helado", "Hielo", "Dulce", "P3n3", "Dedo",
    "Tetas", "Limon", "Cuchara", "Bombilla",
    "Cigarro", "Concha", "Coyac"
  ],
  "🏙️ Cosas que venden en la calle": [
    "Agua", "Sopaipillas", "Super8", "Parches", "Lentes",
    "Anticucho", "Dulces", "Empanadas", "Flores", "Cargadores",
    "Helado", "Calcetines", "Guatitas"
  ],
  "💊 Cosas que venden en la farmacia": [
    "Paracetamol", "Condones", "Ibuprofeno", "Viagra", "Jarabe",
    "Pañales", "Crema", "Test de embarazo", "Jeringa",
    "Parche curita", "Lubricante", "Pastillas anticonceptivas", "Shampoo", "Acondicionador"
  ],
  "🦁 Animales": [
    "Perro", "Gato", "Elefante", "Leon", "Jirafa", "Mono",
    "Vaca", "Cerdo", "Gallina", "Aguila", "Serpiente",
    "Cocodrilo", "Oso", "Tiburon", "Raton", "Araña"
  ],
  "🍎 Frutas y Verduras": [
    "Manzana", "Platano", "Naranja", "Frutilla", "Uva", "Sandia",
    "Piña", "Palta", "Limon", "Tomate", "Lechuga", "Papa",
    "Cebolla", "Choclo", "Zanahoria", "Ajo"
  ],
  "👷 Profesiones": [
    "Doctor", "Profesor", "Bombero", "Paco", "Ingeniero", "Chef",
    "Abogado", "Veterinario", "Musico", "Actor", "Dentista",
    "Piloto", "Carpintero", "Electricista", "Soldado", "Mecanico", "Arquitecto"
  ],
  "🧠 Cuerpo Humano": [
    "Cabeza", "Mano", "Pie", "Ojo", "Boca", "Nariz",
    "Pelo", "Dedo", "Rodilla", "Poto", "Corazon", "Guata",
    "Lengua", "Diente", "Oreja", "Cerebro", "Pulmon", "Higado", 
    "Hueso", "Sangre", "Codo", "Cuello", "Ombligo", "Uña", 
    "Espalda", "Piel", "Ceja", "Garganta", "Costilla"
  ],
  "👕 Ropa": [
    "Polera", "Pantalon", "Vestido", "Chaqueta", "Zapatillas",
    "Calcetines", "Calzoncillos", "Calzones", "Poleron", "Lentes",
    "Bufanda", "Gorro", "Traje de baño", "Pijama"
  ],
  "🍹 Tragos": [
    "Piscola", "Cerveza", "Vino", "Terremoto", "Tequila", "Ron",
    "Whisky", "Gin", "Melon con vino", "Vodka", "Michelada",
    "Champagne", "Pisco Sour"
  ],
  "🔥 Lugares para hacer el amor": [
    "Cama", "Auto", "Motel", "Baño", "Playa", "Ascensor",
        "Cocina", "Sillon", "Carpa", "Piscina", 
        "Bosque", "Ducha", "Jacuzzi", "Cine", 
        "Probador", "Oficina", "Suelo", "Balcon", "Parque"
  ],
  "👻 Cosas que dan miedo": [
    "Araña", "Payaso", "Oscuridad", "Altura", "Raton", "Muerte",
    "Fantasma", "Terremoto", "Cucaracha",
    "Inyeccion", "Dentista"
  ],
"🎸 Instrumentos Musicales": [
    "Guitarra", "Bateria", "Piano", "Flauta", "Violin", "Trompeta",
    "Bajo", "Saxofon", "Arpa", "Acordeon", "Pandero", "Ukelele",
    "Triangulo", "Metalofono", "Maracas", "Armonica"
  ],
  "🎁 Regalos de Amigo Secreto": [
    "Calcetines", "Tazon", "Jabon", "Vela", "Chocolate", "Llavero",
    "Desodorante", "Agenda", "Lapiz", "Bufanda", "Crema", "Vino"
  ],
  "🏺 Cosas que se suelen rompen": [
    "Vaso", "Celular", "Corazon", "Espejo", "Hueso", "Condon",
    "Lentes", "Plato", "Pantalla", "Cierre", "Uña"
  ],
"🎈 Cosas que se inflan": [
    "Globo", "Neumatico", "Condon", "Guata", "Muñeca inflable", 
    "Colchon", "Pelota", "Pulmon", "Salvavidas", "Chicle",
    "Bote", "Bolsa", "Burbuja", "Cojin", "Guante"
  ],
  "🤥 Excusas para faltar": [
    "Enfermo", "Caña", "Taco", "Funeral", "Tramite", "Medico",
    "Internet malo", "Se corto la luz", "Me quede dormido", "Paja"
  ],
  "🛏️ Cosas que encuentras bajo la cama": [
    "Calcetin", "Pelusa", "Moneda", "Araña", "Condon usado",
    "Zapato", "Polvo", "Juguete", "Botella", "Monstruo", "Calzoncillo"
  ],
  "🫣 Cosas que haces a escondidas": [
    "Fumar", "Llorar", "Comer", "Robar", "Paja", "Cagar",
    "Revisar celular ajeno", "Sacarse los mocos", "Dormir"
  ],
  "🧹 Tareas de la casa": [
    "Lavar loza", "Planchar", "Barrer", "Cocinar", "Hacer la cama",
    "Sacar la basura", "Limpiar el baño", "Regar", "Limpiar vidrios"
  ],
"⚽ Deportes": [
    "Futbol", "Basquetbol", "Tenis", "Natacion", "Voleibol",
    "Boxeo", "Golf", "Rugby", "Atletismo", "Padel", 
    "Gimnasia", "Karate", "Ping Pong", "Surf", "Ciclismo", 
    "Formula 1", "Patinaje", "Escalada", "Beisbol", "Esqui", "Pesas"
  ],
  "🎶 Estilos de Musica": [
  "Reggaeton", "Rock", "Pop", "Cumbia", "Electronica", 
    "Hip Hop", "Clasica", "Jazz", "Metal", "Bachata", 
    "Salsa", "Trap", "K-Pop", "Ranchera", "Folclore", 
    "Opera", "Punk", "Blues", "Disco", "Merengue", 
    "Tango", "Balada", "Reggae"
  ],
  "🛋️ Muebles y Electrodomesticos de casa": [
    "Sillon", "Cama", "Mesa", "Silla", "Televisor", "Refrigerador",
    "Lavadora", "Microondas", "Estufa", "Ventilador", "Lampara",
    "Espejo", "Velador", "Escritorio", "Repisa", "Horno", "Plancha"
  ],
  "🏞️ Naturaleza y Paisajes": [
    "Montaña", "Playa", "Bosque", "Desierto", "Volcan", "Rio",
    "Lago", "Nieve", "Lluvia", "Sol", "Luna", "Nube",
    "Arcoiris", "Arbol", "Flor", "Cascada", "Mar", "Isla"
  ],
  "🏢 Lugares de la Ciudad": [
    "Plaza", "Mall", "Supermercado", "Colegio", "Hospital", "Comisaria",
    "Cine", "Estadio", "Iglesia", "Banco", "Farmacia", "Aeropuerto",
    "Cementerio", "Gimnasio", "Restaurante", "Biblioteca", "Disco", "Parque"
  ],

"🥤 Bebidas": [
    "Coca Cola", "Fanta", "Sprite", "Bilz", "Pap", "Pepsi", 
    "Agua", "Jugo", "Leche", "Cafe", "Te", "Mate", 
    "Cerveza", "Vino", "Piscola", "Terremoto", "Pisco Sour", 
    "Jote", "Energetica", "Mote con Huesillo", "Whisky", 
    "Ron", "Gin", "Michelada", "Chocolate Caliente"
  ],

  "🚗 Vehiculos": [
    "Auto", "Micro", "Moto", "Bicicleta", "Avion", "Barco",
    "Tren", "Helicoptero", "Camion", "Patineta", "Scooter",
    "Submarino", "Taxi", "Colectivo", "Furgon", "Ambulancia", 
    "Patines", "Tractor", "Grua"
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
        impostorMinAlert: 'El número de impostores debe ser al menos 1.' // NUEVA
    }
};