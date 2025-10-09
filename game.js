// Word Lists
const regularWords = [
    { word: "wóz", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "mróz", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "dróżka", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "różowy", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "burza", letterIndex: 1, correct: "u", incorrect: "ó" },
    { word: "góra", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "dziura", letterIndex: 3, correct: "u", incorrect: "ó" },
    { word: "pióro", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "wróbel", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "ogórek", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "rzeka", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "harcerz", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "morze 🌊", letterIndex: 2, correct: "rz", incorrect: "ż" },
    { word: "choinka", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chleb", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "kuchnia", letterIndex: 2, correct: "ch", incorrect: "h" },
    { word: "druh", letterIndex: 3, correct: "h", incorrect: "ch" },
    { word: "róża", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "kurczak", letterIndex: 1, correct: "u", incorrect: "ó" },
    { word: "skórka", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "zupa", letterIndex: 1, correct: "u", incorrect: "ó" },
    { word: "burak", letterIndex: 1, correct: "u", incorrect: "ó" },
    { word: "przyjaciel", letterIndex: 1, correct: "rz", incorrect: "ż" },
    { word: "łóżko", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "kółko", letterIndex: 1, correct: "ó", incorrect: "u" },  
    { word: "głód", letterIndex: 2, correct: "ó", incorrect: "u" }, 
    { word: "zbiór", letterIndex: 3, correct: "ó", incorrect: "u" },
    { word: "maluje", letterIndex: 3, correct: "u", incorrect: "ó" },
    { word: "mówić", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "kościół", letterIndex: 5, correct: "ó", incorrect: "u" },
    { word: "stół", letterIndex: 2, correct: "ó", incorrect: "u" },

];

const irregularWords = [
    { word: "ołówek", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "łódeczka", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "wrzos", letterIndex: 1, correct: "rz", incorrect: "ż" },
    { word: "rzeżucha", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "rzeźba", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "żółw", letterIndex: 0, correct: "ż", incorrect: "rz" },
    { word: "żuraw", letterIndex: 0, correct: "ż", incorrect: "rz" },
    { word: "źródło", letterIndex: 0, correct: "ź", incorrect: "ż" },
    { word: "chrząszcz", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chrzest", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chrzan", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "hałas", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "hańba", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "hiena", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "herbata", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "bohater", letterIndex: 2, correct: "h", incorrect: "ch" },
    { word: "chór", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "hulajnoga", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "chmura", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "żniwa", letterIndex: 0, correct: "ż", incorrect: "rz" },
    { word: "żmija", letterIndex: 0, correct: "ż", incorrect: "rz" },
    { word: "chrzestny", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chrupki", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "róg", letterIndex: 1, correct: "ó", incorrect: "u" },
    { word: "rzut", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "rzepa", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "huragan", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "hak", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "historia", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "harfa", letterIndex: 0, correct: "h", incorrect: "ch" },
    { word: "rzepa", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "rzemień", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "rzodkiewka", letterIndex: 0, correct: "rz", incorrect: "ż" },
    { word: "przebiśnieg", letterIndex: 1, correct: "rz", incorrect: "ż" },
    { word: "przygoda", letterIndex: 1, correct: "rz", incorrect: "ż" },
    { word: "przedszkole", letterIndex: 1, correct: "rz", incorrect: "ż" },
    { word: "chrust", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chmiel", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chudy", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "chórzysta", letterIndex: 0, correct: "ch", incorrect: "h" },
    { word: "schody", letterIndex: 1, correct: "ch", incorrect: "h" },
    { word: "piórnik", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "próba", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "królik", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "krótki", letterIndex: 2, correct: "ó", incorrect: "u" },
    { word: "przygoda", letterIndex: 1, correct: "rz", incorrect: "ż" },
    { word: "rzeka", letterIndex: 0, correct: "rz", incorrect: "ż" }
];

// Initialize Firebase (this should be added after your Firebase config script in HTML)
// Make sure Firebase is loaded before this code runs
if (typeof firebase === 'undefined') {
    console.error('Firebase not loaded. Make sure to include Firebase scripts in your HTML.');
}

// Level Configuration
const levelConfig = [
    { regularPercent: 100, irregularPercent: 0, timeLimit: 30, wordsPerLevel: 3 },
    { regularPercent: 100, irregularPercent: 0, timeLimit: 20, wordsPerLevel: 3 },
    { regularPercent: 100, irregularPercent: 0, timeLimit: 10, wordsPerLevel: 3 },
    { regularPercent: 90, irregularPercent: 10, timeLimit: 10, wordsPerLevel: 4 },
    { regularPercent: 80, irregularPercent: 20, timeLimit: 10, wordsPerLevel: 5 },
    { regularPercent: 70, irregularPercent: 30, timeLimit: 10, wordsPerLevel: 6 },
    { regularPercent: 60, irregularPercent: 40, timeLimit: 10, wordsPerLevel: 7 },
    { regularPercent: 50, irregularPercent: 50, timeLimit: 10, wordsPerLevel: 8 },
    { regularPercent: 50, irregularPercent: 50, timeLimit: 8, wordsPerLevel: 9 },
    { regularPercent: 50, irregularPercent: 50, timeLimit: 7, wordsPerLevel: 10 }
];

// Game State
let gameState = {
    isRunning: false,
    isPaused: false,
    score: 0,
    level: 1,
    lives: 5,
    currentWord: null,
    currentWordIndex: 0,
    wordsInLevel: [],
    timeLeft: 30,
    timerInterval: null,
    gameLoop: null,
    treasureWordIndex: null, // Added for treasure word tracking
    wrongAnswers: [], // Track wrong answers for review modal
    customCollection: null, // Store custom collection data
    isCustomGame: false, // Flag to indicate if using custom collection
    practicedWords: [], // Track which words have been practiced in custom collections
    allWordsPracticed: false // Flag to indicate if all collection words have been used
};

// Snake
let snake = {
    x: 400,
    y: 300,
    baseSize: 20,
    size: 20,
    baseSpeed: 1.5, // Starting speed (was 2, now 1.5 for finer control)
    speed: 1.5,
    direction: { x: 0, y: 0 },
    segments: [{ x: 400, y: 300 }],
    color: '#4CAF50'
};

// Apples
let apples = {
    correct: { x: 0, y: 0, letter: '', color: '#4CAF50' },
    incorrect: { x: 0, y: 0, letter: '', color: '#f44336' }
};

// Treasure
let treasure = {
    x: 0,
    y: 0,
    active: false,
    type: 'leaf', // 'leaf' or 'flower'
    size: 15,
    collected: false
};

// Canvas and Context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// DOM Elements
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const livesDisplay = document.getElementById('lives');
const wordDisplay = document.getElementById('current-word');
const timerFill = document.getElementById('timer-fill');
const gameOverModal = document.getElementById('game-over-modal');
const instructionsModal = document.getElementById('instructions-modal');
const reviewModal = document.getElementById('review-modal');
const wrongAnswersList = document.getElementById('wrong-answers-list');
const continueBtn = document.getElementById('continue-btn');
const finalScoreDisplay = document.getElementById('final-score');
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const startGameBtn = document.getElementById('start-game-btn');
const highScoresList = document.getElementById('high-scores');

// Practice Collection Elements
const savePracticeWordsCheckbox = document.getElementById('save-practice-words');
const practiceCollectionInfo = document.getElementById('practice-collection-info');
const practiceCollectionName = document.getElementById('practice-collection-name');
const practiceCollectionLink = document.getElementById('practice-collection-link');

// Collection Management Elements
const collectionsModal = document.getElementById('collections-modal');
const closeCollectionsBtn = document.getElementById('close-collections-btn');
const createCollectionBtn = document.getElementById('create-collection-btn');
const collectionNameInput = document.getElementById('collection-name');
const collectionSelect = document.getElementById('collection-select');
const wordInput = document.getElementById('word-input');
const letterIndexInput = document.getElementById('letter-index');
const correctLetterInput = document.getElementById('correct-letter');
const incorrectLetterInput = document.getElementById('incorrect-letter');
const addWordBtn = document.getElementById('add-word-btn');
const collectionsContainer = document.getElementById('collections-container');

// Bulk Import Elements
const bulkCollectionSelect = document.getElementById('bulk-collection-select');
const bulkWordsJson = document.getElementById('bulk-words-json');
const bulkImportBtn = document.getElementById('bulk-import-btn');
const validateJsonBtn = document.getElementById('validate-json-btn');

// Event Listeners
startBtn.addEventListener('click', () => { setTouchControlsVisible(true); startGame(); });
pauseBtn.addEventListener('click', togglePause);
saveScoreBtn.addEventListener('click', saveHighScore);
playAgainBtn.addEventListener('click', resetGame);
startGameBtn.addEventListener('click', () => {
    instructionsModal.classList.add('hidden');
    setTouchControlsVisible(true);
    startGame();
});
continueBtn.addEventListener('click', () => {
    reviewModal.classList.add('hidden');
    gameOverModal.classList.remove('hidden');
    loadHighScores();
});

// Collection Management Event Listeners
closeCollectionsBtn.addEventListener('click', closeCollectionsModal);
createCollectionBtn.addEventListener('click', createCollection);
addWordBtn.addEventListener('click', addWordToCollection);
bulkImportBtn.addEventListener('click', bulkImportWords);
validateJsonBtn.addEventListener('click', validateJson);

// Add touch handlers for mobile buttons
startBtn.addEventListener('touchstart', (e) => { e.preventDefault(); setTouchControlsVisible(true); startGame(); }, { passive: false });
pauseBtn.addEventListener('touchstart', (e) => { e.preventDefault(); togglePause(); }, { passive: false });

// Keyboard Controls
document.addEventListener('keydown', handleKeyPress);

// Touch Controls Handlers
(function attachTouchControls(){
	const btnUp = document.getElementById('btn-up');
	const btnDown = document.getElementById('btn-down');
	const btnLeft = document.getElementById('btn-left');
	const btnRight = document.getElementById('btn-right');
	if (!btnUp || !btnDown || !btnLeft || !btnRight) return;
	
	function setDir(x, y) {
		if (!gameState.isRunning) return;
		// Prevent reversing directly
		if ((x === 0 && y === -1 && snake.direction.y !== 1) ||
			(x === 0 && y === 1 && snake.direction.y !== -1) ||
			(x === -1 && y === 0 && snake.direction.x !== 1) ||
			(x === 1 && y === 0 && snake.direction.x !== -1)) {
			snake.direction = { x, y };
		}
	}
	
	const events = ['click', 'touchstart'];
	events.forEach(evt => {
		btnUp.addEventListener(evt, e => { e.preventDefault(); setDir(0, -1); }, { passive: false });
		btnDown.addEventListener(evt, e => { e.preventDefault(); setDir(0, 1); }, { passive: false });
		btnLeft.addEventListener(evt, e => { e.preventDefault(); setDir(-1, 0); }, { passive: false });
		btnRight.addEventListener(evt, e => { e.preventDefault(); setDir(1, 0); }, { passive: false });
	});
})();

// Versioning
const VERSION = '1.2.0'; // Keep in sync with package.json

// Initialize Game
function init() {
    resizeCanvas();
    drawGame();
    loadHighScores();
    
    // Check for collection URL parameter
    checkForCollectionUrl();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        drawGame();
    });
}

