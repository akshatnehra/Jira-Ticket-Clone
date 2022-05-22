// All the colors in the Modal
const priorityColors = document.querySelectorAll(".priority-color");

// Adding active class on selected element and removing on the previous selected element
for(let i=0; i<priorityColors.length; i++) {
    priorityColors[i].addEventListener("click", function(){
        
        // Removing active class from the previous element
        let active = document.querySelector(".active");
        active.classList.remove("active");

        // Adding active class on the newly selected color
        priorityColors[i].classList.add("active");
    })
}

