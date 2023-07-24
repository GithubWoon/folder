// 이미지 변경 함수
function changeImage(imageSrc) {
    const imageElement = document.getElementById('image');
    imageElement.src = imageSrc; // .src 속성을 imageSrc 속성으로 변경, 함수를 호출할때마다 이미지 변경을 위함
  }
  
  // 버튼 클릭 이벤트 처리
  document.getElementById('onButton').addEventListener('click', function() {
    changeImage('../images/개발진스.png');
  });
  
  document.getElementById('offButton').addEventListener('click', function() {
    changeImage('../images/개발진스2.png');
  });
  