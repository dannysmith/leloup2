// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

/* Pinterest */
/* returns pinit link wrapped in a hidden div */
$PinItURL = $(location).attr('href');
function getPinItBtnHTML($media, $description){
    $HTML = '<div class="pinit-wrapper" style="position:absolute;display:none;z-index:9999;cursor:pointer;"><a href="http://pinterest.com/pin/create/button/?url='+$PinItURL+'&media='+$media+'&description='+$description+'" class="pin-it-button" count-layout="none">Pin It</a></div>';
    return $HTML;
}