# ❤️ Love Story App

A beautiful web app to create and share personalized love stories with your partner. It features romantic templates, a love counter, a music player, a photo gallery, and more! Perfect for anniversaries, Valentine's Day, or just a special moment with your loved one. 💕

---

## ✨ Features
- **Romantic Templates** – Choose from multiple beautifully designed love story templates with unique aesthetics.
- **Love Counter** – Displays how many days, hours, and minutes you've been together with your special someone.
- **Music Integration** – Add a special song via YouTube that plays automatically when your story is opened.
- **Photo Memories** – Upload and display cherished photos with smooth carousel animation.
- **Love Letter** – Write and display a heartfelt love letter with beautiful typography options.
- **Floating Hearts Animation** – A lovely animated effect for extra romance that responds to user interaction.
- **Customizable Themes** – Personalize colors, fonts, and layout to match your relationship's unique style.
- **Easy Sharing** – Generate a unique URL to share your love story across social media or messaging apps.
- **Responsive Design** – Works beautifully on both mobile and desktop devices with adaptive layouts.
- **Offline Access** – Once loaded, the love story can be viewed even without an internet connection.

---

## 🛠️ Tech Stack
This project leverages modern web technologies to deliver a smooth and engaging user experience.

### **Frontend:**
- **React.js** – Component-based UI for interactive experiences with efficient DOM updates.
- **Tailwind CSS** – For clean, responsive, and modern styling with minimal CSS overhead.
- **Lucide Icons** – Beautiful and lightweight SVG icons for UI elements.
- **Nanoid** – For generating unique shareable IDs with cryptographic safety.
- **Val.town (for Serverless Execution)** – Runs directly in the cloud without backend setup.
- **React Spring** – Used for smooth animations and transitions throughout the interface.
- **LocalForage** – For client-side storage of love story data.

### **Backend (Optional Local Setup):**
- **Node.js** – JavaScript runtime for running a backend with non-blocking I/O.
- **Express.js** – For handling API requests with middleware support for efficient routing.
- **SQLite** – Lightweight, file-based database for storing love stories with zero configuration.
- **Multer** – For handling multipart/form-data and image uploads.

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
1. **Choose your template** – Browse through various designs from classic romantic to modern minimalist.
2. **Customize your story** – Set the starting date of your relationship for the love counter.
3. **Craft your love letter** – Write a heartfelt message using the rich text editor with formatting options.
4. **Add your special song** – Paste a YouTube URL to embed your meaningful song.
5. **Upload memories** – Select and arrange photos that tell your unique love story.
6. **Customize the experience** – Change colors, fonts, and animation settings to match your style.
7. **Preview your creation** – See exactly how your partner will experience your love story.
8. **Generate a shareable link** – Create a unique URL that's easy to share via text, email, or social media.
9. **Share with your loved one** – Send the link to your special someone and brighten their day! ❤️

---

## 🤝 Contributing
Contributions are welcome to make this love project even better! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

Please make sure to update tests as appropriate and follow the code style guidelines.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔮 Future Enhancements
- **Custom Templates** – Let users create and share their own template designs.
- **AI Love Letter Generator** – Automatically generate romantic letters based on relationship details.
- **Multimedia Support** – Add voice notes, videos, and interactive elements.
- **User Accounts** – Save multiple love stories and edit them over time.
- **More Animation Effects** – Enhance the experience with particle effects, parallax scrolling, and interactive elements.
- **Scheduled Delivery** – Set a specific date and time for your love story to be accessible.
- **Collaborative Stories** – Allow both partners to contribute to a shared love timeline.
- **AR Experience** – Add augmented reality features for an immersive experience.
- **Relationship Timeline** – Create an interactive timeline of your relationship milestones.
- **Language Support** – Translate interface and content to multiple languages.

---

## ☕ Buy Me a Coffee
If you like this project, consider supporting me! ❤️
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%23FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/imankii01)

---

Enjoy creating your love story! 💖

