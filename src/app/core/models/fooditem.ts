// export class Fooditem {
//     id: number;
//     title: string; // FormInput
//     description: string; // FormInput
//     category: string; // FormInput
//     isnonveg: boolean; // FormInput
//     cuisine: string; // FormInput
//     price: number; // FormInput
//     serving: number; // FormInput
//     imageurl1: string; // ImageUpload
//     imageurl2: string;
//     imageurl3: string;
//     imageurl4: string;
//     uid: string; // User Auth
//     created_at = new Date(); // System date

//       constructor(private url: string)
//       {
//         this.imageurl1 = url;
//       }
//   }

export interface Fooditem {
  id: number;
  title: string; // FormInput
  description: string; // FormInput
  category: string; // FormInput
  isnonveg: boolean; // FormInput
  cuisine: string; // FormInput
  price: number; // FormInput
  serving: number; // FormInput
  imageurl1: string; // ImageUpload
  uid: string; // User Auth
  created_at: Date; // System date
}
