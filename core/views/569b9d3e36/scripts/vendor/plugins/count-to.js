/**
* counter
*
* http://stackoverflow.com/questions/2540277/jquery-counter-to-count-up-to-a-target-number 
*
*/
function ozy_formatNumber (num, sep) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + sep)
}
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,loopCount = 0,value = options.from,interval = setInterval(updateTimer, options.refreshInterval);
            function updateTimer() {
                value += increment;loopCount++;
				if(options.sign != '' && options.signpos == 'right') {$(_this).html(value.toFixed(options.decimals) + options.sign);}else if(options.sign != '' && options.signpos == 'left') {$(_this).html(options.sign + value.toFixed(options.decimals));}else{$(_this).html(ozy_formatNumber(value.toFixed(options.decimals), ","));}
                if (typeof(options.onUpdate) == 'function') {options.onUpdate.call(_this, value);}
                if (loopCount >= loops) {clearInterval(interval);value = options.to;if (typeof(options.onComplete) == 'function') {options.onComplete.call(_this, value);}}
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
		sign: '',  // the sign
		signpos: 'right', //sign position, left and right available
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);