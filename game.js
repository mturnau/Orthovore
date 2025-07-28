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
    { word: "przyjaciel", letterIndex: 1, correct: "rz", incorrect: "ż" }
];

const irregularWords = [
    { word: "ołówek", letterIndex: 2, correct: "ó", incorrect: "u" },
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
    { word: "rzepa", letterIndex: 0, correct: "rz", incorrect: "ż" }
];

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
    gameLoop: null
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
const finalScoreDisplay = document.getElementById('final-score');
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const startGameBtn = document.getElementById('start-game-btn');
const highScoresList = document.getElementById('high-scores');

// Event Listeners
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', togglePause);
saveScoreBtn.addEventListener('click', saveHighScore);
playAgainBtn.addEventListener('click', resetGame);
startGameBtn.addEventListener('click', () => {
    instructionsModal.classList.add('hidden');
    startGame();
});

// Keyboard Controls
document.addEventListener('keydown', handleKeyPress);

// Versioning
const VERSION = '1.0.0'; // Keep in sync with package.json

// Initialize Game
function init() {
    resizeCanvas();
    drawGame();
    loadHighScores();
    
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
}

// Reset Game State
function resetGameState() {
    gameState.score = 0;
    gameState.level = 1;
    gameState.lives = 5;
    gameState.currentWordIndex = 0;
    gameState.timeLeft = levelConfig[0].timeLimit;
    
    // Center snake on current canvas
    snake.x = canvas.width / 2;
    snake.y = canvas.height / 2;
    snake.direction = { x: 0, y: 0 };
    snake.segments = [{ x: snake.x, y: snake.y }];
    snake.speed = snake.baseSpeed; // Reset speed to base speed
    
    updateDisplay();
}

// Generate Words for Current Level
function generateLevelWords() {
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

// Spawn New Word
function spawnNewWord() {
    if (gameState.currentWordIndex >= gameState.wordsInLevel.length) {
        nextLevel();
        return;
    }
    
    gameState.currentWord = gameState.wordsInLevel[gameState.currentWordIndex];
    gameState.timeLeft = levelConfig[gameState.level - 1].timeLimit;
    
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
    if (!gameState.isRunning || gameState.isPaused) return;
    
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
}

// Check Apple Collision
function checkAppleCollision(head, apple) {
    const appleSize = snake.size; // Same size as snake head
    const distance = Math.sqrt(
        Math.pow(head.x - apple.x, 2) + Math.pow(head.y - apple.y, 2)
    );
    return distance < snake.size + appleSize;
}

// Handle Correct Answer
function handleCorrectAnswer() {
    gameState.score++;
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
    gameState.lives--;
    gameState.currentWordIndex++;
    
    if (gameState.lives <= 0) {
        gameOver();
    } else {
        spawnNewWord();
    }
    
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
    gameState.isRunning = false;
    gameState.isPaused = false;
    
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    if (gameLoop) clearInterval(gameLoop);
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    pauseBtn.textContent = 'PAUZA';
    
    finalScoreDisplay.textContent = gameState.score;
    gameOverModal.classList.remove('hidden');
    loadHighScores();
}

// Reset Game
function resetGame() {
    gameOverModal.classList.add('hidden');
    resetGameState();
    drawGame();
}

// Save High Score
function saveHighScore() {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert('Proszę podać swoje imię!');
        return;
    }
    
    const highScores = JSON.parse(localStorage.getItem('orthovoreHighScores') || '[]');
    highScores.push({
        name: playerName,
        score: gameState.score,
        date: new Date().toLocaleDateString('pl-PL')
    });
    
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10); // Keep only top 10
    
    localStorage.setItem('orthovoreHighScores', JSON.stringify(highScores));
    loadHighScores();
    
    saveScoreBtn.disabled = true;
    saveScoreBtn.textContent = 'Zapisano!';
}

// Load High Scores
function loadHighScores() {
    const highScores = JSON.parse(localStorage.getItem('orthovoreHighScores') || '[]');
    highScoresList.innerHTML = '';
    
    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${score.name} - ${score.score} pkt (${score.date})`;
        highScoresList.appendChild(li);
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

// Initialize game when page loads
window.addEventListener('load', () => {
    init();
    addFooter();
}); 