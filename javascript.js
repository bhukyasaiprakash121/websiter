let arr2=[0,0,0,0,0,0,0,0,0,0];
/*document.getElementById("tableno").value;*/
var count=10;
function ok(){ 
    var x = document.getElementById("tableno").value;
    console. log(x);
    if(x<=10){

     
    if(arr2[x-1]==1){
        document.getElementById("alert").innerHTML="Table is not available";
    }
    else{
        arr2[x-1]=1;
        count--;
        document.getElementById("alert").innerHTML="Table Booked Successfully";
        document.getElementById("nooftables").innerHTML="no of tables empty:"+count;
        
        let arr=[0,0,0,0,0,0,0,0,0,0];
        var j=0;
        for(var i=0;i<arr2.length;i++){
            
            if(arr2[i]!=1){
               
               arr[j]=i+1;
               j++;
            } 

        }
        document.getElementById("tablesavailable").innerHTML="Tables Available :"+arr;
        setTimeout(gohome,1800);
        
        

    }
}
else{
    document.getElementById("alert").innerHTML="Table is not available";
}
}
//pages-1
function call(){
    document.getElementsByClassName("call").style.background= "red";
}
/*page-2*/
function time(){
    setTimeout(waiter, 10);

}

function waiter(){
    document.getElementById("h3").innerHTML="Waiter is Coming";
    setTimeout(waiter1, 180000);
}
function waiter1(){
    document.getElementById("h3").innerHTML="Waiter is arrived";
    setTimeout(waiter2, 1000);
}
function waiter2(){
    document.getElementById("h3").innerHTML="Call Waiter";
}
function gohome()
{
window.location.href="page1.html"
}