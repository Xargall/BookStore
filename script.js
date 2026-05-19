function init() {
  renderBooks();
  getFromLocalStorage();
}

function renderBooks() {
  let showRoom = document.getElementById("content");

  for (let i = 0; i < books.length; i++) {
    showRoom.innerHTML += getBookTemplate(i);
  

    isLiked(i);
    publishedComments(i);
  }
}

function publishedComments(i) {
  let commentRef = document.getElementById(`comment${i}`);
  commentRef.innerHTML = "";
  for (
    let commentIndex = 0;
    commentIndex < books[i].comments.length;
    commentIndex++
  ) {
    commentRef.innerHTML += renderComments(commentIndex, i);
  }
}

function isLiked(i) {
  let image = (document.getElementById(`img${i}`).src =
    "/assets/icons/unliked.png");
  if (books[i].liked == true) {
    document.getElementById(`img${i}`).src = "/assets/icons/liked.png";
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
  } else {
    document.getElementById(`img${i}`).src = "/assets/icons/unliked.png";
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
  }
}

function changeLike(i) {
  document.getElementById(`img${i}`).src = "/assets/icons/unliked.png";
  if (books[i].liked == true) {
    document.getElementById(`img${i}`).src = "/assets/icons/unliked.png";
    books[i].liked = false;
    books[i].likes--;
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
    saveToLocalStorage(i);
  } else {
    document.getElementById(`img${i}`).src = "/assets/icons/liked.png";
    books[i].liked = true;
    books[i].likes++;
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
    saveToLocalStorage(i);
  }
}

function sendComment(i) {
  let commentRef = document.getElementById(`input-comment${i}`);
  let inputComment = commentRef.value;
  let inputName = "Mathias";
  let commentIndex = books[i].comments.length;

  books[i].comments[commentIndex] = { name: inputName, comment: inputComment };

  publishedComments(i);
  saveToLocalStorage(i);
  commentRef.value = "";
}

function saveToLocalStorage(i) {
  localStorage.setItem(`likes${i}`, JSON.stringify(books[i].likes));
  localStorage.setItem(`liked${i}`, JSON.stringify(books[i].liked));
  localStorage.setItem(`comments${i}`, JSON.stringify(books[i].comments));
}

function getFromLocalStorage() {
  for (let i = 0; i < books.length; i++) {
    let newLikes = JSON.parse(localStorage.getItem(`likes${i}`));
    let newLiked = JSON.parse(localStorage.getItem(`liked${i}`));
    let newComments = JSON.parse(localStorage.getItem(`comments${i}`));
    if (newComments == null) {
      
      publishedComments(i);
    } else {
      books[i].likes = newLikes;
      books[i].liked = newLiked;
      books[i].comments = newComments;
      isLiked(i);
      publishedComments(i);
    }
  }
}
