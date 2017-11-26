$(document).ready(function () {
    
    $("#createProfBtn").click(function(e) {
        CreateProfile();
        
    });
    
    $(".bgSquareDisplay").hide();
    
});

function CreateProfile()
{
    //get users input and put in js object
    nme = $("#name").val(),
    pos = $("#position").val(),
    email = $("#email").val(),
    bio = $("#biography").val(),
     
    //dynamically add user input to the display card
    $("#profileName").append(nme).trigger("create");
    $("#profilePosition").append(pos).trigger("create");
    $("#profileEmail").append(email).trigger("create");
    $("#profileBio").append(bio).trigger("create");
    
    $(".bgSquareDisplay").show();
   
}

//upload pic from user directory and display on card
function readURL(input) 
{
    if (input.files && input.files[0]) 
    {
        var reader = new FileReader();
        reader.onload = function (e) 
        {
            $('#profilePic').attr('src', e.target.result);        
                        
        };
        
        reader.readAsDataURL(input.files[0]);            
    }
            
}