var apiKey = require('./../.env').apiKey;
var User= function(username){
	this.username=username;
};

User.prototype.getID= function(displayFunction){
	$.get('https://api.github.com/users/' + this.username + '?access_token=' + apiKey).then(function(response){
		var userID= response.id;
		displayFunction(userID);
	}).fail(function(error) {
    $('.showInfo').text(error.responseJSON.message);
  });
};

User.prototype.getIDnoAPI= function(displayFunction){
	$.get('https://api.github.com/users/' + this.username).then(function(response){
		var userID= response.id;
		displayFunction(userID);
	}).fail(function(error) {
    $('.showInfo').text(error.responseJSON.message);
  });
};

User.prototype.getrepName= function(displayFunction){
	$.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + apiKey).then(function(response){
		var projectArray= response;
		for (var i =0; i<projectArray.length;i++){
			var creationDate = (projectArray[i].created_at);
			displayFunction((projectArray[i].name), (moment(creationDate).format('LLL')));
		}
	}).fail(function(error) {
    $('.showInfo').text(error.responseJSON.message);
  });
};

exports.userModule=User;