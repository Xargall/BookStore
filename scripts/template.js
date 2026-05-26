function getBookTemplate(i) {
  return /*html*/ `  
  <div class="card" style="width: 18rem;">
    <div class="card-head">
      <h5 class="card-title">${books[i].name}</h5>
    </div>
    <img src="./assets/img/books.png" class="card-img-top" alt="...">
    <div class="card-body">
      <div class="pricing";>
          <p id="formatted-price${i}"></p>
          <button onclick="addToCart(${i})" class="send-button"><img src="/assets/icons/add-to-cart.png" alt=""></button>
          <div id="like${i}" class="likes">
            <p id="like-count${i}">${books[i].likes}</p>            
            <button onclick="changeLike(${i})" class="like-button" aria-label="Favourite Button"><img src="/assets/icons/unliked.png" alt="" class="fav" id="img${i}" ></button>
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
      <div class="comments" >
        <h4>Kommentare</h4>
        <div id="error${i}"></div>
        <table id="comment${i}" class="comment-table" ></table>      
      </div>
      <span class="comment-input"><input class="input-field" type="text" id="input-comment${i}" placeholder="Schreibe deinen Kommentar..."><button onclick="sendComment(${i})" class="send-button" aria-label="Send Comment Button"><img src="./assets/icons/sendcomment.png" alt=""></button></span>
    </div>
  </div>`;
}

function renderComments(commentIndex, i) {
  return /*html*/ `
    <tr class="author-comment">
      <td class="table-data">[${books[i].comments[commentIndex].name}]</td>
      <td class="table-data" style=" overflow-wrap: anywhere;">${books[i].comments[commentIndex].comment}</td>
    </tr>
   `;
}

function getFavDialogTemplate(i) {
  return /*html*/ `
  <section class="favor-section"  >
    <div class="author-card">
      <h5 class="card-title">${books[i].name}</h5>
      <img src="../assets/img/books.png" alt="" srcset="">
      <table class="author-table">
        <tr>
          <td>Author</td>
          <td>: ${books[i].author}</td>
        </tr>
        <tr>
          <td>Erscheinungsjahr</td>
          <td style="width: 55%">: ${books[i].publishedYear}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>: ${books[i].genre}</td>
        </tr>
      </table>
    </div> 
  </section>      
  `;
}

function renderCartList(index, formattedPrice) {
  return /*html*/ `
    <div class="list-item"><li class="cart-line">${cart[index].name} - Quantity: ${cart[index].quantity} - Price: ${formattedPrice}</li>
    <button onclick=removeFromCart(${index}) class="send-button"><img src="/assets/icons/trash.png"  alt=""></button></div>
  `;
}

function renderTotalPrice(formattedTotal){
  return /*html*/`
    <p>Total Price: ${formattedTotal}</p>
  `
}
