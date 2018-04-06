var xHRObject = false;
if (window.XMLHttpRequest) {
xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
}


function transferInformation()
{
    var client_name = document.getElementById("c_name").value;
    var client_phone = document.getElementById("c_phone").value
    var client_email = document.getElementById("c_email").value
    
    
    xHRObject.open("GET", "booking.php?id=" + Number(new Date) +"&client_name=" + client_name + "&client_phone=" + client_phone + "&client_email=" + client_email, true);
      xHRObject.onreadystatechange = function() {
           if (xHRObject.readyState == 4 && xHRObject.status == 200)
               document.getElementById("response").innerHTML = xHRObject.responseText;
      }
      xHRObject.send(null); 
    
    alert ("Hello");
    alert (client_name);
    alert (client_phone);
    alert (client_email);
}