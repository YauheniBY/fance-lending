window.addEventListener('load', function(){
    var $hat = document.querySelector('.hat'),
        $btnTop = document.querySelector('.btn__top'),
        $openforms = document.querySelectorAll('.openform'),
        $form = document.querySelector('.mainform');

//to top-button click

    $btnTop.addEventListener('click', function(e){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

//appeare top-contacts and "toTop" button

    hatActive ();
    
    window.addEventListener('scroll', hatActive);

    function hatActive() {
        var scrollTop = window.pageYOffset;
        if (scrollTop <= 800 && ($hat.classList.contains('hat__active'))) {
            $hat.classList.remove('hat__active');
            $btnTop.classList.remove('btn__top_active');
        } else if(scrollTop > 800 && !($hat.classList.contains('hat__active'))) {
            $hat.classList.add('hat__active');
            $btnTop.classList.add('btn__top_active');       
        }
    }

//to open mainform

    Array.from($openforms).forEach(element => {element.addEventListener('click', function(){
        $form.classList.add('mainform__active');
    });        
    });

//to close mainform

    $form.addEventListener('click',function(e){
        if(e.target.classList.contains('mainform__active')){
            $form.classList.remove('mainform__active');
        }
    });

});