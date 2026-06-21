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

function rasmniQoshish(fayl) {
  const reader = new FileReader();

  reader.onload = (e) => {
    const manzil = e.target.result;

    const rasmKonteyner = document.createElement('div');
    rasmKonteyner.classList.add('rasm-elementi');

    const img = document.createElement('img');
    img.src = manzil;

    const ochirishTugma = document.createElement('div');
    ochirishTugma.classList.add('ochirish-tugma');
    ochirishTugma.innerHTML = '&times;';

    rasmKonteyner.appendChild(img);
    rasmKonteyner.appendChild(ochirishTugma);

    img.addEventListener('click', () => {
      kattaRasmniKorsat(manzil);
    });

    ochirishTugma.addEventListener('click', (event) => {
      event.stopPropagation();
      rasmKonteyner.remove();

      if (kattaKorsatish.dataset.faolManzil === manzil) {
        kattaKorsatishniTozalash();
      }
    });

    karopka.insertBefore(rasmKonteyner, qoshishTugma);
  };

  reader.readAsDataURL(fayl);
}

function kattaRasmniKorsat(manzil) {
  kattaKorsatish.innerHTML = '';

  const kattaImg = document.createElement('img');
  kattaImg.src = manzil;
  kattaKorsatish.appendChild(kattaImg);

  kattaKorsatish.dataset.faolManzil = manzil;
}

function kattaKorsatishniTozalash() {
  kattaKorsatish.innerHTML = '<span class="bosh-matn">Rasmni kattalashtirib ko\'rish uchun yuqoridagi rasmga bosing</span>';
  delete kattaKorsatish.dataset.faolManzil;
}