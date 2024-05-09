var maincontainer = document.getElementById('maincontainer');
var infocontainer = document.getElementById('infocontainer');

// INFO CONTAINER THINGS
var product_title = document.querySelector('#product-title');
var product_image = document.querySelector('#product-image');
var prezzo = document.querySelector('#prezzo');
var quantita = document.querySelector('#quantita');
var categoria = document.querySelector('#categoria');

function getProduct(name)
{
    maincontainer.style.display = "none";
    infocontainer.style.display = "block";
    console.log(name)
    product_title.innerHTML = name;
    fetch('https://3245-filippopiet-amazonflask-ilx4h04ao05.ws-eu111.gitpod.io/product/get', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({productName: name}),
    }).then((response) => response.json())
    .then((data) => {
        const productData = JSON.parse(data.data);
        product_image.src = productData['Immagine'][0];
        prezzo.innerHTML = `${productData['Prezzo'][0]}€`;
        quantita.innerHTML = `${productData['Quantita'][0]} Quantità Disponibili`;
        categoria.innerHTML = `${productData['Categoria'][0]}`;
    })
}

function goback() 
{
    maincontainer.style.display = "block";
    infocontainer.style.display = "none";
}