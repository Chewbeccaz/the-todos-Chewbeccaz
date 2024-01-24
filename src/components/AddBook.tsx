import { ChangeEvent, useState } from "react";
import "../AddBook.css";

interface IAddBookProps {
  addBook: (addedTitle: string, addedAuthor: string) => void;
}

export const AddBook = (props: IAddBookProps) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");

  const handleClick = () => {
    props.addBook(newBookTitle, newBookAuthor);
    console.log(newBookTitle, newBookAuthor);
  };

  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     // setNewBookTitle(event.target.value);
  //     // setNewBookAuthor(event.target.value);
  //   };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewBookTitle(event.target.value);
  };

  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewBookAuthor(event.target.value);
  };

  return (
    <>
      <div className="input-wrapper">
        <label>Enter Title:</label>
        <input type="text" onChange={handleTitleChange} value={newBookTitle} />
        <label>Enter Author:</label>
        <input
          type="text"
          onChange={handleAuthorChange}
          value={newBookAuthor}
        />
        <button onClick={handleClick}>Add New Book</button>
      </div>
    </>
  );
};
