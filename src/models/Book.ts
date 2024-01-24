export class Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public isChecked: boolean = false
  ) {}
}
