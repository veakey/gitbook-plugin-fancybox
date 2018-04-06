'use strict';
var cheerio = require('cheerio');
var _ = require('underscore');
var multiline = require('multiline');

var template = _.template(multiline(function() {
    /*
       <a href="<%= url %>" rel="grouped" title="<%= title %>" target="_self" class="fancybox-md">
         <!--<img src="<%= url %>" alt="<%= title %>"></img>-->
         <!-- _blank -->
         <%= title %>
       </a>
     */
}));

var TO_SEEK = "!_fancybox-md";

module.exports = {
    book: {
        assets: './assets',
        js: [
            'jquery.min.js',
            'jquery.mousewheel.pack.js',
            'jquery.fancybox.pack.js',
            'jquery.fancybox-buttons.js',
            'plugin.js'
        ],
        css: [
            'jquery.fancybox.css',
            'jquery.fancybox-buttons.css'
        ]
    },
    hooks: {
        page: function(page) {

            var $ = cheerio.load(page.content);

            // since it's only available for hyper links
            $('a').each(function(index, aEl) {
                //if (page.title === 'Functions') {
                if (aEl.attribs.href.indexOf(TO_SEEK) > -1){
                    console.log('YEAH ----', aEl);
                    const $aEl = $(aEl);
                    $aEl.addClass('fancybox-md');
                    $aEl.attr("href", aEl.attribs.href.replace(TO_SEEK, ''));

                    $aEl.replaceWith(template({
                        url: $aEl.attr('src'),
                        title: $aEl.html()
                    }));
                }


                //}


            });

            /*$('.fancybox-md').each(function(index, mdContent) {
              var $mdContent = $(mdContent);
              $mdContent.replaceWith(template({
                content: $mdContent.attr('href'),
                title: $mdContent.attr('title')
              }));
            });*/

            /*$('img').each(function(index, img) {
              var $img = $(img);
              $img.replaceWith(template({
                url: $img.attr('src'),
                title: $img.attr('alt')
              }));
            });*/

            page.content = $.html();

            return page;
        }
    }
};
