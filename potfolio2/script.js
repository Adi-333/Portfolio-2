const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show")
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el => observer.observe(el)));

let tabs = document.querySelectorAll(".s3-tabs span h3");
let tabContents = document.querySelectorAll(".tab-cont div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () =>{
        tabContents.forEach(content => {
            content.classList.remove("active")
        });
        tabs.forEach((tab) =>{
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});