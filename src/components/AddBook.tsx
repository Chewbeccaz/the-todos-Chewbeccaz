import { ChangeEvent, FormEvent, useState } from "react";
import "../AddBook.css";

interface IAddBookProps {
  addBook: (addedTitle: string, addedAuthor: string) => void;
}

export const AddBook = (props: IAddBookProps) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (newBookTitle.trim() === "" || newBookAuthor.trim() === "") {
      setError("Please fill in both fields");
      return;
    }
    setError("");
    props.addBook(newBookTitle, newBookAuthor);
    setNewBookTitle("");
    setNewBookAuthor("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "title") {
      setNewBookTitle(value);
    } else if (name === "author") {
      setNewBookAuthor(value);
    }
  };

  return (
    <>
      <form className="input-wrapper">
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={newBookTitle}
          placeholder="Add the title here.."
        />

        <input
          type="text"
          name="author"
          onChange={handleInputChange}
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
