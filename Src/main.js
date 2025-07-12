function openNav(){
    document.getElementById('mobileMenu').classList.remove ('translate-x-[1200px]');
}

function closeNav(){
    document.getElementById('mobileMenu').classList.add ('translate-x-[1200px]')
}


function changeImage(clicked){
document.getElementById('mainImage').src = clicked.src
}


function changeMale(thumbnail) {
  const mainImage = document.getElementById('maleImage');
  mainImage.src = thumbnail.src;
}

function changeItem(el) {
  const mainImage = document.getElementById('itemsImage');
  const priceText = document.getElementById('priceText');
  const productName = document.getElementById('productName');

  const newImage = el.getAttribute('data-image');
  const priceNGN = el.getAttribute('data-price');
  const priceUSD = el.getAttribute('data-usd');
  const name = el.getAttribute('data-name');

  mainImage.src = newImage;
  priceText.innerHTML = `${priceUSD} <span>(${priceNGN})</span>`;
  productName.textContent = name;
}
