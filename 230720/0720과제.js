let infoShown = false;

function toggleInfoButton() {
  const imgInfo = document.querySelector('.img-info');
  const infoButton = document.querySelector('.info-button');
  const backButton = document.querySelector('.back');

  if (!infoShown) {
    imgInfo.innerText = '개발진스의 세계로';
    backButton.style.display = 'block';
    infoButton.style.display = 'none';
  } else {
    imgInfo.innerText = '';
    backButton.style.display = 'none';
    infoButton.style.display = 'block';
  }

  infoShown = !infoShown;
}