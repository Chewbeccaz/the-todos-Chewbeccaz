import { Book } from "../models/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../ShowBooks.css";

interface IShowBooksProps {
  bookList: Book[];
  handleCheckbox: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const ShowBooks = (props: IShowBooksProps) => {
  const handleCheckBox = (id: string) => {
    props.handleCheckbox(id);
  };

  const handleDelete = (id: string) => {
    props.handleDelete(id);
  };

  return (
    <>
      <table className="book-table">
        <thead>
          <tr>
            <th>Title:</th>
            <th>Author:</th>
            <th>Read:</th>
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
