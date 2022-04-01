import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private user!: User | null;
  userLogin: EventEmitter<User> = new EventEmitter<User>();
  logOut: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  setUser(user: User) {
    this.user = user;
    this.userLogin.emit(user);
  }

  getUser(): User | null {
    return this.user;
  }

  logout() {
    this.user = null;
    this.logOut.emit(true);
  }
  
}
