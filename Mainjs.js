
  // Select the zoom overlay and zoomed image
  const zoomOverlay = document.getElementById('zoomOverlay');
  const zoomedImage = document.getElementById('zoomedImage');

  // Add click listeners to all images inside .reel
  document.querySelectorAll('.reel img').forEach(image => {
    image.addEventListener('click', () => {
      zoomedImage.src = image.src; // Set the clicked image's src to the zoom overlay
      zoomOverlay.style.display = 'flex'; // Show the overlay
    });
  });

  // Add click listener to close the zoom overlay
  zoomOverlay.addEventListener('click', () => {
    zoomOverlay.style.display = 'none'; // Hide the overlay
    zoomedImage.src = ''; // Clear the image source
  });

  // Select the heart icon
  const heartIcon = document.querySelector('.heart-icon');

  // Define the default and toggled heart image URLs
  const defaultHeart = "https://i.ibb.co/tKL4Qpf/icons8-heart-100-2.png"; // Original icon
  const toggledHeart = "https://i.ibb.co/88BHp8c/icons8-heart-100-1.png"; // Filled heart icon

  // Add a click event listener to toggle the icon
  heartIcon.addEventListener('click', () => {
    if (heartIcon.src === defaultHeart) {
      heartIcon.src = toggledHeart; // Change to toggled heart
    } else {
      heartIcon.src = defaultHeart; // Revert to default heart
    }
  });

function toggleText1() {
      const moreText1 = document.querySelector('.more-text1');
      const moreLink1 = document.querySelector('.more1');
      
      if (moreText1.style.display === "none") {
        moreText1.style.display = "inline"; // Show full text
        moreLink1.textContent = "In our stream, we would be doing a lot of"; // Change the link text to "Less"
      } else {
        moreText1.style.display = "none"; // Hide the extra text
        moreLink1.textContent = "In our stream, we would be doing a lot of..."; // Reset the link text to "More"
      }
}

function toggleText2() {
      const moreText2 = document.querySelector('.more-text2');
      const moreLink2 = document.querySelector('.more2');
      
      if (moreText2.style.display === "none") {
        moreText2.style.display = "inline"; // Show full text
        moreLink2.textContent = "Our poster would be promoting"; 
      } else {
        moreText2.style.display = "none"; // Hide the extra text
        moreLink2.textContent = "Our poster would be promoting..."; 
      }
}