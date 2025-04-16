document.getElementById("register").addEventListener("click", async () => {
    const qrCode = document.getElementById("productSN").value.trim();
    const consumerCode = document.getElementById("consumerCode").value.trim(); // Optional use
  
    if (!qrCode) {
      alert("Please scan a QR code first.");
      return;
    }
  
    try {
      const response = await fetch(`https://product-identification-using-qr-code.onrender.com/api/products/verify/${qrCode}`);
      const data = await response.json();
  
      const logTable = document.getElementById("logdata");
      logTable.innerHTML = ""; // Clear previous result
  
      if (data.success) {
        const product = data.data;
  
        logTable.innerHTML += `
          <tr><td>✅ Verified: ${product.name} by ${product.manufacturer}</td></tr>
          <tr><td>Manufactured on: ${product.manufactureDate}</td></tr>
          <tr><td>Expires on: ${product.expiryDate}</td></tr>
          <tr><td>Current Owner: ${product.owner}</td></tr>
        `;
      } else {
        logTable.innerHTML = `<tr><td>❌ ${data.message}</td></tr>`;
      }
    } catch (error) {
      console.error("Verification error:", error);
      document.getElementById("logdata").innerHTML = `<tr><td>❌ Server error</td></tr>`;
    }
  });
  
