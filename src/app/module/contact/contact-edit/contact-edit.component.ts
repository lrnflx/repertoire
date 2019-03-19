import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../model/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTACTS } from 'src/app/mock-contacts';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contacts: Contact[] = CONTACTS;
  selectedContactId = this.route.snapshot.paramMap.get('id');
  contactForm: FormGroup;
  constructor(private route: ActivatedRoute,
            private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    if(this.selectedContactId !== null){
      let contact = this.contacts.find((el) => {
        if(el.id === this.selectedContactId)
        {
          return true;
        }
      });
    this.contactForm = this.formBuilder.group({
      firstName: [contact.firstName, Validators.required],
      lastName: [contact.lastName, Validators.required],
      email: [contact.email, [Validators.required, Validators.email]],
      phone: [contact.phone, Validators.required],
      adress: [contact.adress, Validators.required]
    });
  }
}

onSubmit()
{
  console.log(this.contactForm.value);
}

}
