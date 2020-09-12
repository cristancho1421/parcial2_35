import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-olvido-password",
  templateUrl: "./olvido-password.page.html",
  styleUrls: ["./olvido-password.page.scss"],
})
export class OlvidoPasswordPage implements OnInit {
  constructor(private authSvc:AuthService, private router:Router) {}

  ngOnInit() {}
 async onResetPassword(email) {
    try{
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);


    }catch (error){
      console.log('Error->', error);
      
    }
  }
}
