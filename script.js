function init() {
  renderBooks();
  getFromLocalStorage();
}

function renderBooks() {
  const showRoom = document.getElementById("content");

  for (let i = 0; i < books.length; i++) {
    showRoom.innerHTML += getBookTemplate(i);

    formatPrice(i);
    isLiked(i);
    publishedComments(i);
  }
}

function formatPrice(i) {
  const priceRef = document.getElementById(`formatted-price${i}`);
  const price = books[i].price;
  const formattedPrice = price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  priceRef.innerHTML = formattedPrice;
}

function publishedComments(i) {
  const commentRef = document.getElementById(`comment${i}`);
  const commentErrorRef = document.getElementById(`error${i}`);
  commentErrorRef.innerHTML = "";
  commentRef.innerHTML = "";
  if (books[i].comments.length === 0) {
    commentErrorRef.innerHTML = `<p class="err-msg">Es war noch niemand hier!<br>Sei der Erste!</p>`;
  } else {
    for (
      let commentIndex = books[i].comments.length - 1;
      commentIndex >= 0;
      commentIndex--
    ) {
      commentRef.innerHTML += renderComments(commentIndex, i);
    }
  }
}

function isLiked(i) {
  const image = (document.getElementById(`img${i}`).src =
    "./assets/icons/unliked.png");
  if (books[i].liked == true) {
    document.getElementById(`img${i}`).src = "./assets/icons/liked.png";
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
  } else {
    document.getElementById(`img${i}`).src = "./assets/icons/unliked.png";
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
  }
}

function changeLike(i) {
  document.getElementById(`img${i}`).src = "./assets/icons/unliked.png";
  if (books[i].liked == true) {
    document.getElementById(`img${i}`).src = "./assets/icons/unliked.png";
    books[i].liked = false;
    books[i].likes--;
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
    saveToLocalStorage(i);
  } else {
    document.getElementById(`img${i}`).src = "./assets/icons/liked.png";
    books[i].liked = true;
    books[i].likes++;
    document.getElementById(`like-count${i}`).innerHTML = books[i].likes;
    saveToLocalStorage(i);
  }
}

function sendComment(i) {
  const commentRef = document.getElementById(`input-comment${i}`);
  const inputComment = commentRef.value;
  const inputName = "Mathias";
  const commentIndex = books[i].comments.length;

  books[i].comments.push({ "name": inputName, "comment": inputComment });

  publishedComments(i);
  saveToLocalStorage(i);
  commentRef.value = "";
}

function saveToLocalStorage(i) {
  localStorage.setItem(`likes${i}`, JSON.stringify(books[i].likes));
  localStorage.setItem(`liked${i}`, JSON.stringify(books[i].liked));
  localStorage.setItem(`comments${i}`, JSON.stringify(books[i].comments));
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getFromLocalStorage() {
  for (let i = 0; i < books.length; i++) {
    let newLikes = JSON.parse(localStorage.getItem(`likes${i}`));
    let newLiked = JSON.parse(localStorage.getItem(`liked${i}`));
    let newComments = JSON.parse(localStorage.getItem(`comments${i}`));
    let newCart = JSON.parse(localStorage.getItem("cart"));
    if (newComments == null) {
      publishedComments(i);
    } else {
      books[i].likes = newLikes;
      books[i].liked = newLiked;
      books[i].comments = newComments;
      cart = newCart;
      isLiked(i);
      publishedComments(i);
    }
  }
}

function showFavDialog() {
  const dialRef = document.getElementById("fav-dialog");
  const dialSectRef = document.getElementById("section");
  dialSectRef.innerHTML = "";
  dialRef.showModal();
  dialRef.classList.add("opened");

  for (let i = 0; i < books.length; i++) {
    let favLiked = books[i].liked;
    if (favLiked == true) {
      dialSectRef.innerHTML += getFavDialogTemplate(i);
    }
  }
}

function closeDialog() {
  const dialRef = document.getElementById("fav-dialog");
  dialRef.close();
  dialRef.classList.remove("opened");
}

function closeCartDialog() {
  const dialRef = document.getElementById("cart");
  dialRef.close();
  dialRef.classList.remove("opened");
}

function bubbleProtection(event) {
  event.stopPropagation();
}

function showCart() {
  const cartRef = document.getElementById("cart");
  const cartSectRef = document.getElementById("shopping-cart");
  cartSectRef.innerHTML = "";
  cartRef.showModal();
  cartRef.classList.add("opened");
  updateCartDisplay();
}

function addToCart(i) {
  const item = cart.find((product) => product.name === books[i].name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ "name": books[i].name, "price": books[i].price, quantity: 1 });
  }
  saveToLocalStorage(i);
}

function updateCartDisplay() {
  const cartList = document.getElementById("shopping-cart");
  const cartListError = document.getElementById("cart-error");
  let finalPriceRef = document.getElementById("total-price");
  let total = 0;
  cartList.innerHTML = "";
  cartListError.innerHTML = "";
  finalPriceRef.innerHTML = "";
  if (cart.length === 0) {
    cartListError.innerHTML = `<p class="err-msg">Fülle jetzt deinen Einkaufswagen mit deinen Lieblingsbüchern!</p>`;
  } else {
    for (let index = 0; index < cart.length; index++) {
      const subTotal = cart[index].price * cart[index].quantity;
      const formattedPrice = subTotal.toLocaleString("de-DE", {style: "currency",currency: "EUR",});
      cartList.innerHTML += renderCartList(index, formattedPrice);
      total += cart[index].price * cart[index].quantity;
      let formattedTotal = total.toLocaleString("de-DE", {style: "currency",currency: "EUR",});
      finalPriceRef.innerHTML = renderTotalPrice(formattedTotal);
    }
  }
}

function removeFromCart(index) {
  cart = cart.filter((product) => product.name !== cart[index].name);
  updateCartDisplay();
}
