// Simple image modal
document.addEventListener('DOMContentLoaded', function() {
  // Create modal element
  var modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = '<div class="image-modal-content"><span class="image-modal-close">&times;</span><img src="" alt="Enlarged image"></div>';
  document.body.appendChild(modal);
  
  var modalImg = modal.querySelector('img');
  var closeBtn = modal.querySelector('.image-modal-close');
  
  // Open modal when image is clicked
  document.querySelectorAll('.paper-image-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var imageSrc = this.getAttribute('data-image') || this.querySelector('img').src;
      modalImg.src = imageSrc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });
  
  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  closeBtn.addEventListener('click', closeModal);
  
  // Close when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

