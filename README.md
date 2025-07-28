# 🐛 Orthovore (Ortożerca) - Gra Ortograficzna

A browser-based educational snake game designed to help children (around 10 years old) practice Polish orthography. The game focuses on commonly confused spellings: **ó/u**, **rz/ż**, and **h/ch**.

## 🎯 Game Overview

Help the green caterpillar snake eat the apple with the correct letter to complete Polish words! Words appear at the top with a missing letter (shown as `_`), and you must guide the snake to the correct apple before time runs out.

## 🎮 How to Play

### Controls
- **Arrow Keys** or **WASD**: Move the snake
- **START**: Begin the game
- **PAUZA**: Pause/resume the game

### Game Rules
1. **Word Display**: A Polish word appears at the top with a missing letter (shown as `_`)
2. **Two Apples**: 
   - 🟢 **Green Apple**: Contains the correct letter/digraph
   - 🔴 **Red Apple**: Contains the incorrect alternative
3. **Objective**: Guide the snake to eat the correct apple
4. **Scoring**: 
   - ✅ Correct answer: +1 point, snake grows
   - ❌ Wrong answer or time out: -1 life
5. **Lives**: Start with 5 pink hearts ❤️
6. **Levels**: Progress through 10 increasingly difficult levels

## 📚 Educational Focus

The game teaches Polish orthography through three main categories:

### 1. **ó vs u**
- Examples: `wóz` vs `burza`, `mróz` vs `dziura`
- Teaches when to use `ó` vs `u` in Polish words

### 2. **rz vs ż**
- Examples: `rzeka` vs `żółw`, `morze` vs `żniwa`
- Teaches the difference between `rz` and `ż` sounds

### 3. **h vs ch**
- Examples: `choinka` vs `hałas`, `chleb` vs `hiena`
- Teaches when to use `h` vs `ch` in Polish words

## 🏆 Level System

| Level | Word Mix | Time Limit | Difficulty |
|-------|----------|------------|------------|
| 1 | 100% Regular | 30 seconds | Easy |
| 2 | 100% Regular | 20 seconds | Easy |
| 3 | 100% Regular | 10 seconds | Medium |
| 4 | 90% Regular, 10% Irregular | 10 seconds | Medium |
| 5 | 80% Regular, 20% Irregular | 10 seconds | Medium |
| 6 | 70% Regular, 30% Irregular | 10 seconds | Hard |
| 7 | 60% Regular, 40% Irregular | 10 seconds | Hard |
| 8 | 50% Regular, 50% Irregular | 10 seconds | Hard |
| 9 | 50% Regular, 50% Irregular | 8 seconds | Very Hard |
| 10 | 50% Regular, 50% Irregular | 7 seconds | Very Hard |

### Word Categories
- **Regular Words**: Follow standard orthographic rules
- **Irregular Words**: Exception-based or more complex spellings

## 🎨 Visual Features

- **Soft Cream Background** (#fff8e1) for easy reading
- **Green Caterpillar Snake** with animated movement
- **Color-coded Apples**: Green for correct, red for incorrect
- **Pink Hearts** for lives display
- **Animated Timer Bar** with color changes
- **Responsive Design** for different screen sizes

## 💾 High Score System

- Save your name and score to localStorage
- View top 10 high scores
- Persistent across browser sessions
- Polish date formatting

## 🚀 Getting Started

1. **Open the Game**: Simply open `index.html` in any modern web browser
2. **Read Instructions**: The game starts with helpful instructions
3. **Click "Rozpocznij grę"**: Begin playing immediately
4. **Use Arrow Keys**: Move the snake to the correct apple
5. **Complete Levels**: Progress through all 10 levels
6. **Save Your Score**: Enter your name when the game ends

## 🛠️ Technical Details

- **Pure JavaScript**: No external dependencies
- **HTML5 Canvas**: Smooth 60 FPS gameplay
- **CSS3 Animations**: Modern visual effects
- **Local Storage**: High score persistence
- **Responsive Design**: Works on desktop and mobile
- **Polish Language**: Fully localized interface

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎓 Educational Benefits

- **Spelling Practice**: Reinforces correct Polish orthography
- **Visual Learning**: Associating letters with colors and shapes
- **Time Pressure**: Improves quick decision-making
- **Progressive Difficulty**: Gradual skill development
- **Immediate Feedback**: Instant reward/punishment system
- **Repetition**: Multiple exposures to common spelling patterns

## 🎯 Target Audience

- **Primary**: Children aged 8-12 learning Polish
- **Secondary**: Polish language learners of any age
- **Educational**: Teachers and parents supporting Polish education

## 🔧 Customization

The game is easily customizable:
- Add new words to `regularWords` and `irregularWords` arrays
- Modify level configurations in `levelConfig`
- Adjust visual styling in `style.css`
- Change game mechanics in `game.js`

## 📄 License

This project is open source and available for educational use.

---

**Happy Learning! 🐛📚✨** 