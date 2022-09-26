import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  dataService: ContactService;

  constructor(private contactService: ContactService) { 
    this.dataService = contactService;

  }

  ngOnInit(): void {
    this.contacts = this.dataService.contacts;
  }

}
