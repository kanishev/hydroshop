

function mountScript() {


  let menuBtn = document.querySelector('.menu__btn');
  let asideBtn = document.querySelector('.aside__btn')

  let tabs = document.querySelectorAll(".tab");
  let tabsContents = document.querySelectorAll(".tabs-content");

  console.log(tabsContents)

  function myTabClicks(e) {
    e.preventDefault();


    let target = e.target;
    let activeTabId = target.getAttribute("href");
    let activeTab = document.querySelector(activeTabId);

    for (let i = 0; i < tabs.length; i++) {

      if(tabs[i].classList[1] == target.classList[1]) {
        tabs[i].classList.remove("tab--active");
      }
    }

    target.classList.add("tab--active");

    for (let i = 0; i < tabsContents.length; i++) {
      console.log(tabsContents[i])
      if (
        activeTabId.includes(tabsContents[i].getAttribute("id").split("-")[0])
      ) {
        tabsContents[i].classList.remove("tabs-content--active");
      }
    }

    activeTab.classList.add("tabs-content--active");
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", myTabClicks);
  }


  if (menuBtn){
    menuBtn.addEventListener("click", function () {
      document
        .querySelector(".menu-mobile__list")
        .classList.toggle("menu-mobile__list--active");
    });

  }

  if (asideBtn){
    asideBtn.addEventListener("click", toggleLinks);
  }


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

export default mountScript;
