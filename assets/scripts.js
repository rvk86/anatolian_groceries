$( document ).ready(function() {

    // Initiate the available product list
    setAvailableProducts();
    setProductList();

    $('#newProductForm').on('submit', function(e) {

        e.preventDefault();

        var productList = products.list();
        var customIndex = 1;
        while (productList['custom_' + customIndex]) {
            customIndex++;
        }


        var productField = $(this).find('#newProductName');
        productList['custom_' + customIndex] = {'name': productField.val(),
                                                'image': 'assets/images/placeholder.jpg',
                                                'count': 0};
        products.set(productList);

        productField.val('');
        setAvailableProducts();

    });


    $(document).on('click', '.countItem', function(e) {

        e.preventDefault();
        var key = $(this).parents('.card').attr('id');
        var count = $(this).data('count');

        var newCount = products.countItem(key, count);
        $('#' + key + ' .productCount').val(newCount);
        $('.itemCount').text(products.selectedCount());

        setProductList();

    });


    $(document).on('click', '.emptyList', function(e) {

        e.preventDefault();
        products.empty();

        setAvailableProducts();
        setProductList();

    });


    $(document).on('click', '.resetProducts', function(e) {

        e.preventDefault();
        products.reset();

        setAvailableProducts();
        setProductList();

    });


    $(document).on('click', '.switchTabs', function(e) {

        e.preventDefault();

        var tab = $(this).data('tab');
        $('a[href="#' + tab + '"]').click();

    });

});





