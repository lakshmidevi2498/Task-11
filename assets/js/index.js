
$(document).ready(function(){
   
    $("#btnn").click( function(){
        validation();
    });
        
    
});
function validation()
{


    var re1=abc1();
         if(re1=="T")
         { 
           var re2=abc2(re1);
            if(re2=="TE")
            {  var re3=  abc3(re2);
                
                if(re3=="TEC")
                {
                    var re4=abc4(re3);
                    if(re4=="TECH")
                    {
                        var re5=abc5(re4);
                        if(re5=="TECHN")
                        {
                            var re6=abc6(re5);
                            if(re6=="TECHNI")
                            {
                                var re7=abc7(re6);
                                if(re7=="TECHNIQ")
                                {
                                    var  re8=abc8(re7);
                                    if(re8=="TECHNIQU")
                                    {
                                        var re9=abc9(re8);
                                        if(re9=="TECHNIQUE")
                                        {
                                            $("#modall").show();
                                        }
                                    }
                                    else
                                    {
                                        $("#error9").html( "");
                                    }
                                }
                                else
                                {
                                    $("#error8").html( "");
                                    $("#fstate").css("border" ,"1px solid lightgrey");

                                    $("#error9").html( "");
                                }
                            }
                            else
                            {
                                $("#error7").html( "");

                                $("#error8").html( "");
                                $("#fstate").css("border" ,"1px solid lightgrey");

                                $("#error9").html( "");
                            }
                        }
                        else
                        {
                            $("#error6").html( "");
                            $("#fcity").css("border" ,"1px solid lightgrey"); 

                            $("#error7").html( "");

                            $("#error8").html( "");
                            $("#fstate").css("border" ,"1px solid lightgrey");

                            $("#error9").html( "");
                        }
                    }
                    else
                    {
                        $("#error5").html( "");
                        $("#pnumber").css("border" ,"1px solid lightgrey");

                        $("#error6").html( "");
                        $("#fcity").css("border" ,"1px solid lightgrey");

                        $("#error7").html( "");

                        $("#error8").html( "");
                        $("#fstate").css("border" ,"1px solid lightgrey");

                        $("#error9").html( "");
                    }
                }
                else
                {    
                    $("#error4").html( "");
                    $("#cpassword").css("border" ,"1px solid lightgrey"); 

                    $("#error5").html( "");
                    $("#pnumber").css("border" ,"1px solid lightgrey");

                    $("#error6").html( "");
                    $("#fcity").css("border" ,"1px solid lightgrey"); 

                    $("#error7").html( "");

                    $("#error8").html( "");
                    $("#fstate").css("border" ,"1px solid lightgreyk");

                    $("#error9").html( "");
                }
            }
            else{
                $("#error3").html( "");
                $("#password").css("border" ,"1px solid lightgrey"); 

                $("#error4").html( "");
                $("#cpassword").css("border" ,"1px solid lightgrey");

                $("#error5").html( "");
                $("#pnumber").css("border" ,"1px solid lightgrey");

                $("#error6").html( "");
                $("#fcity").css("border" ,"1px solid lightgrey"); 

                $("#error7").html( "");

                $("#error8").html( "");
                $("#fstate").css("border" ,"1px solid lightgrey");

                $("#error9").html( "");
            }
        }
        else
        {
           
            $("#error2").html( "");
            $("#femail").css("border" ,"1px solid lightgrey")  ;

            $("#error3").html( "");
            $("#password").css("border" ,"1px solid lightgrey");

            $("#error4").html( "");
            $("#cpassword").css("border" ,"1px solid lightgrey");

            $("#error5").html( "");
            $("#pnumber").css("border" ,"1px solid lightgrey");

            $("#error6").html( "");
            $("#fcity").css("border" ,"1px solid lightgrey");

            $("#error7").html( "");
            
            $("#error8").html( "");
            $("#fstate").css("border" ,"1px solid lightgrey");
            $("#error9").html( "");
                      
       }
    
}

         // name validation

 function abc1() {
    var a = ""; 

    let name = $("#fname").val(); 

    if (name === "") {
        $("#fname").css("border", "2px solid red");
        $("#error1").text("please enter your name");
    } 
    else
     {
        if (name.length > 2) 
        {
            $("#error1").text("");

            if (name.charAt(0) >= 'A' && name.charAt(0) <= 'Z') 
            {
                $("#error1").text("");

                let validf = true;
                for (let i = 0; i < name.length; i++) 
                {
                    if (name.charAt(i) >= '0' && name.charAt(i) <= '9') 
                    {
                        validf = false;
                    }
                }
                if (validf == false)
                 {
                    $("#fname").css("border", "2px solid red");
                    $("#error1").text("please enter only letters");
                } else
                {
                    $("#error1").text("");
                    $("#fname").css("border", "2px solid green");
                    a = a + "T"; 
                }
            }
            else 
            {
                $("#fname").css("border", "2px solid red");
                $("#error1").text("First letter must be capital");
            }
        } 
        else 
        {
            $("#fname").css("border", "2px solid red");
            $("#error1").text("name contain atleast 3 letters");
        }
       

        console.log("name", a);
    }
    return a;
}




           
        // Email start

  function abc2(re1)
  {
    var email=$("#femail").val();
   
    let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email === "") {
        $("#error2").html( "<p>*please enter Email </p>");
        $("#femail").css("border" ,"2px solid red")  ;
      
    }
    else
     {
        if ((!email.match(mailformat))) 
        { 
            $("#error2").html( "<p>*please enter a valid Email </p>");
            $("#femail").css("border","2px solid red")  ;
      
          
        }
        else 
        {
            $("#error2").html( "");
            $("#femail").css("border" ,"2px solid green")  ; 
            var re1 = re1 + "E";
            console.log("email",re1);
            
        }

        
    } return re1;
  }


       // password start
  function abc3(re2)
  {  
           var password = $("#password").val();
           var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
           
            if (password === "") 
            {
                $("#error3").text( "please enter password ");
                $("#password").css("border","2px solid red")  ;
             
            }
            else 
            {
                if (!(password.match(passwordformat))) {

                    $("#error3").text( "Please enter a valid password it contains at least one digit, one lowercase, one uppercase, one special character and minimum length 8 ");
                    $("#password").css("border","2px solid red")  ;
                }
                else {
                    $("#error3").text( "");
                    $("#password").css("border","2px solid green")  ;
                    var re2=re2 + "C";
                    console.log("password",re2);
                }
                
            } return re2; 
}    


