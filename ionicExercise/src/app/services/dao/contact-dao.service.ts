import { Injectable } from '@angular/core';
import { Contact, TABLE_CONTACT } from 'src/app/entities/contact';
import { getRepository } from 'typeorm';
import { Dao } from '../dao';

@Injectable({
  providedIn: 'root'
})
export class ContactDaoService implements Dao<Contact>{

  constructor() { }

  all(): Promise<Contact[]> {
    return this.repository().find();
  }
  clear() {
    return this.repository().clear();
  }
  delete(params: object) {
    this.repository().delete(params);
  }
  findOne(params: object): Promise<Contact> {
    return this.repository().findOne(params);
  }
  insertOrUpdate(model: Contact) {
    return this.repository().save(model);
  }
  get(params: object): Promise<Contact[]> {
    return this.repository().find(params);
  }
  repository() {
    return getRepository<Contact>(TABLE_CONTACT);
  }
}
