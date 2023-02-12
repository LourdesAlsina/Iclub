window.onload = function(){

const products = [
    {id:1, producto: "Iphone 13 Pro Max Blue", tipo: "Celular", modelo: "13 Pro Max ", precio: 150000, anio: 2022, stock: 7, imagen:"front (1).png", detalleP: "productDetail1.html" },
    {id:2, producto:"Iphone 13 Pro Max Gold", tipo: "Celular", modelo: "13 Pro Max gold", precio: 150000, anio: 2022, stock: 3, imagen:"front.png",detalleP: "productDetail2.html"},
    {id:3, producto:"Iphone 13 Max gold Green", tipo: "Celular",modelo: "13 Max gold green", precio: 150000, anio: 2022, stock: 5, imagen:"iphone verde.jpg", detalleP: "productDetail3.html"},
    {id:4, producto:"Iphone 12 Black", tipo: "Celular", modelo: "12 black", precio: 100000, anio: 2020, stock: 10, imagen:"ihpone black.jpg", detalleP: "productDetail4.html"},
    {id:5, producto:"Funda blanca", tipo: "Funda", modelo:"12", precio: 150000, stock: 8, imagen:"MWVX2ZM-A.jpg", detalleP: "productDetail6.html"},
    {id:6, producto:"Funda aqua", tipo: "Funda", modelo:"12",  precio: 150000, stock: 5, imagen:"MY182.jpg", detalleP: "productDetail7.html"},
    {id:7, producto:"Funda negra", tipo: "Funda", modelo:"12",  precio: 3000, stock: 9, imagen:"funda negra.webp", detalleP: "productDetail8.html"},
    {id:8, producto:"Funda rosa", tipo: "Funda", modelo:"13",  precio: 3000, stock: 1, imagen:"funda-silicona-para-iphone-13-con-magsafe-chalk-pink.jpg", detalleP: "productDetail9.html"},
]

/*let contenedorProducts = document.querySelector(".contenedorPoroducts")
let buscador = document.getElementById("buscador")
buscador.onchange = () => console.log("EVENTO CHANGE")
buscador.onclick = () => console.log("CLICK")
buscador.oninput = filtrar
renderizarProductos(products)

function filtrar() {
    let productosFiltrados = products.filter(products => products.producto.includes(buscador.value))
    renderizarProductos(productosFiltrados)
}

renderizarProductos(products)
function renderizarProductos(arrayDeProductos) {
    contenedorProducts.innerHTML = ""
    arrayDeProductos.forEach(products => {
        let tarjetaPorducts = document.createElement("div")
        tarjetaPorducts.classList.add("producto")
        tarjetaPorducts.id = `tarjeta${products.id}`
        tarjetaPorducts.innerText = products.producto
        contenedorProducts.append(tarjetaPorducts)
    })
    tarjetaPorducts.innerHTML =`
    <p>${pocasUnidades}</p>`

}
 

//----------------------------------------------------------------------------------------------------------------------------------------
products.forEach(products => {
    let contenedorProducto = document.createElement("h2")
    contenedorProducts.innerText = products.producto
    contenedorProducts.append(contenedorProducts)

    contenedorProducts.innerHTML = `
    <p>${pocasUnidades}</p>
    `
    
    if (products.stock < 6) {
        contenedorProducts.classList.add("ultimasUnidades")
        let pocasUnidades = document.createElement('p')
        pocasUnidades.innerText = "Quedan pocas unidades"
        contenedorProducts.appendChild(pocasUnidades)
    }
});
*/
//-----------------------------------------RENDERIZAR PRODUCTOS-----------------------------------------------------------------------------------------------

let contenedorCelulares = document.querySelector(".celulares")
let contenedorAccesorios = document.querySelector(".accesorios")


function renderProds(arrayCualquiera) {            
    contenedorCelulares.innerHTML = ""
    contenedorAccesorios.innerHTML = ""
    for (let i=0; i < arrayCualquiera.length; i++) {
        if(arrayCualquiera[i].tipo == "Celular"){
            contenedorCelulares.innerHTML += `            
        <div id="phone${i+1}" class="product">
            <div class="prodImg">
                <a href="../productDetails/${arrayCualquiera[i].detalleP}"><img src="../img/${arrayCualquiera[i].imagen}" alt="${arrayCualquiera[i].producto}"></a> 
            </div>
            <div class="datos">
                <h2>${arrayCualquiera[i].producto}</h2>
                <p> ${arrayCualquiera[i].precio} </p>
                <p> Descuento 10% </p> 
                <p class="idProd">${arrayCualquiera[i].id}</p> 
                <br>   
            </div>
        </div>
        `
        }
        else if(arrayCualquiera[i].tipo == "Funda"){
            contenedorAccesorios.innerHTML += `                       
                <div id="funda${i-3}" class="product">
                    <div class="prodImg">
                        <a href="../productDetails/${arrayCualquiera[i].detalleP}"> <img src="../img/${arrayCualquiera[i].imagen}" alt="${arrayCualquiera[i].producto}"></a>
                    </div>                
                    <div class="datos">
                        <h2>${arrayCualquiera[i].producto}</h2>
                        <p>${arrayCualquiera[i].precio}</p>
                        <p> Descuento 10% </p>
                        <p class="idProd"> ${arrayCualquiera[i].id}</p>
                        <br>
                    </div>
                </div>      
        `
        }    
    }
}
renderProds(products)

/* BUSQUEDA */
let buscador = document.getElementById("buscador")
let buscInput = document.getElementById("buscInput")
buscador.onchange = () => console.log("EVENTO CHANGE")
buscador.onclick = () => console.log("CLICK")
buscador.oninput = filtrar
renderProds(products)

function filtrar() {
    let productosFiltrados = products.filter(products => products.producto.toUpperCase().includes(buscInput.value.toUpperCase()))
    renderProds(productosFiltrados)
}

renderProds(products)

}