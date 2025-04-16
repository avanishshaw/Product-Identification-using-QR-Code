# 📦 Product Identifier Using QR Code

A simple, clean product verification system using **Node.js**, **Express**, **MongoDB**, and **QR Codes**.  
Manufacturers can add products with unique QR codes, and consumers can verify the authenticity of a product by scanning the QR code.

---

## 📁 Project Structure

Product Identifier/ ├── backend/ │ ├── server.js │ ├── models/ │ ├── routes/ │ └── package.json ├── frontend/ │ ├── index.html │ ├── addProduct.html │ ├── verifyProduct.html │ └── (other assets) ├── README.md └── (other files)

yaml
Copy
Edit

---

## 🚀 How to Run This Project

> 👉 **Important:**  
> Make sure **MongoDB** is installed and running locally.

---

### ✅ Step 1: Set up the Backend

1. Open your terminal  
2. Navigate to the backend folder:
   ```bash
   cd "Product Identifier/backend"
Install dependencies:

bash
Copy
Edit
npm install
Start MongoDB server (if not running):

bash
Copy
Edit
mongod
In a new terminal, start the backend server:

bash
Copy
Edit
nodemon server.js
If successful, it should log:

arduino
Copy
Edit
Server running on http://localhost:5000
MongoDB connected
✅ Step 2: Test the API using Postman
Endpoints:

Add Product:
POST http://localhost:5000/api/products/add
Body (JSON):

json
Copy
Edit
{
  "productId": "12345",
  "productName": "Sample Product",
  "manufacturer": "Avanish Industries"
}
Verify Product:
POST http://localhost:5000/api/products/verify
Body (JSON):

json
Copy
Edit
{
  "productId": "12345"
}
✅ If successful — it returns product details or verification result.

✅ Step 3: Run the Frontend
Open the frontend folder

Open index.html, addProduct.html, and verifyProduct.html in your browser

Make sure your backend server is still running while you use these pages.

✨ Features
Product Addition by Manufacturer

QR Code Generation using External API

Product Verification by Consumer

Real-time QR Code Scanning

Secure MongoDB Database Storage

Clean, modular backend structure

🌱 Future Improvements (if someone wants to use it)
✅ Deploy backend on Render/Heroku

✅ Use MongoDB Atlas for cloud database

✅ Add user authentication for manufacturers

✅ Track purchase history

✅ Add QR Code scanning using webcam

✅ Add a React/Vue frontend

✅ Generate downloadable PDF certificates for verified products

📌 Prerequisites
Node.js

MongoDB

Postman (for API testing)

Web browser

GitHub: avanish_shaw
Social Media: avanish_shaw
