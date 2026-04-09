import React, { use } from "react";

import BookCard from "../../Components/ui/BookCard";

const BooksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBook = () => {
  const Books = use(BooksPromise);
  console.log(Books);
  return (
    <div className="my-12 w-10/12 mx-auto">
      <h2 className="text-3xl text-center font-bold mt-10 mb-10">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Books.map((book, ind) => {
          return <BookCard key={ind} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default AllBook;
