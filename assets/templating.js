function setAvailableProducts() {

    if(!products.list()) {
        products.set(product.starterProducts);
    }

    var availableProductCard = $("#availableProductCard").html();
    availableProductCard = Handlebars.compile(availableProductCard);

    $('.availableProductCardWrapper').remove();
    $(".availableProducts").append(availableProductCard(products.list()));

};

function setProductList() {

    var productCard = $("#productCard").html();
    productCard = Handlebars.compile(productCard);

    $('.productCardWrapper').remove();
    $(".productList").append(productCard(products.selected()));

};