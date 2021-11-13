$(document).ready(function(){
	const goToURL = function(url){
		  location.href = url;
	}
  $("#submit").click(function(e){
  	e.preventDefault();
  	let name = $('#name').val();
  	let email = $('#email').val();
  	let requirement = $('#requirement').val();
  	if(name === '' || email === ''){
  		alert('please provide name and email');
  	} else{
  		let url = `https://wa.me/918275219250?text=Name : ${name}%0aEmail: ${email}%0aI am looking for ${requirement}`
  		let whatsAppLink = url.replace(/ /g, '%20');
	  	goToURL(whatsAppLink);  		
		}
  });
});