# Product-Identifier-using-QR-Code

A blockchain-based system designed to detect counterfeit products and ensure the identification of original goods. This project leverages blockchain technology and QR codes to help consumers and manufacturers verify the authenticity of products in real-time.

#Abstract
The manufacturing and marketing of counterfeit products pose serious financial, health, and safety risks to consumers. These activities also cause economic harm to original manufacturers, leading to revenue loss, product defamation, and increased expenses in fighting counterfeits. This project proposes a solution to combat these issues using blockchain technology, ensuring that consumers no longer need to rely solely on merchants to verify the authenticity of products.

By storing product information in the blockchain and comparing QR codes on the product, the system can instantly verify if a product is genuine or counterfeit. If counterfeit products are detected, both the customer and the manufacturer are notified.

#Features
Store Product Information: Product details are stored in the blockchain as blocks.
Scan QR Code: Customers can scan the QR code found on products.
Compare Codes: The customer's scanned code is compared with the manufacturer's code in the blockchain.
Notify Customer: If the codes match, the customer is notified that the product is authentic. If they don't match, the customer is alerted about the counterfeit product.
Notify Manufacturer: In the case of counterfeit products, the customer's location is accessed, and the manufacturer is informed of the counterfeit detection.
Technologies Used
Blockchain Platforms: Ethereum, Hyperledger Fabric
QR Code Technology: Zxing, ZXing JavaSE
Mobile App Development: React Native, Swift, Kotlin
Data Storage: MySQL, PostgreSQL, MongoDB, Cloud Storage
Security: Cryptography libraries, hashing algorithms
Web Development: HTML, CSS, JavaScript, frontend frameworks
Integration: REST or GraphQL APIs

#Setup/Installation
To run this project locally, follow these steps:

Development Environment: Use an IDE like Visual Studio Code or IntelliJ IDEA.
Node.js and npm (or yarn): Ensure that you have Node.js and npm (or yarn) installed.
Blockchain Network: Set up an Ethereum or Hyperledger Fabric blockchain network.
QR Code Scanner: You can use a built-in smartphone camera for scanning QR codes.
Mobile App: If using the mobile app, build it using React Native, Swift, or Kotlin.
Data Storage: Set up a database using MySQL, PostgreSQL, or MongoDB, or configure cloud storage for data.
Security: Use cryptography libraries and hashing algorithms for data security.
Web Development: Frontend should be developed using HTML, CSS, JavaScript, and appropriate frameworks.
Integration: Connect the system using REST or GraphQL APIs as required.
How It Works
Scan: The customer scans the product's QR code using the mobile app or built-in smartphone camera.
Verify: The system retrieves the product's information stored in the blockchain and compares the QR code scanned with the original manufacturer's data.
Notify: If the product is genuine, the customer receives confirmation. If counterfeit, the customer is alerted, and the manufacturer is notified with the location of the customer.
Screenshots

Demo/Live Link
GitHub: Product Identifier using QR Code

Contributing
This project is open to contributions. Feel free to fork the repository and submit pull requests for improvements or additional features.

License
This project is licensed under the MIT License.

Contact
For any questions or to explore more of my work, you can reach me at:

GitHub: avanish_shaw
Social Media: avanish_shaw