// Add version and footnote to the page
function addFooter() {
    let footer = document.getElementById('game-footer');
    if (!footer) {
        footer = document.createElement('footer');
        footer.id = 'game-footer';
        footer.style.textAlign = 'center';
        footer.style.fontSize = '0.9em';
        footer.style.color = '#bdbdbd';
        footer.style.marginTop = '10px';
        footer.style.userSelect = 'none';
        footer.innerHTML = `<span style="font-size:0.85em;">v${VERSION}</span> &nbsp;|&nbsp; Vibecoded with <span style='color:#e75480;font-size:1.1em;'>&#10084;&#65039;</span> by Marysia`;
        document.getElementById('game-container').appendChild(footer);
    }
}

// Resize Canvas to fit container
function resizeCanvas() {
    const container = document.getElementById('game-container');
    const containerWidth = container.clientWidth - 30; // Account for padding
    const containerHeight = Math.min(container.clientHeight * 0.6, 600); // Max 600px height
    
    // Set canvas size
    canvas.width = Math.min(containerWidth, 800);
    canvas.height = Math.min(containerHeight, 600);
    
    // Update snake size based on canvas size
    snake.size = Math.min(snake.baseSize, canvas.width * 0.03, canvas.height * 0.03);
    
    // Update snake position to center
    snake.x = canvas.width / 2;
    snake.y = canvas.height / 2;
    snake.segments = [{ x: snake.x, y: snake.y }];
}

// Start Game
function startGame() {
    if (gameState.isRunning) return;
    
    resetGameState();
    generateLevelWords();
    spawnNewWord();
    spawnApples();
    
    gameState.isRunning = true;
    gameState.isPaused = false;
    
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    
    startTimer();
    gameLoop = setInterval(updateGame, 1000 / 60); // 60 FPS
    setTouchControlsVisible(true);
}

// Reset Game State
function resetGameState() {
    gameState.score = 0;
    gameState.level = 1;
    gameState.lives = 5;
    gameState.currentWordIndex = 0;
    gameState.timeLeft = levelConfig[0].timeLimit;
    gameState.wrongAnswers = [];
    gameState.practicedWords = [];
    gameState.allWordsPracticed = false;
    
    // Center snake on current canvas
    snake.x = canvas.width / 2;
    snake.y = canvas.height / 2;
    snake.direction = { x: 0, y: 0 };
    snake.segments = [{ x: snake.x, y: snake.y }];
    snake.speed = snake.baseSpeed; // Reset speed to base speed
    
    // Reset UI elements
    practiceCollectionInfo.classList.add('hidden');
    savePracticeWordsCheckbox.checked = false;
    saveScoreBtn.disabled = false;
    saveScoreBtn.textContent = 'Zapisz wynik';
    
    updateDisplay();
}

