    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", ready)
    }
    else {
        ready()
    }

    function ready() {
        
        if(JSON.parse(localStorage.getItem("productosEnCarrito")) == null) {
            let cart = []
            localStorage.setItem("productosEnCarrito", JSON.stringify(cart))
        }
        cartNumber() 
        let button = document.querySelector(".buttonCarrito") 
        button.addEventListener("click", (e) => {                   
            agregarItem()
            Swal.fire(
                'Exito!',
                'Producto agregado al carrito!',
                'success'
            )
            //alert("Producto agregado al carrito!")
        })
    }

    function cartNumber() {

        let numberItems = document.querySelector(".cartNmb")
        numberItems.innerText = `${JSON.parse(localStorage.getItem("productosEnCarrito")).length}`
    }

    function agregarItem() {

        let prodsCart = JSON.parse(localStorage.getItem("productosEnCarrito"))
        let product = {
            id: document.getElementById("idProd").innerText,
            name: document.querySelector(".nameProd").innerText,       
            price: document.querySelector(".product-price").innerText.replace("$",""),
            image: document.getElementById("imgProd").alt
        }

        if (prodsCart.length > 0) { 
            let productInCart = prodsCart.find(prod => prod.id == product.id) 
            if(!productInCart) {

                product.cantidad = 1;
                product.subTotal = product.cantidad * product.price
                prodsCart = [...prodsCart, product]
            }
            else {

                productInCart.cantidad += 1;
                productInCart.subTotal = productInCart.cantidad * product.price
            }
        }
        else { 

            product.cantidad = 1;
            product.subTotal = product.cantidad * product.price
            prodsCart.push(product)
        }

        localStorage.setItem("productosEnCarrito", JSON.stringify(prodsCart)) 
        cartNumber() 
    }

//-----------------------------------------------------------------------------------------------------------
    const products = [
        {id:1, iphone:"Iphone", modelo: "13 Pro Max ", precio: 150000, anio: 2022, stock: 7},
        {id:2, iphone:"Iphone", modelo: "13 Pro Max gold", precio: 150000, anio: 2022, stock: 3},
        {id:3, iphone:"Iphone",modelo: "13 Max gold green", precio: 150000, anio: 2022, stock: 5},
        {id:4, iphone:"Iphone", modelo: "12 ", precio: 100000, anio: 2020, stock: 10},
        {id:6, funda:"Funda blanca", modelo:"12", precio: 150000, stock: 8},
        {id:7, funda:"Funda aqua",modelo:"12",  precio: 150000, stock: 5},
    ]

    

//-------------------------------------------------------------------------------------------------