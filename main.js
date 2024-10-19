// Get all buttons with class "adopt-btn"
var buttons = document.querySelectorAll('.adopt-btn');

// Loop through each button and attach the event listener
//let user undo their action by clicking the button again
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.innerHTML === 'Adopt Now') {
      button.innerHTML = 'Request Sent';
      alert('You have just followed this pet');
      button.style.backgroundColor = 'teal';
      console.log(button.innerHTML);
    } else if (button.innerHTML === 'Request Sent') {
      alert('You have just unfollowed this pet');
      button.innerHTML = 'Adopt Now';
      button.style.backgroundColor = '#ff6b20';
    }
  });
});
// main.js

document.addEventListener('DOMContentLoaded', () => {
  const subscribeButton = document.querySelector('.news-sub button');
  const nameInput = document.querySelector('.news-sub input[type="text"]');
  const emailInput = document.querySelector('.news-sub input[type="email"]');

  subscribeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name && email) {
      // Store name and email in local storage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);

      // Optionally, clear the input fields
      nameInput.value = '';
      emailInput.value = '';

      // Provide feedback to the user
      alert('Thank you for subscribing, ' + name + '!');
    } else {
      alert('Please enter both your name and email address.');
    }
  });
});
subscribeButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name && email) {
      // Store name and email in local storage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);

      // Optionally, clear the input fields
      nameInput.value = '';
      emailInput.value = '';

      // Redirect to the after-register page
      window.location.href = 'after-register.html';
  } else {
      alert('Please enter both your name and email address.');
  }
});
function saveToLocalStorage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    // Save to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Redirect to aftersign.html
    window.location.href = 'aftersign.html';
  } else {
    alert('Please enter both name and email.');
  }
}
// Function to store user data in local storage
function storeUserData(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Check if the user is already logged in by checking local storage
  const existingUserData = localStorage.getItem('userData');

  // if (existingUserData) {
  //     // If user data exists, it means the user is already logged in
    
  // }

  // If no user data is found, proceed to store the new user data
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a user object to store all details together
  const userData = {
      name: name,
      age: age,
      email: email,
      password: password // Note: storing passwords in plain text is not secure in real applications
  };

  // Store the user object in local storage as a JSON string
  localStorage.setItem('userData', JSON.stringify(userData));

  // Show a success message
  alert('Login successful!');
  window.location.href = 'index.html';
}
function goBack() {
  window.location.href = "index.html"; // Replace "index.html" with the actual path to your home page
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  const form = document.getElementById('donationForm');
  const formData = new FormData(form);

  // Simulate sending data to the server
  console.log('Form Submitted', Object.fromEntries(formData.entries()));

  // Display confirmation message
  alert('Thank you for your donation! Your support is greatly appreciated.');

  // Clear the form
  form.reset();
}

function sendSelectedPetToBackend() {
  const selectedPet = getSelectedPet(); // Get the selected pet from LocalStorage
  
  if (selectedPet) {
      // Data to send to the backend
      const petData = { name: selectedPet };

      // Send pet data to the backend using fetch
      fetch('http://localhost:3000/save-pet', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(petData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          alert('The designer has been notified about the selected pet.');
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
}


