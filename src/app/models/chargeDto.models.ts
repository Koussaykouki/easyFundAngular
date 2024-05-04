export interface StripeChargeDto {
    stripeToken: string;
    username: string;
    amount: number;
    success: boolean;
    message: string;
    chargeId: string;
    additionalInfo: AdditionalInfo[];
  }
  export interface AdditionalInfo {
    additionalProp1: any;
    additionalProp2: any;
    additionalProp3: any;
  }