if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {

    var Plugin = {
        init: function ( options, elem ) {
            var self = this;
            self.elem = elem;
            self.$elem = $( elem );

            // Maybe the option can be only a string:
            self.options.option1 = ( typeof options === 'string' )
                ? options
                : options.option1;

            self.options = $.extend( {}, $.fn.MyPlugin.options, options );

            self.controller();
        },

        controller: function() {
            // Go on!
        }
    }

    $.fn.MyPlugin = function ( options ) {
        return this.each(function () {

            var plugin = Object.create( Plugin );
            plugin.init( options, this );

            // Make the instance available
            $.data( this, 'MyPlugin', plugin );

        });
    };

    $.fn.MyPlugin.options = {
        option1: 'option',
        option2: 3.14
    };

})(jQuery, window, document);