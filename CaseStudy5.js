/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/

//Menu


//fungsi menghitung luas dengan menggunakan function declaration
//boleh tidak memiliki nilai balik
//segi empat (sisi * sisi)
function hitungLuasSegiEmpat(sisi){
    //tidak ada nilai balik
    var luas = sisi * sisi;
    return luas;
}

//persegi panjang (panjang * lebar)
function hitungLuasPersegiPanjang(panjang,lebar){
    //tidak memiliki nilai balik
    var luas = panjang * lebar;
    return luas;
}

//menggunakan nilai balik
//segi tiga (0.5 * alas * tinggi)
function hitungLuasSegitiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi;
    return luas;
}
//lingkaran (3.14 * jari-jari ^ 2)
function hitungLuasLingkaran(jariJari){
    var luas = 3.14 * jariJari * jariJari;
    return luas;
}

//fungsi menghitung keliling dengan menggunakan function expretion

//segi empat (sisi + sisi + sisi + sisi)
var hitungKelilingSegiEmpat = function(sisi){
    return sisi * 4;
}
//segi panjang (2* (panjang + lebar))
var hitungKelilingSegiPanjang = function(panjang,lebar){
    return 2*(panjang+lebar);
}
//segi tiga (alas + tinggi + sisi miring)
var hitungKelilingSegitiga = function(alas,tinggi,sisiMiring){
    return alas + tinggi + sisiMiring;
}
//lingkaran (2* 3.14 * jari-jari)
var hitungKelilingLingkaran = function(jariJari){
    return 2*3.14*jariJari;
}

//input outputnya

//Luas
//persegi (1 variable)
function luasPersegi(){
    var persegi = parseInt(prompt('Masukkan sisi persegi: '))
    var luas = hitungLuasSegiEmpat(persegi)

    document.write('Luas Persegi adalah : ' + luas)

}
//persegi panjang (2 variable)
function luasPersegiPanjang(){
    var persegiPanjang1 = parseInt(prompt('Masukkan panjang: '))
    var persegiPanjang2 = parseInt(prompt('Masukkan lebar: '))
    var luas = hitungLuasPersegiPanjang(persegiPanjang1,persegiPanjang2)

    document.write('Luas Persegi Panjang adalah : ' + luas)
}
//segitiga (2 variable)
function luasSegiTiga(){
    var inputAlas = parseInt(prompt('Masukkan alas: '))
    var inputTinggi = parseInt(prompt('Masukkan tinggi: '))
    var luas = hitungLuasSegitiga(inputAlas,inputTinggi)

    document.write('Luas Segitiga adalah : ' + luas)
}
//lingkaran
function luasLingkaran(){
    var inputJari = parseInt(prompt('Masukkan nilai jari jari: '))
    var luas = hitungLuasLingkaran(inputJari)

    document.write('Luas Lingkaran adalah : ' + luas)
}

//keliling

//persegi
function kelilingPersegi(){
    var persegi = parseInt(prompt('Masukkan sisi persegi: '))
    var keliling = hitungKelilingSegiEmpat(persegi)

    document.write('Keliling Persegi adalah : ' + keliling)
}
//persegi panjang
function kelilingPersegiPanjang(){
    var persegiPanjang1 = parseInt(prompt('Masukkan panjang: '))
    var persegiPanjang2 = parseInt(prompt('Masukkan lebar: '))
    var keliling = hitungKelilingSegiPanjang(persegiPanjang1,persegiPanjang2)

    document.write('Keliling Persegi Panjang adalah : ' + keliling)
}
//segitiga
function kelilingSegiTiga(){
    var inputAlas = parseInt(prompt('Masukkan alas: '))
    var inputTinggi = parseInt(prompt('Masukkan tinggi: '))
    var inputSisiMiring = parseInt(prompt('Masukkan sisi Miring: '))
    var keliling = hitungKelilingSegitiga(inputAlas,inputTinggi,inputSisiMiring)

    document.write('Keliling Segitiga adalah : ' + keliling)
}
//lingkaran
function kelilingLingkaran(){
    var inputJari = parseInt(prompt('Masukkan nilai jari jari: '))
    var keliling = hitungKelilingLingkaran(inputJari)

    document.write('Keliling Lingkaran adalah : ' + keliling)
}



var menu = prompt('silahkan pilih menu yang tersedia ','1 - Luas , 2 - Keliling')
if(menu==1){
    //mengoperasikan menu Luas
    var menuLuas = prompt('Masukkan bangun datar yang akan dihitung luasnya ','1 - Persegi ; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran')
    if(menuLuas==1){
        //Luas Persegi
        luasPersegi();

    }else if(menuLuas==2){
        //Luas Persegi Panjang
        luasPersegiPanjang();
    
    }else if(menuLuas==3){
        //Luas Segitiga
        luasSegiTiga();

    }else if(menuLuas==4){
        //Luas Lingkaran
        luasLingkaran();
    }


}else if(menu ==2){
//mengoperasikan menu keliling
    alert('Anda telah memilih menu Keliling Bangun Datar');
    var menuKeliling = prompt('Masukkan bangun datar yang akan dihitung kelilingnya ','1 - Persegi ; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran')
    if(menuKeliling==1){
        //Keliling Persegi
        kelilingPersegi();

    }else if(menuKeliling==2){
        //Keliling Persegi Panjang
        kelilingPersegiPanjang();

    }else if(menuKeliling==3){
        //Keliling Segitiga
        kelilingSegiTiga();

    }else if(menuKeliling==4){
        //Keliling Lingkaran
        kelilingLingkaran();
    }
}else{
    document.write('Menu yang Anda pilih tidak valid' + '<br>')
}