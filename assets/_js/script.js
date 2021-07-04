// função para abrir e fechar o menu
window.onload = function(){
    document.querySelector(".m-mobile").addEventListener("click", function(){
        if(document.querySelector(".container-header .menu ul ").style.display == "block"){
            document.querySelector(".container-header .menu ul").style.display = "none";
        }else {
            document.querySelector(".container-header .menu ul").style.display = "block";

        }
    });
}

//função está sendo chamada na tag a, para fechar o menu ao ser clicado
function FecharMenu(){
    var $menu = document.querySelector(".container-header .menu ul");

    if ($menu.style.display == "block"){
        $menu.style.display = "none";
    }
}
