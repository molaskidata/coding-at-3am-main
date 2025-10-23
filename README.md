# 🧠 JavaScript Quiz App

Ein interaktives Web-Quiz entwickelt mit Vanilla JavaScript und Bootstrap für ein modernes und responsives Design.

## 🌐 Live Demo

**[🎯 Quiz jetzt spielen!](https://molaskidata.github.io/coding-at-3am-main/)**

*Hinweis: Es kann einige Minuten dauern, bis die Website nach der ersten Aktivierung verfügbar ist.*

## 📋 Inhaltsverzeichnis

- [Live Demo](#live-demo)
- [Übersicht](#übersicht)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Technologien](#technologien)
- [Projektstruktur](#projektstruktur)
- [Anpassung](#anpassung)
- [Lizenz](#lizenz)
- [Beitragen](#beitragen)

## 🎯 Übersicht

Diese Quiz-App ist eine einfache, aber effektive Webanwendung, die es Benutzern ermöglicht, ihre Kenntnisse in verschiedenen Themenbereichen zu testen. Das Quiz ist vollständig in Vanilla JavaScript implementiert und nutzt Bootstrap für ein ansprechendes Design.

### Aktuelle Quiz-Themen:
- Geographie (Hauptstädte)
- Allgemeinwissen
- Biologie

## ✨ Features

- 🎨 **Modernes Design** - Responsives Interface mit Bootstrap 5
- ⚡ **Vanilla JavaScript** - Keine externen JavaScript-Frameworks erforderlich
- 🏆 **Punktesystem** - Automatische Punkteberechnung
- 📱 **Mobile-friendly** - Optimiert für alle Bildschirmgrößen
- 🔄 **Einfach erweiterbar** - Neue Fragen können leicht hinzugefügt werden
- 🌙 **Dark Theme** - Augenschonendes dunkles Design

## 🚀 Demo

**[▶️ Live-Version testen](https://molaskidata.github.io/coding-at-3am-main/)**

Das Quiz besteht aus Multiple-Choice-Fragen mit folgenden Funktionen:
- Klicken Sie auf eine Antwort, um automatisch zur nächsten Frage zu gelangen
- Am Ende erhalten Sie Ihre Gesamtpunktzahl
- Benutzerfreundliche Navigation

## 📦 Installation

### Voraussetzungen
- Ein moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Keine zusätzliche Software erforderlich

### Schritte
1. **Repository klonen**
   ```bash
   git clone https://github.com/molaskidata/coding-at-3am-main.git
   ```

2. **Zum Projektverzeichnis navigieren**
   ```bash
   cd coding-at-3am-main
   ```

3. **Quiz starten**
   - Öffnen Sie die `index.html` Datei in Ihrem Webbrowser
   - Oder nutzen Sie einen lokalen Server:
   ```bash
   # Mit Python 3
   python -m http.server 8000
   
   # Mit Node.js (http-server)
   npx http-server
   ```

## 🎮 Verwendung

1. **Quiz starten**: Öffnen Sie die Anwendung in Ihrem Browser
2. **Fragen beantworten**: Klicken Sie auf eine der vier Antwortmöglichkeiten
3. **Fortschritt verfolgen**: Das Quiz wechselt automatisch zur nächsten Frage
4. **Ergebnis anzeigen**: Am Ende sehen Sie Ihre Gesamtpunktzahl

## 🛠 Technologien

- **HTML5** - Struktur der Anwendung
- **CSS3** - Styling (über Bootstrap)
- **JavaScript (ES6+)** - Logik und Interaktivität
- **Bootstrap 5.3.0** - UI-Framework für responsives Design

### CDN-Abhängigkeiten
- Bootstrap CSS: `5.3.0`
- Bootstrap JavaScript Bundle: `5.3.0`

## 📁 Projektstruktur

```
coding-at-3am-main/
│
├── index.html          # Hauptseite mit HTML-Struktur
├── quiz.js            # JavaScript-Logik für das Quiz
└── README.md          # Projektdokumentation
```

### Datei-Übersicht

#### `index.html`
- Enthält die HTML-Struktur des Quiz
- Einbindung von Bootstrap CSS und JavaScript
- Definition der Quiz-Container und Ergebnis-Anzeige

#### `quiz.js`
- **Variablen**: `score`, `currentQuestionIndex`, `questions`
- **Funktionen**:
  - `displayQuestion()` - Zeigt die aktuelle Frage an
  - `checkAnswer(userAnswer)` - Überprüft die Antwort und aktualisiert den Score
  - `nextQuestion()` - Wechselt zur nächsten Frage

## 🔧 Anpassung

### Neue Fragen hinzufügen

Um neue Fragen hinzuzufügen, bearbeiten Sie das `questions` Array in `quiz.js`:

```javascript
let questions = [
    {
        question: "Ihre Frage hier?",
        answers: ["Antwort 1", "Antwort 2", "Antwort 3", "Antwort 4"],
        correctAnswer: 0  // Index der korrekten Antwort (0-3)
    },
    // Weitere Fragen...
];
```

### Design anpassen

- **Farben**: Ändern Sie die Bootstrap-Klassen in `index.html`
- **Layout**: Modifizieren Sie die CSS-Klassen
- **Schriftarten**: Ergänzen Sie eigene CSS-Regeln

### Funktionalität erweitern

Mögliche Erweiterungen:
- Timer für jede Frage
- Kategorien/Schwierigkeitsgrade
- Fragen-Datenbank mit JSON
- Lokale Speicherung von Highscores
- Sound-Effekte
- Animationen

## 🤝 Beitragen

Beiträge sind willkommen! So können Sie helfen:

1. **Fork** das Repository
2. **Clone** Ihren Fork lokal
3. **Erstellen** Sie einen neuen Branch für Ihr Feature
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Committen** Sie Ihre Änderungen
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Pushen** Sie den Branch
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Öffnen** Sie eine Pull Request


## 📝 To-Do / Geplante Features

- [ ] Mehr Fragenkategorien
- [ ] Timer-Funktionalität
- [ ] Schwierigkeitsgrade
- [ ] Zufällige Fragenreihenfolge
- [ ] Lokale Speicherung von Ergebnissen
- [ ] Exportfunktion für Ergebnisse
- [ ] Multi-Language Support
- [ ] Admin-Panel für Fragenverwaltung

## 🐛 Bekannte Probleme

Aktuell sind keine kritischen Bugs bekannt. Falls Sie Probleme entdecken, erstellen Sie bitte ein Issue im Repository.

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Details finden Sie in der [LICENSE](LICENSE) Datei.

## 👨‍💻 Autor

**molaskidata**
- GitHub: [@molaskidata](https://github.com/molaskidata)

---

⭐ **Star dieses Repository, wenn es Ihnen gefällt!**