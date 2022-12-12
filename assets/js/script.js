
$(document).ready(function(){
    const toggleBtnOne = $('.password-element .eye-icon');
    const toggleBtnTwo = $('.confirm-password-element .eye-icon');
    const passwordElemOne = $('.password-element .password');
    const passwordElemTwo = $('.confirm-password-element .password');

    toggleBtnOne.click(() => togglePasswordVisibility(toggleBtnOne, passwordElemOne));
    toggleBtnTwo.click(() => togglePasswordVisibility(toggleBtnTwo, passwordElemTwo));

    function togglePasswordVisibility(toggleBtn, passwordElem){
        const type = passwordElem.attr('type') === "password" ? "text" : "password";
        passwordElem.attr('type', type);
        if(type == "text") toggleBtn.html('<i class="fa-solid fa-eye"></i>');
        else toggleBtn.html('<i class="fa-solid fa-eye-slash"></i>');
    }

    // file upload
    $("#upload-btn").click(function(){
        $("#upload-input").trigger('click');
    });

    $("#upload-input").change(event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            $('.upload-file-name').text(file.name);
        }
    });

    // change active tab 
    let navTabs = $('.sc-bookings .nav-tabs .nav-item');
    jQuery.each(navTabs, function(idx, navTab){
        $(navTab).click(function(){
            resetNavTabs();
            $(navTab).addClass('nav-item-active');
        });
    });

    const resetNavTabs = () => {
        jQuery.each(navTabs, function(idx, navTab){
            $(navTab).removeClass('nav-item-active');
        });
    }
});