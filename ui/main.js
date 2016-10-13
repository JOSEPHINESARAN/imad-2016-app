// counter code
var button = document.getElementById('counter');
button.onclick = function (){
    
 // Creat a request object
 var request = new XMLHttpRequest;

// Capture the response and store it in a variable
request.onreadystatechange = function (){
if (request.readyState === XMLHttpRequest.DONE) {
//Take some action
if (request.status === 200){
//capture a list of names and render it as a list
var obj = request.responseText;
var names = JSON.parse(obj);
var list = '';
for (var i=0; i list +=');

' + names[i] + '
'};

var ul = document.getElementById('namelist');
ul.innerHTML = list};
};
// Not done yet
};
 
 
 
 
 
 // Make the request
request.open('GET', 'http://josephinesaran.imad.hasura-app.io/counter', true);
request.send(null);
 };

// Submit name
var submit = document.getElementById('submit.btn');
submit.onclick = function(){
    
          // Creat a request object
     var request = new XMLHttpRequest;
     
      // Capture the response and store it in a variable
     request.onreadystatechange = function(){
           if (request.readystate === XMLHttpRequest.DONE);{
          //Take some action
          if (request.status === 200){
      //capture a list of names and render it as a list
        var names = request.responseText;
        names = JSON.parse(names);
        var list = '';
        for (var i=0; i<names.length; i++) {
            list += '<li>' + names[i] + '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTMl = list; 
          }
      }
       // Not done yet  
     };
 //Make the request
 var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET', 'http://josephinesaran.imad.hasura-app.io/submit-name?name=' + name , true);
request.send(null);  
  };
