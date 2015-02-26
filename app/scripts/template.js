angular.module('unchatbar-user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/unchatbarUser/profile-admin.html',
    "<div class=\"col-xs-12 col-sm-9\" data-ng-init=\"init();\">\n" +
    "    <div data-ng-show=\"profile.id\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <span class=\"btn btn-file\">\n" +
    "                        <input accept=\"image/*\" type=\"file\" file-model=\"newImage\"/>\n" +
    "                        <span ng-show=\"profile.image\">\n" +
    "                            <img class=\"profile-image\" ng-src=\"{{profile.image}}\"/>\n" +
    "                        </span>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-10\" >\n" +
    "                    <div class=\"cropArea\" data-ng-if=\"newImage\">\n" +
    "                        <img-crop  result-image-size=\"80\" result-image-format=\"image/jpeg\" image=\"newImage\"\n" +
    "                                  result-image=\"profile.image\"></img-crop>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"profileLabel\">Name</label>\n" +
    "            <input type=\"text\" required=\"true\" class=\"form-control\"\n" +
    "                   id=\"profileLabel\" data-ng-model=\"profile.label\" placeholder=\"Enter your name\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"profileLabel\">phone-number</label>\n" +
    "            <input type=\"text\" required=\"true\" readonly=\"true\" onchange=\"handleFileSelect(event)\" class=\"form-control\"\n" +
    "                   id=\"profileLabel\" data-ng-model=\"profile.id\" placeholder=\"Enter your name\">\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <hr>\n" +
    "        <button type=\"submit\" data-ng-click=\"update();newImage='';\" class=\"btn btn-default\">Save</button>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/unchatbarUser/profile.html',
    "<div data-ng-init=\"init();\">\n" +
    "    <div data-ng-show=\"profile.id\">\n" +
    "        <img class=\"profile-image\" data-ng-src=\"{{profile.image}}\" data-ng-show=\"profile.image\"/>\n" +
    "        {{profile.id}}\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
