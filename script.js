// Элементы
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const musicToggle = document.getElementById("music-toggle");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

let isMusicOn = false;
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
        // Переключаем активный таб и контент
        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");
        const newContent = document.getElementById(tab.dataset.tab);
        newContent.classList.add("active");

        // Переключаем музыку
        if (currentAudio) currentAudio.pause();
        currentAudio = newContent.querySelector("audio");
        if (isMusicOn && currentAudio) currentAudio.play();

        // Меняем фон
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
document.querySelectorAll(".zoom-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Закрытие модального окна
closeBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});
