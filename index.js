
'use strict';
var cheerio = require('cheerio');
var _ = require('underscore');
var multiline = require('multiline');

var fs = require('fs-extra');

var template = _.template(multiline(function() {
  /*
     <a href="" rel="grouped" title="<%= title %>" target="_self" class="fancybox-md" target-id="fancybox-md-data-<%= index %>">
       <%= title %>
     </a>
     <div style="display:none" id="fancybox-md-data-<%= index %>">
       <div class="markdown-section code" style="color: #718c00">
        <%= content %>
       </div>
     </div>
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
      'jquery.fancybox-buttons.css',
      'hide-content.css'
    ]
  },
  hooks: {
    page: async function(page) {

      var me = this;
      var $ = cheerio.load(page.content);
      var { rawPath } = page;

      // since it's only available for hyper links
      await $('a').each(function(index, aEl) {
        if (aEl.attribs.href.indexOf(TO_SEEK) > -1){
          var baseLink = aEl.attribs.href;
          var targetLink = baseLink.replace(TO_SEEK, '');
          var $aEl = $(this)
          $aEl.addClass('fancybox-md');

          var basePath = rawPath.substring(0, rawPath.lastIndexOf('/') + 1);
          var absoluteFileName = basePath + targetLink;

          $aEl.attr("href", ``);
          $aEl.attr("target-id", `fancybox-md-data-${index}`);
          var mdContent = fs.readFileSync(absoluteFileName, 'utf-8');

          me.renderBlock('markdown', mdContent)
            .then((data) => {
              $aEl.replaceWith(template({
                index,
                title: $aEl.html(),
                content: data
              }));
            });
        }
      });

      page.content = $.html();

      return page;
    }
  }
};
