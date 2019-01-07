$(document).ready(function () {

    $('form').on('submit', function () {
        var item = $('form input');
        var todo = {
            item: item.val()
        };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function (data) {
                location.reload();
            }
        });
        return false;
    });


    $('li').on('click', function () {
        var itemId = $(this).attr('id');
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + itemId,
            success: function (data) {
                location.reload();
            }
        });
    });

});