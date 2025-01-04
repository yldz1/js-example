//bu deneme js kodları olucak ve puan hesaplama yapıyorum şuan da:
let vize1 = Number(prompt("1. vize sınav puanınızı giriniz:"));
let vize2 = Number(prompt("2. vize puanınızı giriniz:"));
let final = Number(prompt("Final puanınızı giriniz:"));
//0.3 ile çarpmamızın nedeni yüzde otuzunun alınması gerekiyormuş da ondan .
let ortlama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.5);
//bunlara eğer ataması yapmamız lazım çünkü eğer sınavı geçemezse kalıcak diye 
if (ortlama >= 60) {
    alert("Derten geçtiniz başarılar.");
    console.log("Başarılar dilerim.");

}
else {
    alert("Kaldınız,geçmiş olsun. Tekrar deneyiniz.");
    console.log("Kaldınız Tekrar deneyiniz.");

}

//bu çok güzel bir kod oldu ve not hesaplamayı sağlıyor baya beğendim.

//bazı örnekleri yapıcam 
let ad = prompt("isminizi giriniz:");
let tckn = prompt("tckn giriniz 11 haneli olmak zorunda:");//bunu 11 haneli olamak zorunda şeklinde yapmam lazım 
kontrelEt(ad, tckn);
function kontrelEt(ad, tckn) {
    if (tckn.lenght == 11) {
        console.log("isim ve tckn problemsiz girildi.");

    } else {
        console.log("lütfen tckn doğru giriniz.");

    }  else {
        console.log("lütfen isim alanını boş bırakmayınız");

    }

}

//beden kitle endeksi hesaplama 5 ihtimalli bir yapı olıcak if else if else yapısı olucak 
let kilo = Number(prompt("kilonuzu giriniz:"));//buna number yapman lazım çünkü string olarak kalır string değilde number olsun istiyorum 
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));
let sonuc = kilo / (boy * 2);
if (sonuc < 18.5) {

} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("ideal kilonun altında ");
} else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("ideal kilonun altında ");
} else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("ideal kilonun çok üstünde obez ");
} else if (sonuc >= 40) {
    console.log("ideal kilonun çok üstünde morbid obez ");
}




//benzin istasyonu uygulaması:
let yakıtTipi = prompt(yatikMetni);
let yakitLitesi = prompt(yatikMetni);
let bakiye = Number(prompt("bakiyenizi giriniz:");)
let(yakıtTipi == "1" || yakıtTipi == "2" || yakıtTipi="3"){
    //bunu sağlması için eğer diyoki yakit tipi 1 ve ya ikiye veya 3 e eşit işe o zaman bakiye iste litre isti diyorum burda.
}
let dizel = 24.5, benzin = 22.4, lpg = 11.3;
const yeniSatır = "\r\n";
const yatikMetni = "1-Dizel" + yeniSatır
    + "2-benzin" + yeniSatır
    + "3-lpg" + yeniSatır
    + "yakıt türünüzü seçiniz:";

let yakıtTipi = prompt(yatikMetni);
if (yakıtTipi == "1");//dizeldir
{
    let odenecekTutar = dizel * yakitLitesi;
    if (odenecekTutar < bakiye) {
        //bakiyeniz yeterlidir yazması lazım.
        bakiye = bakiye - odenecekTutar;
        alert("yakıt alma işlemi başarılıdır." + yeniSatır + "kalan bakiye" + bakiye);

    }
    else {
        //bu da bakiye yeterli değil olsun 
        alert("bakiyeniz yeterli değildir." + yeniSatır
            + "ödenecek tutar:" + odenecekTutar + yeniSatır + "bakiye" + bakiye + yeniSatır + "eksik tutar"(odenecekTutar - bakiye)

        );
    }
}else if (yakıtTipi == "2");//benzin
{

}else if (yakıtTipi == "3"); {//lpg
    alert("lütfen geçerli bir yakıt türü seçiniz");
}















