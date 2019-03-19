import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../model/contact';
import { CONTACTS } from 'src/app/mock-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = CONTACTS;
  selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

  onSelect(contact: Contact){
    this.selectedContact = contact;
    console.log(contact);
  }

  onDelete(contactIndex: number)
  {
    this.contacts.splice(contactIndex,1);
  }


}
