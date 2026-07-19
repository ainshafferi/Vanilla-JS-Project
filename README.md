# 🚀 Vanilla JS Project Playground
 
A collection of front-end projects built with **HTML, CSS, and Vanilla JavaScript** — no frameworks, no shortcuts, just the fundamentals. Each project started from a tutorial and was then extended with original features, refactors, and UI improvements to go beyond the "follow-along" stage.
 
This repo is a snapshot of my journey learning core web development concepts: the DOM, APIs, local storage, responsive design, and clean CSS architecture.
 
---

## 🧠 Why this repo?
 
I believe the best way to learn front-end development is by building real, working things — not just watching tutorials. Every project below follows the same process:
 
1. **Learn** a new concept from a tutorial.
2. **Build** the project to understand it hands-on.
3. **Extend** it with my own features, styling, and code improvements.
This means every project here is more than a copy — it's a demonstration of what I understood well enough to build on top of.
 
---
 
## 📁 Projects
 
### 1. 🔐 Login Page Clone [View Live](https://ainshafferi.github.io/Vanilla-JS-Project/login-page/)
> Based on a tutorial by **Shanjai Raj**
 
A clean, responsive login page UI.
 
**What I learned / improved:**
- Used **CSS variables (custom properties)** to centralize colors, spacing, and fonts
- Reduced repetition across the stylesheet, making it easier to maintain and theme
**Tech:** `HTML` `CSS`
 
---
 
### 2. ☀️ Weather App [View Live](https://ainshafferi.github.io/Vanilla-JS-Project/weather-app/)
> Based on a tutorial by **GreatStack**, built with the OpenWeather API
 
A dynamic weather app that fetches and displays live weather data.
 
**Features:**
- 🔍 Search weather by city name
- 📍 Auto-detects the user's current location on page load
- 🌡️ Displays temperature, humidity, wind speed, and "feels like" temperature
- 🎨 Background dynamically updates based on current weather conditions
- 🖼️ Dynamic weather icons that match real-time conditions
- 🗂️ JavaScript organized into a separate file for cleaner project structure
**What I learned:**
- Fetching and handling data from a real-world REST API
- Working with asynchronous JavaScript (`fetch`, Promises)
- Using the Geolocation API
- Structuring JS for readability and maintainability
**Tech:** `HTML` `CSS` `JavaScript` `OpenWeather API`
 
---
 
### 3. 📝 To-Do List + Notes App [View Live](https://ainshafferi.github.io/Vanilla-JS-Project/to-do-list/)
> Based on a tutorial by **GreatStack**
 
A combined task manager and notes app, merged into a single productivity tool.
 
**Features:**
- ✅ Add, complete, and delete tasks
- 📝 Editable notes section merged into the same app
- 🌗 Light / dark mode toggle
- 💾 Persists data with `localStorage` (tasks and notes survive page refresh)
- 📱 Fully responsive layout that adapts to different screen widths
**What I learned:**
- DOM manipulation with `appendChild` and `parentElement`
- Styling with the `::before` pseudo-element
- Using Flexbox for layout
- Persisting app state with `localStorage`
- Combining two separate mini-apps into one cohesive product
**Tech:** `HTML` `CSS` `JavaScript` `localStorage`
 
---
 
### 4. ⏱️ Pomodoro Timer [View Live](https://ainshafferi.github.io/Vanilla-JS-Project/pomodoro/)
> Based on a tutorial by **How To Web Dev**
 
A focus timer app based on the Pomodoro Technique.
 
**What I learned:**
- The difference between `em` and `px` units and when to use each
- Working with JavaScript `setInterval` / `clearInterval` for timers
**Tech:** `HTML` `CSS` `JavaScript`

## 🛠️ Tech Stack
 
| Category | Tools |
|---|---|
| Markup & Styling | HTML5, CSS3 (Flexbox, Custom Properties) |
| Logic | Vanilla JavaScript (ES6+) |
| Data | OpenWeather API, localStorage |
| Version Control | Git & GitHub |
 
No frameworks. No libraries. Just the fundamentals — done deliberately.
 
---
 
## 📂 Repo Structure
 
```
├── login-page/
├── weather-app/
├── to-do-list/
├── pomodoro/
└── README.md
```
 
Each folder is a standalone project with its own `index.html`, `style.css`, and `script.js`.
 