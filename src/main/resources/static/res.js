navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
  element.addEventListener("click", function() {
    navbar.forEach(nav => nav.classList.remove("active"))

    this.classList.add("active");
  })
});
const openModalButton = document.getElementById('open-modal-button');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close');
const form = document.querySelector('form');
const postContainer = document.getElementById('post-container');
/*const postPhotoDisplay = document.querySelector('#postPhotoDisplay');
const postLocationDisplay = document.querySelector('#postLocationDisplay');
const postTimestampDisplay = document.querySelector('#postTimestampDisplay');
const userName = document.querySelector('#userName');
const commentButton = document.querySelector('#commentButton');
const shareButton = document.querySelector('#shareButton');
const commentBox = document.querySelector('#commentBox');
const commentContent = document.querySelector('#commentContent');
const commentPostButton = document.querySelector('#commentPostButton');*/

// Listen for button click to open modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});


// Listen for close button click to close modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Listen for form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get post text and create post element
  const postText = document.getElementById('post-text').value;
  const postImage = document.getElementById('postPhoto').files[0];
  const postLocation = document.getElementById('postLocation').value;

  if (!postText) {
    return;
  }

  const post = createPostElement(postText, postImage, postLocation);

  // Add post element to container and close modal
  postContainer.prepend(post);
  modal.style.display = 'none';

  // Reset form
  form.reset();
});

// Helper function to create post element
function createPostElement(text, image, location) {
  const post = document.createElement('div');
  post.classList.add('post');
  post.style.display = 'block';
  post.style.marginTop = '10px';
  post.style.marginBottom = '10px';
  // Get username (in this example, hardcoded as "John Doe")
  // const username = 'John Doe';
  const username = localStorage.getItem("username") ?? 'John Doe';

  // Create post content
  const postContent = `
    ${location ? `<b><span style="color: #e43737;">${username}</span> is at ${location}</b>` : `<b><span style="color: #e43737;">${username}</span></b>`}
    <p>${text}</p>
    ${image ? `<img class="photo" src="${URL.createObjectURL(image)}" alt="Image" />` : ""}
    
    <div class="post-buttons-cs">
      <a class="comment" onclick="showComments(this)" >Comment</a>
      <a class="share" onclick="sharePost(this)">Share</a>
    </div>
  `;

  // Set post element content and return it
  post.innerHTML = postContent;
  return post;
}

function success() {
  if (document.getElementById("post-text").value === "") {
    document.getElementById('post-button').disabled = true;
  } else {
    document.getElementById('post-button').disabled = false;
  }
}
function showComments(commentButton) {
  const postElement = commentButton.closest(".post");
  const commentsContainer = postElement.querySelector(".comments-container");

  if (commentsContainer) {
    
    commentsContainer.querySelector("form").classList.toggle("hidden");
  } else {
    const newCommentsContainer = document.createElement("div");
    newCommentsContainer.classList.add("comments-container");
    newCommentsContainer.innerHTML = `
      <form onsubmit="addComment(this); return false;">
        <input type="text" name="comment" required class="textcomment" placeholder="Write a comment">
      </form>
      <div class="comments-list"></div>
    `;
    postElement.appendChild(newCommentsContainer);
  }
}
 commentInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
        addComment(commentForm);
      }
    });

function addComment(commentForm) {
  const comment = commentForm.querySelector("input").value;
  const commentsList = commentForm.closest(".comments-container").querySelector(".comments-list");
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");
  commentElement.innerHTML = `
    <div style="width: 100%">
      <p class="username">${localStorage.getItem("username")} </p>
      <p class="comment-text">${comment}</p>
      <hr style="width: 100%"/>
    </div>
    
  `;
  commentsList.appendChild(commentElement);
  commentForm.reset();
}
function sharePost(shareButton) {
  // const postElement = shareButton.closest(".post");
  // const postHeader = postElement.querySelector(".post-header");
  // const shareLink = window.location.href + "#" + postElement.id;
  // navigator.clipboard.writeText(shareLink);
  // postHeader.innerHTML += `
  //   <span class="share-link">(Copied share link to clipboard!)</span>
  // `;

  shareButton.innerHTML = "Copied share link to clipboard!";

  setTimeout(() => {
    shareButton.innerHTML = "Share"
  }, 1000);

  navigator.clipboard.writeText(window.location.href);
}
document.addEventListener("DOMContentLoaded", () => {
  const commentButtons = document.querySelectorAll(".comment");
  commentButtons.forEach((commentButton) => {
    commentButton.addEventListener("click", () => {
      showComments(commentButton);
    });
  });

  const shareButtons = document.querySelectorAll(".share");
  shareButtons.forEach((shareButton) => {
    shareButton.addEventListener("click", () => {
      sharePost(shareButton);
    });
  });
});
