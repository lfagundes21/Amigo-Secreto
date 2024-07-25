let listaNomes =[];


function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    if(amigo == ''){
        alert(`Por Favor, digite o nome do Amigo`)
        return;
    }if(listaNomes.includes(amigo)){
        alert(`O nome ${amigo} já foi registrado. Favor verificar.`)
    }else{
    listaNomes.push(amigo);
    document.getElementById('lista-amigos').innerHTML = listaNomes;
    amigo.value = '';
    }
}

function sortear(){
    embaralha(listaNomes);
    let listaSorteio = document.getElementById('lista-sorteio');

     if(listaNomes.length % 2 == 0 && listaNomes.length > 2){
        for (let i = 0; i < listaNomes.length; i++)
          if(i == listaNomes.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + '-->' + listaNomes[0] + '<br>'
          }else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + '-->' + listaNomes[i+1] + '<br>'
          }

    } else{
        alert('É necessário uma quantidade par de amigos para poder realizar o sorteio');
    }


    //FUNCTION PARA EMBARALHAR A LISTA DOS ARRAYS
    function embaralha(lista) {

        for (let indice = lista.length; indice; indice--) {
    
            const indiceAleatorio = Math.floor(Math.random() * indice);
    
            // atribuição via destructuring
            [lista[indice - 1], lista[indiceAleatorio]] = 
                [lista[indiceAleatorio], lista[indice - 1]];
        }
    }
     



}

function reiniciar(){
    listaNomes =[];
    document.getElementById('lista-amigos').innerHTML =''
    document.getElementById('lista-sorteio').innerHTML =''

}