// New Post Form Handler
async function newFormHandler(event) {
  event.preventDefault();

  // Get the post title and post text from the form
  const title = document.querySelector('#post-title').value;
  const description = document.querySelector('#post-text').value;

console.log(title);
console.log(description);

  if (title && description) {
    // use the add a new post POST route to add the post 
    // user id is added from the session information in the route
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });


    // if the response is okay, reload the page, showing the newest post now in the user's post list
    if (response.ok) {
      document.location.replace('/dashboard');
      // otherwise, display the error
    } else {
      alert(response.statusText);
    }
  }
}

// Event Listener for the new post submit button
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);