const images = [
  "./images/image01.jpeg",
  "./images/image02.jpeg",
  "./images/image03.jpeg",
  "./images/image04.jpeg",
  "./images/image05.jpeg",
  "./images/image06.jpeg",
  "./images/image07.jpeg",
  "./images/image08.jpeg",
  "./images/image09.jpeg",
];

const galleryContainer = document.querySelector(".gallery_container");

images.forEach((src) => {
  const item = document.createElement("div");
  item.classList.add("gallery_item");
  item.innerHTML = `<img src="${src}" onclick="openModal('${src}')">`;
  galleryContainer.appendChild(item);
});

function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal_img").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
