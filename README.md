# Portfolio: My Personal Website

This is my personal portfolio website built using **HTML**, **CSS**, **JavaScript**, **React**, **Express**, and **Sanity**. The website showcases my projects, experience, and other relevant information, while leveraging modern technologies to provide a smooth user experience and a robust back-end.

<div style="text-align:">
  <img src="./demo.png" alt="chromaVive" style="width: 48%;">
</div>

## Technologies Used

- **HTML**: Structure and layout of the website.
- **CSS**: Styling and design of the portfolio, including animations and responsive design.
- **JavaScript**: Client-side interactions and dynamic content.
- **React**: Framework for building the interactive user interface and managing state.
- **Sanity**: Headless CMS to manage and fetch dynamic content such as projects, blogs, and more.
- **Express**: Backend server for handling API requests, and interacting with the Sanity CMS.

## Directory Structure

```
portfolio/
├── frontend/           # React front-end
│   ├── public/         # Static assets (e.g., images, favicon)
│   ├── src/            # React components, state management, and UI
│   ├── App.js          # Main React component
│   ├── index.js        # Entry point for React app
│   └── .env            # Environment variables for React app
├── backend/            # Express backend
│   ├── server.js       # API server
│   ├── routes/         # Routes for handling API requests (e.g., /api/projects, /api/contact)
│   ├── models/         # Data models (e.g., User, Contact)
│   └── .env            # Environment variables for Express server
├── database/           # Sanity Database Schema
│   ├── schemas/        # Schema definitions for Sanity (e.g., Project, Blog, Experience)
│   └── client.js       # Sanity client configuration and data fetching
└── .gitignore          # Git ignore file
```

## Contributing

Feel free to fork the repository, make changes, and create a pull request with any improvements or bug fixes. All contributions are welcome!
