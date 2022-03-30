window.addEventListener('load', function(){
    var $hat = document.querySelector('.hat'),
        $btnTop = document.querySelector('.btn__top'),
        $openforms = document.querySelectorAll('.openform'),
        $form = document.querySelector('.mainform'),
        $menu = document.querySelector('.header__burger-icon'),
        $navigation = document.querySelector('.header__navigation'),
        $body = document.querySelector('body'),
        $insidelinks = document.querySelectorAll('[data-goto]');

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

            $btnTop.classList.add('btn__top_active'); 

            if (document.body.classList.contains('_pc')) {

                $hat.classList.add('hat__active');
            }
                  
        }
    }

//to open mainform

    Array.from($openforms).forEach(function(element) {

        element.addEventListener('click', function(){

            $form.classList.add('mainform__active');        
            $body.classList.add('_lock');

        });        
    });

//to close mainform

    $form.addEventListener('click',function(e){
        if(e.target.classList.contains('mainform__active')){
            $form.classList.remove('mainform__active');            
            $body.classList.remove('_lock');
        }
    });
// menu burger open-close

    $menu.addEventListener('click', toggleNavigation);


//slow down to part of page after menu-click

    if($insidelinks.length > 0) {
        $insidelinks.forEach(link => {

            link.addEventListener('click', onInsideLinkClick); 

        });

        
    }



    function onInsideLinkClick(e) {
        const targetLink = e.target;        

        if(targetLink.dataset.goto && document.querySelector(targetLink.dataset.goto)){

            const gotoBlock = document.querySelector(targetLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top 
                                    + pageYOffset - 55;

            window.scrollTo({ 
                
                top: gotoBlockValue,
                behavior: 'smooth'

            });

            if($body.classList.contains('_lock')){
                toggleNavigation();
            }
        }
        
        e.preventDefault();

       
    }

    function toggleNavigation(){

        $menu.classList.toggle('header__burger-icon_active');
        $navigation.classList.toggle('header__navigation_active');
        $body.classList.toggle('_lock');

    }
    


});