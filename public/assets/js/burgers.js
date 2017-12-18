// click handlers
$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#createBurger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger added");
                location.reload();
            }
        );
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var eatBurger = $(this).data("devoured");

        var eatBurger = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatBurger
        }).then(
            function() {
                console.log("burger" + id + "has been devoured");
                location.reload();
            }
        );
    });
});
