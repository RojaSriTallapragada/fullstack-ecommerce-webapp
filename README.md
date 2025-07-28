🛍️ Full Stack E-Commerce Web Application
A complete MERN (MongoDB, Express, React, Node.js) based E-Commerce platform featuring a dynamic user interface, admin panel, cart functionality, and secure authentication system. This application consists of three main modules – Frontend, Backend, and Admin Panel – seamlessly integrated to simulate a real-world shopping experience.

🔧 Project Modules
1️⃣ Frontend (/frontend)
The user-facing portion of the application, built with React.js, provides an intuitive and responsive shopping experience.

Key Features:

✨ Home Page with:

Popular products

New collections

Newsletter section

Category navigation: Men | Women | Kids

🔐 Authentication:

User Sign Up / Login

Persistent cart even after logout

🛒 Product Details Page:

Breadcrumb navigation

Product image, name, old price, new price

Fixed-size options, description, reviews & ratings

"Add to Cart" functionality

🧾 Cart:

Fully functional and user-specific

Items persist in user's history

2️⃣ Backend (/backend)
The server-side application powered by Node.js, Express, and MongoDB Atlas for handling user and cart data securely.

Key Features:

🧑‍💻 User Registration & Authentication:

Sign up using name, email (unique) and password

Generates a unique Auth Token

🔐 Auth Token Usage:

Tracks each user's actions on cart operations (add/remove items)

🌐 RESTful APIs:

Tested using Postman

Handles all communication with frontend and admin modules

3️⃣ Admin Panel (/admin)
A dedicated portal for administrators to manage product listings.

Key Features:

➕ AddProduct:

Enter product details: name, old price, new price, category, image

Stores product in DB with a unique ID

📜 ListProduct:

Displays all products with:

Image, name, prices, category

🗑️ Remove option for permanent deletion

🚀 Technologies Used
Frontend	Backend	Database	Tools
React.js	Node.js	MongoDB Atlas	Postman
HTML/CSS	Express.js	Mongoose	Multer (for image upload)
JavaScript	JWT (auth)		npm

⚠️ Some libraries used may vary slightly as this project was built from a learning tutorial and customized.

🛠️ How to Run Locally
🔹 Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
🔹 Run Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
🔹 Run Backend
bash
Copy
Edit
cd backend
npm install
node index.js
Note: If node \index.js doesn’t work, just use node index.js.

🔹 Run Admin Panel
bash
Copy
Edit
cd admin
npm install
npm run dev
📦 Folder Structure Overview
bash
Copy
Edit
├── frontend       # React UI for users
├── backend        # Express.js server
├── admin          # Admin dashboard
└── README.md      # Project documentation
🖼️ Screenshots
Add screenshots of the UI, database view, and admin panel here after uploading them.
