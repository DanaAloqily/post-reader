export class Post { //because were using typscript we have to type our data
  id: number;
  title: string;
  body: string;
  votes: number;

  constructor() {
    this.id = 1;
    this.title = "";
    this.body = "";
    this.votes = 1;
  }
}
