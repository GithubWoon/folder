// 결과표시
    // 텍스트 상자에는 뭐가 필요해? 숫자1, 숫자2, 최대공약수가 필요해 -> 변수 선언
    function Taewoon() {
        const number1 = (document.getElementById("number1").value);
        const number2 = (document.getElementById("number2").value); // "number2" 라는 id를 가진녀석을 찾고 value로 해당 타이핑 상자에 입력한값을 불러옴
  
        const common = Common(number1, number2); // 최대 공약수가 필요해 -> 최대 공약수 선언! -> 어디서 어떻게 가져올거야? -> Common 함수에 number1, number2 넣어줘 최대공약수 구해올게

        document.getElementById("result").innerText = `${common}`; // 결과창 문구 띄울곳 "result" 를 가지고 있는곳에 `` 내에 있는 문구를 띄울게
        
      }
  
      // 재귀함수를 이용하여 최대 공약수 구하는 식 *재귀함수 이해필요*
      function Common(a, b) { // const number1 은 a로 const number2는 b로 인식됨
        return b === 0 ? a : Common(b, a % b);
      }