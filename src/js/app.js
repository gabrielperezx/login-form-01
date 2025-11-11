(function () {
    /*----- ----- ----- ----- -----
	# Funciones
	----- ----- ----- ----- -----*/

    const PopUpInfo = () => {
        const checkPopUp = document.getElementById('PaginaInicio');
        if (document.body.contains(checkPopUp)) {
            Swal.fire({
                imageUrl: 'https://asistescolar.com/cae/images/plantel/30/pw/extra1.jpg',
                imageAlt: 'Logo colegio',
                showConfirmButton: false,
                showCloseButton: true,
            });
        }
    };

    /*----- ----- ----- ----- -----
	# Declaraciones
	----- ----- ----- ----- -----*/

    window.addEventListener('load', () => {
        PopUpInfo();
    });
})();
