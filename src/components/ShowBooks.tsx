import { Book } from "../models/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../ShowBooks.css";

interface IShowBooksProps {
  bookList: Book[];
  handleCheckbox: (id: number) => void;
  handleDelete: (id: number) => void;
}

export const ShowBooks = (props: IShowBooksProps) => {
  const handleCheckBox = (id: number) => {
    props.handleCheckbox(id);
  };

  const handleDelete = (id: number) => {
    props.handleDelete(id);
  };

  return (
    <>
      <h1>TBR-2024</h1>
      <table className="book-table">
        <thead>
          <tr>
            <th>Title:</th>
            <th>Author:</th>
            <th>Read:</th>
            <th>Edit:</th>
            <th>Delete:</th>
          </tr>
        </thead>
        <tbody>
          {props.bookList.map((book, index) => (
            <tr
              key={book.id}
              className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <input
                  type="checkbox"
                  checked={book.isChecked}
                  onChange={() => handleCheckBox(book.id)}
                />
              </td>
              <td>
                <button>
                  {" "}
                  <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(book.id)}>
                  <FontAwesomeIcon className="delete-icon" icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
