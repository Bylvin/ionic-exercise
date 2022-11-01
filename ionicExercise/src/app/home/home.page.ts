import { Component } from '@angular/core';
import { Contact } from '../entities/contact';
import { ContactDaoService } from '../services/dao/contact-dao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private contactDao: ContactDaoService) {}

  async ionViewDidEnter()
  {
  }
}
