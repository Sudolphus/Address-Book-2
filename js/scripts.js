//business logic
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignID();
  this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(id) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i].id === id) {
      return this.contacts[i];
    }
  }
  alert('Contact Not Found');
}

function Contact(firstName, lastName, telephoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.telephoneNumber = telephoneNumber;
}

addressBook = new AddressBook();

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const firstName = $("input[name=firstName]").val();
    const lastName = $("input[name=lastName]").val();
    const telephoneNumber = $("input[name=telephoneNumber]").val();
    
    if (!firstName || !lastName || !telephoneNumber) {
      alert('Please enter a Name and Number');
      return;
    }

    let newContact = new Contact(firstName, lastName, telephoneNumber);
    addressBook.addContact(newContact);

    $("#contactIDs").append(`<option value="${newContact.id}">${newContact.id}</option>`)
  })
  $("#display").click(function() {
    const contact = addressBook.getContact(parseInt($("#contactIDs").val()));
    
    $("#contactOutput").append(`<p id="contact${contact.id}">Name: ${contact.firstName} ${contact.lastName} Number: ${contact.telephoneNumber}</p>`);
  })
})