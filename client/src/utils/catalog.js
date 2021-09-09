function catalog(){

  console.log('catalog')

  let btnGrid = document.querySelector('.catalog__filter-btn_grid')
  let btnLine = document.querySelector('.catalog__filter-btn_line')

  let productWrappers = document.querySelectorAll(".product-item__wrapper");
  let favourite = document.querySelectorAll(".product-item__favourite")



  favourite.forEach(f => {
    f.addEventListener("click", function () {
      this.classList.toggle("product-item__favourite--active");
    });
  })


  if (btnGrid && btnLine){

    btnLine
     .addEventListener("click", function () {

       this.classList.add("catalog__filter-mode--active");
       btnGrid.classList.remove("catalog__filter-mode--active");

       for (let i = 0; i < productWrappers.length; i++) {
         productWrappers[i].classList.add("product-item__wrapper--list");
       }

     });


     btnGrid.addEventListener("click", function () {
       this.classList.add("catalog__filter-mode--active");
       btnLine.classList.remove("catalog__filter-mode--active");
       for (let i = 0; i < productWrappers.length; i++) {
         productWrappers[i].classList.remove("product-item__wrapper--list");
       }
     });


   }
}
export default catalog;
