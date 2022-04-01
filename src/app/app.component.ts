import { Component } from '@angular/core';
import { User } from './models/user';
import { ProfileService } from './services/auth/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!:User | null;

  title = 'examen-alimentos';

  constructor(private profileService: ProfileService) {
    profileService.userLogin.subscribe((user: User) => {
      this.user = user;
    });
    profileService.logOut.subscribe((flag: boolean) => {
      this.user = null;
    });
  }
}
