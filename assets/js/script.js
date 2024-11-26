let isMenuOpen = false;

document.querySelector('#mobile-menu-btn').onclick = function(){
    if (isMenuOpen === false) {
        document.getElementsByClassName('svgClose')[0].style= "display: none;";
        document.getElementsByClassName('svgOpen')[0].style= "display: inline;";
        document.getElementsByClassName('mob-menu')[0].style= "animation-name: menuOpen; animation-duration: 2s; animation-iteration-count: 1; top: 80px;";
    } else {
        document.getElementsByClassName('svgClose')[0].style= "display: inline;";
        document.getElementsByClassName('svgOpen')[0].style= "display: none;";
        document.getElementsByClassName('mob-menu')[0].style= "animation-name: menuClose; animation-duration: 2s; animation-iteration-count: 1; top: 100vh;";
        
    }
    isMenuOpen = !isMenuOpen;
}

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input && error) {
        input.classList.add("error-border");
        error.textContent = message;
    }
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input && error) {
        input.classList.remove("error-border");
        error.textContent = "";
    }
}

function validateForm(event) {
    let isValid = true;

    // Очистка всех ошибок перед новой проверкой
    clearError("name", "name-error");
    clearError("tg", "tg-error");
    clearError("comment", "comment-error");

    // Проверка имени: только буквы
    const name = document.getElementById("name").value.trim();
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    if (name === "" || !nameRegex.test(name)) {
        showError("name", "name-error", "Ошибка: только буквы допустимы в имени");
        isValid = false;
    }

    // Проверка Телеграма: должен начинаться с @ или с https://t.me/
    const tg = document.getElementById("tg").value.trim();
    const tgRegex = /^(@|https:\/\/t\.me\/)/;
    if (tg === "" || !tgRegex.test(tg)) {
        showError("tg", "tg-error", "Ошибка: Телеграм должен начинаться с @ или https://t.me/");
        isValid = false;
    }

    // Проверка сообщения: не должно быть пустым
    const comment = document.getElementById("comment").value.trim();
    if (comment === "") {
        showError("comment", "comment-error", "Ошибка: сообщение не может быть пустым");
        isValid = false;
    }

    // Если форма не валидна, предотвращаем отправку
    if (!isValid) {
        event.preventDefault();
    } else {
        // Отображаем сообщение об успешной отправке
        document.getElementById("success-message").style.display = "block";
    }

    return isValid;
}

//let link = document.querySelectorAll('mob-menu');

/*        menu.forEach(x => x.classList.toggle('close'));
var el = document.getElementById("drop-lang");
document.getElementsByClassName("lang")[0].addEventListener('click',
  function() {
    el.classList.toggle("active");

  })


document.getElementsByClassName('mob-menu')[0].style= "top: 100vh;";
const button = document.getElementById("#mobile-menu-btn");
document.getElementById("mobile-menu-btn").addEventListener('click', function() {
    console.log("Щёлк!");
});

document.getElementsByClassName('svgOpen').style= "display: inline";
    document.getElementsByClassName('svgClose').style= "display: none";

<svg width="15.556396" height="15.556351" viewBox="0 0 15.5564 15.5564" fill="none"> <path id="vector" d="M7.77 6.36L1.41 0L0 1.41L6.36 7.77L0 14.14L1.41 15.55L7.77 9.19L14.14 15.55L15.55 14.14L9.19 7.77L15.55 1.41L14.14 0L7.77 6.36Z" fill="#FFFFF8" fill-opacity="1.000000" fill-rule="nonzero"/> </svg>
<svg width="15.556396" height="15.556351" viewBox="0 0 15.5564 15.5564" fill="none"> <path id="vector" d="M7.77 6.36L1.41 0L0 1.41L6.36 7.77L0 14.14L1.41 15.55L7.77 9.19L14.14 15.55L15.55 14.14L9.19 7.77L15.55 1.41L14.14 0L7.77 6.36Z" fill="#FFFFF8" fill-opacity="1.000000" fill-rule="nonzero"/> </svg>

*/