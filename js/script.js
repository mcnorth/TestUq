

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
        
    
    
    //var div = $('<div class="bgSquareDisplay"><div class="col-md-3" id="left"></div><div class="col-md-9" id="right"></div></div>');
    //$("#display").append(div).trigger("create");
    
    //var nameHeading = $('<h2>'+nme+'</h2'>);
    //$("#right").append(nameHeading).trigger("create");
    
    $("#profileName").append(nme).trigger("create");
    $("#profilePosition").append(pos).trigger("create");
    $("#profileEmail").append(email).trigger("create");
    $("#profileBio").append(bio).trigger("create");
    
    $(".bgSquareDisplay").show();
    
        
    //create json object from js obj
    //var jsonObj = JSON.stringify(user);
    
    //send json obj to php function
    /*$.ajax ({
        type: "POST",
        data: jsonObj,
        url: "saveJson.php",
        success: function(data) {
            console.log("done")
        },
        error: function(){
            console.log("not done")
        }
    })*/
    
    
}

function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profilePic')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }