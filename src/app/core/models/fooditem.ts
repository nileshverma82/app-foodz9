export interface Fooditem {
    id: number;
    title: string; // FormInput
    description: string; // FormInput
    category: string; // FormInput
    isnonveg: boolean; // FormInput
    cuisine: string; // FormInput
    price: number; // FormInput
    serving: number; // FormInput
    imageurl: string; // ImageUpload
    uid: string; // User Auth
    created_at: Date; // System date
  }