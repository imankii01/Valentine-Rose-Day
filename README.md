# ❤️ Love Story App

A beautiful web app to create and share personalized love stories with your partner. It features romantic templates, a love counter, a music player, a photo gallery, and more! Perfect for anniversaries, Valentine's Day, or just a special moment with your loved one. 💕

---

## ✨ Features
- **Romantic Templates** – Choose from multiple beautifully designed love story templates.
- **Love Counter** – Displays how many days you've been together.
- **Music Integration** – Add a special song via YouTube.
- **Photo Memories** – Upload and display cherished photos.
- **Love Letter** – Write and display a heartfelt love letter.
- **Floating Hearts Animation** – A lovely animated effect for extra romance.
- **Customizable Themes** – Personalize colors and fonts.
- **Easy Sharing** – Generate a unique URL to share your love story.
- **Responsive Design** – Works beautifully on both mobile and desktop.

---

## 🛠️ Tech Stack
This project leverages modern web technologies to deliver a smooth and engaging user experience.

### **Frontend:**
- **React.js** – Component-based UI for interactive experiences.
- **Tailwind CSS** – For clean and modern styling.
- **Lucide Icons** – Beautiful icons for UI elements.
- **Nanoid** – For generating unique shareable IDs.
- **Val.town (for Serverless Execution)** – Runs directly in the cloud without backend setup.

### **Backend (Optional Local Setup):**
- **Node.js** – JavaScript runtime for running a backend.
- **Express.js** – For handling API requests.
- **SQLite** – Lightweight database for storing love stories.

---

## 🚀 How to Run This Project
### 1️⃣ **Run it Directly on Val.Town** (No Setup Required)
Since this project is written for Val.town, you can run it directly:

1. **Go to [Val.town](https://val.town/)**
2. **Sign in or create an account**
3. **Click 'New Val'**
4. **Paste the full code** into the editor
5. **Click 'Run'** and get your live URL! ✅

---

### 2️⃣ **Run it Locally (Without a Backend)**
If you only need the frontend, you can run it in a browser with just an HTML file:

#### **Step 1: Create `index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Love Story App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
        import React from "https://esm.sh/react@18.2.0";
        import App from "./app.js";  // Create app.js with your React code
        createRoot(document.getElementById("root")).render(React.createElement(App));
    </script>
</body>
</html>
```

#### **Step 2: Create `app.js`**
- Copy your React component code into `app.js`
- Open `index.html` in a browser.

---

### 3️⃣ **Run it Locally with a Full Development Setup**
If you want to develop and test with a full local setup, follow these steps:

#### **Step 1: Install Node.js**
Download and install **[Node.js](https://nodejs.org/)** if you haven't already.

#### **Step 2: Set Up the Project**
```sh
mkdir love-story-app
cd love-story-app
npm init -y
```

#### **Step 3: Install Dependencies**
```sh
npm install react react-dom lucide-react nanoid vite express sqlite3
```

#### **Step 4: Create `index.html` in the `public/` Folder**
Same as the HTML code above but inside `public/index.html`.

#### **Step 5: Create React App in `src/`**
Create a `src` folder and inside it, create `main.jsx`:

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(<App />);
```

#### **Step 6: Add `App.jsx`**
- Copy your full React component code into `src/App.jsx`.

#### **Step 7: Run the Development Server**
```sh
npm run dev
```
- Open the URL provided by Vite (e.g., `http://localhost:5173`).

---

## 🎯 How It Works
1. **User selects a love template** (e.g., "Romantic Classic").
2. **Fills in details** – Partner's name, love letter, song, and images.
3. **Generates a unique love story page** with animations and interactive elements.
4. **Shares the link** with their partner.
5. **Partner visits the page** and sees the love letter, memories, and more! ❤️

---

## 🔮 Future Enhancements
- **Custom Templates** – Let users create their own designs.
- **AI Love Letter Generator** – Automatically generate a romantic letter.
- **Multimedia Support** – Add voice notes and videos.
- **User Accounts** – Save and edit love stories over time.
- **More Animation Effects** – Enhance the love experience with more animations.

---

## ☕ Buy Me a Coffee
If you like this project, consider supporting me! ❤️
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%23FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/imankii01)

---

Enjoy creating your love story! 💖

