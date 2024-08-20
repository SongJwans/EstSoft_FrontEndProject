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
