export interface IPicture {
  sort(arg0: (a: any, b: any) => number);
  id:number;
  name:string;
  author:string;
  like:number;
  imgPath:string;
  description:string;
  isSold:boolean;
}