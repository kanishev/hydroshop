function startScript() {
  let tabs = document.querySelectorAll(".tab");
  let tabsContents = document.querySelectorAll(".tabs-content");

  let productWrappers = document.querySelectorAll(".product-item__wrapper");

  function myTabClicks(e) {
    e.preventDefault();

    let target = e.target;
    let activeTabId = target.getAttribute("href");
    let activeTab = document.querySelector(activeTabId);

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("tab--active");
    }

    target.classList.add("tab--active");

    for (let i = 0; i < tabsContents.length; i++) {
      if (
        activeTabId.includes(tabsContents[i].getAttribute("id").split("")[0])
      ) {
        tabsContents[i].classList.remove("tabs-content--active");
      }
    }

    activeTab.classList.add("tabs-content--active");
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", myTabClicks);
  }

  document
    .querySelector(".product-item__favourite")
    .addEventListener("click", function () {
      console.log("1");
      this.classList.toggle("product-item__favourite--active");
    });

  document
    .querySelector(".catalog__filter-btn_line")
    .addEventListener("click", function () {
      this.classList.add("catalog__filter-mode--active");
      document
        .querySelector(".catalog__filter-btn_grid")
        .classList.remove("catalog__filter-mode--active");

      for (let i = 0; i < productWrappers.length; i++) {
        productWrappers[i].classList.add("product-item__wrapper--list");
      }
    });

  document
    .querySelector(".catalog__filter-btn_grid")
    .addEventListener("click", function () {
      this.classList.add("catalog__filter-mode--active");
      document
        .querySelector(".catalog__filter-btn_line")
        .classList.remove("catalog__filter-mode--active");
      for (let i = 0; i < productWrappers.length; i++) {
        productWrappers[i].classList.remove("product-item__wrapper--list");
      }
    });

  document.querySelector(".menu__btn").addEventListener("click", function () {
    document
      .querySelector(".menu-mobile__list")
      .classList.toggle("menu-mobile__list--active");
  });

  document.querySelector(".aside__btn").addEventListener("click", toggleLinks);

  let linkToggle = document.querySelectorAll(".footer__top-drop");
  let filterDrops = document.querySelectorAll(".filter__item-drop");

  function toggleLinks(e) {
    e.preventDefault();

    for (let i = 0; i < linkToggle.length; i++) {
      linkToggle[i].classList.remove("tab--active");
    }

    let target = e.target;
    let content = target.nextSibling;

    if (!content.classList.contains("active")) {
      content.classList.add("active");
      content.style.height = "auto";

      var height = content.clientHeight + "px";

      content.style.height = "0px";

      setTimeout(function () {
        content.style.height = height;
        target.classList.add("active");
      }, 0);
    } else {
      content.style.height = "0px";
      target.classList.remove("active");
      content.classList.remove("active");
    }
  }

  for (let i = 0; i < linkToggle.length; i++) {
    linkToggle[i].addEventListener("click", toggleLinks);
  }

  for (let i = 0; i < filterDrops.length; i++) {
    filterDrops[i].addEventListener("click", toggleLinks);
  }
}

export default startScript;
