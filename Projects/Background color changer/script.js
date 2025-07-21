document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeBtn");
  const colorCode = document.getElementById("colorCode");

  button.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = `Color: ${randomColor}`;
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
