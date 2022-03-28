
let btns = document.querySelectorAll('.price__switch-btn'),
    priceItems = document.querySelectorAll('.price__items');

    for(let i = 0; i < btns.length; i++){

        btns[i].addEventListener('click', elem => {


           if(!btns[i].classList.contains('price__switch-btn_active')){

                Array.from(btns).forEach(e => {

                    e.classList.remove('price__switch-btn_active');

                });

                btns[i].classList.add('price__switch-btn_active');

                Array.from(priceItems).forEach(function(item){
                    item.classList.remove('price__items_active');                        
                });

                priceItems[i].classList.add('price__items_active');
            }
        });

        
    }