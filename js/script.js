window.onload = function () {
  imgContainer = document.getElementById("img-container");

  eyeIcon = document.getElementById("eye-icon");
  hiddenContainer = document.getElementById("hidden-eye-container");

  imgContainer.addEventListener("mouseover", function () {
    hiddenContainer.style.visibility = "visible";
    eyeIcon.style.visibility = "visible";
  });

  hiddenContainer.addEventListener("mouseout", function () {
    hiddenContainer.style.visibility = "hidden";
    eyeIcon.style.visibility = "hidden";
  });
};
