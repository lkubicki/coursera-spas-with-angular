(function () {
    'use strict';

    angular.module('public')
        .service('myinfoService', myinfoService);

    function myinfoService() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.favoriteDish = '';

        this.setUserInfo = function (firstName, lastName, email, phone, favoriteDish) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.favoriteDish = favoriteDish;
            this.phone = phone;
        };

        this.getUserInfo = function () {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                favoriteDish: this.favoriteDish,
                phone: this.phone
            };
        }
    }
})();