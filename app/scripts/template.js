angular.module('unchatbar-user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/unchatbarUser/profile-admin.html',
    "<div role=\"menu\" class=\"un-profile-admin with-arrow\" data-ng-init=\"init();\" data-ng-show=\"profile.id\">\n" +
    "    <div class=\"menu-header \">\n" +
    "        <span class=\"\" translate>User settings</span>\n" +
    "    </div>\n" +
    "    <div class=\"divider mar-no\"></div>\n" +
    "    <div class=\"menu-content\">\n" +
    "        <form class=\"ng-pristine ng-valid\">\n" +
    "            <div class=\"form-group\">\n" +
    "                  <div>\n" +
    "                      <input class=\"fileUpload\" accept=\"image/*\" type=\"file\" file-model=\"newImage\"/>\n" +
    "                      <img class=\"img-circle img-user\" ng-src=\"{{profile.image}}\"/>\n" +
    "                  </div>\n" +
    "                  <div class=\"cropArea\" data-ng-if=\"newImage\">\n" +
    "                    <img-crop result-image-size=\"80\" result-image-format=\"image/jpeg\" image=\"newImage\"\n" +
    "                              result-image=\"profile.image\"></img-crop>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"display-name\" translate>Display name</label>\n" +
    "                <input type=\"text\" placeholder=\"{{'Enter display name' | translate}}\" id=\"display-name\"\n" +
    "                       data-ng-model=\"profile.label\"\n" +
    "                       class=\"form-control\" required=\"true\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"user-description\" translate>short description</label>\n" +
    "                <input type=\"text\" data-ng-model=\"profile.description\"\n" +
    "                       placeholder=\"{{'a short description' | translate}}\"\n" +
    "                       id=\"user-description\"\n" +
    "                       class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"user-name\" translate>User name</label>\n" +
    "                <input type=\"text\" data-ng-model=\"profile.id\" id=\"user-name\" class=\"form-control\"\n" +
    "                       readonly=\"true\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"password\" translate>Password</label>\n" +
    "                <input type=\"text\" value=\"0123456789abcdef\" data-ng-model=\"pass\"\n" +
    "                       id=\"password\" class=\"form-control\" readonly=\"true\">\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"divider mar-no\"></div>\n" +
    "    <div class=\"menu-footer\">\n" +
    "        <div>\n" +
    "            <button class=\"btn btn-sm btn-success btn-labeled pull-right fa fa-save icon-lg\"\n" +
    "                    data-ng-click=\"update();newImage='';\" translate>\n" +
    "                Save\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('views/unchatbarUser/profile.html',
    "<div class=\"un-profile\" data-ng-init=\"init();\">\n" +
    "    <div data-ng-show=\"profile.id\">\n" +
    "        <span class=\"hidden-xs text-user\">{{profile.id}}</span>\n" +
    "        <img alt=\"Profile Picture\" data-ng-src=\"{{profile.image}}\" class=\"img-circle img-user\">\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
