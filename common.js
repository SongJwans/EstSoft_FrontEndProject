document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 버튼 클릭 시, 슬라이드 메뉴 열기
  const menuTab = document.querySelector(".menu-tab");
  if (menuTab) {
    menuTab.addEventListener("click", function () {
      document.querySelector(".navigater").classList.add("show");
    });
  }

  // 닫기 버튼 클릭 시, 슬라이드 메뉴 닫기
  const closeButton = document.querySelector(".close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      document.querySelector(".navigater").classList.remove("show");
    });
  }
});
const scrollToTopBtn = document.querySelector(".scroll-top-btn");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {
  // 스크롤 위치에 따라 버튼 보이기/숨기기
  if (window.scrollY > 0) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }

  // 버튼이 푸터에 닿기 전에 멈추도록 설정
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight) {
    scrollToTopBtn.style.position = "absolute";
    scrollToTopBtn.style.bottom = windowHeight - footerTop + 19 + "px";
  } else {
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "19px";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const openModal = document.getElementById("subscribe");
const modal = document.getElementById("modalContainer");
const closeModal = document.getElementById("close");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
