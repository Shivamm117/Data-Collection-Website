
import {array} from './data.js'
function myfunction(){
    var inputValue=document.getElementById('myInput').value
    if(localStorage.getItem('array')){
        var storedarray = JSON.parse(localStorage.array)
        storedarray.push(inputValue)
        localStorage.setItem('array',JSON.stringify(storedarray))
    }
    else{
        array.push(inputvalue)
        localStorage.setItem('array',JSON.stringify(array))
    }
    
    document.getElementById('myInput').value=""
}
document.querySelector('#hello').addEventListener('click', myfunction)