// Generate Words for Current Level
function generateLevelWords() {
    if (gameState.isCustomGame && gameState.customCollection) {
        // Use custom collection words
        generateCustomLevelWords();
    } else {
        // Use default words
        generateDefaultLevelWords();
    }
    
    // Randomly select which word will spawn a treasure (1 treasure per level)
    gameState.treasureWordIndex = Math.floor(Math.random() * gameState.wordsInLevel.length);
    treasure.active = false;
    treasure.collected = false;
}

// Generate words from default word lists
function generateDefaultLevelWords() {
    const config = levelConfig[gameState.level - 1];
    const regularCount = Math.floor(config.wordsPerLevel * config.regularPercent / 100);
    const irregularCount = config.wordsPerLevel - regularCount;
    
    const shuffledRegular = [...regularWords].sort(() => Math.random() - 0.5);
    const shuffledIrregular = [...irregularWords].sort(() => Math.random() - 0.5);
    
    gameState.wordsInLevel = [
        ...shuffledRegular.slice(0, regularCount),
        ...shuffledIrregular.slice(0, irregularCount)
    ].sort(() => Math.random() - 0.5);
}

// Generate words from custom collection
function generateCustomLevelWords() {
    const config = levelConfig[gameState.level - 1];
    
    // Get words that haven't been practiced yet
    const availableWords = gameState.customCollection.words.filter(word => 
        !gameState.practicedWords.some(practiced => 
            practiced.word === word.word && 
            practiced.letterIndex === word.letterIndex &&
            practiced.correct === word.correct &&
            practiced.incorrect === word.incorrect
        )
    );
    
    // Check if all words have been practiced
    if (availableWords.length === 0) {
        gameState.allWordsPracticed = true;
        gameState.wordsInLevel = [];
        return;
    }
    
    const wordsPerLevel = Math.min(config.wordsPerLevel, availableWords.length);
    
    // Shuffle available words and take the required amount
    const shuffledWords = [...availableWords].sort(() => Math.random() - 0.5);
    gameState.wordsInLevel = shuffledWords.slice(0, wordsPerLevel);
}

// Spawn New Word
function spawnNewWord() {
    // Check if all words in custom collection have been practiced
    if (gameState.isCustomGame && gameState.allWordsPracticed) {
        gameOver();
        return;
    }
    
    if (gameState.currentWordIndex >= gameState.wordsInLevel.length) {
        nextLevel();
        return;
    }
    
    gameState.currentWord = gameState.wordsInLevel[gameState.currentWordIndex];
    gameState.timeLeft = levelConfig[gameState.level - 1].timeLimit;
    
    // Spawn treasure if this is the treasure word for this level
    if (gameState.currentWordIndex === gameState.treasureWordIndex && !treasure.collected) {
        spawnTreasure();
    }
    
    displayWord();
    spawnApples();
}

// Display Word with Missing Letter
function displayWord() {
    const word = gameState.currentWord.word;
    const index = gameState.currentWord.letterIndex;
    const letterLength = gameState.currentWord.correct.length;
    
    const before = word.substring(0, index);
    const after = word.substring(index + letterLength);
    const displayWord = before + '_' + after; // Always show one underscore, regardless of letter length
    
    wordDisplay.textContent = displayWord;
}

// Spawn Apples
function spawnApples() {
    const margin = Math.min(50, canvas.width * 0.1, canvas.height * 0.1);
    const appleSize = snake.size; // Same size as snake head
    
    // Correct apple (left side)
    apples.correct.x = margin + Math.random() * (canvas.width / 2 - margin - appleSize);
    apples.correct.y = margin + Math.random() * (canvas.height - 2 * margin - appleSize);
    apples.correct.letter = gameState.currentWord.correct;
    apples.correct.color = '#f44336'; // Both apples are red
    
    // Incorrect apple (right side)
    apples.incorrect.x = canvas.width / 2 + Math.random() * (canvas.width / 2 - margin - appleSize);
    apples.incorrect.y = margin + Math.random() * (canvas.height - 2 * margin - appleSize);
    apples.incorrect.letter = gameState.currentWord.incorrect;
    apples.incorrect.color = '#f44336'; // Both apples are red
}

// Spawn Treasure
function spawnTreasure() {
    const margin = Math.min(50, canvas.width * 0.1, canvas.height * 0.1);
    
    // Random position, avoiding apples
    do {
        treasure.x = margin + Math.random() * (canvas.width - 2 * margin - treasure.size);
        treasure.y = margin + Math.random() * (canvas.height - 2 * margin - treasure.size);
    } while (
        Math.abs(treasure.x - apples.correct.x) < treasure.size + snake.size &&
        Math.abs(treasure.y - apples.correct.y) < treasure.size + snake.size &&
        Math.abs(treasure.x - apples.incorrect.x) < treasure.size + snake.size &&
        Math.abs(treasure.y - apples.incorrect.y) < treasure.size + snake.size
    );
    
    treasure.active = true;
    treasure.type = Math.random() < 0.5 ? 'leaf' : 'flower';
}

// Start Timer
function startTimer() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    
    gameState.timerInterval = setInterval(() => {
        if (!gameState.isPaused) {
            gameState.timeLeft--;
            updateTimerDisplay();
            
            if (gameState.timeLeft <= 0) {
                handleWrongAnswer();
            }
        }
    }, 1000);
}

// Update Timer Display
function updateTimerDisplay() {
    const config = levelConfig[gameState.level - 1];
    const percentage = (gameState.timeLeft / config.timeLimit) * 100;
    timerFill.style.width = percentage + '%';
    
    if (percentage < 30) {
        timerFill.style.background = '#f44336';
    } else if (percentage < 60) {
        timerFill.style.background = '#FF9800';
    } else {
        timerFill.style.background = '#4CAF50';
    }
}

// Handle Key Press
function handleKeyPress(event) {
    if (!gameState.isRunning) return;
    
    const key = event.key.toLowerCase();
    
    switch (key) {
        case 'arrowup':
        case 'w':
            if (snake.direction.y !== 1) {
                snake.direction = { x: 0, y: -1 };
            }
            break;
        case 'arrowdown':
        case 's':
            if (snake.direction.y !== -1) {
                snake.direction = { x: 0, y: 1 };
            }
            break;
        case 'arrowleft':
        case 'a':
            if (snake.direction.x !== 1) {
                snake.direction = { x: -1, y: 0 };
            }
            break;
        case 'arrowright':
        case 'd':
            if (snake.direction.x !== -1) {
                snake.direction = { x: 1, y: 0 };
            }
            break;
        case ' ':
            event.preventDefault(); // Prevent page scrolling
            togglePause();
            break;
    }
}

// Update Game
function updateGame() {
    if (!gameState.isRunning || gameState.isPaused) return;
    
    moveSnake();
    checkCollisions();
    drawGame();
}

// Move Snake
function moveSnake() {
    if (snake.direction.x === 0 && snake.direction.y === 0) return;
    
    const newHead = {
        x: snake.segments[0].x + snake.direction.x * snake.speed,
        y: snake.segments[0].y + snake.direction.y * snake.speed
    };
    
    // Wrap around screen
    if (newHead.x < 0) newHead.x = canvas.width;
    if (newHead.x > canvas.width) newHead.x = 0;
    if (newHead.y < 0) newHead.y = canvas.height;
    if (newHead.y > canvas.height) newHead.y = 0;
    
    snake.segments.unshift(newHead);
    snake.segments.pop();
}

