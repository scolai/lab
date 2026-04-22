// Get all modal trigger buttons
var openModalBtns = document.getElementsByClassName("btn-open-modal");

// Get all close buttons
var closeModalBtns = document.getElementsByClassName("btn-close-modal");

// Function to open a specific modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close a specific modal (or the one containing the close button)
function closeModal(event) {
    // Find the closest parent with the class 'modal' and hide it
    var modal = event.target.closest('.modal');
    if (modal) {
        modal.style.display = "none";
    }
}

// Add click event listeners to all open buttons
for (var i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener("click", function() {
        var modalId = this.getAttribute("data-modal-target");
        openModal(modalId);
    });
}
// Add click event listeners to all close buttons
for (var i = 0; i < closeModalBtns.length; i++) {
    closeModalBtns[i].addEventListener("click", closeModal);
}



// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    // Check if the clicked element is a modal background
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}