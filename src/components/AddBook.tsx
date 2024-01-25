import { ChangeEvent, useState } from "react";
import "../AddBook.css";

interface IAddBookProps {
  addBook: (addedTitle: string, addedAuthor: string) => void;
}

export const AddBook = (props: IAddBookProps) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (newBookTitle.trim() === "" || newBookAuthor.trim() === "") {
      setError("Please fill in both fields");
      return;
    }
    setError("");
    props.addBook(newBookTitle, newBookAuthor);
    setNewBookTitle("");
    setNewBookAuthor("");
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
      <form className="input-wrapper">
        <input
          type="text"
          onChange={handleTitleChange}
          value={newBookTitle}
          placeholder="Add the title here.."
        />

        <input
          type="text"
          onChange={handleAuthorChange}
          value={newBookAuthor}
          placeholder="Add the author here.."
        />
        <button onClick={handleClick} className="add-btn">
          Add Book
        </button>
      </form>
      {error && (
        <p className="error-msg" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </>
  );
};
