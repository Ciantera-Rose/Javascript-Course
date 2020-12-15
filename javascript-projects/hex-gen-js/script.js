function myGenerator() {
    alert("Do you have more punches than I do colors? Test me out...")
}

const heading = document.getElementById("h1").innerHTML = "Random Hex Color Flipper";
const footer = document.getElementById("h3").innerHTML = ".";

const hexFlipper = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "Background Color: #" + randomColor;
  }
  
 btn.addEventListener("click", hexFlipper);
 hexFlipper();

