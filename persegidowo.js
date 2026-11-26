function LuasPersegiPanjang(panjang , lebar){
    let luas = panjang * lebar;
    return luas;
}

function KelilingPersegiPanjang(panjang , lebar){
    let keliling = (2 * panjang) + (2 * lebar);
    return keliling;
}

console.log('Luas : ' + LuasPersegiPanjang(10 , 4));
console.log('Keliling : ' + KelilingPersegiPanjang(10,4));