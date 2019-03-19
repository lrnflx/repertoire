import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
  { path: "", component: ContactComponent},
  { path: "contact/edit/:id", component : ContactEditComponent }
]

@NgModule({
  declarations: [ContactDetailComponent, ContactEditComponent, ContactComponent],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
    FormsModule , 
    ReactiveFormsModule
  ]
})
export class ContactModule { }
