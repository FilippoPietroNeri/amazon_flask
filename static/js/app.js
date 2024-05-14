var maincontainer = document.getElementById('maincontainer');
var infocontainer = document.getElementById('infocontainer');

// INFO CONTAINER THINGS
var product_title = document.querySelector('#product-title');
var product_image = document.querySelector('#product-image');
var prezzo = document.querySelector('#prezzo');
var quantita = document.querySelector('#quantita');
var categoria = document.querySelector('#categoria');

function getProduct(id) {
    id = parseInt(id);
    maincontainer.style.display = "none";
    infocontainer.style.display = "block";
    console.log(id)
    fetch('https://3245-filippopiet-amazonflask-4j7srrt160f.ws-eu111.gitpod.io/productget', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: id }),
    }).then((response) => response.json())
        .then((data) => {
            const productData = JSON.parse(data.data)[0];
            product_title.innerHTML = productData['Nome'];
            console.log(productData);
            product_image.src = productData['Immagine'];
            prezzo.innerHTML = `<b>Prezzo</b> ${productData['Prezzo']}€`;
            quantita.innerHTML = `<b>Quantità Disponibili</b> ${productData['Quantita']}`;
            categoria.innerHTML = `<b>Categoria Prodotto</b> ${productData['Categoria']}`;
        })
}

function goback() {
    maincontainer.style.display = "block";
    infocontainer.style.display = "none";
}