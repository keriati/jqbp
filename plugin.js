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

            if ( typeof options === 'string' ) {
                self.options.option1 = options;
            } else {
                self.options = $.extend( {}, $.fn.MyPlugin.options, options );
            }

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
        });
    };

    $.fn.MyPlugin.options = {
        option1: 'option',
        option2: 3.14
    };

})(jQuery, window, document);