function check3X (){
    const number = parseFloat(document.getElementById('number').value);

    // 텍스트 상자에 숫자를 입력하지 않았을때
    if (isNaN(number)) 
        document.getElementById('result').innerText = '숫자를 입력하세요'; 

    
    // 텍스트 상자에 숫자를 입력했을때
    else {
        // 3으로 나눈 나머지가 0 = 3의배수
        if (number % 3 === 0) {
            document.getElementById('result').innerText = '3의 배수입니다';
        } else {
            document.getElementById('result').innerText = '3의 배수가 아닙니다';
        }
    }
}