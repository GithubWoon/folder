// 사각형의 넓이를 구해보자
// 1. 함수 식의 (가로,세로) 세부요소 할당해줌
// 2. if return 으로 오류 상황, 대처를 만들어줌
// 3. 가로 * 세로의 변수값 지정해줌, 결과값 출력

function changeArea() {

    // changeArea 라는 함수생성 넓이는 이 함수를 통해서 구할수 있다
    // () 안은 html 에서 지정해주지않았음

    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    // width: "가로" 라는 고정값을 선언 
    // parseFloat 라는 함수를 생성: 문자열을 부동소숫점 숫자로 변환 * 헷갈림 *
    // document.getElementById('width').value : id가 'width" 값인 input 요소를 가져온다 
    
    // 1번 작성완료


    if (isNaN(width) || isNaN(height)) {
        
        // width, height 값에 숫자가 아닐경우
        // || 연산자: 아닐경우

      alert('숫자를 입력해주세요');
      return;

      // 간단한 알림메시지, 디버깅 표시할때 자주사용됨
      // 2번 작성완료

    }

    const area = width * height;
    document.getElementById('result').innerText = `${area}`;

    // 3번 작성완료
  }