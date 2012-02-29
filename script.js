( function( $ ) {
    $(document).ready(function() {

        $('#div1').MyPlugin('option1 as string');

        $('#div2').MyPlugin({
            option1: 'something',
            option2: 2.7
        });

    });
})( jQuery );