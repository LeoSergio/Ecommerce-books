//uma mensagem de entrada

Swal.fire({
        title: "Seja Bem Vindo!",
        text: "Obrigado Pela Preferência.",
        imageUrl: "imagens/imagens/welcome.jpeg",
        imageWidth: 290,
        imageHeight: 200,
        imageAlt: "Custom image"
      });



/*Menu Responsivo*/
function clickMenu(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'block';
    }
}

/*Descrição dos itens*/
function presunto(){
    if(descricao1.style.display =='block'){
        descricao1.style.display = 'none';
    } else{
        descricao1.style.display = 'block';
    }
}

function frango(){
    if(descricao2.style.display =='block'){
        descricao2.style.display = 'none';
    } else{
        descricao2.style.display = 'block';
    }
} 

function empada(){
    if(descricao3.style.display =='block'){
        descricao3.style.display = 'none';
    } else{
        descricao3.style.display = 'block';
    }
} 

function pastel(){
    if(descricao4.style.display == 'block'){
        descricao4.style.display = 'none';
    } else{
        descricao4.style.display = 'block';
    }
} 
function combo(){
    if(descricao5.style.display == 'block'){
        descricao5.style.display = 'none';
    }else{
        descricao5.style.display = 'block';
    }
}


/*Carrossel de imagens*/
const box = document.querySelector(".carrossel");
const image = document.querySelectorAll(".carrossel img");

let contador = 0;

function slider(){
    contador++;
   
    if(contador > image.length -1){
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 300}px)`;
}
setInterval( slider , 2000 )