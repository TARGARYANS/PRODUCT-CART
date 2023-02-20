
function login(){
    window.location="index2.html"
}





function addProduct(){

    product = {aname:a1.value,id:a2.value,cat:a3.value,price:a4.value,stock:a5.value}


    if (product.id in localStorage) {
        alert("Product already exists")
    }
    else{
        localStorage.setItem(product.id,JSON.stringify(product))
        alert("Product added to the cart")

    }

}

function viewProduct(){
    window.location="home.html"
}

function searchProduct(){
    data=b1.value

    if (data in localStorage) {
        final=JSON.parse(localStorage.getItem(data))


        result.innerHTML=`
        <h3>${final.aname}</h3>
        <h3>${final.id}</h3>
        <h3>${final.cat}</h3>
        <h3>${final.price}</h3>
        <h3>${final.stock}</h3>`
    }

    else{
        alert("product not present")
        window.location="index2.html"
    }

}