// Check Collisions
function checkCollisions() {
    const head = snake.segments[0];
    
    // Check apple collisions
    if (checkAppleCollision(head, apples.correct)) {
        handleCorrectAnswer();
    } else if (checkAppleCollision(head, apples.incorrect)) {
        handleWrongAnswer();
    }
    
    // Check treasure collision
    if (treasure.active && !treasure.collected && checkTreasureCollision(head)) {
        handleTreasureCollection();
    }
}

// Check Apple Collision
function checkAppleCollision(head, apple) {
    const appleSize = snake.size; // Same size as snake head
    const distance = Math.sqrt(
        Math.pow(head.x - apple.x, 2) + Math.pow(head.y - apple.y, 2)
    );
    return distance < snake.size + appleSize;
}

// Check Treasure Collision
function checkTreasureCollision(head) {
    const distance = Math.sqrt(
        Math.pow(head.x - treasure.x, 2) + Math.pow(head.y - treasure.y, 2)
    );
    return distance < snake.size + treasure.size;
}

// Handle Correct Answer
function handleCorrectAnswer() {
    gameState.score++;
    
    // Add time bonus if more than 50% of level time remains
    const currentLevelConfig = levelConfig[gameState.level - 1];
    const timeThreshold = currentLevelConfig.timeLimit * 0.5;
    if (gameState.timeLeft > timeThreshold) {
        gameState.score++; // Add 1 bonus point for quick answer
    }
    
    // Track practiced word in custom collections
    if (gameState.isCustomGame && gameState.currentWord) {
        gameState.practicedWords.push({
            word: gameState.currentWord.word,
            letterIndex: gameState.currentWord.letterIndex,
            correct: gameState.currentWord.correct,
            incorrect: gameState.currentWord.incorrect,
            result: 'correct'
        });
    }
    
    growSnake();
    gameState.currentWordIndex++;
    
    if (gameState.currentWordIndex >= gameState.wordsInLevel.length) {
        nextLevel();
    } else {
        spawnNewWord();
    }
    
    updateDisplay();
}

// Handle Wrong Answer
function handleWrongAnswer() {
    // Record wrong answer for review
    if (gameState.currentWord) {
        gameState.wrongAnswers.push({
            word: gameState.currentWord.word,
            index: gameState.currentWord.letterIndex,
            correct: gameState.currentWord.correct,
            incorrect: gameState.currentWord.incorrect
        });
        
        // Track practiced word in custom collections
        if (gameState.isCustomGame) {
            gameState.practicedWords.push({
                word: gameState.currentWord.word,
                letterIndex: gameState.currentWord.letterIndex,
                correct: gameState.currentWord.correct,
                incorrect: gameState.currentWord.incorrect,
                result: 'incorrect'
            });
        }
    }

    gameState.lives--;
    gameState.currentWordIndex++;
    
    if (gameState.lives <= 0) {
        gameOver();
    } else {
        spawnNewWord();
    }
    
    updateDisplay();
}

// Handle Treasure Collection
function handleTreasureCollection() {
    treasure.collected = true;
    treasure.active = false;
    gameState.score++; // Add 1 point for treasure
    updateDisplay();
}

// Grow Snake
function growSnake() {
    const tail = snake.segments[snake.segments.length - 1];
    snake.segments.push({ ...tail });
}

// Next Level
function nextLevel() {
    gameState.level++;
    
    if (gameState.level > levelConfig.length) {
        // Game completed!
        gameOver();
        return;
    }
    
    // Increase speed every 2 levels
    if (gameState.level % 2 === 0) {
        snake.speed = Math.min(snake.baseSpeed + (gameState.level / 2) * 0.5, 4); // Cap at speed 4, slower increase
    }
    
    gameState.currentWordIndex = 0;
    generateLevelWords();
    spawnNewWord();
    updateDisplay();
}

// Toggle Pause
function togglePause() {
    if (!gameState.isRunning) return;
    
    gameState.isPaused = !gameState.isPaused;
    pauseBtn.textContent = gameState.isPaused ? 'WZNÓW' : 'PAUZA';
}

// Game Over
function gameOver() {
    // Add bonus points for remaining lives (2 points per heart)
    const lifeBonus = gameState.lives * 2;
    gameState.score += lifeBonus;
    
    gameState.isRunning = false;
    gameState.isPaused = false;
    
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    if (gameLoop) clearInterval(gameLoop);
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    pauseBtn.textContent = 'PAUZA';
    
    finalScoreDisplay.textContent = gameState.score;

    // Update game over message for collection completion
    updateGameOverMessage();

    // Populate wrong answers review modal
    populateWrongAnswers();

    // Show review first, then proceed to game-over modal
    reviewModal.classList.remove('hidden');
    setTouchControlsVisible(false);
}

function populateWrongAnswers() {
    wrongAnswersList.innerHTML = '';
    if (gameState.wrongAnswers.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Brak błędnych odpowiedzi. Świetna robota!';
        wrongAnswersList.appendChild(li);
        return;
    }

    gameState.wrongAnswers.forEach(({ word, index, correct, incorrect }) => {
        const before = word.substring(0, index);
        const after = word.substring(index + correct.length);
        const li = document.createElement('li');
        li.style.margin = '6px 0';
        li.innerHTML = `${before}<span style="text-decoration:line-through;color:#f44336">${incorrect}</span><span style="color:#2e7d32;font-weight:bold">${correct}</span>${after}`;
        wrongAnswersList.appendChild(li);
    });
}

