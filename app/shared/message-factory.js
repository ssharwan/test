/**
* Message factory to display toastr notifications.
* @author: [Rajesh Soni]
*/

define(['MainModule', 'toastr'], function(app, toastr) {
	"use strict";

	app.factory('MessageFactory', function() {
		toastr.options = {
			closeButton: true,
			newestOnTop: true,
			progressBar: true,
			debug: false,
			positionClass: 'toast-top-right',
			onclick: null,
			showDuration: 1000,
			hideDuration: 1000,
			timeOut: 5000,
			extendedTimeOut: 1000,
			showEasing: 'swing',
			hideEasing: 'linear',
			showMethod: 'fadeIn',
			hideMethod: 'fadeOut'
		};

		return toastr;
	});
});