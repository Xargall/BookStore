function init() {
  renderBooks();
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
  } else {
    document.getElementById(`img${i}`).src = "/assets/icons/unliked.png";
  }
}

function changeLike(i) {
  document.getElementById(`img${i}`).src = "/assets/icons/unliked.png";
  if (books[i].liked == true) {
    document.getElementById(`img${i}`).src = "/assets/icons/unliked.png";
    books[i].liked = false;
    books[i].likes--;
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
  } else {
    document.getElementById(`img${i}`).src = "/assets/icons/liked.png";
    books[i].liked = true;
    books[i].likes++;
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
  }
}

function sendComment(i) {
  let commentRef = document.getElementById(`input-comment${i}`);
  let inputComment = commentRef.value;
  let inputName = "Mathias";
  let commentIndex = books[i].comments.length;

  books[i].comments[commentIndex] = { name: inputName, comment: inputComment };

  publishedComments(i);
  commentRef.value = "";
}
