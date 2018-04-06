require([
    'gitbook'
], function(gitbook) {
    gitbook.events.on('start', function(e, config) {
        /*$('.fancybox-md').fancybox({

        }, config.fancybox);*/
        //$('.fancybox-md').unbind('click');
        $('.fancybox-md').on('click', function(e){
            e.preventDefault();
            //alert("asdfasdf");
            const $me = $(this);
            $(this).fancybox($.extend({
                'loop': false,
                'afterLoad' : function() {
                    console.log(this);
                    //this.type = 'iframe';

                    const me = this;

                    $.get($me.attr('href'), function(content){
                        /*me.renderBlock('markdown', content)
                        .then(function (data) {
                            //return format(data, title)
                            me.content = data;
                        });*/
                        me.content = content;
                    })



                    //this.content = 'asdfasdf';

                }
            },config.fancybox));
            //$('#myModal').modal('show').find('.modal-body').load($(this).attr('href'));
        });
        /*$('.fancybox-md').fancybox($.extend({
                'loop': false,
            	'afterLoad' : function() {
                    this.content="asdfasdf";
					//this.title = (this.index + 1) + '/' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
        },config.fancybox));*/
    });
});