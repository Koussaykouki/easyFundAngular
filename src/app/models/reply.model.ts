export interface Reply {
    id: number; // Unique identifier for the reply
    message: string; // The content of the reply
    createdAt: Date; // Timestamp indicating when the reply was created
    // You can add more fields as needed, such as author information, etc.
  }