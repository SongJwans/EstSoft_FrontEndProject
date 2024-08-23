document.addEventListener("DOMContentLoaded", function () {
    // 메뉴 버튼 클릭 시, 슬라이드 메뉴 열기
    const menuTab = document.querySelector(".menu-tab");
    if (menuTab) {
        menuTab.addEventListener("click", function () {
            document.querySelector(".top-nav-element").classList.add("show");
            document.querySelector(".top-nav-element").classList.remove("hide");

        });
    }

    // 닫기 버튼 클릭 시, 슬라이드 메뉴 닫기
    const closeButton = document.querySelector(".close-btn");
    const topNavElement = document.querySelector(".top-nav-element")

    closeButton.addEventListener("click", function () {
        topNavElement.classList.add("hide");

        topNavElement.addEventListener('animationend', function () {
            topNavElement.classList.remove("show");
            topNavElement.classList.remove("hide");
        }, {once: true});
    });
});

const scrollToTopBtn = document.getElementById("scroll-top-btn");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {
    // 스크롤 위치에 따라 버튼 보이기/숨기기
    if (window.scrollY > 0) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }

    // 스크롤 위치와 footer 위치 계산
    const scrollY = window.scrollY;
    const footerRect = footer.getBoundingClientRect();
    const footerTop = footerRect.top + scrollY;

    // footer에 도달하면 버튼의 위치를 조정
    if (scrollY + window.innerHeight > footerTop) {
        scrollToTopBtn.style.bottom = `${
            scrollY + window.innerHeight - footerTop + 19
        }px`;
    } else {
        scrollToTopBtn.style.bottom = "19px";
    }
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// 이메일 유효성 검사하기
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailValidChk(email) {
    if (pattern.test(email) === false) {
        return false;
    } else {
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    constpattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    function emailValidCheck(email) {
        return pattern.test(email);
    }

    const openModal = document.getElementById("subscribe");
    const modal = document.getElementById("modalContainer");
    const closeModal = document.getElementById("close");
    const emailInput = document.getElementById("emailInput");

    openModal.addEventListener("click", () => {
        const email = emailInput.value.trim();

        if (!email) {
            alert("이메일을 입력해 주세요.");
        } else if (!emailValidCheck(email)) {
            alert("유효하지 않은 이메일 형식입니다.");
        } else {
            modal.classList.remove("hidden");
        }
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});
