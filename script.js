// -------------------------------------------------
// script.js
// for 'dom-menu-lab' homework
// -------------------------------------------------

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog',href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#', subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'profile', href: '/account/profile'},
    ]}
];

// Task 1.0 - Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector("main")
//console.log(mainEl)

// Task 1.1 - Set the background color of mainEl to the --main-bg CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)"

// Task 1.2 - Set content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// Task 1.3 - add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr")

// Task 2.0 - Set and cache the <nav>
const topMenuEl = document.querySelector("#top-menu")
//console.log(topMenuEl)

// Task 2.1 - set the height of topMenuEl to 100%
topMenuEl.style.height = "100%"

// Task 2.2 - set the background color of topMenuEl to --top-menu-bg
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Task 2.3 - add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around")

// Task 3.0 - menuLinks data structure (see menuLinks definition above)
// Task 3.1 - Iterate over the menuLinks array:
//                 create an <a> element
//                 add an href with its value set to the href property
//                 set the element's content to the value of the text property
//                 append the element to topMenuEl

for (let i of menuLinks) {
    newEl = document.createElement("a")
    console.log(newEl)
    newEl.setAttribute("href", i.href)
    newEl.innerText = i.text
    topMenuEl.append(newEl)
    //console.log(`you have just added ${i.text} and ${i.href}`)
}

//console.log(topMenuEl)


// Task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.querySelector("#sub-menu")
//     Task 4.1
subMenuEl.style.height = "100%"
//     Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
//     Task 4.3
subMenuEl.classList.add("flex-around")
//     Task 4.4
subMenuEl.style.position = "absolute"
//     Task 4.5
subMenuEl.style.top = "0"

// Task 5.0 - (see updated menuLinks array at top)
// Task 5.1 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
//          Declare a global showingSubMenu variable and initialize it to false;

const topMenuLinks = document.querySelectorAll("a")
console.log(topMenuLinks)
/*for (a of topMenuEl) {
    topMenuLinks.push(a)
}*/

let showingSubMenu = false