// Update game over message based on game type and completion
function updateGameOverMessage() {
    const gameOverTitle = document.querySelector('#game-over-modal h2');
    
    if (gameState.isCustomGame && gameState.allWordsPracticed) {
        // Collection completed
        const totalWords = gameState.customCollection.words.length;
        const correctAnswers = gameState.practicedWords.filter(w => w.result === 'correct').length;
        const accuracy = Math.round((correctAnswers / totalWords) * 100);
        
        gameOverTitle.textContent = '🎉 Kolekcja ukończona!';
        
        // Add collection completion info
        let completionInfo = document.getElementById('collection-completion-info');
        if (!completionInfo) {
            completionInfo = document.createElement('div');
            completionInfo.id = 'collection-completion-info';
            completionInfo.style.cssText = 'background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #4CAF50;';
            gameOverTitle.parentNode.insertBefore(completionInfo, gameOverTitle.nextSibling);
        }
        
        completionInfo.innerHTML = `
            <h3 style="margin: 0 0 10px 0; color: #2e7d32;">📚 Statystyki kolekcji</h3>
            <p style="margin: 5px 0;"><strong>Nazwa kolekcji:</strong> ${gameState.customCollection.name}</p>
            <p style="margin: 5px 0;"><strong>Wszystkich słów:</strong> ${totalWords}</p>
            <p style="margin: 5px 0;"><strong>Poprawnych odpowiedzi:</strong> ${correctAnswers}</p>
            <p style="margin: 5px 0;"><strong>Dokładność:</strong> ${accuracy}%</p>
            <div style="margin: 15px 0; text-align: center;">
                <a href="?manage=collections" style="background: #2196F3; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none; display: inline-block; font-size: 14px;">
                    🛠️ Zarządzaj kolekcjami
                </a>
            </div>
            <p style="margin: 10px 0 0 0; font-size: 0.9em; color: #666;">
                🎯 Gratulacje! Przerobiłeś wszystkie słowa z tej kolekcji!
            </p>
        `;
    } else if (gameState.isCustomGame) {
        // Custom game but not completed
        gameOverTitle.textContent = 'Koniec Gry!';
        
        // Add collection info for incomplete custom games
        let completionInfo = document.getElementById('collection-completion-info');
        if (!completionInfo) {
            completionInfo = document.createElement('div');
            completionInfo.id = 'collection-completion-info';
            completionInfo.style.cssText = 'background: #fff3e0; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #FF9800;';
            gameOverTitle.parentNode.insertBefore(completionInfo, gameOverTitle.nextSibling);
        }
        
        const totalWords = gameState.customCollection.words.length;
        const practicedWords = gameState.practicedWords.length;
        const correctAnswers = gameState.practicedWords.filter(w => w.result === 'correct').length;
        const accuracy = practicedWords > 0 ? Math.round((correctAnswers / practicedWords) * 100) : 0;
        
        completionInfo.innerHTML = `
            <h3 style="margin: 0 0 10px 0; color: #E65100;">📚 Postęp w kolekcji</h3>
            <p style="margin: 5px 0;"><strong>Nazwa kolekcji:</strong> ${gameState.customCollection.name}</p>
            <p style="margin: 5px 0;"><strong>Wszystkich słów:</strong> ${totalWords}</p>
            <p style="margin: 5px 0;"><strong>Przećwiczonych słów:</strong> ${practicedWords}</p>
            <p style="margin: 5px 0;"><strong>Poprawnych odpowiedzi:</strong> ${correctAnswers}</p>
            <p style="margin: 5px 0;"><strong>Dokładność:</strong> ${accuracy}%</p>
            <div style="margin: 15px 0; text-align: center;">
                <a href="?collection=${gameState.customCollection.slug}" style="background: #4CAF50; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none; display: inline-block; font-size: 14px; margin-right: 10px;">
                    🔄 Graj ponownie
                </a>
                <a href="?manage=collections" style="background: #2196F3; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none; display: inline-block; font-size: 14px;">
                    🛠️ Zarządzaj kolekcjami
                </a>
            </div>
            <p style="margin: 10px 0 0 0; font-size: 0.9em; color: #666;">
                💡 Możesz kontynuować grę, aby przećwiczyć pozostałe słowa z kolekcji!
            </p>
        `;
    } else {
        // Regular game
        gameOverTitle.textContent = 'Koniec Gry!';
        
        // Remove completion info if it exists
        const completionInfo = document.getElementById('collection-completion-info');
        if (completionInfo) {
            completionInfo.remove();
        }
    }
}

// Reset Game
function resetGame() {
	gameOverModal.classList.add('hidden');
	practiceCollectionInfo.classList.add('hidden');
	savePracticeWordsCheckbox.checked = false;
	setTouchControlsVisible(true);
	startGame();
}

// Save High Score
function saveHighScore() {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert('Proszę podać swoje imię!');
        return;
    }
    
    const shouldSavePracticeWords = savePracticeWordsCheckbox.checked;
    
    // Get reference to the highScores node in Firebase
    const highScoresRef = firebase.database().ref('highScores');
    
    // Check if player already has a score
    highScoresRef.orderByChild('name').equalTo(playerName).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                // Player exists, check if new score is higher
                const existingScore = snapshot.val();
                const playerKey = Object.keys(existingScore)[0];
                const currentHighScore = existingScore[playerKey].score;
                
                if (gameState.score > currentHighScore) {
                    // Update with higher score
                    return highScoresRef.child(playerKey).update({
                        score: gameState.score,
                        date: new Date().toLocaleDateString('pl-PL')
                    });
                } else {
                    // Score not higher, don't update
                    return Promise.resolve();
                }
            } else {
                // New player, add new entry
                return highScoresRef.push({
                    name: playerName,
                    score: gameState.score,
                    date: new Date().toLocaleDateString('pl-PL')
                });
            }
        })
        .then(() => {
            loadHighScores();
            saveScoreBtn.disabled = true;
            saveScoreBtn.textContent = 'Zapisano!';
            
            // Handle practice collection creation if requested
            if (shouldSavePracticeWords && gameState.wrongAnswers.length > 0) {
                return createPracticeCollection(playerName);
            }
        })
        .then((practiceCollectionData) => {
            if (practiceCollectionData) {
                showPracticeCollectionInfo(practiceCollectionData);
            }
        })
        .catch((error) => {
            console.error('Error saving score:', error);
            alert('Błąd podczas zapisywania wyniku. Spróbuj ponownie.');
        });
}

