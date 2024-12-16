list = [
  "Welcome to our resturant",
  "مرحبا في مطعمنا",
  "We are greeting to open our resturant",
  "كيف يمكنني ان اساعدك",
  "Hello, visitor! Enjoy your time here.",
  "We’re glad to have you here!",
  "Explore and discover amazing content.",
];
const greetingElement = document.getElementsByClassName('greeting');
let currentIndex = 0;

var item = list[currentIndex];
function changeText() {
    currentIndex = (currentIndex + 1);

  item = list[currentIndex % 7];
  greetingElement[0].innerHTML=item;
}
setInterval(changeText, 4000);
