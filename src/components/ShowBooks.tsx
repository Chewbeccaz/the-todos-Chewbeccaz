import { Book } from "../models/Book";

interface IShowBooksProps {
  bookList: Book[];
  handleCheckbox: (id: number) => void;
}

export const ShowBooks = (props: IShowBooksProps) => {
  const handleCheckBox = (id: number) => {
    props.handleCheckbox(id);
  };

  return (
    <>
      <h1>TBR-2024</h1>
      {/* <ul>
        {props.bookList.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            {/* Ska jag skriva funktionerna inuti bookapp...?  */}
      {/* <input
              type="checkbox"
              checked={book.isChecked}
              onChange={() => handleCheckBox(book.id)}
            />
          </li>
        ))}
      </ul>  */}

      <table>
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
          {props.bookList.map((book) => (
            <tr key={book.id}>
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
                <button>ÄndraIkon</button>
              </td>
              <td>
                <button>Sopkorgsikon.</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
