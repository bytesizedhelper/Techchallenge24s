**Project Description**
**1. Overview**
This React application allows users to customize their travel journeys, receive notifications about barriers on their routes, and get suggestions for alternative routes based on their accessibility requirements. The application consists of five main pages: Add Your Journey, Landing Page, MapView, Suggested Options, and Barrier Routes Table.

**2.Pages**
**Add Your Journey**
- Users can input their departure and arrival locations, travel dates, and any accessibility requirements.

**Landing Page**
- Displays all added journeys.
- Notifies users about barriers on their selected routes.
-Shows a table with all barrier routes and suggested alternative routes.

**MapView Page**
- Provides a detailed view of the route with locations and directions.

**Suggested Options Page**
- Suggests routes with the least barriers based on the user's input from the "Add Your Journey" page combined with barrier route data.
- Barrier Routes Table
- Lists all routes with identified barriers and possible alternatives.

**2. Software Modules/Frameworks Used**
- React: JavaScript library for building user interfaces.
- React Router: Library for routing in React applications.
- Mock Data: Used to simulate real-time data for barriers and routes.

**3. Step-by-Step Instructions to Re-create the Prototype**
Prerequisites
Node.js and npm installed on your machine.
Steps
Clone the Repository
```sh
Copy code
git clone https://github.com/bytesizedhelper/Techchallenge24s.git
cd Techchallenge24s


Install Dependencies

sh
Copy code
npm install
Run the Application

sh
Copy code
npm start
This will start the development server and you can view the application at http://localhost:3000.

Deploy to GitHub Pages
Assuming you have already set up GitHub Pages for the repository:

sh
Copy code
npm run build
npm run deploy
This will create a production build and deploy it to GitHub Pages.

**Example of Use**
Open the application.
Navigate to the "Add Your Journey" page to input your travel details.
Check the "Landing Page" for notifications on any barriers and alternative routes.
Use the "MapView Page" to see detailed route information.
Visit the "Suggested Options Page" for recommendations on routes with minimal barriers.
