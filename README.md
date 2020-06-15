# _Address Book_

#### _An Address Book, 6.15.2020_

#### By _**Micheal Hansen**_

## Description

_An address book that enables the adding and deleting of contacts._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Program creates and initializes an Address Book object** | User input: "" | Output: "Address Book()" |
| **Program Gathers User Input (First name, Last name, and phone number)** | User input: "John, Doe, 555-5555" | Output: "John, Doe, 555-5555" |
| **Program Rejects Empty Input** | User input: "" | Output: "Error" |
| **Program creates a Contacts object** | User input: "John, Doe, 555-5555" | Output: "Contact(John, Doe, 555-5555)" |
| **Program assigns unique ID to each contacts object** | User input: "Contact(John, Doe, 555-5555)" | Output: "Contact(John, Doe, 555-5555, 12)" |
| **Program adds Contacts object to Address Book array** | User input: "Contact(John, Doe, 555-5555, 12)" | Output: "Address Book.Contact(John, Doe, 555-5555, 12)" |
| **Program displays Contacts object** | User input: "Contact(John, Doe, 555-5555, 12)" | Output: "John Doe 555-5555" |
| **Program can delete Contacts** | User input: " Delete Contact(12)" | Output: "" |


## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/Sudolphus/Address-Book-2`
2. Navigate into the `address-book-2` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`


## Known Bugs

_None currently known_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_

### License

MIT License.

Copyright (c) 2020 **_Micheal Hansen_**
