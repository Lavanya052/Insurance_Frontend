import { Component, OnInit } from '@angular/core';
import { Policy } from '../types/details';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent  implements OnInit {
  policies: Policy[]=[];

  constructor(private policyService: AuthService) { }

  ngOnInit(): void {
    this.fetchPolicies();
  }

  fetchPolicies(): void {
    this.policyService.getPolicies()
      .subscribe(policies => this.policies = policies);
  }

  formatDate(date: Date): string {
    // Adjust the date format as needed
    return new Date(date).toLocaleDateString('en-IN');
  }
  
  formatCurrency(amount: number): string {
    // Adjust currency formatting as needed
    return '₹ ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
}
