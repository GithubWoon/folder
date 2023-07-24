// 2단 ~ 6단
for(let i = 2; i <= 6; i++) {
    document.write(i + '단' + '<br>');
    document.write('<br>');

    // 계산식
    for(let j = 1; j <= 9; j++) {
      document.write(i + ' * ' + j + ' = ' + (i*j) + '<br>');
      document.write('<br>');
    }
  }