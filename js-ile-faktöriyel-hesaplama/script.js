var hesapla = document.getElementById("hesapla");

hesapla.onclick = () =>{

    var sonuc = 1;
    var sayi = document.getElementById("sayi").value;

    for(var i=1;i<=sayi;i++){
        sonuc*=i;

    }
    document.getElementById("uyari")
    .innerHTML = "Sayının Faktöriyeli :"+sonuc;
}