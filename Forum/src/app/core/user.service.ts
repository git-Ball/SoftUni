import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  isLogged = false;

  constructor(private storage: StorageService) {
    this.isLogged = this.storage.getItem('isLogged');
  }

  login(): void {
    this.isLogged = true;
    console.log('Logged In')

    this.storage.setItem('isLogged', true);
  }

  logout(): void {
    this.isLogged = false;
    console.log('Logged out')
    this.storage.setItem('isLogged', false);
  }
}
