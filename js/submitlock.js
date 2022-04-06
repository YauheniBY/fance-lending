let $forms = document.querySelectorAll('form');

Array.from($forms).forEach(function(form){    
   
    let $phoneInput = form.querySelector('.tel');    
    let $checkboxInput = form.querySelector('input[name=policy]');
    if(!$checkboxInput){
        $checkboxInput = document.querySelector('#offer__checkbox');
    } 
    console.log($checkboxInput);
    form.addEventListener('submit', function(event) {
        if(($phoneInput.value.length < 13) || !$checkboxInput.checked){
            event.preventDefault();
        }
        
    });
});