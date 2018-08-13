 $(function () {
    $("#condaianllkhir").click(function () {
        var seconds = 5;
        $("#CountDown").show();
		$("#condaianllkhir").hide();
        $("#DrRO").html(seconds);
        setInterval(function () {
            seconds--;
            $("#DrRO").html(seconds);
            if (seconds == 0) {
                $("#CountDown").hide();
                window.location = "http://www.condaianllkhir.com/";
            }
        }, 1000);
    });
});
