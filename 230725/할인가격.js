function discountPrice() {
    
    // 필요한값, 경로설정(어디서 끌어올것인가)
        
        // 원가를 가져옴
    const oripriceInput = document.getElementById('oriprice'); // oriprice의 input 태그
        // 할인율을 가져옴
    const disRateInput = document.getElementById('disRate');
        
        // 할인된 가격을 가져옴
    const resultElement = document.getElementById('result');

        // 앞서 Input 에서 입력한 값들을 숫자로 변환하기 위해서 새로 변수를 지정했다 *재이해가 필요한 부분*
    const oriprice = parseFloat(oripriceInput.value);
    const disRate = parseFloat(disRateInput.value);
    
    // 결과 "출력"

    const discountedPrice = oriprice - (oriprice * (disRate / 100)); // 계산
    resultElement.innerText = "할인된 가격: " + discountedPrice.toFixed() + "원"; // 문구, toFixed는 소숫점을 몇번째 자리까지 표시할지 나타내는 메서드

}