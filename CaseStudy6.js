//menu

var input = parseInt(prompt('Pilih  angka :','1. mentor, 2. ta, 3. admin'));

function study(){
    if(input==1){
        var mentor1=['Akhmad','Alif','Andika','Jojo'];
        document.write('Mentor Dojobox adalah : ',mentor1);
    }else if(input==2){
        var listTa=['Adib','Valen','Vista'];
        document.write('TA Dojobox adalah ',listTa);
    }else if(input==3){
        var admin1=['Aura','Cahaya'];
        document.write('Admin Dojobox adalah ',admin1);
    }else {
        document.write('Diluar konteks')
    }

}

study();