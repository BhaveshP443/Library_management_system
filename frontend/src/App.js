import React, { lazy, useState, startTransition } from "react";

// import Home from "./components/Home.js";
// import Header from "./components/Header.js";
// import AddBook from "./components/new/AddBook.js";
// import AddAuthor from "./components/new/AddAuthor.js";
// import AddBorrower from "./components/new/AddBorrower.js";
// import BookReturn from "./components/Return_Borrow/BookReturn.js";
// import BookBorrow from "./components/Return_Borrow/BookBorrow.js";
// import UpdateBorrower from "./components/update/UpdateBorrower.js";
// import UpdateAuthor from "./components/update/UpdateAuthor.js";
// import UpdateBook from "./components/update/UpdateBook.js";
// import DeleteBorrower from "./components/delete/DeleteBorrower.js";
// import DeleteBook from "./components/delete/DeleteBook.js";
// import ShowBorrowers from "./components/show/ShowBorrowers.js";
// import ShowBooks from "./components/show/ShowBooks.js";
// import ShowAuthors from "./components/show/ShowAuthors.js";

const Home = lazy(() => import("./components/Home.js"));
const Header = lazy(() => import("./components/Header.js"));

const AddBook = lazy(() => import("./components/new/AddBook.js"));
const AddAuthor = lazy(() => import("./components/new/AddAuthor.js"));
const AddBorrower = lazy(() => import("./components/new/AddBorrower.js"));

const BookReturn = lazy(() => import("./components/Return_Borrow/BookReturn.js"));
const BookBorrow = lazy(() => import("./components/Return_Borrow/BookBorrow.js"));

const UpdateBorrower = lazy(() => import("./components/update/UpdateBorrower.js"));
const UpdateAuthor = lazy(() => import("./components/update/UpdateAuthor.js"));
const UpdateBook = lazy(() => import("./components/update/UpdateBook.js"));

const DeleteBorrower = lazy(() => import("./components/delete/DeleteBorrower.js"));
const DeleteBook = lazy(() => import("./components/delete/DeleteBook.js"));

const ShowBorrowers = lazy(() => import("./components/show/ShowBorrowers.js"));
const ShowBooks = lazy(() => import("./components/show/ShowBooks.js"));
const ShowAuthors = lazy(() => import("./components/show/ShowAuthors.js"));

function App() {
  const [activeForm, setActiveForm] = useState("goToHome");

  const handleButtonClick = (formName) => {
    startTransition(() => {
      setActiveForm(formName);
    });
  };

  const handleGoHomeClick = () => {
    startTransition(() => {
      setActiveForm("goToHome");
    });
  };

  return (
    <div className="App">
      <Header
        onAddBookClick={() => handleButtonClick("addBook")}
        onAddBorrowerClick={() => handleButtonClick("addBorrower")}
        onAddAuthorClick={() => handleButtonClick("addAuthor")}
        onUpdateBookClick={() => handleButtonClick("updateBook")}
        onUpdateBorrowerClick={() => handleButtonClick("updateBorrower")}
        onUpdateAuthorClick={() => handleButtonClick("updateAuthor")}
        onDeleteBookClick={() => handleButtonClick("deleteBook")}
        onDeleteBorrowerClick={() => handleButtonClick("deleteBorrower")}
        onReturnClick={() => handleButtonClick("ReturnBook")}
        onBorrowClick={() => handleButtonClick("BorrowBook")}
        goHome={handleGoHomeClick}
      />
      <div
        className="min-h-screen text-white flex justify-center items-center"
        align="center"
      >
        <div className="bg-zinc-400 mb-4 mt-4 rounded-lg justify-center max-w-fit">
          {activeForm === "addBook" && <AddBook />}
          {activeForm === "addBorrower" && <AddBorrower />}
          {activeForm === "addAuthor" && <AddAuthor />}
          {activeForm === "updateBook" && <UpdateBook />}
          {activeForm === "updateAuthor" && <UpdateAuthor />}
          {activeForm === "updateBorrower" && <UpdateBorrower />}
          {activeForm === "deleteBorrower" && <DeleteBorrower />}
          {activeForm === "deleteBook" && <DeleteBook />}
          {activeForm === "ReturnBook" && <BookReturn />}
          {activeForm === "BorrowBook" && <BookBorrow />}
          {activeForm === "goToHome" && (
            <Home
              showBooks={() => handleButtonClick("totalBooks")}
              showAuthors={() => handleButtonClick("totalAuthors")}
              showBorrowers={() => handleButtonClick("totalBorrowers")}
              showBorrowersWithoutBook={() => handleButtonClick("borrowersWithoutBook")}
              showBorrowBooks={() => handleButtonClick("chckoutBook")}
              showRemainingBooks={() => handleButtonClick("remainingBooks")}
            />
          )}
          {activeForm === "totalBorrowers" && <ShowBorrowers type="all"/>}
          {activeForm === "borrowersWithoutBook" && <ShowBorrowers type="withoutbooks"/>}
          {activeForm === "totalBooks" && <ShowBooks type="all"/>}
          {activeForm === "chckoutBook" && <ShowBooks type="borrowed"/>}
          {activeForm === "remainingBooks" && <ShowBooks type="available"/>}
          {activeForm === "totalAuthors" && <ShowAuthors/>}
        </div>
      </div>
    </div>
  );
}

export default App;
