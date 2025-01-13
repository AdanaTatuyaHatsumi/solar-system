// Interaksi sederhana
document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    planets.forEach(planet => {
      planet.addEventListener("click", () => {
        alert(`Anda mengklik planet ${planet.textContent}`);
      });
    });
});

const planets = document.querySelectorAll('.planet');

function pauseAnimation() {
  planets.forEach(planet => {
    planet.style.animationPlayState = 'paused';
  });
}

function playAnimation() {
  planets.forEach(planet => {
    planet.style.animationPlayState = 'running';
  });
}

let scale = 1;

function zoomIn() {
  scale += 0.1;
  document.getElementById('solar-system').style.transform = `scale(${scale})`;
}

function zoomOut() {
  scale -= 0.1;
  document.getElementById('solar-system').style.transform = `scale(${scale})`;
}

document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
      alert(planet.dataset.info);
    });
  });

  function createMeteor() {
    const meteorContainer = document.getElementById("meteors-container");
  
    // Buat elemen meteor
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
  
    // Atur posisi awal meteor secara acak
    const startX = Math.random() * window.innerWidth; // Posisi horizontal acak
    const startY = Math.random() * window.innerHeight; // Posisi vertikal acak
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;
  
    // Tambahkan meteor ke container
    meteorContainer.appendChild(meteor);
  
    // Hapus meteor setelah animasi selesai untuk menghindari DOM overload
    setTimeout(() => {
      meteor.remove();
    }, 2000); // Durasi animasi harus sama dengan durasi @keyframes
  }
  
  // Tambahkan meteor secara berkala
  setInterval(createMeteor, 500); // Setiap 500ms, meteor baru akan dibuat

  const toggleButton = document.getElementById('toggle-mode');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night');
    document.body.classList.toggle('day');
    toggleButton.textContent = document.body.classList.contains('night') ? 'Mode Siang' : 'Mode Malam';
  });

  
