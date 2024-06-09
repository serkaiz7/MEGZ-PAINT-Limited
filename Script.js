document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const quoteForm = document.getElementById('quoteForm');
  const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
  const galleryItems = document.querySelectorAll('.gallery-item');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.color = 'green';
    event.target.appendChild(successMessage);
    event.target.reset();
  };

  contactForm.addEventListener('submit', handleFormSubmit);
  quoteForm.addEventListener('submit', handleFormSubmit);

  toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Night Mode';
  });

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullSizeImage = document.createElement('img');
      fullSizeImage.src = item.src;
      fullSizeImage.style.position = 'fixed';
      fullSizeImage.style.top = '50%';
      fullSizeImage.style.left = '50%';
      fullSizeImage.style.transform = 'translate(-50%, -50%)';
      fullSizeImage.style.maxWidth = '90%';
      fullSizeImage.style.maxHeight = '90%';
      fullSizeImage.style.zIndex = '1000';
      fullSizeImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
      fullSizeImage.style.border = '5px solid white';
      fullSizeImage.style.borderRadius = '10px';
      document.body.appendChild(fullSizeImage);

      fullSizeImage.addEventListener('click', () => {
        document.body.removeChild(fullSizeImage);
      });
    });
  });
});
