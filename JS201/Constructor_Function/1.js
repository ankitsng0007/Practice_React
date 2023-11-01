//function Nike(n,p){
//    let product={};

//    product.name = n;
//    product.price = p;
    
//    return product;
//}

//let prod1 = Nike("shoes",2000);

//console.log("prod1:",prod1);


function prodCF(n,p){
    this.name=n;
    this.price=p;
}
// let prod2 = new prodCF("Jordon",9999);
// console.log("prod2:",prod2);

let arr = [];
function nikeProduct(e){
    e.preventDefault();

    let form = document.getElementById("product_form");
    let name = form.name.value;
    let price = form.price.value;

    let prod = new prodCF(name,price);
    arr.push(prod);

    console.log("arr:",arr);
}