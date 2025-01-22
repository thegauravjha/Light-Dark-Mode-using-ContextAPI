# 🌗 Light/Dark Mode with Context API in React

This project demonstrates how to implement a **Light/Dark mode** feature in a React application using **Context API**. The app includes routing for multiple pages and utilizes a global theme variable to switch between Light and Dark modes seamlessly.

---

## ✨ Features

- **Theme Toggle**: Switch between Light and Dark mode.
- **Context API**: Manage global state for theme across the entire application.
- **Routing**: Three pages with React Router for navigation.
- **Reusable Components**: Components adapt dynamically to the selected theme.

---

## 📂 Directory Structure

`light-dark-mode-context/
├── src/
│   ├── components/    # Reusable components
│   ├── context/       # ThemeContext for managing global state
│   ├── pages/         # Pages for routing
│   ├── styles/        # CSS or styled-components for Light/Dark themes
│   └── App.js         # Main entry point
├── public/            # Static files
├── package.json       # Project setup and dependencies
└── README.md          # This file`

---

## 🛠️ Getting Started

1.  **Clone the Repository**

    `git clone https://github.com/your-username/light-dark-mode-context.git
cd light-dark-mode-context`

2.  **Install Dependencies**

    `npm install`

3.  **Run the Application**

    `npm start`

---

## 🎯 How It Works

1.  **Theme Context**:\
    A `ThemeContext` is created using the React Context API to hold the theme state (`light` or `dark`).

2.  **Provider**:\
    The `ThemeContext.Provider` wraps the app, making the theme state and toggler function available to all components.

3.  **Routing**:\
    React Router is used to create three pages with navigation, ensuring the theme persists across routes.

4.  **Dynamic Styling**:\
    Components adapt their styles based on the current theme, ensuring a cohesive user experience.

---

## 📸 Screenshots

**Light Mode**\
[Add Light Mode Screenshot]

**Dark Mode**\
[Add Dark Mode Screenshot]

---

## 🤝 Contributions

Contributions, suggestions, and improvements are welcome! Feel free to fork this repository and submit a pull request.

---

### 🌟 Happy Coding!
