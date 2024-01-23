import { ChangeEvent, useState } from "react";

interface IAddBookProps {
  addBook: (addedTitle: string, addedAuthor: string) => void;
}

export const AddBook = (props: IAddBookProps) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");

  const handleClick = () => {
    props.addBook(newBookTitle, newBookAuthor);
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
      <input type="text" onChange={handleTitleChange} value={newBookTitle} />
      <input type="text" onChange={handleAuthorChange} value={newBookAuthor} />
      <button onClick={handleClick}>Add New Book</button>
    </>
  );
};
