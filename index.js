'use strict';
var cheerio = require('cheerio');
var _ = require('underscore');
var multiline = require('multiline');

var template = _.template(multiline(function() {
  /*
     <a href="<%= url %>" rel="grouped" title="<%= title %>" target="_self" class="fancybox-md">
       <!--<img src="<%= url %>" alt="<%= title %>"></img>-->
     </a>
   */
}));

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

      $('.fancybox-md').each(function(index, mdContent) {
        var $mdContent = $(mdContent);
        $mdContent.replaceWith(template({
          content: $mdContent.attr('href'),
          title: $mdContent.attr('title')
        }));
      });

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
