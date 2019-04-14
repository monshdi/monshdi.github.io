window.addEventListener('DOMContentLoaded', () => {
    let mobMnuBtn = document.querySelector('.mnu_mbtn'),
        burg = document.querySelector('.btn-mob'),
        mobMnu = document.querySelector('.mobile_menu');

        mobMnuBtn.addEventListener('click', () => {
            mobMnu.classList.toggle('active_mmnu');
            burg.classList.toggle('active');
            burg.classList.toggle('not-active');

            if (mobMnu.classList.contains('active_mmnu')){
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = '';
            }
        });

})