function init(id) {
    var mainBtn,
        openBtn,
        closeBtn,
        classes,
        width,
        height,
        horizontal,
        vertical;

    mainBtn = document.getElementById(id);
    openBtn = mainBtn.getElementsByClassName('mbtn')[0];
    closeBtn = mainBtn.getElementsByClassName('close')[0];
    classes = mainBtn.className;

    width = getWClassValue(classes);
    height = getHClassValue(classes);
    horizontal = getHorizontalValue(classes);
    vertical = getVerticalValue(classes);

    openBtn.onclick = function() {
        var vw = window.innerWidth,
            vh = window.innerHeight;

        mainBtn.style.zIndex = "999";
        mainBtn.className = classes + ' opened';

        if (vw < (width + 40)) {

            mainBtn.style.width = "100%";
            mainBtn.style.overflow = "auto";

            if (horizontal === 'left') {
                mainBtn.style.left = "0";
            } else {
                mainBtn.style.right = "0";
            }

        }

        if (vh < (height + 40)) {

            if (vertical === 'top') {
                mainBtn.style.top = "0";
            } else {
                mainBtn.style.bottom = "0";
            }

            if (vh > height) {
                mainBtn.style.height = "100%";
            }

        }

    };
    closeBtn.onclick = function() {
        mainBtn.removeAttribute("style");
        mainBtn.className = classes + ' closed';
    };
}

function getWClassValue(classes) {
    var array = classes.split(' '),
        regEx = /^w\d{3,4}$/,
        width,
        i,
        len;

    for (i = 0, len = array.length; i < len; i++) {
        var cl = array[i];
        if(regEx.test(cl)) {
            width = cl.slice(1);
            break;
        }
    }

    return parseInt(width, 10);
}
function getHClassValue(classes) {
    var array = classes.split(' '),
        regEx = /^h\d{3,4}$/,
        height,
        i,
        len;

    for (i = 0, len = array.length; i < len; i++) {
        var cl = array[i];
        if(regEx.test(cl)) {
            height = cl.slice(1);
            break;
        }
    }

    return parseInt(height, 10);
}

function getHorizontalValue(classes) {
    var array = classes.split(' '),
        horiz,
        i,
        len;

    for (i = 0, len = array.length; i < len; i++) {
        var cl = array[i];
        if(cl === 'left' || cl === 'right') {
            horiz = cl;
            break;
        }
    }

    return horiz;
}

function getVerticalValue(classes) {
    var array = classes.split(' '),
        vert,
        i,
        len;

    for (i = 0, len = array.length; i < len; i++) {
        var cl = array[i];
        if(cl === 'top' || cl === 'bottom') {
            vert = cl;
            break;
        }
    }

    return vert;
}