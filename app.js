
const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;


    var win = window.open(`https://wa.me/54${numero}?text=Mis Fotos App Web:%20https://bit.ly/3U9pdrL%0APara que el enlace se active me tienes que enajenar`, '_blank');
    //
}
evento.addEventListener('click', enviarFormulario)
let botonWspp = document.querySelector('#botonWspp');
botonWspp.addEventListener('click', function () {
        location.href = "https://wa.me/?text=https://bit.ly/3U9pdrL"
});

//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Instala la App web "Mis fotos": ',
            url: 'https://bit.ly/3U9pdrL'
        }).then(() => {
            console.log('Gracias por compartir mis fotos!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("El navegador actual no admite la función de compartir. Por favor, comparte manualmente el enlace")
    }
});


//Numero de pagina
function modal_09() {
    Swal.fire({
        html: ' <a href="https://www.mediafire.com/folder/j8r8mfnlzvoqg/Camera"><h3 class="bm">Facu foto3</h3></a>',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',
        //ajustes
        showCloseButton: true,
        timer: '5000',
        timerProgressBar: true,
        customClass: {
            actions: 'content',
        }
    })
}


// automatica
Swal.fire({

    html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Foto disponible el <b>4 de octubre</b>, Si no aparecen escribeme al </p>' +
        '<a href="https://wa.me/541144382987" target="_blank"><button class="bt-msj" >+54 11 4438-2987</button></a>' +
        '</div>',
   
       html: '<div class="mensaje">' +
       '<h3 class="bm-4">Black Momets</h3>' +
       '<p class="bm-2-pp">Fotos Listas</p>' +
       '</div>',
   
    //tamaño
    imageWidth: 300,
    imageHeight: 300,
    //cerrar
    padding: '1rem',
    showCloseButton: true,
    showConfirmButton: false,
    background: '#0e0e0e',
    //ajustes
    showCloseButton: true,
    timer: '3000',
    timerProgressBar: true,
    customClass: {
        actions: 'content',
    }
})



//Abrir fotos
let boton = document.querySelector('#boton');
boton.addEventListener('click', function () {
        location.href = "https://drive.google.com/drive/folders/1KibaYoH9TMmnOFrbpbxgWyMBtthhBp2f?usp=share_link"
});



//ventana descargar todo
function modal_08() {
    Swal.fire({
        html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Tamaño de Descarga, <b>3GB De Fotos (JPG Y RAW)</b>, atravez de  mediafire... Archivo rar </p>' +
        //mediafire jpg
        '<a href="https://www.mediafire.com/folder/kkb6i34r2a2fd/jpg" target="_blank"><button class="bt-msj" >Descargar JPG <i class="fa-solid fa-download blu"></i></button></a>'+
        //mediafire Raw
        '<a href="https://www.mediafire.com/folder/hnc6s64ruld5a/raw" target="_blank"><button class="bt-msj" > Descargar RAW <i class="fa-solid fa-download blu"></i></button></a>',
        imageWidth: 400,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        //ajustes
        showCloseButton: true,
        timerProgressBar: true,
        timerProgressBar: true,
})
}



// Foto lhuis ruiz
function modal_05() {
    Swal.fire({
        html: '<h3 class="bm-4" onclick="modal_09();">Black Momets</h3>'+
        '<p class = "bm-2-pp">Fotos al mejor precio.</p>',
        imageUrl: 'https://res.cloudinary.com/lhuis/image/upload/v1666754485/iconos/fkppmxoe9qs9xhggmzcc.png',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',

    })
}

// Foto lhuis ruiz
function modal_11() {
    Swal.fire({
        html: '<div>'+
        '<img class = "img-misfotos" src="img/a.jpg" alt="">'+
    '</div>'+
        '<h3 class="bm-4">Black Momets</h3>'+
        '<p >Fotos al mejor precio.</p>',
        //tamaño
        imageWidth: 300,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',

    })
}


