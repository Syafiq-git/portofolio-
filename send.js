document.getElementById('sendMessageBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah form dikirim secara default

    // Ambil data dari form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Susun URL mailto
    var mailtoLink = 'mailto:syafiqbamazruk@gmail.com?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent('Name: ' + name + '%0AEmail: ' + email + '%0AMessage: ' + message);

    // Arahkan ke mailto link
    window.location.href = mailtoLink;
});