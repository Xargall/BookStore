function getBookTemplate(i) {
  return /*html*/ `  
  <div class="card" style="width: 18rem;">
     <div class="card-head">
       <h5 class="card-title">${books[i].name}</h5>
     </div>
     <img src="./assets/img/books.png" class="card-img-top" alt="...">
     <div class="card-body">
       <div class="pricing";>
          <p>${books[i].price} €</p>
          <div id="like${i}" class="likes">
            <p id="like-count${i}">${books[i].likes}</p>            
            <button onclick="changeLike(${i})" class="like-button"><img src="/assets/icons/unliked.png" alt="" class="fav" id="img${i}" ></button>
          </div>
       </div>
       <div class="book-info">
         <p>Author :${books[i].author}</p>
         <p>Erscheinungsjahr : ${books[i].publishedYear}</p>
         <p>Genre : ${books[i].genre}</p>
       </div>
       
       <div id="comment${i}" class="comments" ><h4>Kommentare</h4></div>
       <span class="comment-input"><input type="text" id="input-comment${i}"><button onclick="sendComment(${i})" class="send-button"><img src="./assets/icons/sendcomment.png" alt=""></button></span>
       

    </div>
</div>`;
}

function renderComments(commentIndex, i) {
  return /*html*/ `
    <div class="author-comment">
    <p>${books[i].comments[commentIndex].name}</p>
    <p>${books[i].comments[commentIndex].comment}</p>
    </div>
   
    `;
}


