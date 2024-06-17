document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('download');
    console.log("fui chamado;")
    downloadButton.addEventListener('click', function() {
      window.print();
    });
  });
  