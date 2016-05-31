angular.module('sampleApp', [])
	.controller('sampleCtrl', function() {
		console.log('Controller created');
		var self = this;
		self.change = function() {
			self.username = 'changed';
			self.password = 'password';
		};
		self.submit = function() {
			alert('User clicked submit with '+'\n' +'Username: '+ self.username + '\n '+'Password: ' + self.password);
		};

	});