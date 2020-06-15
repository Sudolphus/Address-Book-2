//business logic
function AddressBook() {
  this.contacts = [];
}

addressBook = new AddressBook();

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const firstName = $("input[name=firstName]").val();
    const lastName = $("input[name=lastName]").val();
    const telephoneNumber = $("input[name=telephoneNumber]").val();
    alert(firstName);
    alert(lastName);
    alert(telephoneNumber);
  })
})