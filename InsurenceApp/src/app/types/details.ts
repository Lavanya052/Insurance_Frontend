// user-detail.model.ts
export interface UserDetail {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  policyId: number;
  policy: Policy;
}

export interface Policy {
  policyId: number;
  policyNumber: string;
  policyType: string;
  insuranceCompany: string;
  startDate: Date;
  endDate: Date;
  premiumAmount: number;
}

export class PaymentDetail {
  paymentDetailId: number = 0
  cardOwnerName: string = ""
  cardNumber: string = ""
  securityCode: string = ""
  expirationDate: string = ""
}