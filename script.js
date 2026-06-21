const qoshishTugma = document.getElementById('qoshishTugma');
const faylInput = document.getElementById('faylInput');
const karopka = document.getElementById('karopka');
const kattaKorsatish = document.getElementById('kattaKorsatish');

qoshishTugma.addEventListener('click', () => {
  faylInput.click();
});

faylInput.addEventListener('change', (event) => {
  const tanlanganFayllar = event.target.files;

  for (const fayl of tanlanganFayllar) {
    rasmniQoshish(fayl);
  }

  faylInput.value = '';
});


function kattaRasmniKorsat(manzil) {
  kattaKorsatish.innerHTML = '';

  const kattaImg = document.createElement('img');
  kattaImg.src = manzil;
  kattaKorsatish.appendChild(kattaImg);

  kattaKorsatish.dataset.faolManzil = manzil;
}

function kattaKorsatishniTozalash() {
  kattaKorsatish.innerHTML = '<span class="bosh-matn">Rasmni kattalashtirib korish uchun yuqoridagi rasmga bosing</span>';
  delete kattaKorsatish.dataset.faolManzil;
}