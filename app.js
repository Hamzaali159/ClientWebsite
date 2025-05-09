// function moveSlider(direction) {
//     const container = document.getElementById("cardSlider");
//     const scrollAmount = 220; // Adjust based on card width
  
//     if (direction === "next") {
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     }
//   }
  
//   function showInfo(text) {
//     document.getElementById("modalText").innerText = text;
//     document.getElementById("infoModal").style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById("infoModal").style.display = "none";
//   }
// function moveSlider(direction) {
//     if (direction === 'next') {
//       currentIndex = (currentIndex + 1) % items.length;
//     } else {
//       currentIndex = (currentIndex - 1 + items.length) % items.length;
//     }
//     updateSlider();
//   }

//   // Modal Info
//   function showInfo(text) {
//     document.getElementById("modalText").innerText = text;
//     document.getElementById("infoModal").style.display = "block";
//   }

//   function closeModal() {
//     document.getElementById("infoModal").style.display = "none";
//   }

//   // Init first view
//   updateSlider();
// function moveSlider(direction) {
//     if (direction === 'next') {
//       currentIndex = (currentIndex + 1) % items.length;
//     } else {
//       currentIndex = (currentIndex - 1 + items.length) % items.length;
//     }
//     updateSlider();
//   }

//   function showInfo(text) {
//     document.getElementById("modalText").innerText = text;
//     document.getElementById("infoModal").style.display = "block";
//   }

//   function closeModal() {
//     document.getElementById("infoModal").style.display = "none";
//   }

//   // Initial display
//   updateSlider();

// Select all buttons with the class 'add-card-btn'
// const buttons = document.querySelectorAll('.add-card-btn');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const confirmed = confirm("Proceed to payment?");

//     if (confirmed) {
//       alert("Payment successful!");
//     } else {
//       alert("Payment canceled.");
//     }
//   });
// });const params = new URLSearchParams(window.location.search);
const imgSrc = params.get('img');
if (imgSrc) {
  document.getElementById("product-img").src = decodeURIComponent(imgSrc);
}