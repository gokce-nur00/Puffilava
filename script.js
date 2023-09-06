const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}


if(close)
{
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


const firstSelect = document.getElementById("firstSelect");
const secondSelect = document.getElementById("secondSelect");
if (firstSelect) {
    firstSelect.addEventListener("change", function (e) {
        e.preventDefault();
        if (firstSelect.value === "takeAway") {
            secondSelect.disabled = false;
        } else if (firstSelect.value === "online") {
            secondSelect.disabled = true;
            secondSelect.selectedIndex = 0;
        } else {
            secondSelect.disabled = true;
            secondSelect.selectedIndex = 0;
        }
    });
}
var jsonData = {
    "desserts":[
        {   "sys":{"id":"1"},
            "fields":{
            "name":"Pistachio Baklava",
            "image":"img/products/baklava.jpg",
            "cost":"₺595"
        }},
        {   "sys":{"id":"2"},
            "fields":{
            "name":"Strawberry Cold Baklava",
            "image":"img/products/cilekli_soguk_baklava.jpg",
            "cost":"₺600"
        }},
        {"sys":{"id":"3"},
        "fields":{
            "name":"Carrot Slice",
            "image":"img/products/havuc_dilimi.jpg",
            "cost":"₺620"
        }},
        {"sys":{"id":"4"},
        "fields":{
            "name":"Pistachio Bomb",
            "image":"img/products/fıstık_bomba.jpg",
            "cost":"₺595"
        }},
        {"sys":{"id":"5"},
        "fields":{
            "name":"Chocolate Cold Baklava",
            "image":"img/products/cikolatali_soguk_baklava.jpg",
            "cost":"₺595"
        }},
        {"sys":{"id":"6"},
        "fields":{
            "name":"Sobiyet",
            "image":"img/products/sobiyet.jpg",
            "cost":"₺595"
        }},
        {"sys":{"id":"7"},
        "fields":{
            "name":"Burma Kadayif",
            "image":"img/products/burma_kadayif.jpg",
            "cost":"₺595"
        }},
        {"sys":{"id":"8"},
        "fields":{
            "name":"Pistachio Sarma",
            "image":"img/products/fıstık_sarma.jpg",
            "cost":"₺595"
        }},
        {"sys":{"id":"9"},
        "fields":{
            "name":"Blackberry Petifur",
            "image":"img/products/bogurtlenli_petifür.jpg",
            "cost":"₺120"
        }},
        {"sys":{"id":"10"},
        "fields":{
            "name":"Chocolate Banana Petifur",
            "image":"img/products/cikolata_muzlu_petifür.jpg",
            "cost":"₺120"
        }},
        {"sys":{"id":"11"},
        "fields":{
            "name":"Strawberry Petifur",
            "image":"img/products/cilekli_petifür.jpg",
            "cost":"₺120"
        }},
        {"sys":{"id":"12"},
        "fields":{
            "name":"Strawberry Tart",
            "image":"img/products/cilekli_tart.jpg",
            "cost":"₺200"
        }},
        {"sys":{"id":"13"},
        "fields":{
            "name":"Pumpkin Dessert",
            "image":"img/products/kabak_tatlısı.jpg",
            "cost":"₺100"
        }},
        {"sys":{"id":"14"},
        "fields":{
            "name":"Muhallebi",
            "image":"img/products/muhallebi.jpg",
            "cost":"₺70"
        }},
        {"sys":{"id":"15"},
        "fields":{
            "name":"Sutlac",
            "image":"img/products/sutlac.jpg",
            "cost":"₺70"
        }},
        {"sys":{"id":"16"},
        "fields":{
            "name":"Forest Fruit Cake",
            "image":"img/products/orman_meyveli_pasta.jpg",
            "cost":"₺220"
        }},
        {"sys":{"id":"17"},
        "fields":{
            "name":"Green Mussel",
            "image":"img/products/yesil_midye.jpg",
            "cost":"₺600"
        }},
        {"sys":{"id":"18"},
        "fields":{
            "name":"Trilece",
            "image":"img/products/trilece.jpg",
            "cost":"₺100"
        }},
        {"sys":{"id":"19"},
        "fields":{
            "name":"Borek of Bosnians",
            "image":"img/products/bosnak_boregi.jpg",
            "cost":"₺100"
        }},
        {"sys":{"id":"20"},
        "fields":{
            "name":"Classic Borek",
            "image":"img/products/su_boregi.jpg",
            "cost":"₺100"
        }}

    ]
};

var productDivs = document.querySelectorAll('.pro');

var selectedProducts = [];

productDivs.forEach(function(productDiv) {
    productDiv.addEventListener('click', function() {
        var productId = productDiv.getAttribute('data-id');
        var selectedProduct = jsonData.desserts.find(function(product) {
            return product.sys.id === productId;
        });
        if (selectedProduct) {
            selectedProducts.push(selectedProduct)
            window.location.href = 'singleproduct.html';
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        }
    });
});
//to singleproduct
document.addEventListener("DOMContentLoaded", function () {
    var selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (selectedProduct) {
        document.getElementById('MainImg').src = selectedProduct.fields.image;
        document.getElementById('productName').textContent = selectedProduct.fields.name;
        document.getElementById('productCost').textContent = selectedProduct.fields.cost;
    }
});

//shop-search
const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("pro-container");
    const product = document.querySelectorAll(".pro");
    const pname = storeItems.getElementsByTagName("h5");

    for(var i=0; i< pname.length; i++){
        let match = product[i].getElementsByTagName('h5')[0];
        if(match){
            let textValue = match.textContent || match.innerHTML;
            if(textValue.toUpperCase().indexOf(searchBox) > -1)
            {
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }

    }

}
//single-product-to-card
document.addEventListener("DOMContentLoaded", function () {
    // Önce localStorage'dan selectedProduct bilgisini alın
    var selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    // Ardından bu bilgiyi kullanarak yeni bir cart-item oluşturun
    if (selectedProduct) {
        var cartContainer = document.getElementById("cartContainer");
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Remove Butonu
        var removeButton = document.createElement("button");
        removeButton.classList.add("normal");
        var removeIcon = document.createElement("i");
        removeIcon.classList.add("far", "fa-times-circle");
        removeButton.appendChild(removeIcon);
        // Remove butonuna tıklanınca bu ürünü sepetten kaldırabilirsiniz
        removeButton.addEventListener("click", function () {
            cartContainer.removeChild(cartItem);
        });

        // Ürün Resmi
        var productImage = document.createElement("div");
        var imageElement = document.createElement("img");
        imageElement.src = selectedProduct.image;
        productImage.appendChild(imageElement);

        // Ürün Adı
        var productName = document.createElement("div");
        productName.textContent = selectedProduct.name;

        // Ürün Fiyatı
        var productPrice = document.createElement("div");
        productPrice.textContent = selectedProduct.cost;

        // Ürün Adedi (Quantity)
        var productQuantity = document.createElement("div");
        var quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1; // Varsayılan değer
        // Adet değiştiğinde toplam fiyatı güncelleyin
        quantityInput.addEventListener("input", function () {
            productPrice.textContent = (parseInt(quantityInput.value) * parseFloat(selectedProduct.cost)).toFixed(2);
        });
        productQuantity.appendChild(quantityInput);

        // Toplam Fiyat (Subtotal)
        var productSubtotal = document.createElement("div");
        productSubtotal.textContent = selectedProduct.cost; // İlk başta tek ürün fiyatı olarak ayarlanmış

        // Oluşturulan tüm elemanları cart-item içine ekleyin
        cartItem.appendChild(removeButton);
        cartItem.appendChild(productImage);
        cartItem.appendChild(productName);
        cartItem.appendChild(productPrice);
        cartItem.appendChild(productQuantity);
        cartItem.appendChild(productSubtotal);

        // Oluşturulan cart-item'i container'a ekleyin
        cartContainer.appendChild(cartItem);
    }
    
});

//card-click-remove
document.querySelectorAll('.cart-item button').forEach(function (button) {
    button.addEventListener('click', function () {
    var cartItem = this.closest('.cart-item');
    if (cartItem) {
    cartItem.remove();
    }
    });
});

//card-quantity*cost
var quantityInput = document.getElementById('quantityInput');
var productCost = document.getElementById('productCost');
var productCost1 = document.getElementById('productCost1');
var productCost2 = document.getElementById('productCost2');

quantityInput.addEventListener('change', function () {
  var quantity = parseInt(quantityInput.value, 10);
  var price = parseFloat(productCost.textContent.replace('₺', ''));
  var subtotal = quantity * price;

  productCost.textContent = '₺' + subtotal.toFixed(2);
  productCost1.textContent = '₺' + subtotal.toFixed(2);
  productCost2.textContent = '₺' + subtotal.toFixed(2);
});


  
  
  