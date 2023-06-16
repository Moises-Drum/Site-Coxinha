function clickInicio(){
    window.location.href = "../Index/index.html";
}

function clickMenu(){
    if (navHamb.style.display == 'flex'){
        navHamb.style.display = 'none';
        logoArea.style.borderBottomLeftRadius = '10px';
        logoArea.style.borderBottomRightRadius = '10px';
    } else {
        navHamb.style.display = 'flex';
        logoArea.style.borderBottomLeftRadius = '0';
        logoArea.style.borderBottomRightRadius = '0';
    }
}