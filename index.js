 "use strict";
 function showContent(){
    var template='<h1>Thank You,</h1>'+
       '<p>For attending our conference on Frontend Development.</p>'+
       '<p>Hope all of you found it informative!!!</p>'+
        '<p>We look forward to see you all in future conferences.</p>'+
        '<p>Best Regards,</p>'+
        '<h2>Team UpGrad</h2>';
         document.getElementById('addtemplate').innerHTML+=template;
 }