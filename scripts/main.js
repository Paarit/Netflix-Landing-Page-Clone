const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content items
function selectItem(e){
    removeBorder();
    removeContent();
    // Add border to the current tab
    this.classList.add("tab-border");
    // Grab content items from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add Show class
    tabContentItem.classList.add("show");
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeContent(){
    tabContentItems.forEach(item => item.classList.remove("show"));
}



// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));