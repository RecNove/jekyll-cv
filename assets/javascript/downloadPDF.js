function downloadPDF(){
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
}
