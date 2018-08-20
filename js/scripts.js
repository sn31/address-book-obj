// BACK-END LOGIC 
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}

Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName
}
// FRONT-END LOGIC

$(document).ready(function () {
    $("#add-address").click(function () {
        $("#new-addresses").append('<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-state">State</label>' +
            '<input type="text" class="form-control new-state">' +
            '</div>' +
            '</div>');
    });
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

