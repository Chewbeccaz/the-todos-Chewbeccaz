import { useState } from "react";
import { Book } from "../models/Book";
import { ShowBooks } from "./ShowBooks";
import { AddBook } from "./AddBook";

export const BookApp = () => {
  const hardCodedBooks = [
    new Book(1, "Iron Flame", "Rebecca Yarros", false),
    new Book(2, "A Court of thorns and roses", "Sarah J. Maas", false),
    new Book(3, "Too Late", "Colleen Hoover", false),
    new Book(4, "A Court of Mist and Fury", "Sarah J. Maas", false),
    new Book(5, "A Court of Wings and Ruin", "Sarah J. Maas", false),
    new Book(6, "A Court of Frost and Starlight", "Sarah J. Maas", false),
    new Book(7, "A Court of Silver Flames", "Sarah J. Maas", false),
    new Book(8, "Boktjuven", "Markus Zusak", false),
    new Book(9, "Confess", "Colleen Hoover", false),
    new Book(10, "Layla", "Colleen Hoover", false),
    new Book(11, "Wish You Were Here", "Jodi Picoult", false),
    new Book(12, "Slammed", "Colleen Hoover", false),
  ];

  const [books, setBooks] = useState<Book[]>(
    JSON.parse(
      localStorage.getItem("listStorage") || JSON.stringify(hardCodedBooks)
    )
  );

  const handleCheckBox = (id: number) => {
    setBooks(
      [...books].map((book) =>
        book.id === id ? { ...book, isChecked: !book.isChecked } : book
      )
    );
  };

  const handleDelete = (id: number) => {
    setBooks([...books].filter((book) => book.id !== id));
  };

  const handleAddBook = (addedTitle: string, addedAuthor: string) => {
    setBooks([
      ...books,
      new Book(books.length + 1, addedTitle, addedAuthor, false),
    ]);
    console.log(books);

    localStorage.setItem(
      "listStorage",
      JSON.stringify([
        ...books,
        new Book(books.length + 1, addedTitle, addedAuthor, false),
      ])
    );
  };

  return (
    <>
      <h1>To Be Read</h1>
      <AddBook addBook={handleAddBook} />
      <ShowBooks
        bookList={books}
        handleCheckbox={handleCheckBox}
        handleDelete={handleDelete}
      />
    </>
  );
};

{
  /*IMORGON: Kolla upp buggen med bakgrunden som flyttar sig
- Fixa stylingen på inputsen.
-Sortera listan.  
- Lägg till ChangeBook-funktionen
-Fixa validering om tid finnes. med GetStorage??*/
}
