function myForm1(event){
    event.preventDefault(); 
    var myUsername = document.getElementById("userName1").value;
    var mypassword = document.getElementById("passwd01").value;
    var myProfession = document.getElementById("profession01").value;
    var selectedgenders = document.querySelector("input[name='genders']:checked").value;
    var myobject = {myUsername,mypassword,myProfession,selectedgenders};
    var myarray = [];

    myarray.push(myobject);
    console.log(myarray);
    
    localStorage.setItem("umarData",JSON.stringify(myarray));
    }