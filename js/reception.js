const showReception = () => {
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("recepient"));

  if (params.get("recepient")) {
    document.getElementById("recepient").style.display = "block";
  }
};

showReception();
