function smoothScroll(targetId) {
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth' 
    });
}


document.querySelector('.header__nav a[href="#catalog"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    smoothScroll('catalog');
});

document.querySelector('.header__nav a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('about');
});

document.querySelector('.header__nav a[href="#delivery"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('delivery');
});

document.querySelector('.header__nav a[href="#reviews"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('reviews');
});

document.querySelector('.header__nav a[href="#contacts"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('contacts');
});


document.getElementById('scrollButton').addEventListener('click', function () {
    document.querySelector('.target').scrollIntoView({
        behavior: 'smooth' 
    });
});

// Получаем элементы модального окна и кнопки
let modal = document.getElementById("orderModal");
let btns = document.querySelectorAll(".catalog__button");
let span = document.getElementById("modalClose");

// Функция для открытия модального окна
btns.forEach(function(btns) {
    btns.onclick = function() {
        modal.style.display = "block";
    }
});

// Функция для закрытия модального окна
span.onclick = function() {
    modal.style.display = "none";
}

// Закрыть модальное окно, если пользователь щелкнет вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// let modal = document.getElementById('orderModal');
// let open = document.querySelectorAll('.catalog__button');
// let close = document.getElementById('close');

// open.addEventListener("click", () => {
//     modal.classList.add("show");
// })





