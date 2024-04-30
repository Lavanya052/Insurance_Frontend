// userdetails.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'; // Import your AuthService
import { UserDetail, Policy } from '../types/details'; // Import your UserDetail and Policy types
import { distinctUntilChanged, forkJoin } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userDetails: UserDetail[] = [];
  userPolicies: Policy[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Retrieve user ID from local storage after successful login
    const userId = localStorage.getItem('userId');
    
    // Check if user details are already fetched
    if (userId && this.userDetails.length === 0) {
      // Use forkJoin to fetch both user details and user policies simultaneously
      forkJoin([
        this.authService.getUserDetails(userId),
        this.authService.getUserPolicies(userId)
      ]).subscribe(
        ([userData, policyData]) => {
          // Convert single user detail object into an array
          const userDetailsArray = [userData];
          
          // Assign the user details array and user policies to respective arrays
          this.userDetails = userDetailsArray;
          this.userPolicies = policyData;
  
          // Print user details and policies to the console
          console.log('User Details:', this.userDetails);
          console.log('User Policies:', this.userPolicies);
        },
        error => {
          console.log('Error fetching data:', error);
        }
      );
    } else {
      console.log('User ID not found or user details already fetched.');
    }
  }
  
  
  
}
