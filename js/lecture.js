
var showall = document.getElementById('showall');
showall.style.display = 'none'


function exercises(obj) {

var bob = document.getElementsByTagName('div');


var exercises = document.getElementById('exercises');
exercises.style.display = 'none';
var summary = document.getElementById('summary');
summary.style.display = 'block';

var showall = document.getElementById('showall');
showall.style.display = 'block'



for (var i=0;i<bob.length;i++) {

	if (bob[i].getAttribute('class') != null) {

	if (bob[i].getAttribute('class') == "contblock") {
	
	var id = bob[i].id;
	
	if (id.match(/^Exercise|Exercise$|^Homework$/) == null) {
	
	bob[i].style.display = 'none';
	
	} else {bob[i].style.display = 'block';}}}
	
	


}


}




function summary(obj) {

var bob = document.getElementsByTagName('div');

var exercises = document.getElementById('exercises');
exercises.style.display = 'block';
var summary = document.getElementById('summary');
summary.style.display = 'none';

var showall = document.getElementById('showall');
showall.style.display = 'block'


for (var i=0;i<bob.length;i++) {

	if (bob[i].getAttribute('class') != null) {

	if (bob[i].getAttribute('class') == "contblock") {
	
	var id = bob[i].id;
	
	if (id.match(/^Exercise|Exercise$|^Homework$/) != null) {
	
	bob[i].style.display = 'none';
	
	} else {bob[i].style.display = 'block';}
	}}
	
	


}


}




function showall(obj) {

var bob = document.getElementsByTagName('div');

var exercises = document.getElementById('exercises');
exercises.style.display = 'block';
var summary = document.getElementById('summary');
summary.style.display = 'block';

var showall = document.getElementById('showall');
showall.style.display = 'none'

for (var i=0;i<bob.length;i++) {

	if (bob[i].getAttribute('class') != null) {

	if (bob[i].getAttribute('class') == "contblock") {
	
	var id = bob[i].id;
	
	
	
		
	bob[i].style.display = 'block';
	}}
	
	


}


}


function projector(obj) {
 var content = document.getElementById('content');

 content.style.width = "95%";
 var nav = document.getElementById('leftsidebar');
 nav.style.display = 'none';
 //var nav = document.getElementById('navlist');
 //nav.style.width = "100%';
 // var head = document.getElementById('headertop');
 //head.style.width = "100%';
 var submenu = document.getElementById('submenu');
 submenu.style.display = 'none';
 

}
