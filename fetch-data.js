// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch the data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = '';

    // Step 6: Create and append user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 7: Handle any error
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Step 8: Call function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);