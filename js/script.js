// -------------------------------------------------
//  script.js
// for 'dom-menu-lab' homework
// -------------------------------------------------

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog',href: '/catalog'},
    {text: 'orders',href: '/orders'},
    {text: 'account',href: '/account'},
]

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
