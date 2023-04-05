
const result1 = document.getElementById('output-result1')
const result2 = document.getElementById('output-result2')
const result3 = document.getElementById('output-result3')
const result4 = document.getElementById('output-result4')



function luasTriangle() {
    const alas = document.getElementById('alas-segitiga')
    const tinggi = document.getElementById('tinggi-segitiga')

    let a = alas.value;
    let t = tinggi.value;

    if (a == '' && t !== '') {
        result1.innerHTML = 'Tolong masukan nilai alas'
    } else if (t == '' && a !== '') {
        result1.innerHTML = 'Tolong masukan nilai tinggi'
    } else if (a == '' || t == '') {
        result1.innerHTML = 'Tolong masukan nilai alas dan tinggi'
    } else {
        let l = a * t / 2;

        result1.innerHTML = `L = 1/2 x a x t<br>L = 1/2 x ${a} x ${t}<br>L = ${l} cm2`
    }
}

function kelilingTriangle() {
    const sisiA = document.getElementById('SA')
    const sisiB = document.getElementById('SB')
    const sisiC = document.getElementById('SC')

    let a = sisiA.value
    let b = sisiB.value
    let c = sisiC.value

    if (a == '' && b == '' && c == '') {
        result2.innerHTML = 'Tolong masukan nilai sisi A, B dan C'
    } else if (a == '' && b == '' && c !== '') {
        result2.innerHTML = 'Tolong masukan nilai sisi A dan B'
    } else if (a == '' && b !== '' && c == '') {
        result2.innerHTML = 'Tolong masukan nilai sisi A dan C'
    } else if (a !== '' && b == '' && c !== '') {
        result2.innerHTML = 'Tolong masukan nilai sisi B'
    } else if (a !== '' && b == '' && c == '') {
        result2.innerHTML = 'Tolong masukan nilai sisi B dan C'
    } else if (a !== '' && b !== '' && c == '') {
        result2.innerHTML = 'Tolong masukan nilai sisi C'
    } else {
        let k = a * b * c

        result2.innerHTML = `K = S1 x S2 x S3<br>K = ${a} x ${b} x ${c}<br>K = ${k} cm`
    }
}

function luasParallelogram() {
    const alas = document.getElementById('alas-parallelogram')
    const tinggi = document.getElementById('tinggi-parallelogram')

    let a = alas.value
    let t = tinggi.value

    if (a == '' && t !== '') {
        result3.innerHTML = 'Tolong masukan nilai alas'
    } else if (t == '' && a !== '') {
        result3.innerHTML = 'Tolong masukan nilai tinggi'
    } else if (a == '' || t == '') {
        result3.innerHTML = 'Tolong masukan nilai alas dan tinggi'
    } else {
        let l = a * t;

        result3.innerHTML = `L = a x t<br>L = ${a} x ${t}<br>L = ${l} cm2`
    }
}

function kelilingParallelogram() {
    const alas = document.getElementById('alas2-parallelogram')
    const SM = document.getElementById('SM-parallelogram')

    let a = alas.value
    let sm = SM.value

    if (a == '' && sm !== '') {
        result4.innerHTML = 'Tolong masukan nilai alas';
    } else if (sm == '' && a !== '') {
        result4.innerHTML = 'Tolong masukan nilai sisi miring';
    } else if (sm == '' && a == '') {
        result4.innerHTML = 'Tolong masukan nilai alas dan sisi miring';
    } else {
        let k1 = parseFloat(a) + parseFloat(sm);
        let K = 2 * k1;

        result4.innerHTML = `K = 2 x ( a + b )<br>K = 2 x ( ${a} + ${sm} )<br>K = ${K} cm`;
    };
}

function reset1(){
    document.getElementById('alas-segitiga').value = '';
    document.getElementById('tinggi-segitiga').value = '';

    result1.innerHTML = '';
}
function reset2(){
    document.getElementById('SA').value = '';
    document.getElementById('SB').value = '';
    document.getElementById('SC').value = '';

    result2.innerHTML = '';
}
function reset3(){
    document.getElementById('alas-parallelogram').value = '';
    document.getElementById('tinggi-parallelogram').value = '';

    result3.innerHTML = '';
}
function reset4(){
    document.getElementById('alas2-parallelogram').value = '';
    document.getElementById('SM-parallelogram').value = '';

    result4.innerHTML = '';
}