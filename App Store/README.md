📱 App Store
A dynamic and responsive web application built with React.js that allows users to explore and search for mobile applications across various categories such as Social, Games, News, and Food.

🚀 Features
Dynamic Category Filtering: Seamlessly switch between tabs (Social, Games, News, Food) to filter applications instantly.

Case-Insensitive Search: Integrated search bar that filters apps within the active category in real-time as you type.

Persistent Tab State: The "Social" tab is active by default upon initial load.

Modular Component Design: Built using a reusable component architecture for scalability.

🛠️ Tech Stack
Library: React.js

Styling: CSS (utilizing Bree Serif font-family)

State Management: React State for handling tab switching and search input logic.

Data Structure: Utilizes structured tabsList and appsList objects for efficient data rendering.

🏗️ Component Architecture
The project is organized into three primary components to maintain clean and manageable code:

AppStore: The main parent component that manages the application functional component hook state and core logic.

TabItem: Handles the display and selection logic for the category tabs.

AppItem: A functional component responsible for rendering individual app icons and names.

📋 Setup Instructions
To run this project locally, follow these steps:

Install Dependencies:
npm install

Start the Application:
npm run dev 

🎓 Learning Credits
This project was developed as part of the NxtWave intensive curriculum to master fundamental React concepts, including list rendering, conditional styling, and interactive state handling.
