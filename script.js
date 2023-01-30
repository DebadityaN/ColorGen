button = document.getElementById('genbtn');
saturation = document.getElementById('saturation');
brightness = document.getElementById('brightness');
main = document.getElementById('main');

button.onclick = function() {
    t = randColor();
    var h = t[0];
    var s = t[1];
    var l = t[2];

    var clr = hslToHex(h, s, l);
    document.getElementsByTagName('body')[0].style['background'] = clr;
    main.innerText = clr.toUpperCase();

}

// high saturation = 70 - 100
// low saturation  = 30 - 60
// high value      = 50 - 70
// low value       = 30 - 50

function randColor() {
    h = rand(0, 360);

    if (saturation.checked) {
        s = rand(30, 60);
    } else {
        s = rand(70, 90);
    }

    if (brightness.checked) {
        v = rand(20, 30);
    } else {
        v = rand(50, 70);
    }

    return [h, s, v];

}

function rand(minval, maxval) { return Math.floor(Math.random() * (maxval-minval)) + minval; }

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
