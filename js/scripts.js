// BACK-END LOGIC 
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// FRONT-END LOGIC

$(document).ready(function () {
    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        var firstNameInput = $("input#new-first-name").val();
        var lastNameInput = $("input#new-last-name").val();
        var newContact = new Contact(firstNameInput, lastNameInput);
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>")
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    });
});

