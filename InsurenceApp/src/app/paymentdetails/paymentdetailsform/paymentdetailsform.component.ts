import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../types/details';
import { PaymentDetailService } from '../../service/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paymentdetailsform',
  templateUrl: './paymentdetailsform.component.html',
  styleUrl: './paymentdetailsform.component.css'
})
export class PaymentdetailsformComponent {
  
  constructor(public service: PaymentDetailService, private toastr: ToastrService) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.paymentDetailId == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }

  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[]
          this.service.resetForm(form)
          this.toastr.success('Inserted successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[]
          this.service.resetForm(form)
          this.toastr.info('Updated successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
   }

}
