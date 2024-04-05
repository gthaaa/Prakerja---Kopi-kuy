

baris_produk.innerHTML = ""
var data_mentah = {
    "Arabica": [
        {
            "nama": "Arabica Gayo",
            "foto": "https://images.tokopedia.net/img/cache/900/product-1/2018/2/7/225963982/225963982_343f6b0c-3e7f-4e9c-8124-fd9965523c85_2048_2048.jpg",
            "harga": "79.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Arabica Preanger",
            "foto": "https://images.tokopedia.net/img/cache/700/product-1/2018/2/7/226053201/226053201_8d398ec8-012e-45e8-8651-cca6a08c98bc_2048_2048.jpg",
            "harga": "72.500",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Arabica Toraja",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2_OJDq9xNMCUC9mzbh_riH5FHdPSUY7uvzHGo8U-LlU4n9oHDiRnQ073oG6LxO87Ags&usqp=CAU",
            "harga": "76.500",
            "size": "250 g",
            "link": "https://tokopedia.link/sZRxNkoMwIb"
        }
    ],
    "Robusta": [
        {
            "nama": "Robusta Sidikalang",
            "foto": "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/8/37af8e25-dab3-43ea-aad9-e0663dfd8833.jpg",
            "harga": "40.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Robusta Lampung",
            "foto": "https://images.tokopedia.net/img/cache/900/product-1/2020/1/22/16934834/16934834_44efc9b5-2fab-40b9-a41e-d2f9c13bad38_700_700",
            "harga": "40.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Robusta Temanggung",
            "foto": "https://images.tokopedia.net/img/cache/900/product-1/2020/1/22/16934834/16934834_040b1257-0086-4155-a612-e764528d536b_700_700",
            "harga": "40.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Kopi Blend": [
        {
            "nama": "Kopi Susu Blend 25/75",
            "foto": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/1/c9661ba3-2d7a-4372-a5ea-4bbbfc5489d7.jpg",
            "harga": "35.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Kopi Susu Blend 75/25",
            "foto": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/1/a092ccb8-a9dc-45a4-bde2-bce462d946d9.jpg",
            "harga": "35.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Kopi Susu Blend 50/50",
            "foto": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/1/df1617e1-697b-443e-ac38-d75277dfa819.jpg",
            "harga": "35.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Alat": [
        {
            "nama": " Filter Coffee Stainless",
            "foto": "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/27/ce8c839d-d084-41f4-a30a-a57ab7d16f12.jpg",
            "harga": "49.990",
            "size": "1 pcs",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Coffee Paper Filter V60",
            "foto": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/23/f18a67c8-cb4a-4e4a-84ea-9b00ae86db69.jpg",
            "harga": "39.990",
            "size": "100 pcs",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Cone Coffee Dripper",
            "foto": "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/9/4/a58e8127-78c8-48a5-91d5-9e67eb5389a3.jpg",
            "harga": "65.450",
            "size": "1 pcs",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ]
}

console.log("data mentah:", data_mentah);

function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>';
    Object.keys(data_mentah).forEach(function(opsi) {
        select_kopi.innerHTML += `<option value="${opsi}">${opsi}</option>`;
    });
    console.log("Melakukan Update Select");
}


updateSelect();
var data_kopi = []
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-success fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-success w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`
    })
}
var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json"

$.getJSON(sumber2).then(data => {
    console.log("Data dari getJSON ", data)
    data_mentah = data
    updateSelect()
})