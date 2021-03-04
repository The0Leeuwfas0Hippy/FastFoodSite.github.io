
/*
    Product slider(s) on index page
*/
var index_ProductSlider = document.getElementsByClassName("EachProductOnSlider"),
    index_Slider = document.getElementById("index_Products_Slider");

//Menu buttons on index page
var SeeFullMenu, ContactUs, MakeCustomOrder, 
    index_LoginButton = document.getElementsByClassName("LoginLink"),
    index_RegisterAccountButton = document.getElementsByClassName("RegistrationLink");

//Login and registration forms on LoginRegistration.html
var LoginForm = document.getElementsByClassName("Login"), 
    RegistrationForm = document.getElementsByClassName("Registration");

//MakeCustomOrder form
index_ChooseCustomFood = document.getElementById("index_ChooseCustomFood");

$(function()
            {
                // method for the Product Sliders to Dropdown sequentially one after another 

            }
 );

 /*The code below handles the availing of the correct form(Login/Registration) 
    based on which button(Login || Create Account) was pressed.  

    -If login button is pressed: set 'login' button div class to active and registration form to be inactive
            and if 'login' button div class is active, then set correct form to active
            and set said form to be properly visible 
 */
index_LoginButton.onclick = function()
{
    $(function()
                {
                    //toggle the active class on both the login form and the registration form
                    // index_LoginButton.ClassList.toggle("active");

                    $(LoginForm).css
                                    ({
                                        display: "flex"
                                    });

                    $(RegistrationForm).css
                                    ({
                                        display: "none"
                                    });
                }
     );
}

index_RegisterAccountButton.onclick = function()
{
    $(function()
                {
                    $(RegistrationForm).css
                                          ({
                                              display: "flex"
                                          });

                            $(LoginForm).css
                                          ({
                                              display: "none"
                                          });
                                        
                }
     );
}

/*The Code below handles the Custom Order making
*/
index_ChooseCustomFood.onclick = function()
{
    $(function()
    {
         $(".CustomFoodItems_Container").toggle(1000);
    });
}