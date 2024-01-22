import { useState } from "react";
import { Book } from "../models/Book";
import { ShowBooks } from "./ShowBooks";

export const BookApp = () => {
  const [books, setBooks] = useState<Book[]>([
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
  ]);

  const handleCheckBox = (id: number) => {
    setBooks(
      [...books].map((book) =>
        book.id === id ? { ...book, isChecked: !book.isChecked } : book
      )
    );
  };

  return (
    <>
      <h4>To Be Read</h4>
      <ShowBooks bookList={books} handleCheckbox={handleCheckBox} />
    </>
  );
};
