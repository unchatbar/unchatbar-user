angular.module('unchatbar-user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/unchatbarUser/profile-admin.html',
    "<div role=\"menu\" class=\"un-profile-admin \" data-ng-init=\"init();\" data-ng-show=\"profile.id\">\n" +
    "    <form data-ng-submit=\"update();profileAdmin.$setPristine();newImage='';\" name=\"profileAdmin\">\n" +
    "        <div class=\"profile-admin-group\">\n" +
    "            <div class=\"upload\">\n" +
    "                <input class=\"fileUpload\" data-ng-click=\"profileAdmin.$dirty = true;\" accept=\"image/*\" type=\"file\"\n" +
    "                       file-model=\"newImage\"/>\n" +
    "                <img class=\"img-circle\" ng-src=\"{{profile.image}}\"/>\n" +
    "            </div>\n" +
    "            <div class=\"cropArea\" data-ng-if=\"newImage\">\n" +
    "                <img-crop result-image-size=\"80\" result-image-format=\"image/jpeg\" image=\"newImage\"\n" +
    "                          result-image=\"profile.image\"></img-crop>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"profile-admin-group\">\n" +
    "            <label for=\"display-name\" translate>Display name</label>\n" +
    "            <input type=\"text\" placeholder=\"{{'Enter display name' | translate}}\" id=\"display-name\"\n" +
    "                   data-ng-model=\"profile.label\" required=\"true\">\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"profile-admin-group\">\n" +
    "            <label for=\"user-description\" translate>short description</label>\n" +
    "            <input type=\"text\" data-ng-model=\"profile.description\"\n" +
    "                   placeholder=\"{{'a short description' | translate}}\"\n" +
    "                   id=\"user-description\">\n" +
    "        </div>\n" +
    "        <div class=\"profile-admin-group\">\n" +
    "            <label for=\"user-name\" translate>User name</label>\n" +
    "            <input type=\"text\" data-ng-model=\"profile.id\" id=\"user-name\" readonly=\"true\">\n" +
    "        </div>\n" +
    "        <div class=\"profile-admin-group\">\n" +
    "            <label for=\"password\" translate>Password</label>\n" +
    "            <input type=\"text\" value=\"0123456789abcdef\" data-ng-model=\"pass\"\n" +
    "                   id=\"password\" readonly=\"true\">\n" +
    "        </div>\n" +
    "        <button class=\"\"\n" +
    "                data-ng-disabled=\"!profileAdmin.$dirty\"\n" +
    "                data-ng-click=\"update();profileAdmin.$setPristine();newImage='';\" translate>\n" +
    "            Save\n" +
    "        </button>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('views/unchatbarUser/profile.html',
    "<div class=\"un-profile\" data-ng-init=\"init();\">\n" +
    "    <div data-ng-show=\"profile.id\">\n" +
    "        <span class=\"text-user\">{{profile.id}}</span>\n" +
    "        <img alt=\"Profile Picture\" data-ng-src=\"{{profile.image}}\">\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
