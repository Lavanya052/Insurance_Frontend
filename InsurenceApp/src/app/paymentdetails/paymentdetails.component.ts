import { Component } from '@angular/core';
import { PaymentDetail } from '../types/details';
import { PaymentDetailService } from '../service/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrl: './paymentdetails.component.css'
})
export class PaymentdetailsComponent {
  constructor(public service: PaymentDetailService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deletePaymentDetail(id)
        .subscribe({
          next: res => {
            this.service.list = res as PaymentDetail[]
            this.toastr.error('Deleted successfully', 'Payment Detail Register')
          },
          error: err => { console.log(err) }
        })
  }



}
