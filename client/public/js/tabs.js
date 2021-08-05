// window.onload(function () {
//   let tabs = document.querySelectorAll(".tab");
//   let tabsContents = document.querySelectorAll(".tabs-content");

//   function myTabClicks(e) {
//     e.preventDefault();

//     for (var i = 0; i < tabs.length; i++) {
//       tabs[i].classList.remove("tab--active");
//     }

//     let target = e.target;
//     target.classList.add("tab--active");

//     for (i = 0; i < tabsContents.length; i++) {
//       tabsContents[i].classList.remove("tabs-content--active");
//     }

//     let activePaneId = target.getAttribute("href");
//     let activePane = document.querySelector(activePaneId);

//     activePane.classList.add("tabs-content--active");
//   }

//   for (i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", myTabClicks);
//   }
// });
