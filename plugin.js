(function( $ ){

    $.fn.myPlugin = function( options ) {  

    var settings = $.extend( {
        'option1' : 1,
        'option2' : 'string'
    }, options);

    return this.each(function() {        
        // code here!
    });

  };
})( jQuery );