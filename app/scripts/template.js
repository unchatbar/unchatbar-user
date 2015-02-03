angular.module('unchatbar-user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/unchatbarUser/profile-admin.html',
    "<div class=\"col-xs-12 col-sm-9\" data-ng-init=\"init()\">\n" +
    "  <form>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"profileLabel\">Name</label>\n" +
    "      <input type=\"text\" required=\"true\" class=\"form-control\"\n" +
    "             id=\"profileLabel\" data-ng-model=\"profile.label\" placeholder=\"Enter your name\">\n" +
    "    </div>\n" +
    "    <button type=\"submit\" data-ng-click=\"update()\" class=\"btn btn-default\">Save</button>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('views/unchatbarUser/profile.html',
    "<div data-ng-init=\"init();\" class=\"navbar-brand\">\n" +
    " {{profile.label}}\n" +
    "</div>\n"
  );

}]);
