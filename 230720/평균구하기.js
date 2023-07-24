function getAverage () {
    const kor = parseFloat(document.getElementById('kor').value); // const는 유일한 값
    const mat = parseFloat(document.getElementById('mat').value);
    const eng = parseFloat(document.getElementById('eng').value);
    const total = kor + mat + eng;
    const average = total / 3;
    
    let grade; // "성적" 은 고정되고 수치는 변화할 수 있으니 let 을 쓰자
    
    if (average >= 90) {
        grade = 'A';
    }

    else if (average >= 80) {
        grade = 'B';
    }

    else {
        grade = 'C';
    }

    document.getElementById('result').innerText = `평균점수 ${average} 점, 학점은 ${grade} 입니다`; // 여기는 문구
}

// 1. 함수생성 선언
// 2. 변수선언
// 3. 조건문 작성
// 4. 결과출력