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
            <button onclick="changeLike(${i})" ><img src="/assets/icons/unliked.png" alt="" class="fav" id="img${i}" ></button>
          </div>
       </div>
       <div>
         <p>Author : ${books[i].author}</p>
         <p>Erscheinungsjahr : ${books[i].publishedYear}</p>
         <p>Genre : ${books[i].genre}</p>
       </div>
       <div id="comment${i}" class="comments" ></div>
       <span><input type="text" id="input-comment${i}"></span>
    </div>
</div>`;
}

function renderComments(commentIndex, i) {
  return /*html*/ `
    <div>
    <p>${books[i].comments[commentIndex].name}</p>
    <p>${books[i].comments[commentIndex].comment}</p>
    </div>
    `;
}
