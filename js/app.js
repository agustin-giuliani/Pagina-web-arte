let btnmenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let active = true;

//menu de navegacion de celular

btnmenu.addEventListener('click', () =>{

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(active){

        menu.style.left="0";
        menu.style.trancition="0.5s";

        active=false;
    }else{
        active=false;

        menu.style.left="-100%";
        menu.style.trancition="0.5s";

        active=true;
    }
});

//evento de camvio de los botones de la lista

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (Element)=>{

    Element.addEventListener('click', (evento) =>{

    
        enlaces.forEach( (linck) =>{
            linck.classList.remove('activo');
        });

        event.target.classList.add('activo');

    });
} );

//efecto scroll
let prevscrollpos = window.pageYOffset;
let gotop = document.querySelector('.go-top');

window.onscroll = () =>{

    let currenScrollpos  = window.pageYOffset;
    
    //mostrar y ocultar menu

    if(prevscrollpos > currenScrollpos){

        containerMenu.style.top = "0";
        containerMenu.style.trancition = "0.5s";

    }else{

        containerMenu.style.top = "-60px";
        containerMenu.style.trancition = "0.5s"
    }

    prevscrollpos=currenScrollpos;

    //mostrar y ocultar scroll estilos

    let arriba = window.pageYOffset;

    if(arriba <= 600){
        
        containerMenu.style.borderBottom = "none";
        gotop.style.right = "-100%";

    }else{

        containerMenu.style.borderBottom = "3px solid #ff2e63";

        gotop.style.right = "0";
        gotop.style.trancition = "0.5s";
    }
}

gotop.addEventListener('click', () =>{
    
    document.body.scrolltop = 0;
    document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () =>{

    document.body.scrolltop = 650;
    document.documentElement.scrollTop = 650;
});
//mail send