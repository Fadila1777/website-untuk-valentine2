// Musik romantis
// Audio element
const audio = new Audio('romantic-music.mp3');
audio.loop = true;

// Fungsi untuk memutar musik
function playMusic() {
    audio.play().then(() => {
        console.log("Musik diputar!");
    }).catch(error => {
        console.error("silakan klik tombol putar musik:", error);
        alert("silakan klik'Putar Musik.");
    });
}

// Tambahkan tombol "Putar Musik" secara dinamis
const musicButton = document.createElement('button');
musicButton.innerText = 'Putar Musik';
musicButton.style.position = 'fixed';
musicButton.style.bottom = '20px';
musicButton.style.right = '20px';
musicButton.style.padding = '10px 20px';
musicButton.style.backgroundColor = '#e91e63';
musicButton.style.color = 'white';
musicButton.style.border = 'none';
musicButton.style.borderRadius = '5px';
musicButton.style.cursor = 'pointer';
document.body.appendChild(musicButton);

// Mulai musik saat tombol diklik
musicButton.addEventListener('click', () => {
    playMusic();
    musicButton.style.display = 'none'; // Sembunyikan tombol setelah diklik
});

// Coba memutar musik secara otomatis (jika diizinkan oleh browser)
playMusic();
// Efek bunga berjatuhan
// Efek bunga berjatuhan
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerHTML = '<img src="bunga.png" alt="i love you">';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animationDuration = Math.random() * 5 + 3 + 's'; // Durasi jatuh
    document.body.appendChild(flower);

    // Hapus bunga setelah selesai animasi
    setTimeout(() => {
        flower.remove();
    }, 8000); // Sesuaikan dengan durasi animasi
}

// Panggil fungsi createFlower setiap 500ms
setInterval(createFlower, 500);


