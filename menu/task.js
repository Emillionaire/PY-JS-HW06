const menuLinkElem = Array.from(document.getElementsByClassName('menu__link'))
const menuSubList = Array.from(document.getElementsByClassName('menu_sub'))

for (let i = 0; i <= menuLinkElem.length - 1; i++) {
    let elem = (() => menuLinkElem[i])()
    elem.onclick = () => clickMenu(elem)
}

function clickMenu (elem) {
    for (let subMenu of menuSubList) {
        if (subMenu.parentElement == elem.parentElement) {
            for (let a of menuSubList) {
                a.classList.remove('menu_active')
            }
            subMenu.classList.add('menu_active')
            return false;
        }
    }
}