// 1부터 3까지 더하기
let sum = 0;
sum += 1;
sum += 2;
sum += 3;
document.write("1부터 3까지 합 " + sum + "<br>");

//for문으로 1부터 3까지 더하기
//let i;
// 초깃값; 2조건; 1증가식
let sumFor = 0; // 변수선언, 0으로 초기화
for(i=1; i<4; i++){ // i는 1부터 시작, i<4 이면 sumFor 실행, i++ 는 1을 증감
    sumFor += i // SumFor + i 
}

document.write("1부터 3까지 [for문] 합: " + sumFor + "<br>"); // 결과값 문구출력



let sumsum = 0;
for(i=1; i<1001; i++){
    sumsum += i
}
document.write("1부터 1000까지 [sumsum문] 합: " + sumsum + "<br>");

// 2.변수선언
// 3. 조건생성

let zzaksu = 0;
for(i=1; i<11; i++){
    if (i % 2===0) { // 2로 나눴을때 나머지가 0인 값들
    zzaksu += i; // zzaksu 변수에 i 값을 더한다 i<11 을 만족하는 짝수들이 다 더해질때까지 반복문이 돌아감
    }
}
document.write("1부터 10까지 짝수의 합: " + zzaksu + "<br>");

let holsu = 0;
for(i=1; i<11; i++){
    if(i % 2!==0) {
        holsu += i;
    }
}
document.write("1부터 10까지 홀수의 합: " + holsu + "<br>")

// 별 찍기
for(k=1; k<11; k++){
    document.write("* + <br>");
}

////////////////////////////////

for (k = 1; k < 6; k++) { // 줄 개수
    for (j = 1; j < k; j++) { // 별 개수
      document.write("*");
    }
    document.write("<br>");
  
    // 최댓값에 도달했을 때 다시 하나씩 감소
    if (k === 5) {
      for (j= k-1; j > 1; j--) { 
        for (i= 1; i < j; i++) { // * 여기서 왜 i값이 나오는거지 ->  var,let,const키워드를 생략하면 전역변수로 선언되어버림 -> 
          // 즉 i가 전역변수로 설정되어있음 -> for문을 let 선언으로 연습필요 *
          document.write("*");
        }
        document.write("<br>");
      }
    }
  }
  
  // 초기값, 반복 조건, 증감식
