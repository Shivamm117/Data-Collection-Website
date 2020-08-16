
function display(){
   var storedarray = JSON.parse(localStorage.getItem('array'))
    var container=document.getElementById('n')
    
    var lists=document.createElement('ul')
    lists.className="sasta";
    for(var i=0;i<storedarray.length; i++){
        var list = document.createElement('li')
        var t = document.createTextNode(storedarray[i]);
         list.appendChild(t)
         lists.appendChild(list)  
    }
    container.appendChild(lists)
    }
    
    window.onload=display()