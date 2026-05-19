function getBookTemplate(i) {
  return /*html*/ `  
  <div class="card" style="width: 18rem;">
     <div class="card-head">
       <h5 class="card-title">${books[i].name}</h5>
     </div>
     <img src="./assets/img/books.png" class="card-img-top" alt="...">
     <div class="card-body">
       <div class="pricing";>
          <p>${books[i].price.toFixed(2)} €</p>
          <div id="like${i}" class="likes">
            <p id="like-count${i}">${books[i].likes}</p>            
            <button onclick="changeLike(${i})" class="like-button"><img src="/assets/icons/unliked.png" alt="" class="fav" id="img${i}" ></button>
          </div>
       </div>
       <div class="book-info">
        <table >
          <tr>
            <td>Author</td>
            <td>: ${books[i].author}</td>
          </tr>
          <tr>
            <td>Erscheinungsjahr</td>
            <td>: ${books[i].publishedYear}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>: ${books[i].genre}</td>
          </tr>
        </table>
       </div>
       
       <div id="comment${i}" class="comments" ><h4>Kommentare</h4></div>
       <span class="comment-input"><input type="text" id="input-comment${i}" placeholder="Schreibe deinen Kommentar..."><button onclick="sendComment(${i})" class="send-button"><img src="./assets/icons/sendcomment.png" alt=""></button></span>
       

    </div>
</div>`;
}

function renderComments(commentIndex, i) {
  return /*html*/ `
    <section class="author-comment">
    <p style="width: 50%;">[${books[i].comments[commentIndex].name}]</p>
    <p style="width: 90%;">${books[i].comments[commentIndex].comment}</p>
</section>
   
    `;
}


