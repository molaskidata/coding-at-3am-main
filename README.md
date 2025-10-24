# 🧠 JavaScript Quiz App

An interactive web quiz built with Vanilla JavaScript and Bootstrap for a modern and responsive design.

## 🌐 Live Demo

**[🎯 Play the Quiz Now!](https://molaskidata.github.io/coding-at-3am-main/)**

*Note: It may take a few minutes for the website to become available after initial activation.*

## 📋 Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)
- [Contributing](#contributing)

## 🎯 Overview

This quiz app is a simple yet effective web application that allows users to test their knowledge in various subject areas. The quiz is fully implemented in Vanilla JavaScript and uses Bootstrap for an appealing design.

### Current Quiz Topics:
- Geography (Capitals)
- General Knowledge
- Biology

## ✨ Features

- 🎨 **Modern Design** - Responsive interface with Bootstrap 5
- ⚡ **Vanilla JavaScript** - No external JavaScript frameworks required
- 🏆 **Scoring System** - Automatic score calculation
- 📱 **Mobile-friendly** - Optimized for all screen sizes
- 🔄 **Easily Expandable** - New questions can be easily added
- 🌙 **Dark Theme** - Eye-friendly dark design

## 🚀 Demo

**[▶️ Test Live Version](https://molaskidata.github.io/coding-at-3am-main/)**

The quiz consists of multiple-choice questions with the following features:
- Click on an answer to automatically proceed to the next question
- At the end, you'll receive your total score
- User-friendly navigation

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/molaskidata/coding-at-3am-main.git
   ```

2. **Navigate to project directory**
   ```bash
   cd coding-at-3am-main
   ```

3. **Start the quiz**
   - Open the `index.html` file in your web browser
   - Or use a local server:
   ```bash
   # With Python 3
   python -m http.server 8000
   
   # With Node.js (http-server)
   npx http-server
   ```

## 🎮 Usage

1. **Start Quiz**: Open the application in your browser
2. **Answer Questions**: Click on one of the four answer options
3. **Track Progress**: The quiz automatically switches to the next question
4. **View Results**: At the end, you'll see your total score

## 🛠 Technologies

- **HTML5** - Application structure
- **CSS3** - Styling (via Bootstrap)
- **JavaScript (ES6+)** - Logic and interactivity
- **Bootstrap 5.3.0** - UI framework for responsive design

### CDN Dependencies
- Bootstrap CSS: `5.3.0`
- Bootstrap JavaScript Bundle: `5.3.0`

## 📁 Project Structure

```
coding-at-3am-main/
│
├── index.html          # Main page with HTML structure
├── quiz.js            # JavaScript logic for the quiz
└── README.md          # Project documentation
```

### File Overview

#### `index.html`
- Contains the HTML structure of the quiz
- Integration of Bootstrap CSS and JavaScript
- Definition of quiz containers and result display

#### `quiz.js`
- **Variables**: `score`, `currentQuestionIndex`, `questions`
- **Functions**:
  - `displayQuestion()` - Displays the current question
  - `checkAnswer(userAnswer)` - Checks the answer and updates the score
  - `nextQuestion()` - Switches to the next question

## 🔧 Customization

### Adding New Questions

To add new questions, edit the `questions` array in `quiz.js`:

```javascript
let questions = [
    {
        question: "Your question here?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswer: 0  // Index of the correct answer (0-3)
    },
    // More questions...
];
```

### Customizing Design

- **Colors**: Change Bootstrap classes in `index.html`
- **Layout**: Modify CSS classes
- **Fonts**: Add your own CSS rules

### Extending Functionality

Possible extensions:
- Timer for each question
- Categories/difficulty levels
- Question database with JSON
- Local storage of high scores
- Sound effects
- Animations

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch for your feature
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Commit** your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push** the branch
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open** a Pull Request

### Development

For development, we recommend:
- A local web server for CORS compatibility
- Browser developer tools for debugging
- Code editor with JavaScript support (VS Code, Sublime Text, etc.)

## 📝 To-Do / Planned Features

- [ ] More question categories
- [ ] Timer functionality
- [ ] Difficulty levels
- [ ] Random question order
- [ ] Local storage of results
- [ ] Export function for results
- [ ] Multi-language support
- [ ] Admin panel for question management

## 🐛 Known Issues

Currently, no critical bugs are known. If you discover problems, please create an issue in the repository.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

**molaskidata**
- GitHub: [@molaskidata](https://github.com/molaskidata)

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- All contributors and testers

---

⭐ **Star this repository if you like it!**

> Built with ❤️ for the JavaScript community