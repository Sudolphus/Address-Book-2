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
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  }
  alert('Contact Not Found');
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        delete this.contacts[i];
        break;
      }
    }
  }
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

    $("#contactIDs").append(`<option value="${newContact.id}" id="select${newContact.id}">${newContact.id}</option>`)
  })
  $("#display").click(function() {
    const contact = addressBook.getContact(parseInt($("#contactIDs").val()));
    
    $("#contactOutput").append(`<li class="contact contact${contact.id}">Name: ${contact.firstName} ${contact.lastName} Number: ${contact.telephoneNumber}</li>`);
  })
  $("#delete").click(function() {
    const id = parseInt($("#contactIDs").val());

    addressBook.deleteContact(id);
    $(`.contact${id}`).remove();
    $(`#select${id}`).remove();
  })
  $("#hide").click(function() {
    $("#contactOutput").empty();
  })
})