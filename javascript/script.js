var same = $('#emailHeader').clone();
var other= $ ('#otherHeader').clone();
var headClone = $("#head").clone();
var nameHeader = $('#nameHeader').clone();
var name_check = false;
var email_check = false;
var food_check = false;
$('#other').hide();
sizeCheck();
formCheck();

//Reveals a text input when "Other is selected
$('#drop').change(function(){
  opt = $(this).val();
  if(opt=="7"){
    $('#other').show();
    $('#foodHeader').removeClass();
    optionCheck();
  }else{
    $('#other').hide();
    $('#foodHeader').addClass('success');
    food_check = true;
    formCheck();
  }
});

//Validations
  //Name
$('#name').change(function(){
  field = $(this).val()
  if (field.length > 0){
    $('#nameHeader').addClass('success');
    name_check = true;
    formCheck();
  } else if(field.length === 0){
    $('#nameHeader').removeClass('success');
    name_check = false;
    formCheck();
  }

});
  //Email
$('#email').change(function(){
  field = $(this).val();
  console.log(field.length);
  if(field.length < 1){
    $("#emailHeader").html(same);
    email_check = false;
    formCheck();}else if ((field.indexOf("@") === -1) || !(field.indexOf(".") > field.indexOf("@")) ){
    $('#emailHeader').html('<label class="error px=1" for="email" id="emailHeader">Your Email appears to be invalid</label>');
    email_check = false;
    formCheck();
  }else{
    $("#emailHeader").html('<label class=" px=1" for="email" id="emailHeader">Email</label>');
    $('#emailHeader').addClass('success');
    email_check = true;
    formCheck();
  }

});

  //Other Text Input
function optionCheck(){
  $('#other_input').change(function(){
    onions = $(this).val().toUpperCase()
    if(onions.length === 0){

    }else if (onions.indexOf("ONION") === -1){
      $('#otherHeader').html('<p class="error px=1">Please select something from the list</p>');
    } else if (onions.indexOf("ONION") >= 0) {
        $('#otherHeader').html('<p class="success px=1">We haven\'t heard of that. It sounds delicious!</p>');
        $('#foodHeader').addClass('success');

      food_check = true;
      formCheck();
    } else{
      $('#otherHeader').html(other);
    }
  })
}
  //Name validation
$().change(function()
{})

//submit validation
function formCheck(){
  if(name_check === true && email_check === true && food_check === true){
    $('#submit').removeClass('disabled').
    prop('disabled', false);
  } else{
    $('#submit').addClass('disabled')
      .prop('disabled', true);
  }
}

//End of validations

//Resize Reconfiguring
function sizeCheck(){
$( window ).resize(function() {
  if($(window).width() < 481)
      {$("#subhead").hide();
        $("#head").html(  '<h1 class="display-2 text-white bold" id="head">Hey! Potlucks! Alright!</h1>')
      } else {
        $("#subhead").show();
        $("#head").html(headClone);
      }
  });
}
