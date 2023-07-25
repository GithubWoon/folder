let now = new Date("2023-07-25"); // 오늘날짜
let firstDay = new Date("2023-07-10"); // 시작날짜

const resultElement = document.getElementById("result"); // 결과 속성 = 결과를 끌어오는 경로

// 계산식: 공부일 = 오늘날짜 - 시작날짜
const StudyDay = (now - firstDay) / (1000 * 60 * 60 * 24); // 밀리초를 일로 변환 *재이해가 필요한 부분 *

// 결과
resultElement.innerText = StudyDay.toFixed(0) + "일"; // 결과 출력: 결과수치 + 문구 같이 삽입해둔 상태, tofiexd() 메서드는 소숫점을 몇번째 자리까지 나타낼것이냐를 의미함


//////////////////////////////////////// 여기까지 공부기간///////////////////////////////////////////////////

// 박스 회전 초기값, 0도 회전한 상태를 의미
let rotationDegree = 0;

// 왼쪽회전
function rotateLeft() {
  rotationDegree -= 45;
  updateRotation();
}

// 오른쪽 회전
function rotateRight() {
  rotationDegree += 45;
  updateRotation();
}

// 회전한걸 업데이트 해줌
function updateRotation() {
  const containElement = document.querySelector(".contain"); // contain class를 요소로 설정
  // 변수명에 ~Element 를 붙여주는것은 DOM 요소라는것을 알려줌으로써 가독성이 좀더 편리하게하기 위함
  containElement.style.transform = `translate(-50%, -50%) rotate(${rotationDegree}deg)`;
  // translate(-50%, -50%) 위치에서 rotationDegree 만큼 이동해야됨
}
