let selectedPage = localStorage.getItem("selected_page");
let selectedItem = null;
// set selected page
if (selectedPage === null || selectedPage === undefined) {
    localStorage.setItem("selected_page", "home");
    selectedPage = localStorage.getItem("selected_page");
}
// change selectedPage
document.querySelectorAll('.logo_wrapper').forEach(item => {
    item.addEventListener('click', event => {
        selectedPage = item.id;
        selectedItem = item;
        unselectAll();
        setNewSelectedItem(item);
        // loadPage(selectedPage);
        loadPage("home");
        console.log("selectedPage", selectedPage);
        console.log("selectedItem", selectedItem);
    })
})

// remove is_selected class from all object
function unselectAll() {
    document.querySelectorAll('.logo_wrapper').forEach(item => {
        item.classList.remove("is_selected");
        selectedItem = item;
    })
}

// set is_selected class on all object
function setNewSelectedItem(item) {
    if (item.id === selectedPage)
        item.classList.add("is_selected");
    selectedItem = item;
}

function loadPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', page+'.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        document.getElementsByClassName('page_container').innerHTML = this.responseText;
    };
    xhr.send();
}


console.log("selectedPage", selectedPage);
console.log("selectedItem", selectedItem);

