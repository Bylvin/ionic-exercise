import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Contact } from 'src/app/entities/contact';
import {
  createConnection,
  ConnectionOptions,
  getConnection,
  Connection
} from 'typeorm';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private platform: Platform) { }

  async ready() {
    try {
      await getConnection();
    } catch (e) {
      console.log('Connection not established!', e);
      await this.createConnection();
    }
  }

  private createConnection() {
    let dbOptions: ConnectionOptions;
    if (this.platform.is('cordova') || this.platform.is('capacitor') ||
      this.platform.is('android')) {
      dbOptions = {
        type: 'cordova',
        database: '__maindb',
        location: 'default'
      };
    } else {
      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true
      };
    }
    Object.assign(dbOptions, {
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [
      Contact
    ]
    });
    return createConnection(dbOptions);
  }
}
