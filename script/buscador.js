window.onload = function(){

let contenedorCelulares = document.querySelector(".celulares")
let contenedorAccesorios = document.querySelector(".accesorios")
let URL = "../productos.json"
let buscador = document.getElementById("buscador")
let buscInput = document.getElementById("buscInput")

    fetch(URL)
    .then(resp => resp.json())
    .then(products => {
    
        renderProds(products)
        buscador.onchange = () => console.log("EVENTO CHANGE")
        buscador.onclick = () => console.log("CLICK")
        buscador.oninput = filtrar
    
        function filtrar() {
            let productosFiltrados = products.filter(products => products.producto.toUpperCase().includes(buscInput.value.toUpperCase()))
            renderProds(productosFiltrados)
        }
    
    })
    .catch(error => console.log(error))        


function renderProds(arrayCualquiera) {            
    contenedorCelulares.innerHTML = ""
    contenedorAccesorios.innerHTML = ""
    for (let i=0; i < arrayCualquiera.length; i++) {
        if(arrayCualquiera[i].tipo == "Celular"){
            contenedorCelulares.innerHTML += `            
        <div id="${arrayCualquiera[i].clase}" class="product">
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
                <div id="${arrayCualquiera[i].clase}" class="product">
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
}

