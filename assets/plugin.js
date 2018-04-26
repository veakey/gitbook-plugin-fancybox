require([
    'gitbook'
], function(gitbook) {
    gitbook.events.on('start', function(e, config) {
        $('.fancybox-md').fancybox($.extend({
          'loop': false,
        	'beforeLoad' : function() {
            var $el = $(this)[0].element;
            var targetId = $el.attr('target-id');
            this.content = $(`#${targetId}`).html();
  					this.title = (this.index + 1) + '/' + this.group.length + (this.title ? ' - ' + this.title : '');
  				}
        }, config.fancybox));
    });
});
