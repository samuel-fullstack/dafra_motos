
moto.map((item, id)=>{ 
    let motoItem = document.querySelector('.models').cloneNode(true); 

    motoItem.style.display =' block';
    motoItem.querySelector('.foto-moto>img').src = item.foto; 
    motoItem.querySelector('.moto').innerHTML += item.nome ;
    document.querySelector('.motorcycles').append(motoItem);
   
}

);

