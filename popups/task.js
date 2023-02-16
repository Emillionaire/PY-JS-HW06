const modMain = document.getElementById('modal_main')
const modSuccess = document.getElementById('modal_success')
const closeBtns = document.getElementsByClassName('modal__close modal__close_times')
const doBtn = document.getElementsByClassName('show-success')[0]

modMain.classList.add('modal_active')

doBtn.onclick = () => {
    modSuccess.classList.add('modal_active')
}

let arr = Array.from(closeBtns)

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = () => {
        for (const a of arr) {
            a.parentElement.parentElement.classList.remove('modal_active')
        }
    }
}

