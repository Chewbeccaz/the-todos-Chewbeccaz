import { useState } from "react";
import { Book } from "../models/Book";
import { ShowBooks } from "./ShowBooks";
import { AddBook } from "./AddBook";
import { v4 as uuidv4 } from "uuid";

export const BookApp = () => {
  const hardCodedBooks = [
    new Book(uuidv4(), "Iron Flame", "Rebecca Yarros", false),
    new Book(uuidv4(), "A Court of thorns and roses", "Sarah J. Maas", false),
    new Book(uuidv4(), "Too Late", "Colleen Hoover", false),
    new Book(uuidv4(), "A Court of Mist and Fury", "Sarah J. Maas", false),
    new Book(uuidv4(), "A Court of Wings and Ruin", "Sarah J. Maas", false),
    new Book(
      uuidv4(),
      "A Court of Frost and Starlight",
      "Sarah J. Maas",
      false
    ),
    new Book(uuidv4(), "A Court of Silver Flames", "Sarah J. Maas", false),
    new Book(uuidv4(), "Boktjuven", "Markus Zusak", false),
    new Book(uuidv4(), "Wish You Were Here", "Jodi Picoult", false),
    new Book(uuidv4(), "Slammed", "Colleen Hoover", false),
  ];

  const [books, setBooks] = useState<Book[]>(
    JSON.parse(
      localStorage.getItem("listStorage") || JSON.stringify(hardCodedBooks)
    )
  );

  const handleCheckBox = (id: string) => {
    setBooks(
      [...books].map((book) =>
        book.id === id ? { ...book, isChecked: !book.isChecked } : book
      )
    );
  };

  const handleDelete = (id: string) => {
    setBooks([...books].filter((book) => book.id !== id));
  };

  const handleAddBook = (addedTitle: string, addedAuthor: string) => {
    const newId = uuidv4();
    const newBook = new Book(newId, addedTitle, addedAuthor, false);
    setBooks([...books, newBook]);
    console.log(books);

    localStorage.setItem("listStorage", JSON.stringify([...books, newBook]));
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
