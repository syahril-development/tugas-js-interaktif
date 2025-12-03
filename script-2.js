// Tombol Ubah Tema
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Tombol Sapa
const helloBtn = document.getElementById("sayHello");
const greeting = document.getElementById("greeting");

helloBtn.addEventListener("click", function () {
    let nama = prompt("Nama kamu siapa?");
    if (nama) {
        greeting.innerText = "Halo, " + nama + "!";
    }
});
