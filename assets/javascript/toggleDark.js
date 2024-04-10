var checkbox = document.querySelector('input[name=mode]')
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(--fg-color-dark)'})
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon'].toSvg({'fill': 'var(--fg-color-dark)'})
    }


var iframe = document.getElementsByClassName('container')[0];

if (!iframe) {
    console.error('Iframe not found');
    return;
}

var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

if (!iframeDoc) {
    console.error('Cannot access iframe document');
    return;
}

var blob = new Blob([iframeDoc.documentElement.outerHTML], { type: 'text/html' });

var url = window.URL.createObjectURL(blob);
var a = document.createElement('a');
a.href = url;
a.download = 'iframe_content.html';

document.body.appendChild(a);

a.click();

document.body.removeChild(a);
window.URL.revokeObjectURL(url);

})