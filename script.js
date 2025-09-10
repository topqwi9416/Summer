// Элементы
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const musicToggle = document.getElementById("music-toggle");

let isMusicOn = false;

// Устанавливаем текущий аудиоплеер на Главной при загрузке
let currentAudio = document.querySelector("#home audio");

// Градиенты для каждого раздела
const gradients = {
    home: "linear-gradient(to bottom, #87CEEB, #FFFACD)",
    trip: "linear-gradient(to bottom, #00BFFF, #98FB98)",
    media: "linear-gradient(to bottom, #FFDAB9, #FFE4B5)",
    it: "linear-gradient(to bottom, #E0FFFF, #AFEEEE)",
    work: "linear-gradient(to bottom, #F5F5DC, #D2B48C)",
    showoff: "linear-gradient(to bottom, #FFB6C1, #FFC0CB)"
};

// Переключение табов
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Убираем активность у всех табов
        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        // Делаем активным выбранный таб и его контент
        tab.classList.add("active");
        const newContent = document.getElementById(tab.dataset.tab);
        newContent.classList.add("active");

        // Останавливаем предыдущую музыку
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Обновляем текущий аудио для нового раздела
        currentAudio = newContent.querySelector("audio");

        // Включаем музыку, если она была включена
        if (isMusicOn && currentAudio) {
            currentAudio.play();
        }

        // Меняем градиент фона
        document.body.style.transition = "background 1s ease";
        document.body.style.background = gradients[tab.dataset.tab];
    });
});

// Кнопка включения/выключения музыки
musicToggle.addEventListener("click", () => {
    isMusicOn = !isMusicOn;

    if (isMusicOn && currentAudio) {
        currentAudio.play();
        musicToggle.textContent = "🎵 Музыка: вкл";
    } else {
        if (currentAudio) currentAudio.pause();
        musicToggle.textContent = "🎵 Музыка: выкл";
    }
});

// Увеличение картинки по клику
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".zoom-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие по клику вне картинки
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
