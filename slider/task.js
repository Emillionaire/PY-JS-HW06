const imageList = document.getElementsByClassName('slider__item')
const sliderButtonList = document.getElementsByClassName('slider__arrow')
const dotButtonList = document.getElementsByClassName('slider__dot')

// Click handler generator
function generatorClickHandler() {
    for (let indexElem = 0; indexElem <= dotButtonList.length - 1; indexElem++) {
        dotButtonList[indexElem].onclick = () => slideController(indexElem)
    }
    sliderButtonList[0].onclick = () => {
        slideController(indexActiveSlide() - 1)
    }
    sliderButtonList[1].onclick = () => {
        slideController(indexActiveSlide() + 1)
    }
}

// Slide controller activates and deactivates image
function slideController(indexElementToActivate) {
    if (indexElementToActivate < 0) {
        indexElementToActivate = imageList.length - 1
    } else if (indexElementToActivate > imageList.length - 1) {
        indexElementToActivate = 0
    }
    i = indexActiveSlide()
    imageList[i].classList.remove('slider__item_active')
    dotButtonList[i].classList.remove('slider__dot_active')
    imageList[indexElementToActivate].classList.add('slider__item_active')
    dotButtonList[indexElementToActivate].classList.add('slider__dot_active')
}

// Active slide finder
function indexActiveSlide() {
    return Array.from(imageList).findIndex(el => el.classList.contains('slider__item_active'))
}

// OLD Active slide finder
// function indexActiveSlide() {
//     for (let i = 0; i <= imageList.length - 1; i++) {
//         if (imageList[i].classList.contains('slider__item_active')) {
//             return i;
//         }
//     }
// }

// Run script
generatorClickHandler()