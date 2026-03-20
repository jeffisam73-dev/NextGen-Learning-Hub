import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './forgot.html',
  styleUrl: './forgot.css',
})
export class ForgotComponent {}
