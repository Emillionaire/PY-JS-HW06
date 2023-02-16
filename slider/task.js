const sliderButtonPrev = document.getElementsByClassName('slider__arrow_prev')[0]
const sliderButtonNext = document.getElementsByClassName('slider__arrow_next')[0]
const imageList = document.getElementsByClassName('slider__item')
const dotList = document.getElementsByClassName('slider__dot')

// Dot onclick handler
for (let i = 0; i <= dotList.length - 1; i++) {
    let dot = (() => dotList[i])()
    dot.onclick = () => dotClick(i)
}

// Slider next onclick handler
sliderButtonNext.onclick = () => {
    slider(1)
}

// Slider perv onclick handler
sliderButtonPrev.onclick = () => {
    slider(0)
}

// Slider controller
function slider(direction) {
    var itemActive = document.getElementsByClassName('slider__item_active')[0]

    for (let i = 0; i <= imageList.length - 1; i++) {
        
        if (imageList[i] == itemActive) {

            imageList[i].classList.remove('slider__item_active')
            dotList[i].classList.remove('slider__dot_active')
            
            if (direction == 1) {
                
                if (i < imageList.length - 1) {
                    imageList[i + 1].classList.add('slider__item_active')
                    dotList[i + 1].classList.add('slider__dot_active')
                } else {
                    imageList[0].classList.add('slider__item_active')
                    dotList[0].classList.add('slider__dot_active')
                }

            } else {
                
                if (i > 0) {
                    imageList[i - 1].classList.add('slider__item_active')
                    dotList[i - 1].classList.add('slider__dot_active')
                } else {
                    imageList[imageList.length - 1].classList.add('slider__item_active')
                    dotList[imageList.length - 1].classList.add('slider__dot_active')
                }

            }
        }
    }
}

// Dot controller
function dotClick(numberDotClick) {
    for (let image of imageList) {
        image.classList.remove('slider__item_active')
    }
    for (let dot of dotList) {
        dot.classList.remove('slider__dot_active')
    }
    dotList[numberDotClick].classList.add('slider__dot_active')
    imageList[numberDotClick].classList.add('slider__item_active')
}