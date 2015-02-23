angular.module('unchatbar-user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/unchatbarUser/profile-admin.html',
    "<div class=\"col-xs-12 col-sm-9\" data-ng-init=\"init()\">\n" +
    "    <form>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"profileLabel\">Name</label>\n" +
    "            <input type=\"text\" required=\"true\" onchange=\"handleFileSelect(event)\" class=\"form-control\"\n" +
    "                   id=\"profileLabel\" data-ng-model=\"profile.label\" placeholder=\"Enter your name\">\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <span class=\"btn btn-default btn-file\">\n" +
    "                <input accept=\"image/*\" type=\"file\" file-model=\"newImage\"/>\n" +
    "                <img ng-src=\"{{profile.image}}\" data-ng-show=\"profile.image\"/>\n" +
    "                <icon-identicon code=\"abcd\" size=\"200\" data-ng-show=\"!profile.image\"></icon-identicon>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"cropArea\" ng-show=\"newImage\">\n" +
    "            <img-crop result-image-size=\"80\" result-image-format=\"image/jpeg\" image=\"newImage\"\n" +
    "                      result-image=\"profile.image\"></img-crop>\n" +
    "        </div>\n" +
    "        <div></div>\n" +
    "        <button type=\"submit\" data-ng-click=\"update()\" class=\"btn btn-default\">Save</button>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('views/unchatbarUser/profile.html',
    "<div data-ng-init=\"init();\" class=\"navbar-brand\">\n" +
    " {{profile.label}}\n" +
    "\n" +
    "</div>\n"
  );

}]);
