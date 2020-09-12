import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: "app-verificar-email",
  templateUrl: "./verificar-email.page.html",
  styleUrls: ["./verificar-email.page.scss"],
})
export class VerificarEmailPage implements OnInit {
  user$:Observable<User>= this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) {}

  ngOnInit() {}
 async onEnviemail():Promise<void>{
   try{
    await this.authSvc.sendVerifcationEmail();

    }catch(error){
      console.log('Error->',error);
      
    }
  }
  ngOnDestroy():void {
    this.authSvc.logout();
  }
}
