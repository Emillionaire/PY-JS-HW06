const modMain = document.getElementById('modal_main')
const modSuccess = document.getElementById('modal_success')
const closeBtns = Array.from(document.getElementsByClassName('modal__close modal__close_times'))
const doBtn = document.getElementsByClassName('show-success')[0]

// Show window #modal_main
modMain.classList.add('modal_active')

// Show window #modal_seccess at click do button
doBtn.onclick = () => {
    modSuccess.classList.add('modal_active')
}

// Close all window at click close button
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = () => {
        for (const i of closeBtns) {
            i.parentElement.parentElement.classList.remove('modal_active')
        }
    }
}