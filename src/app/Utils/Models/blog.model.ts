export interface Blog {
  id: number;
  date: string;          // e.g. 'June 22nd, 2021'
  author: string;        // e.g. 'By Jane Doe'
  title: string;
  excerpt: string;       // short description for the card
  content: string;       // full article text
  imageUrl: string;
}
