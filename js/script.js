/****************************************************
loading
****************************************************/
$(function () {
    function loading() {
        $(".loading").fadeOut(600);
    }
    setTimeout(loading,2500);
});

/****************************************************
button
****************************************************/
$(function () {
    $(".btn").click(function () {
        $(this).toggleClass("change");
        $("nav").toggleClass("click");
    });
});


/****************************************************
modal
****************************************************/
$(function () {
    $("section>div>div a").click(function () {
        var contents = $($(this).attr("href")).html();

        $("body").append('<div id="modal"></div>');
        $("#modal").append('<div class="box"></div>');
        $("#modal").append('<div class="closeMark"><span></span><span></span></div>');
        $(".box").append(contents);

        $("#modal").hide();
        $("#modal").fadeIn();

        $(".closeMark").click(function () {
            $("#modal").fadeOut(function () {
                $(this).remove();
            });
        });
    });
});