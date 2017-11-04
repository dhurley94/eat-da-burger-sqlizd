$("form").submit(function(e) {
    if ($("#burger").val().trim() == '') {
        e.preventDefault();
        $("#burgerForm").effect('bounce', 500);
    } else {
        return;
    }
});