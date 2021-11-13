/* store all elements in the html-document which have "collapsible" as their class */
const collapsibles = document.querySelectorAll(".collapsible")

/* then for each element */
collapsibles.forEach((item) =>
    /* add an EventListener for clicking the elmement */
    item.addEventListener("click", function () {
        /* the expand or shorten (keyword toggle) the classList of the element by "collapsible--expanded". this. refers to the item in the loop */
        this.classList.toggle("collapsible--expanded")
    })
);