let selectedPage = localStorage.getItem("selected_page");
let selectedItem = null;
// set selected page
if (selectedPage === null || selectedPage === undefined) {
    localStorage.setItem("selected_page", "home");
}
selectedPage = localStorage.getItem("selected_page");
unselectAll();
setNewSelectedItem(selectedPage);
loadPage(selectedPage);

// change selectedPage
document.querySelectorAll('.logo_wrapper').forEach(item => {
    item.addEventListener('click', event => {
        selectedPage = item.id;
        selectedItem = item;
        unselectAll();
        setNewSelectedItem(selectedPage);
        loadPage(selectedPage);
        console.log("selectedPage", selectedPage);
        console.log("selectedItem", selectedItem);
    })
})

// remove is_selected class from all object
function unselectAll() {
    document.querySelectorAll('.logo_wrapper').forEach(item => {
        item.classList.remove("is_selected");
        localStorage.setItem("selected_page", null);
        selectedItem = null;
    })
}

// set is_selected class on all object
function setNewSelectedItem(pageName) {
    document.querySelectorAll('.logo_wrapper').forEach(item => {
        console.log(item.id, pageName)
        if (item.id === pageName) {
            selectedItem = item;
            localStorage.setItem("selected_page", pageName);
            item.classList.add("is_selected");
        }
    })
}

function loadPage(pageName) {
    fetch("./pages/" + pageName + ".html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#page_container").innerHTML = data;
        });
}


console.log("selectedPage", selectedPage);
console.log("selectedItem", selectedItem);

