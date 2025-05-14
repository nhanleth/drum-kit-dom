// Đếm số lượng nút trống có class "drum"
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Thêm sự kiện click cho từng nút trống
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Lấy nội dung văn bản bên trong nút được nhấn (ví dụ: "w", "a", ...)
    var buttonKey = this.innerHTML;

    // Gọi hàm phát âm thanh tương ứng
    makeSound(buttonKey);

    // Gọi hàm tạo hiệu ứng nhấn nút
    buttonAnimation(buttonKey);
  });
}

// Thêm sự kiện lắng nghe khi người dùng nhấn phím trên bàn phím
document.addEventListener("keypress", function (event) {
  // Gọi hàm phát âm thanh tương ứng với phím được nhấn
  makeSound(event.key);

  // Gọi hàm tạo hiệu ứng cho phím tương ứng
  buttonAnimation(event.key);
});

// Hàm phát âm thanh dựa trên phím được nhấn
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Phím không hợp lệ: " + key);
  }
}

// Hàm tạo hiệu ứng nhấn nút khi người dùng nhấn hoặc click
function buttonAnimation(currentKey) {
  // Tìm phần tử có class tương ứng với phím (ví dụ: ".w", ".a", ...)
  var activeButton = document.querySelector("." + currentKey);

  // Kiểm tra nếu nút tồn tại (đề phòng trường hợp phím không đúng)
  if (activeButton) {
    // Thêm class "pressed" để tạo hiệu ứng
    activeButton.classList.add("pressed");

    // Sau 100ms, xóa class "pressed" để trở về trạng thái ban đầu
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
