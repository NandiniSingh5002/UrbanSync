$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // Toggle contact form visibility
    $('#toggleContactForm').click(function () {
        $('#contactForm').toggleClass('active');
    });
});