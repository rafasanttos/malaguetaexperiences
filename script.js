let contador = 1;

setInterval(function(){
    document.getElementById('slide-imagens'+contador).checked = true;
    contador++;
    if(contador>3){
        contador=1;
    }
},1500);


// let mostrar =1;

// setInterval(function(){
//     document.getElementById('radio'+mostrar).checked = true;
//     mostrar++;
//     if(mostrar>6){
//         mostrar=1;
//     }
// }, 2000);

ScrollReveal().reveal('.texto-hero h1' ,{
    scale: 2,
    duration: 2000,
});

ScrollReveal().reveal('.roteiro' ,{
    delay:500,
    distance:'90px',
    duration:1000,


});
ScrollReveal().reveal('.cada-servico' ,{
    delay:500,
    distance:'90px',
    duration:1000,


});
ScrollReveal().reveal('.gallery-container' ,{
    delay:500,
    distance:'90px',
    duration:1000,


});
ScrollReveal().reveal('.texto-passeio h2' ,{
    delay:500,
    distance:'-90px',
    duration:1000,


});

ScrollReveal().reveal('.btn-fale-conosco',{
    duration: 2000,
    distance: '300px',
    origin:'left',
    
    


});




