$(document).ready(function(){
    $('#search').submit(function () {
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize()
        }).done(function() {
            alert("Search results was sent to mail");
        });
        return false;
    });
});
