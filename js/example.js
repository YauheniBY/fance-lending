const $images = document.querySelectorAll('.example__img'),
      $text = document.querySelectorAll('.example__name');

for (let i = 0; i < $images.length; i++) {
    if (document.querySelector('.example_iron')){
        $images[i].style.backgroundImage = `url(./img/iron/iron_example_${i+1}.jpg)`;
        $text[i].innerHTML =`Забор из профлиста ${i+1}`;
    } else if (document.querySelector('.example_concrete')){
        $images[i].style.backgroundImage = `url(./img/concrete/concrete_example_${i+1}.jpg)`;
        $text[i].innerHTML =`Бетонный забор ${i+1}`;
    }

    
}