// Load High Scores
function loadHighScores() {
    const highScoresRef = firebase.database().ref('highScores');
    
    highScoresRef.orderByChild('score').limitToLast(10).once('value')
        .then((snapshot) => {
            highScoresList.innerHTML = '';
            
            if (snapshot.exists()) {
                const scores = [];
                snapshot.forEach((childSnapshot) => {
                    scores.push({
                        key: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                
                // Sort by score (highest first) and take top 10
                scores.sort((a, b) => b.score - a.score);
                scores.slice(0, 10).forEach((score, index) => {
                    const li = document.createElement('li');
                    li.textContent = `${index + 1}. ${score.name} - ${score.score} pkt (${score.date})`;
                    highScoresList.appendChild(li);
                });
            }
        })
        .catch((error) => {
            console.error('Error loading scores:', error);
            highScoresList.innerHTML = '<li>Błąd podczas ładowania wyników</li>';
        });
}

// Update Display
function updateDisplay() {
    scoreDisplay.textContent = `Punkty: ${gameState.score}`;
    levelDisplay.textContent = `Poziom: ${gameState.level}`;
    livesDisplay.textContent = '❤️'.repeat(gameState.lives);
}

// Draw Game
function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#f0f8f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    drawSnake();
    
    // Draw apples
    drawApples();
    
    // Draw treasure
    drawTreasure();
    
    // Draw grid (optional)
    drawGrid();
}

// Draw Snake
function drawSnake() {
    ctx.fillStyle = snake.color;
    
    // Draw body segments first (so they appear behind the head)
    for (let i = snake.segments.length - 1; i > 0; i--) {
        const segment = snake.segments[i];
        ctx.fillStyle = snake.color;
        ctx.beginPath();
        ctx.arc(segment.x, segment.y, snake.size - 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Draw head last (so it appears on top)
    if (snake.segments.length > 0) {
        const head = snake.segments[0];
        
        // Draw head
        ctx.fillStyle = '#2E7D32';
        ctx.beginPath();
        ctx.arc(head.x, head.y, snake.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw eyes - always visible and proportional to snake size
        const eyeSize = Math.max(3, snake.size * 0.25); // Bigger eyes
        const eyeOffset = Math.max(4, snake.size * 0.3); // Slightly more spaced
        
        // White part of eyes
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(head.x - eyeOffset, head.y - eyeOffset, eyeSize, 0, Math.PI * 2);
        ctx.arc(head.x + eyeOffset, head.y - eyeOffset, eyeSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Black pupils
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(head.x - eyeOffset, head.y - eyeOffset, eyeSize * 0.5, 0, Math.PI * 2);
        ctx.arc(head.x + eyeOffset, head.y - eyeOffset, eyeSize * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw smiling mouth
        const mouthSize = Math.max(3, snake.size * 0.35); // Bigger mouth
        const mouthY = head.y + eyeOffset * 0.3; // Closer to eyes
        
        ctx.strokeStyle = '#FF0000'; // Bright red for mouth
        ctx.lineWidth = Math.max(2, snake.size * 0.12); // Thicker line
        ctx.beginPath();
        ctx.arc(head.x, mouthY, mouthSize, 0, Math.PI, false); // Smile arc
        ctx.stroke();
    }
}

// Draw Apples
function drawApples() {
    const appleSize = snake.size; // Same size as snake head
    const fontSize = Math.max(16, Math.min(24, appleSize * 0.6)); // Proportional font size
    
    // Draw correct apple
    ctx.fillStyle = apples.correct.color;
    ctx.beginPath();
    ctx.arc(apples.correct.x, apples.correct.y, appleSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw letter on correct apple
    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(apples.correct.letter, apples.correct.x, apples.correct.y);
    
    // Draw incorrect apple
    ctx.fillStyle = apples.incorrect.color;
    ctx.beginPath();
    ctx.arc(apples.incorrect.x, apples.incorrect.y, appleSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw letter on incorrect apple
    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(apples.incorrect.letter, apples.incorrect.x, apples.incorrect.y);
}

// Draw Grid (optional visual aid)
function drawGrid() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// Draw Treasure
function drawTreasure() {
    if (!treasure.active || treasure.collected) return;
    
    const treasureSize = treasure.size;
    
    if (treasure.type === 'leaf') {
        // Draw leaf (green)
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.ellipse(treasure.x, treasure.y, treasureSize, treasureSize * 0.6, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Leaf stem
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(treasure.x - treasureSize * 0.3, treasure.y - treasureSize * 0.3);
        ctx.lineTo(treasure.x - treasureSize * 0.6, treasure.y - treasureSize * 0.6);
        ctx.stroke();
    } else {
        // Draw flower (pink/purple)
        ctx.fillStyle = '#E91E63';
        ctx.beginPath();
        ctx.arc(treasure.x, treasure.y, treasureSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Flower petals
        ctx.fillStyle = '#FFC0CB';
        for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5;
            const petalX = treasure.x + Math.cos(angle) * treasureSize * 0.8;
            const petalY = treasure.y + Math.sin(angle) * treasureSize * 0.8;
            ctx.beginPath();
            ctx.arc(petalX, petalY, treasureSize * 0.4, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// Utility to toggle touch controls visibility
function setTouchControlsVisible(visible) {
	const tc = document.getElementById('touch-controls');
	if (!tc) return;
	tc.style.display = visible ? '' : 'none';
}

// ===== COLLECTION MANAGEMENT FUNCTIONS =====

// Check URL for collection parameter
function checkForCollectionUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const collectionSlug = urlParams.get('collection');
    const manageCollections = urlParams.get('manage');
    
    if (collectionSlug) {
        loadCustomCollection(collectionSlug);
    } else if (manageCollections === 'collections') {
        // Auto-open collections management modal
        setTimeout(() => {
            openCollectionsModal();
        }, 100);
    }
}

// Load custom collection from Firebase
function loadCustomCollection(slug) {
    const collectionsRef = firebase.database().ref('collections');
    
    collectionsRef.orderByChild('slug').equalTo(slug).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                const collectionData = snapshot.val();
                const collectionKey = Object.keys(collectionData)[0];
                const collection = collectionData[collectionKey];
                
                // Load words for this collection
                const wordsRef = firebase.database().ref(`collections/${collectionKey}/words`);
                return wordsRef.once('value').then((wordsSnapshot) => {
                    const words = [];
                    if (wordsSnapshot.exists()) {
                        wordsSnapshot.forEach((wordSnapshot) => {
                            words.push(wordSnapshot.val());
                        });
                    }
                    
                    // Set up custom collection data
                    gameState.customCollection = {
                        ...collection,
                        words: words
                    };
                    gameState.isCustomGame = true;
                    
                    // Update page title to show collection name
                    document.title = `Ortożerca - ${collection.name}`;
                    
                    // Show collection info in instructions
                    const instructionsModal = document.getElementById('instructions-modal');
                    const instructionsContent = instructionsModal.querySelector('.instructions');
                    const collectionInfo = document.createElement('div');
                    collectionInfo.style.cssText = 'background: #e3f2fd; padding: 10px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #2196F3;';
                    collectionInfo.innerHTML = `<strong>📚 Kolekcja:</strong> ${collection.name}<br><strong>📝 Słów:</strong> ${words.length}`;
                    instructionsContent.insertBefore(collectionInfo, instructionsContent.firstChild);
                });
            } else {
                console.error('Collection not found:', slug);
                alert('Kolekcja nie została znaleziona!');
            }
        })
        .catch((error) => {
            console.error('Error loading collection:', error);
            alert('Błąd podczas ładowania kolekcji!');
        });
}

// Generate slug from collection name
function generateSlug(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim();
}

// Open collections management modal
function openCollectionsModal() {
    collectionsModal.classList.remove('hidden');
    loadCollections();
}

// Close collections management modal
function closeCollectionsModal() {
    collectionsModal.classList.add('hidden');
}

// Create new collection
function createCollection() {
    const name = collectionNameInput.value.trim();
    if (!name) {
        alert('Proszę podać nazwę kolekcji!');
        return;
    }
    
    const slug = generateSlug(name);
    const collectionsRef = firebase.database().ref('collections');
    
    // Check if slug already exists
    collectionsRef.orderByChild('slug').equalTo(slug).once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert('Kolekcja o takiej nazwie już istnieje!');
                return;
            }
            
            // Create new collection
            const newCollection = {
                name: name,
                slug: slug,
                createdAt: new Date().toISOString(),
                wordCount: 0
            };
            
            return collectionsRef.push(newCollection);
        })
        .then(() => {
            collectionNameInput.value = '';
            loadCollections();
            loadCollectionSelect();
            alert('Kolekcja została utworzona!');
        })
        .catch((error) => {
            console.error('Error creating collection:', error);
            alert('Błąd podczas tworzenia kolekcji!');
        });
}

// Add word to collection
function addWordToCollection() {
    const collectionId = collectionSelect.value;
    const word = wordInput.value.trim();
    const letterIndex = parseInt(letterIndexInput.value);
    const correct = correctLetterInput.value.trim();
    const incorrect = incorrectLetterInput.value.trim();
    
    if (!collectionId || !word || isNaN(letterIndex) || !correct || !incorrect) {
        alert('Proszę wypełnić wszystkie pola!');
        return;
    }
    
    if (letterIndex < 0 || letterIndex >= word.length) {
        alert('Indeks litery jest nieprawidłowy!');
        return;
    }
    
    const wordData = {
        word: word,
        letterIndex: letterIndex,
        correct: correct,
        incorrect: incorrect
    };
    
    const wordsRef = firebase.database().ref(`collections/${collectionId}/words`);
    const collectionRef = firebase.database().ref(`collections/${collectionId}`);
    
    wordsRef.push(wordData)
        .then(() => {
            // Update word count
            return collectionRef.once('value');
        })
        .then((snapshot) => {
            const collection = snapshot.val();
            const wordCount = Object.keys(collection.words || {}).length;
            return collectionRef.update({ wordCount: wordCount });
        })
        .then(() => {
            // Clear form
            wordInput.value = '';
            letterIndexInput.value = '';
            correctLetterInput.value = '';
            incorrectLetterInput.value = '';
            
            loadCollections();
            alert('Słowo zostało dodane!');
        })
        .catch((error) => {
            console.error('Error adding word:', error);
            alert('Błąd podczas dodawania słowa!');
        });
}

// Load collections for display
function loadCollections() {
    const collectionsRef = firebase.database().ref('collections');
    
    collectionsRef.once('value')
        .then((snapshot) => {
            collectionsContainer.innerHTML = '';
            
            if (!snapshot.exists()) {
                collectionsContainer.innerHTML = '<p>Brak kolekcji. Utwórz pierwszą kolekcję!</p>';
                return;
            }
            
            const collections = snapshot.val();
            Object.keys(collections).forEach(collectionId => {
                const collection = collections[collectionId];
                createCollectionCard(collectionId, collection);
            });
        })
        .catch((error) => {
            console.error('Error loading collections:', error);
            collectionsContainer.innerHTML = '<p>Błąd podczas ładowania kolekcji.</p>';
        });
}

// Create collection card
function createCollectionCard(collectionId, collection) {
    const card = document.createElement('div');
    card.style.cssText = 'border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin: 10px 0; background: #f9f9f9;';
    
    card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="margin: 0; color: #333;">${collection.name}</h4>
            <div>
                <button onclick="playCollection('${collection.slug}')" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; margin-right: 5px;">Graj</button>
                <button onclick="deleteCollection('${collectionId}')" style="background: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 4px;">Usuń</button>
            </div>
        </div>
        <p style="margin: 5px 0; color: #666;">Slug: <code>${collection.slug}</code></p>
        <p style="margin: 5px 0; color: #666;">Słów: ${collection.wordCount || 0}</p>
        <div id="words-${collectionId}" style="margin-top: 10px;"></div>
    `;
    
    collectionsContainer.appendChild(card);
    
    // Load words for this collection
    loadCollectionWords(collectionId);
}

// Load words for a specific collection
function loadCollectionWords(collectionId) {
    const wordsRef = firebase.database().ref(`collections/${collectionId}/words`);
    
    wordsRef.once('value')
        .then((snapshot) => {
            const wordsContainer = document.getElementById(`words-${collectionId}`);
            
            if (!snapshot.exists()) {
                wordsContainer.innerHTML = '<p style="color: #999; font-style: italic;">Brak słów w tej kolekcji.</p>';
                return;
            }
            
            const words = snapshot.val();
            const wordsList = document.createElement('div');
            wordsList.style.cssText = 'max-height: 200px; overflow-y: auto;';
            
            Object.keys(words).forEach(wordId => {
                const word = words[wordId];
                const wordItem = document.createElement('div');
                wordItem.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 5px; border-bottom: 1px solid #eee;';
                
                const before = word.word.substring(0, word.letterIndex);
                const after = word.word.substring(word.letterIndex + word.correct.length);
                
                wordItem.innerHTML = `
                    <span>${before}<strong style="color: #4CAF50;">${word.correct}</strong>${after} (${word.correct}/${word.incorrect})</span>
                    <button onclick="deleteWord('${collectionId}', '${wordId}')" style="background: #f44336; color: white; border: none; padding: 2px 6px; border-radius: 3px; font-size: 12px;">Usuń</button>
                `;
                
                wordsList.appendChild(wordItem);
            });
            
            wordsContainer.appendChild(wordsList);
        })
        .catch((error) => {
            console.error('Error loading words:', error);
        });
}

// Load collections for select dropdown
function loadCollectionSelect() {
    const collectionsRef = firebase.database().ref('collections');
    
    collectionsRef.once('value')
        .then((snapshot) => {
            collectionSelect.innerHTML = '<option value="">Wybierz kolekcję</option>';
            bulkCollectionSelect.innerHTML = '<option value="">Wybierz kolekcję</option>';
            
            if (snapshot.exists()) {
                const collections = snapshot.val();
                Object.keys(collections).forEach(collectionId => {
                    const collection = collections[collectionId];
                    
                    // Add to regular select
                    const option = document.createElement('option');
                    option.value = collectionId;
                    option.textContent = collection.name;
                    collectionSelect.appendChild(option);
                    
                    // Add to bulk import select
                    const bulkOption = document.createElement('option');
                    bulkOption.value = collectionId;
                    bulkOption.textContent = collection.name;
                    bulkCollectionSelect.appendChild(bulkOption);
                });
            }
        })
        .catch((error) => {
            console.error('Error loading collections for select:', error);
        });
}

// Play collection
function playCollection(slug) {
    window.location.href = `?collection=${slug}`;
}

// Delete collection
function deleteCollection(collectionId) {
    if (!confirm('Czy na pewno chcesz usunąć tę kolekcję? Ta operacja jest nieodwracalna!')) {
        return;
    }
    
    const collectionRef = firebase.database().ref(`collections/${collectionId}`);
    
    collectionRef.remove()
        .then(() => {
            loadCollections();
            loadCollectionSelect();
            alert('Kolekcja została usunięta!');
        })
        .catch((error) => {
            console.error('Error deleting collection:', error);
            alert('Błąd podczas usuwania kolekcji!');
        });
}

// Delete word from collection
function deleteWord(collectionId, wordId) {
    if (!confirm('Czy na pewno chcesz usunąć to słowo?')) {
        return;
    }
    
    const wordRef = firebase.database().ref(`collections/${collectionId}/words/${wordId}`);
    const collectionRef = firebase.database().ref(`collections/${collectionId}`);
    
    wordRef.remove()
        .then(() => {
            // Update word count
            return collectionRef.once('value');
        })
        .then((snapshot) => {
            const collection = snapshot.val();
            const wordCount = Object.keys(collection.words || {}).length;
            return collectionRef.update({ wordCount: wordCount });
        })
        .then(() => {
            loadCollections();
            alert('Słowo zostało usunięte!');
        })
        .catch((error) => {
            console.error('Error deleting word:', error);
            alert('Błąd podczas usuwania słowa!');
        });
}

// ===== BULK IMPORT FUNCTIONS =====

// Validate JSON format
function validateJson() {
    const jsonText = bulkWordsJson.value.trim();
    
    if (!jsonText) {
        alert('Proszę wkleić JSON do pola tekstowego!');
        return;
    }
    
    try {
        const words = JSON.parse(jsonText);
        
        if (!Array.isArray(words)) {
            alert('JSON musi być tablicą słów!');
            return;
        }
        
        if (words.length === 0) {
            alert('Tablica nie może być pusta!');
            return;
        }
        
        // Validate each word object
        const errors = [];
        words.forEach((word, index) => {
            if (!word.word || typeof word.word !== 'string') {
                errors.push(`Słowo ${index + 1}: brak lub nieprawidłowe pole "word"`);
            }
            if (typeof word.letterIndex !== 'number' || word.letterIndex < 0) {
                errors.push(`Słowo ${index + 1}: nieprawidłowe pole "letterIndex"`);
            }
            if (!word.correct || typeof word.correct !== 'string') {
                errors.push(`Słowo ${index + 1}: brak lub nieprawidłowe pole "correct"`);
            }
            if (!word.incorrect || typeof word.incorrect !== 'string') {
                errors.push(`Słowo ${index + 1}: brak lub nieprawidłowe pole "incorrect"`);
            }
            
            // Check if letterIndex is within word bounds
            if (word.word && typeof word.letterIndex === 'number') {
                if (word.letterIndex >= word.word.length) {
                    errors.push(`Słowo ${index + 1}: "letterIndex" (${word.letterIndex}) jest większy niż długość słowa "${word.word}" (${word.word.length})`);
                }
            }
        });
        
        if (errors.length > 0) {
            alert('Znaleziono błędy w JSON:\n\n' + errors.join('\n'));
            return;
        }
        
        alert(`✅ JSON jest prawidłowy!\n\nZnaleziono ${words.length} słów do importu.`);
        
    } catch (error) {
        alert('❌ Błąd w formacie JSON:\n\n' + error.message);
    }
}

// Bulk import words
function bulkImportWords() {
    const collectionId = bulkCollectionSelect.value;
    const jsonText = bulkWordsJson.value.trim();
    
    if (!collectionId) {
        alert('Proszę wybrać kolekcję!');
        return;
    }
    
    if (!jsonText) {
        alert('Proszę wkleić JSON do pola tekstowego!');
        return;
    }
    
    try {
        const words = JSON.parse(jsonText);
        
        if (!Array.isArray(words) || words.length === 0) {
            alert('JSON musi być niepustą tablicą słów!');
            return;
        }
        
        // Validate words first
        const errors = [];
        words.forEach((word, index) => {
            if (!word.word || typeof word.word !== 'string') {
                errors.push(`Słowo ${index + 1}: brak lub nieprawidłowe pole "word"`);
            }
            if (typeof word.letterIndex !== 'number' || word.letterIndex < 0) {
                errors.push(`Słowo ${index + 1}: nieprawidłowe pole "letterIndex"`);
            }
            if (!word.correct || typeof word.correct !== 'string') {
                errors.push(`Słowo ${index + 1}: brak lub nieprawidłowe pole "correct"`);
            }
            if (!word.incorrect || typeof word.incorrect !== 'string') {
                errors.push(`Słowo ${index + 1}: brak lub nieprawidłowe pole "incorrect"`);
            }
            
            if (word.word && typeof word.letterIndex === 'number' && word.letterIndex >= word.word.length) {
                errors.push(`Słowo ${index + 1}: "letterIndex" (${word.letterIndex}) jest większy niż długość słowa "${word.word}" (${word.word.length})`);
            }
        });
        
        if (errors.length > 0) {
            alert('Znaleziono błędy w JSON:\n\n' + errors.join('\n'));
            return;
        }
        
        // Confirm import
        if (!confirm(`Czy na pewno chcesz zaimportować ${words.length} słów do wybranej kolekcji?`)) {
            return;
        }
        
        // Import words
        const wordsRef = firebase.database().ref(`collections/${collectionId}/words`);
        const collectionRef = firebase.database().ref(`collections/${collectionId}`);
        
        // Add all words
        const promises = words.map(word => wordsRef.push(word));
        
        Promise.all(promises)
            .then(() => {
                // Update word count
                return collectionRef.once('value');
            })
            .then((snapshot) => {
                const collection = snapshot.val();
                const wordCount = Object.keys(collection.words || {}).length;
                return collectionRef.update({ wordCount: wordCount });
            })
            .then(() => {
                // Clear form
                bulkWordsJson.value = '';
                
                // Reload collections to show updated data
                loadCollections();
                alert(`✅ Pomyślnie zaimportowano ${words.length} słów!`);
            })
            .catch((error) => {
                console.error('Error importing words:', error);
                alert('❌ Błąd podczas importowania słów:\n\n' + error.message);
            });
        
    } catch (error) {
        alert('❌ Błąd w formacie JSON:\n\n' + error.message);
    }
}

// ===== PRACTICE COLLECTION FUNCTIONS =====

// Generate unique collection name with player nick
function generatePracticeCollectionName(playerName) {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const baseName = `${playerName}-cwiczenia`;
    const slug = `${baseName}-${timestamp}-${randomString}`;
    
    return {
        name: `${playerName} - Ćwiczenia (${new Date().toLocaleDateString('pl-PL')})`,
        slug: slug
    };
}

// Create practice collection from wrong answers
function createPracticeCollection(playerName) {
    if (gameState.wrongAnswers.length === 0) {
        return Promise.resolve(null);
    }
    
    const collectionData = generatePracticeCollectionName(playerName);
    const collectionsRef = firebase.database().ref('collections');
    
    // Create the collection
    const newCollection = {
        name: collectionData.name,
        slug: collectionData.slug,
        createdAt: new Date().toISOString(),
        wordCount: gameState.wrongAnswers.length,
        isPracticeCollection: true,
        playerName: playerName
    };
    
    return collectionsRef.push(newCollection)
        .then((collectionRef) => {
            const collectionId = collectionRef.key;
            const wordsRef = firebase.database().ref(`collections/${collectionId}/words`);
            
            // Add all wrong answers as words
            const wordPromises = gameState.wrongAnswers.map(wrongAnswer => {
                return wordsRef.push({
                    word: wrongAnswer.word,
                    letterIndex: wrongAnswer.index,
                    correct: wrongAnswer.correct,
                    incorrect: wrongAnswer.incorrect
                });
            });
            
            return Promise.all(wordPromises)
                .then(() => {
                    return {
                        collectionId: collectionId,
                        name: collectionData.name,
                        slug: collectionData.slug,
                        wordCount: gameState.wrongAnswers.length
                    };
                });
        })
        .catch((error) => {
            console.error('Error creating practice collection:', error);
            alert('Błąd podczas tworzenia kolekcji do ćwiczeń.');
            return null;
        });
}

// Show practice collection info
function showPracticeCollectionInfo(collectionData) {
    if (!collectionData) return;
    
    practiceCollectionName.textContent = collectionData.name;
    practiceCollectionLink.href = `?collection=${collectionData.slug}`;
    practiceCollectionLink.textContent = `Graj z kolekcją "${collectionData.name}"`;
    
    practiceCollectionInfo.classList.remove('hidden');
}

// Initialize game when page loads
window.addEventListener('load', () => {
    setTouchControlsVisible(false);
    init();
    addFooter();
    loadCollectionSelect();
});
