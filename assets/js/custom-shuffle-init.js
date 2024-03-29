
var ImageDemo = (function($, imagesLoaded) {

    var $projectsContainer = $('.list-items-container'),
        $imgs = $projectsContainer.find('img'),
        imgLoad,

        init = function() {
            imgLoad = new imagesLoaded($imgs.get());
            imgLoad.on('always', onAllImagesFinished);
        },

        onAllImagesFinished = function(instance) {

            $projectsContainer.addClass('images-loaded');

            $projectsContainer.shuffle({
                itemSelector: '.list-item',
                delimeter: ' '
            });

        };

    return {
        init: init
    };

}( jQuery, window.imagesLoaded ));

$(document).ready(function() {
    ImageDemo.init();
});