
# Weather App

![Weather App](/all-devices-black%20(4).png)

## Overview
The Weather App is a user-friendly web application that allows users to check the current weather conditions and forecast for any city worldwide. It is built using React and styled with Tailwind CSS to ensure a responsive and visually appealing design.

## Features
- Search for real-time weather information by city name.
- Display current temperature, weather conditions, humidity, and wind speed.
- Supports a clean and responsive design for both desktop and mobile devices.

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note:** this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Additional Resources
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Troubleshooting Build Failures](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/RomeesaKamal/Weather-App.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/) by signing up and subscribing to their service.

4. Create a `.env` file in the root of your project and add your API key:
   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Technologies Used
- **React**: For building the user interface.
- **Tailwind CSS**: For styling and ensuring a responsive design.
- **Axios**: For making API requests to fetch weather data.
- **OpenWeatherMap API**: To fetch weather information.

---

## Folder Structure
```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   └── WeatherCard.js
│   ├── pages/
│   │   └── Home.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
└── README.md
```

---

## Deployment
The app can be deployed to platforms such as [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or GitHub Pages. To build for deployment, run:
```bash
npm run build
```
Then, follow the deployment steps for your chosen platform.

---

## Links
- **LinkedIn**: [Romeesa Kamal](https://linkedin.com/in/romeesa-kamal-7864b8342)
- **Frontend Mentor Profile**: [Romeesa Kamal](https://www.frontendmentor.io/profile/RomeesaKamal)
- **Portfolio**: [Romeesa Kamal's Portfolio](https://romeesakamal.github.io/RK-professional-portfolio/)
- **GitHub Profile**: [Romeesa Kamal](https://github.com/RomeesaKamal/)
- **GitHub Repository**: [Weather App](https://github.com/RomeesaKamal/Weather-App)
- **Live url of weather-app**: [Weather App](https://romeesa-weather-app.netlify.app/)

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements
- Thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- Inspired by the simplicity and usability of modern weather applications.

---

Happy Coding! 🚀


