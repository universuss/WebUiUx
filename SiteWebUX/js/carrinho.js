var itens = [];

function addItem(id) {
    const item = {
        id: id,
        name: "Produto " + id,
        price: "R$ 50,00"
    }

    itens.push(item);
    
    if (itens.length > 0){
        const imgcarrinho = document.querySelector(".carrinho")
        imgcarrinho.src = '../img/carrinhocheio.png'
    }

}

function removerItem(index) {
    itens.splice(index, 1);

    const wrapperItem = document.getElementById("cart-itens");
    wrapperItem.removeChild(document.getElementById(`item-${index}`));
    
    if (itens.length == 0){
        const imgcarrinho = document.querySelector(".carrinho")
        imgcarrinho.src = '../img/Carrinho.png'
    }
}


function closeCart() {
    document.getElementById("cart").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}

function openCart() {
    window.scrollTo(0, 0);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("cart").style.display = "flex";

    const wrapperCartItens = document.getElementById("cart-itens");
    wrapperCartItens.innerHTML = "";

    const fontImport = document.createElement("style");
    fontImport.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@500&display=swap');`;
    document.head.appendChild(fontImport);
    
   itens.forEach((item, index) => {
        
        wrapperCartItens.innerHTML += `
        <div class='cart-item' id="item-${index}">
            <div class='cart-item-image'>
                <img src='../img/${item.id}.jpg' alt=''>
            </div>
            <div class='cart-item-info'>
                <div class='cart-item-name'>${item.name}</div>
                <div class='cart-item-price'>${item.price}</div>
                <button class='remove-button' onclick="removerItem(${index})" font-family: 'Zen Kaku Gothic Antique'><img class= 'remove-img' src="../img/remover.png"></button>
            </div>
        </div>
        `
   })

    console.log(itens)
}

function loadSweetAlertLibrary() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    document.head.appendChild(script);
}

loadSweetAlertLibrary();

function enviar(){
    var mensagem = "Seu pedido foi enviado com sucesso!"; // Mensagem de confirmação do envio
    // Exibir o pop-up personalizado
    Swal.fire({
      title: mensagem,
      icon: "success",
      confirmButtonText: "OK"
    
    });
}