// navlink responsif
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLink = document.querySelector('.nav-links ul');

hamburgerMenu.addEventListener('click', function() {
    if(navLink.style.display === "none") {
        navLink.style.display = 'flex';
    } else {
        navLink.style.display = 'none';
    }
});

// Membatasi paragraf pada kamar-deskripsi 

const paragraf = document.querySelectorAll('.kamar-deskripsi p');

// Mmebuat fungsi untuk memotong teks
function potongTeks(elemen, batasKarakter) {

//   Menampung paragraf yang belum dipotong kedalam variable teksAsli
  const teksAsli = elemen.textContent;
// pengecekan apakah paragraf yang belum dipotong memiliki panjang lebih dari batas karakter 
  if (teksAsli.length > batasKarakter) {
    const teksPotong = teksAsli.substring(0, batasKarakter) + '...';
    elemen.textContent = teksPotong;
  }
}

//Lakukan ke semua paragraf yang belum dipotong 
paragraf.forEach(paragraf => {
    potongTeks(paragraf, 100);
});