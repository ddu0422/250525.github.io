function copyLocationAddress(id) {
  const accountText = document.getElementById(id).innerText;
  navigator.clipboard.writeText(accountText).then(() => {
    showToast();
  });
}

function copyAccountNumber(id) {
  const accountText = document.getElementById(id).innerText;
  navigator.clipboard.writeText(accountText).then(() => {
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById("copy_toast");
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