//confirm password validation start
function abc4(re3)
{
        var cpassword = $("#cpassword").val();
        var password = $("#password").val();
       
        if (cpassword === "") {
            $("#error4").text( "please enter confirm password ");
            $("#cpassword").css("border","2px solid red")  ;
           
        }
        else {
            if (cpassword != password) {
                $("#error4").text( "password does not match  ");
                $("#cpassword").css("border","2px solid red")  ;
                

            } else {
                $("#error4").text( " ");
                $("#cpassword").css("border","2px solid green")  ;
                var re3=re3 + "H";
                console.log("cpassword",re3);
            }

               } return re3;
}
 

      //   Phone number

function abc5(re4) 
{ 
  
    var num = $("#pnumber").val();
    if (num === "") {
        $("#error5").html("<p>*please enter  phone number</p>");
        $("#pnumber").css("border","2px solid red");
        
    }
    else 
    {
        if (num.length === 13) 
        {

            if (num.charAt(0) == '+' && num.charAt(1) == '9' && num.charAt(2) == '1') 
            {

                $("#error5").html("");


                let validf = true;
                for (let i = 0; i < num.length; i++) {
                    if ((num.charAt(i) >= 'a' && num.charAt(i) <= 'z') || (num.charAt(i) >= 'A' && num.charAt(i) <= 'Z')) {
                        validf = false;
                    }
                }
                if (validf == false) {
                    $("#error5").html("<p>*please enter only numbers</p>");
                    $("#pnumber").css("border","2px solid red")
                }
                else 
                {

                    $("#error5").html("");
                    $("#pnumber").css("border","2px solid green")
                    var re4=re4+ "N";
                  
                    
                }
            }
            else
            {
                $("#error5").html("please enter country code +91 befre mobile number");
            }
        }
        else
        {
            if (num.length > 13 || num.length < 13) 
            {
                $("#error5").html("<p>*please enter '+91'and 10 digit mobile number and mobile should start with 6,7,8,9,.</p>");
                $("#pnumber").css("border","2px solid red")
            }
            else
           {
                $("#error5").html("");
                 $("#pnumber").css("border","2px solid green")
                
                 var re4=re4+ "N";
                 console.log("number",re4);
            }

        }
        $("#pnumber").html("");
    }return re4;  
}


    // city validation

function abc6(re5)
{
    if ($("#fcity").val() == "") 
    {

        $("#error6").text("please choose the city")
       $("#fcity").css("border", "2px solid red");

    } else {
       
        $("#error6").text("")
       $("#fcity").css("border", "2px solid green");
        var re5=re5 + "I";
        console.log("city",re5);
    }return re5;
}
 

       // gender validation

function abc7(re6)
{
    let data2 = $("#male").prop("checked");
    let data3 = $("#female").prop("checked");
    let data4 = $("#others").prop("checked");
    if (!(data2 || data3 || data4)) {
        $("#error7").html("<p>*please choose the gender</p>");
       
        
       
    } else {
        $("#error7").html("");
       var re6 = re6 + "Q";
       console.log("gender",re6);
    }return re6;
}


//  state validation

function abc8(re7)
{
    if ($("#fstate").val() == "") 
    {

        $("#error8").text("please choose the state")
       $("#fstate").css("border", "2px solid red");

    } else {
       
        $("#error8").text("")
       $("#fstate").css("border", "2px solid green");
        var re7=re7 + "U";
        console.log("state",re7);
    }return re7;
}

  // checkbox validation


function abc9(re8)
 {
    let data5 = $("#check").prop("checked");
    if (!data5) 
    {
        $("#error9").text("Please check the box");
    } else 
    {
        $("#error9").text("");
        re8 = re8 + "E";
        console.log("check", re8);
    }
    return re8;
}