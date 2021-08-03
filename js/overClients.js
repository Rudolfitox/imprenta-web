const $img_client1 = document.querySelector('#img_client1');

$img_client1.onmouseover = $img_client1.onmouseout = $img_client1.onmousemove = handler;

function handler(event) {
    if (event.type == 'mouseover') {
        $img_client1.setAttribute('src','images/ricolino RGB.svg');
        // $img_client1.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client1.setAttribute('src','images/ricolino gris.svg');
        // $img_client1.classList.remove('animate__heartBeat');
    }
}

const $img_client2 = document.querySelector('#img_client2');

$img_client2.onmouseover = $img_client2.onmouseout = $img_client2.onmousemove = handler2;

function handler2(event) {
    if (event.type == 'mouseover') {
        $img_client2.setAttribute('src','images/grupo bimbo RGB.svg');
        // $img_client2.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client2.setAttribute('src','images/grupo bimbo gris.svg');
        // $img_client2.classList.remove('animate__heartBeat');
    }
}

const $img_client3 = document.querySelector('#img_client3');

$img_client3.onmouseover = $img_client3.onmouseout = $img_client3.onmousemove = handler3;

function handler3(event) {
    if (event.type == 'mouseover') {
        $img_client3.setAttribute('src','images/cinepolis RGB.svg');
        // $img_client3.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client3.setAttribute('src','images/cinepolis gris.svg');
        // $img_client3.classList.remove('animate__heartBeat');
    }
}

const $img_client4 = document.querySelector('#img_client4');

$img_client4.onmouseover = $img_client4.onmouseout = $img_client4.onmousemove = handler4;

function handler4(event) {
    if (event.type == 'mouseover') {
        $img_client4.setAttribute('src','images/Coca-Cola RGB.svg');
        // $img_client4.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client4.setAttribute('src','images/Coca-Cola gris.svg');
        // $img_client4.classList.remove('animate__heartBeat');
    }
}

const $img_client5 = document.querySelector('#img_client5');

$img_client5.onmouseover = $img_client5.onmouseout = $img_client5.onmousemove = handler5;

function handler5(event) {
    if (event.type == 'mouseover') {
        $img_client5.setAttribute('src','images/Banner RGB.svg');
        // $img_client5.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client5.setAttribute('src','images/Banner Gris.svg');
        // $img_client5.classList.remove('animate__heartBeat');
    }
}

const $img_client6 = document.querySelector('#img_client6');

$img_client6.onmouseover = $img_client6.onmouseout = $img_client6.onmousemove = handler6;

function handler6(event) {
    if (event.type == 'mouseover') {
        $img_client6.setAttribute('src','images/NItram RGB.svg');
        // $img_client6.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client6.setAttribute('src','images/NItram gris.svg');
        // $img_client6.classList.remove('animate__heartBeat');
    }
}

const $img_client7 = document.querySelector('#img_client7');
$img_client7.onmouseover = $img_client7.onmouseout = $img_client7.onmousemove = handler7;

function handler7(event) {
    if (event.type == 'mouseover') {
        $img_client7.setAttribute('src','images/perennails color.svg');
        // $img_client7.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client7.setAttribute('src','images/perennails gris.svg');
        // $img_client7.classList.remove('animate__heartBeat');
    }
}

const $img_client8 = document.querySelector('#img_client8');
$img_client8.onmouseover = $img_client8.onmouseout = $img_client8.onmousemove = handler9;

function handler9(event) {
    if (event.type == 'mouseover') {
        $img_client8.setAttribute('src','images/Propecsa RGB.svg');
        // $img_client7.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client8.setAttribute('src','images/Propecsa Gris.svg');
        // $img_client7.classList.remove('animate__heartBeat');
    }
}

const $img_client9 = document.querySelector('#img_client9');
$img_client9.onmouseover = $img_client9.onmouseout = $img_client9.onmousemove = handler10;

function handler10(event) {
    if (event.type == 'mouseover') {
        $img_client9.setAttribute('src','images/Prominox RGB.svg');
        // $img_client7.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client9.setAttribute('src','images/Prominox Gris.svg');
        // $img_client7.classList.remove('animate__heartBeat');
    }
}

const $img_client10 = document.querySelector('#img_client10');
$img_client10.onmouseover = $img_client10.onmouseout = $img_client10.onmousemove = handler11;

function handler11(event) {
    if (event.type == 'mouseover') {
        $img_client10.setAttribute('src','images/HFI RGB.svg');
        // $img_client7.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client10.setAttribute('src','images/HFI Gris.svg');
        // $img_client7.classList.remove('animate__heartBeat');
    }
}

const $img_client11 = document.querySelector('#img_client11');
$img_client11.onmouseover = $img_client11.onmouseout = $img_client11.onmousemove = handler12;

function handler12(event) {
    if (event.type == 'mouseover') {
        $img_client11.setAttribute('src','images/Gateaway RGB.svg');
        // $img_client7.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        $img_client11.setAttribute('src','images/Gateaway Gris.svg');
        // $img_client7.classList.remove('animate__heartBeat');
    }
}


const $logo_company = document.querySelector('#logo-company');
$logo_company.onmouseover = $logo_company.onmouseout = $logo_company.onmousemove = handler8;

document.addEventListener('click',e => {
    const $work_client_image = document.querySelector('#work_client');
    
    if(e.target.matches('img[data-src-img]')){
        let src = e.target.getAttribute('data-src-img');
        $work_client_image.src = src;
    }     
});

function handler8(event) {
    if (event.type == 'mouseover') {
        // $img_client8.setAttribute('src','images/perennails color.svg');
        $logo_company.classList.add('animate__heartBeat');
    }
    if (event.type == 'mouseout') {
        // $img_client7.setAttribute('src','images/perennails gris.svg');
        $logo_company.classList.remove('animate__heartBeat');
    }
}


