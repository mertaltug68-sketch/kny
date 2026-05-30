const cards = document.querySelectorAll(".card");

function shuffleCard() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));


}