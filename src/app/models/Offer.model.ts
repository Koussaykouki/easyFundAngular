export interface Offer {
    offreId: number;
    offerDescription: string;
    offerLink: string;
    offerPrice: number;
    offerImage: string;
    offerStatus: OfferStatus;
    offerCategory?: OfferCategory;
    
  }
  
  export enum OfferStatus {
    // Define your enum values here, for example:
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    PENDING = "PENDING",
  }
  
  export enum OfferCategory {
    // Define your enum values here, for example:
    ELECTRONICS = "TECH",
    CLOTHING = "CLOTHING",
    HOME_APPLIANCES = "HOME_APPLIANCES",
    // Add more categories as needed
  }