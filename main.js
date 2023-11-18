function total(){
    var sub1 = eval(document.getElementById("eng").value)
    var sub2 = eval(document.getElementById("math").value)
    var sub3 = eval(document.getElementById("bio").value)
    var sub4 = eval(document.getElementById("chem").value)
    var sub5 = eval(document.getElementById("phy").value)
    var name = document.getElementById('name').value
    


    if(sub1 > 100 || sub2 >100 || sub3 > 100 || sub4 >100 || sub5 >100){
        
        alert("please Enter mark in range of 100");
    }

     //else{
    //     var total = sub1 + sub2 + sub3 + sub4 + sub5;
    //     document.getElementById("total").innerHTML = " <br> English marks :" + sub1 + 
    //     " <br> Mathmatics marks :" + sub2 +
    //     " <br> Biology marks :" + sub3 + 
    //     " <br> Chemistry marks : " + sub4 + " <br> physics marks : " + sub5 +
    //      " <br>   <hr> Total marks : " + total;



    // }

    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML =     " <br> The total scores of " +" <br>" + name +":"+ total;
    }



}

    function average(){
        var sub1 = eval(document.getElementById("eng").value)
        var sub2 = eval(document.getElementById("math").value)
        var sub3 = eval(document.getElementById("bio").value)
        var sub4 = eval(document.getElementById("chem").value)
        var sub5 = eval(document.getElementById("phy").value)
        var name = document.getElementById('name').value

        


    

    if(sub1 > 100 || sub2 >100 || sub3 > 100 || sub4 >100 || sub5 >100){
        alert("please Enter mark in range of 100");
    }


    else{
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var ave = total/5;
    document.getElementById("average").innerHTML = " <br> your average marks is : " + ave +" <br>" + name;


    }
}



    function grade(){
        var sub1 = eval(document.getElementById("eng").value)
        var sub2 = eval(document.getElementById("math").value)
        var sub3 = eval(document.getElementById("bio").value)
        var sub4 = eval(document.getElementById("chem").value)
        var sub5 = eval(document.getElementById("phy").value)

        if(sub1 > 100 || sub2 >100 || sub3 > 100 || sub4 >100 || sub5 >100){
            alert("please Enter mark in range of 100");

            
        }

        else{
         var total = sub1 + sub2 + sub3 + sub4 + sub5;
         var ave = total/5;

        }


        if(ave >= 70 && ave <= 100){
            document.getElementById("grade").innerHTML = "your grade is A" + 
            " <br> congratualations you <br> are going well";

        }

        

        else if(ave >= 60 && ave <= 69){
            document.getElementById("grade").innerHTML = " your grade is B" + " <br> GOOd performances, <br> keep it up.....   " 

        }

        else if(ave >= 50 && ave <= 59){
            document.getElementById("grade").innerHTML = " your grade is C" + " <br> fair  result, Try to improve in <br> coding because education na scam "


        }

        else if(ave >= 40 && ave <= 49){
            document.getElementById("grade").innerHTML = " your grade is D" + " <br> you will have to re-run <br> these courses "

        }

        else{
            document.getElementById("grade").innerHTML = " your grade is F" + 
            " <br> omo iya make i no lie you <br> education no be you way"

        }






    }

    var name = Document.getElementById("name").innerHTML = studentname



    


    


    

