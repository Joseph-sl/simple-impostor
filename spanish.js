// spanish.js

var DATA = {
    // Categorías y palabras
    categories: {
    'Animales': [
        'Perro', 'Gato', 'Elefante', 'León', 'Jirafa', 'Tigre', 'Cebra', 'Mono', 'Delfín', 'Pingüino',
        'Caballo', 'Vaca', 'Oveja', 'Cerdo', 'Pollo', 'Pato', 'Águila', 'Serpiente', 'Cocodrilo', 'Rana',
        'Oso', 'Lobo', 'Zorro', 'Tortuga', 'Pez'
    ],
    'Frutas': [
        'Manzana', 'Platano/Banana', 'Naranja', 'Fresa', 'Uva', 'Sandía', 'Piña', 'Mango', 'Kiwi', 'Pera',
        'Cereza', 'Limón', 'Melón', 'Durazno', 'Ciruela', 'Coco', 'Arándano', 'Frambuesa'
    ],
    'Profesiones': [
        'Doctor', 'Profesor', 'Bombero', 'Policía', 'Ingeniero', 'Artista', 'Cocinero', 'Programador', 'Periodista',
        'Abogado', 'Enfermero', 'Veterinario', 'Arquitecto', 'Científico', 'Músico', 'Actor', 'Dentista', 'Piloto'
    ],
    'Países': [
        'Chile', 'España', 'México', 'Argentina', 'Japón', 'Italia', 'Egipto', 'Brasil', 'Canadá', 'Australia', 'Francia',
        'Alemania', 'China', 'India', 'Rusia', 'Estados Unidos', 'Reino Unido', 'Sudáfrica', 'Chile', 'Colombia', 'Perú'
    ],
    'Objetos de Casa': [
        'Silla', 'Mesa', 'Cama', 'Sofá', 'Televisión', 'Lámpara', 'Espejo', 'Reloj', 'Armario', 'Estantería',
        'Nevera', 'Horno', 'Microondas', 'Lavadora', 'Ducha', 'Inodoro', 'Plato', 'Vaso', 'Tenedor', 'Cuchara'
    ],
    'Deportes': [
        'Fútbol', 'Baloncesto', 'Tenis', 'Béisbol', 'Natación', 'Voleibol', 'Golf', 'Boxeo', 'Atletismo',
        'Ciclismo', 'Rugby', 'Esquí', 'Patinaje', 'Judo', 'Karate', 'Fórmula 1'
    ],

    'Colores': [
        'Rojo', 'Azul', 'Verde', 'Amarillo', 'Negro', 'Blanco', 'Naranja', 'Morado', 'Rosa', 'Gris',
        'Café', 'Turquesa', 'Dorado', 'Plateado', 'Beige'
    ],
    'Vehículos': [
        'Auto', 'Micro', 'Moto', 'Bicicleta', 'Avión', 'Barco', 'Tren', 'Camión', 'Helicóptero',
        'Submarino', 'Furgoneta', 'Tractor'
    ],
    'Ropa y Accesorios': [
        'Camisa', 'Pantalón', 'Vestido', 'Falda', 'Chaqueta', 'Zapatos', 'Sombrero', 'Calcetines', 'Abrigo',
        'Lentes', 'Bufanda', 'Guantes', 'Corbata', 'Traje de baño', 'Botas'
    ],
    'Partes del Cuerpo': [
        'Cabeza', 'Mano', 'Pie', 'Brazo', 'Pierna', 'Ojo', 'Boca', 'Nariz', 'Oreja', 'Pelo',
        'Dedo', 'Rodilla', 'Codo', 'Hombro', 'Espalda', 'Corazón', 'Cerebro'
    ],
    'Comida': [
        'Pan', 'Queso', 'Huevo', 'Carne', 'Pollo', 'Pescado', 'Arroz', 'Tallarines/Pasta', 'Sopa', 'Ensalada',
        'Chocolate', 'Galleta', 'Helado', 'Yogur', 'Mantequilla'
    ],
    'Verduras': [
        'Lechuga', 'Tomate', 'Zanahoria', 'Papa', 'Cebolla', 'Brócoli', 'Espinaca', 'Pimentón/Pimiento',
        'Pepino', 'Zapallo/Calabaza', 'Ajo'
    ],
    'Instrumentos Musicales': [
        'Guitarra', 'Piano', 'Violín', 'Batería', 'Flauta', 'Trompeta', 'Saxofón', 'Bajo', 'Arpa',
        'Clarinete', 'Tambor', 'Violonchelo'
    ],
    'Lugares de la Ciudad': [
        'Escuela', 'Hospital', 'Parque', 'Restaurante', 'Supermercado', 'Banco', 'Museo', 'Cine',
        'Biblioteca', 'Gimnasio', 'Aeropuerto', 'Estación de Tren', 'Iglesia'
    ],
    'Naturaleza': [
        'Árbol', 'Flor', 'Río', 'Montaña', 'Playa', 'Bosque', 'Desierto', 'Volcán', 'Lago', 'Océano',
        'Sol', 'Luna', 'Estrella', 'Nube', 'Cielo'
    ],
    'Herramientas': [
        'Martillo', 'Destornillador', 'Sierra', 'Llave inglesa', 'Alicate', 'Taladro', 'Clavo',
        'Tornillo', 'Cinta métrica', 'Nivel'
    ],
    'Materiales': [
        'Madera', 'Metal', 'Plástico', 'Vidrio', 'Tela', 'Papel', 'Piedra', 'Cuero', 'Algodón', 'Lana'
    ],
    'Clima': [
        'Sol', 'Lluvia', 'Nieve', 'Viento', 'Tormenta', 'Niebla', 'Granizo', 'Calor', 'Frío', 'Humedo'
    ],
    'Bebidas': [
        'Agua', 'Jugo', 'Leche', 'Café', 'Té', 'Refresco', 'Vino', 'Cerveza', 'Limonada', 'Chocolate caliente'
    ],
    'Emociones y Sentimientos': [
        'Felicidad', 'Tristeza', 'Enojo', 'Miedo', 'Sorpresa', 'Amor', 'Ansiedad', 'Calma', 'Vergüenza',
        'Orgullo', 'Aburrimiento', 'Confianza'
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
