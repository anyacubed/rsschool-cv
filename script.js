$(document).ready(function() {
    $('.burger').click(function() {
        $(this).toggleClass('active')
        $('ul .navbar-item').slideToggle('fast');
    })
});
