// BACK-END LOGIC 
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName}
// FRONT-END LOGIC

$(document).ready(function () {
    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        var firstNameInput = $("input#new-first-name").val();
        var lastNameInput = $("input#new-last-name").val();
        var newContact = new Contact(firstNameInput, lastNameInput);
        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>")
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $(".contact").last().click(function () {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
    });

});

