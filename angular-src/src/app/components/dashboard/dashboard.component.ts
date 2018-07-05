import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }



  onSubmit() {
    const user = {
      data:this.data
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('Your status is updated', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/Dashboard']);
        
      } else {
        this.flashMessage.show('Failed to update your status', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/Dashboard']);
      }
    });

}
 }
