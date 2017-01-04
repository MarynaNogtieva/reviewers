$(function() {


var data, data2;
var selected = $("#select1").selectize({
	delimiter:',',
	
	options: [{id:1, title:'Sam'},{id:2, title:'Alice'}],
	valueField:'id',
	labelField:'title',
	searchField: 'title',
	sortField:'title',
	// onChange: function(value){
	// 	data = value;
	// }
	
});
var selectedApprovers = $("#select2").selectize({
	delimiter:',',
	
	options: [{id:93, title:'Bill'},{id:21, title:'Julie'},{id:23, title:'Alex'}],
	valueField:'id',
	labelField:'title',
	searchField: 'title',
	sortField:'title',
	// onChange: function(value){
	// 	data = value;
	// }
	
});

selected;
selectedApprovers;
var selectizeReviewers =selected[0].selectize;
var selectizeApprovers = selectedApprovers[0].selectize;
//data = $("#select1").data("selected",selected );
data=selected[0].selectize.options;
data2=selectedApprovers[0].selectize.options;
// var selectedNumber = $.map(data,function(value,index){
// 		return [value];
// 	})	
var arrSelectedRevievers=[];
var arrSelectedApprovers=[];
selectizeReviewers.on('change',function(){
	var current=selectizeReviewers.getValue();
	for(var i =0; i < current.length; i++){
		arrSelectedRevievers[i] = selectizeReviewers.options[ current[i] ];
	}
  
	//mydata = selectize.options[ current ];
 })

selectizeApprovers.on('change',function(){
	//data2=selectizeApprovers.getValue();
	var current=selectizeApprovers.getValue();
	for(var i =0; i < current.length; i++){
		arrSelectedApprovers[i] = selectizeApprovers.options[ current[i] ];
	}
	
})



$("#btnSendForReview").on('click',function(){
if(arrSelectedRevievers.length == 0 && arrSelectedApprovers.length ==0 ){
	alert("you must select either approver or reviewer");
}
else if(arrSelectedRevievers.length >0 && arrSelectedApprovers.length ==0){
  if(document.getElementById("messageForRevivers").value==""){
  	alert("please write a message for reviewer(s)");
  }
}
else if( arrSelectedApprovers.length > 0 &&  arrSelectedRevievers.length ==0){
  if(document.getElementById("messageForApprovers").value==""){
  	alert("please write a message for approver(s)");
  }
}
else if( arrSelectedApprovers.length > 0 &&  arrSelectedRevievers.length > 0){
	if(document.getElementById("messageForApprovers").value=="" || document.getElementById("messageForRevivers").value==""){
  	alert("please write a message for approver(s) and reviewer(s)");
  }
}
  //alert(selectedNumber);
  else{
    

  	  console.log(arrSelectedRevievers,arrSelectedApprovers);
  }


 });
  });
