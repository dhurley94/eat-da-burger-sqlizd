$("form").submit(function(e) {
    if ($("#burger").val().trim() == '') {
        e.preventDefault();
    } else {
        return;
    }
});