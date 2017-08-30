
var artworkProductData = {
    "products": [
                    {
                        "title": "Frantastic",
                        "information": "sdfsdfsdfsdf",
                        "artist": "John Francis Murphy",
                        "price": "5.00",
                        "image": "fran.jpg"
                    },
                    {
                        "title": "Mince Meat",
                        "dimension": "400 x 200 mm",
                        "information": "xcvxcvxcvxcv",
                        "artist": "Shane Cremin",
                        "price": "5.00",
                        "image": "joe.jpg"
                    },
                    {
                        "title": "The Married Man",
                        "dimension": "400 x 200 mm",
                        "information": "hjkhjkhjkhjk",
                        "artist": "Darragh Murphy",
                        "price": "5.00",
                        "image": "darragh.jpg"
                    },
                    {
                        "title": "Jimmy The Knive",
                        "dimension": "400 x 200 mm",
                        "information": "yuiyuiyuiyuiyu",
                        "artist": "Eoin Dennehy",
                        "price": "5.00",
                        "image": "jimmy.jpg"
                    }
            ]
};

(function() {

    function init() {
        //getProducts();
        getData()
        buyNow();
    }

     function getProducts() {
        //    $.ajax({
        //         url: "/products",
        //         type: "GET",
        //         contentType: "application/json",
        //         success: function (data) {                 
        //             console.log("successss!!! -- ", data);
        //             getData(data);
        //         },
        //         error: function(err) {
        //             console.log("err");
        //         }
        //     });
    }

    function getData() {
        $.each(artworkProductData.products, function (i, products) {
                var prodHtml = '<div class="col-xs-6 well hoverwell"> \
                <div class="row"> \
                    <img style="width:25%;" class="span6" src="images/' + products.image + '" /> \
                </div> \
                <div class="row"> \
                    <h2 style="float:left;" class="span6" id="title' + i +'">' + products.title + '</h2> \
                </div> \
                <div class="row"> \
                    <span class="span6">Dimensions: \
                            <select class="dimensions" name="item" id="item' + i +'"> \
                                <option value="small">400 x 200 mm</option> \
                                <option value="regular">800 x 400 mm</option> \
                                <option value="large">1600 x 800 mm</option> \
                            </select> <br/> \
                    </span> \
                </div> \
                <div class="row"> \
                    <span class="span6">information: ' + products.information + '</span> \
                </div> \
                <div class="row"> \
                    <span class="span6" id="artist' + i + '"> \
                    ' + products.artist + '</span> \
                </div> \
                <div class="row"> \
                    <span class="span6" id="price' + i +'"> \
                    <span  id="priceValue' + i +'" class="price">' + products.price + '</span> </span> \
                </div> \
                <div class="row"> \
                    <span class="span6">Quantity: \
                        <select class="quantity" id="quantity' + i +'"> \
                            <option value="1">1</option> \
                            <option value="2">2</option> \
                            <option value="3">3</option> \
                            <option value="4">4</option> \
                            <option value="5">5</option> \
                        </select> <br/> \
                    </span> \
                </div> \
                <div class="row"> \
                    <input type="button" id="' + i +'" class="btn btn-primary" value="Add To Order"/> \
                </div> \
            </div>';

            $(prodHtml).appendTo('#productList');
        });
    }

    function buyNow() {
        $(document).on("click", ".btn-buynow", function() {
            var arr = $("#hdnData").val(); 
            $("#results").empty();
            $("#hdnData").val("");

            $.ajax({
                    url: "/products",
                    type: "POST",
                    contentType: "application/json",
                    data: arr,
                    success: function (data) {   
                        console.log(data.responseText);
                    }
                });
        });
    }

    init();
  }

)();


