import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private authSvc: AuthService, private router:Router) {}

  ngOnInit() {}
  //La declaración de función async define una función asíncrona, la cual devuelve un objeto
  async onLogin(email, password) {
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if(user){
        
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }

    }catch(error){
      console.log('Error->', error);
      
    }
  }
  async onLoginGoogle(){
    try{
      //const = el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar.
      const user = await this.authSvc.loginGoogle();
      if (user){
        //Todo: CheckEmail
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        
      }
    }catch(error){
      console.log('Error->', error);
      
    }

  }

 private  redirectUser(isVerified:boolean): void{
    if(isVerified){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['verificar-email']);
      
    }
   
    
  }
}
