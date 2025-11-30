# 🎙️ Podcast App

A responsive React application that fetches and displays podcast previews from a public API

### 🚀 Features

• **Dynamic API Integration** : Fetches real podcast data and genre metadata from
• **Loading & Error States**: Displays clear loading indicators and error messages to guide the user experience.
•**Responsive Grid Layout**: Podcast previews adapt across desktop, tablet, and mobile screens.
•**Reusable Components**: Modular structure with , , , and .
•**Genre Mapping**: Uses  to convert genre IDs to readable names.
•**Human-Readable Dates**: Formats ISO timestamps using .
•**Modal Details View**: Click any podcast to view detailed info in a modal overlay


### 📦 Folder Structure
src/
├── api/
│   └── fetchPodcast.js         # API fetch logic
├── components/
│   ├── Header.jsx              # App header
│   ├── PodcastCard.jsx         # Individual podcast preview
│   ├── PodcastGrid.jsx         # Grid layout for all podcasts
│   └── Modal.jsx               # Detailed podcast modal
├── utils/
│   ├── DateUtils.js            # Formats updated dates
│   └── GenreService.js         # Maps genre IDs to names
├── data.js                     # Static genre list
├── App.jsx                     # Main app logic
└── main.js                    # Entry point


### 🛠️ Tech Stack
- React
- JavaScript
- CSS
- JSDoc


### 📚 Setup Instructions
- Clone the repo:
```git clone https://github.com/Afika-M/AYAMTS25155_PTO2503_A_Ayabonga-Mtsotso_DJS03?tab=readme-ov-file```
- `cd podcast-app`
- Install dependencies:
`npm install`
- Start the development server:
`npm start`
- Open http://localhost:3000 in your browser.

