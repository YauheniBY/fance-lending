
// Slider start

const $slidersElements = document.querySelectorAll(`[data-slider]`),
        $slider = document.querySelector('.slider'),
        $cross = document.querySelector('.slider__cross'),
        $img = document.querySelector('.slider__img');
        $btnPrev = document.querySelector('.slider__prev');
        $btnNext = document.querySelector('.slider__next');

let arr,
    links,
    currentIndex = 0;

$slider.addEventListener('click',function(e){
    if(e.target.classList.contains('slider_active')){
        $slider.classList.remove('slider_active');
    }
})

$cross.addEventListener('click', e => {
    $slider.classList.remove('slider_active');
    currentIndex = 0;
});

Array.from($slidersElements).forEach(element => {

    console.log($slidersElements);
    console.log(element);

    element.addEventListener('click', function(link){

        link.preventDefault();

        links = document.querySelectorAll(`.${element.dataset.slider}`);

        arr = Array.from(links).filter(elem => elem.dataset.slider == link.target.dataset.slider);
        console.log(arr);

        

            console.log(link.target);
            console.log("This is link");


                $slider.classList.add('slider_active');

                $img.src = link.target.href;

                currentIndex = arr.findIndex(function(currentLink){
                    if(currentLink.href == $img.src){
                        return true;
                    }                
                });

                console.log(currentIndex);

                if(currentIndex == arr.length - 1) {
                    $btnNext.classList.add('slider__disactive');
                } else if (currentIndex == 0) {
                    $btnPrev.classList.add('slider__disactive');
                }
                                

                    $btnNext.addEventListener('click', el => {
                        if(!$btnNext.classList.contains('slider__disactive')) {
                            if($btnPrev.classList.contains('slider__disactive')){
                                $btnPrev.classList.remove('slider__disactive');
                            }

                            currentIndex++;
                            
                            console.log(currentIndex);

                            $img.src = arr[currentIndex].href;

                            if(currentIndex == (arr.length - 1)) {
                                !$btnNext.classList.add('slider__disactive');
                            }
                        }

                    });

                    $btnPrev.addEventListener('click', el => {
                        if(!$btnPrev.classList.contains('slider__disactive')) {
                            if($btnNext.classList.contains('slider__disactive')){
                                $btnNext.classList.remove('slider__disactive');
                            }

                            currentIndex--;
                            
                            console.log(currentIndex);

                            $img.src = arr[currentIndex].href;

                            if (currentIndex == 0) {
                                $btnPrev.classList.add('slider__disactive');
                            }
                        }

                    });
                

    });

    
});



