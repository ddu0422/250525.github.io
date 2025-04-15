const images = [
  "./images/image03.jpeg",
  "./images/image05.jpeg",
  "./images/image14.jpeg",
  "./images/image09.jpeg",
  "./images/image23.jpeg",
  "./images/image22.jpeg",
  "./images/image24.jpeg",
  "./images/image30.jpeg",
  "./images/image32.jpeg",
];

const galleryContainer = document.querySelector(".gallery_body");

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

let currentIndex = 0;
let startX = 0;

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modal_img").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modal_img").src = images[currentIndex];
}

// 스와이프 이벤트 등록
const modal = document.getElementById("modal");

modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  const threshold = 50;

  if (diff > threshold) {
    nextImage(); // left swipe → next
  } else if (diff < -threshold) {
    prevImage(); // right swipe → previous
  }
});

function openModal(src) {
  currentIndex = images.indexOf(src);
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("modal_img").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// 모달 클릭 시 바깥 영역 누르면 닫히기
document.getElementById("modal").addEventListener("click", (e) => {
  const img = document.getElementById("modal_img");
  if (
    !img.contains(e.target) &&
    !e.target.classList.contains("modal_click_zone") &&
    !e.target.classList.contains("modal_close")
  ) {
    closeModal();
  }
});
