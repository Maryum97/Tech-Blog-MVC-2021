// A function to edit a post
async function editFormHandler(event) {
    event.preventDefault();

    // get the post id from the url
    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    const id = event.target.value;

    // Get the post title and post text from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    // use the update route to update the post
    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log(event.target.value);

    // if the edit action is successful, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
        document.location.replace('/dashboard');
        // otherwise, display the error
        } else {
        alert(response.statusText);
        }

  }
  
  document.querySelector('.edit-btn').addEventListener('click', editFormHandler);