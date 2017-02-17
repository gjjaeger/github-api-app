var User = require('./../js/user.js').userModule;

var displayID= function(id){
	$('.showInfo').text("This account has the following ID associated with it: " + id);
	$('#username').val("");
};
displayrepName= function(repName,repDate){
	$('#colName').append("<li>" + repName + "</li>");
	$('#colDate').append("<li>" + repDate + "</li>");
	$('#username').val("");
	$('#datatable').css("display","block");
};

$(document).ready(function(){
	$('.buttn').on('click',function(){
		var username=$('#username').val();
		var newuser= new User(username);
		$('#colName').empty();
		$('#colDate').empty();
		$('.showInfo').empty();
		$('#datatable').hide();
		switch (this.id){
			case "user_Name":
				newuser.getIDnoAPI(displayID);//removenoAPI to get the normal call with the API key.
				break;
			case "creation_Date":
				newuser.getrepName(displayrepName);
				break;
			default:
				break;
		}
	});
});