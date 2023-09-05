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
productDivs.forEach(function(productDiv) {
    productDiv.addEventListener('click', function() {
        var productId = productDiv.getAttribute('data-id');
        var selectedProduct = jsonData.desserts.find(function(product) {
            return product.sys.id === productId;
        });
        if (selectedProduct) {
            window.location.href = 'singleproduct.html';
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (selectedProduct) {
        document.getElementById('MainImg').src = selectedProduct.fields.image;
        document.getElementById('productName').textContent = selectedProduct.fields.name;
        document.getElementById('productCost').textContent = selectedProduct.fields.cost;
    }
});

var addToCartButton = document.getElementById('add-button');
if (addToCartButton) {
    addToCartButton.addEventListener('click', function () {
        //window.location.href = `card.html?image=${selectedProduct.fields.image}&name=${selectedProduct.fields.name}&cost=${selectedProduct.fields.cost}`;
        var selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
        if (selectedProduct) {
            var productName = selectedProduct.fields.name;
            var productCost = selectedProduct.fields.cost;
            var productImage = selectedProduct.fields.image;

            var newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>
                    <button>
                        <i class="far fa-times-circle"></i>
                    </button>
                </td>
                <td>
                    <img src="${productImage}" alt="">
                </td>
                <td>
                    ${productName}
                </td>
                <td>${productCost}</td>
                <td>
                    <input type="number" value="1">
                </td>
                <td>${productCost}</td>
            `;
            var tbody = document.getElementById("cartTableBody");
            //console.log(newRow.innerHTML);
            if (tbody) {
                tbody.appendChild(newRow);
                localStorage.setItem('cartProduct', JSON.stringify(selectedProduct));
                window.location.href = 'card.html';
            }
        }
    
    
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

    if (cartProduct) {
        var tableRow = document.getElementById("cartTableBody");
        var row = `
            <tr>
                <td>
                    <a href="#">
                        <i class="far fa-times-circle"></i>
                    </a>
                </td>
                <td>
                    <img src="${cartProduct.fields.image}" alt="">
                </td>
                <td>
                    ${cartProduct.fields.name}
                </td>
                <td>${cartProduct.fields.cost}</td>
                <td>
                    <input type="number" value="1">
                </td>
                <td>${cartProduct.fields.cost}</td>
            </tr>  
        `;
        tableRow.innerHTML += row;
        console.log(tableRow.innerHTML);
        localStorage.removeItem('cartProduct');
    }
});

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