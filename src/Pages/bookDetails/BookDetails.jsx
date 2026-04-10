// import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  // const bookContext = use(BookContext);
  // console.log(bookContext, "book context");

  const { handleMarkAsRead, storedBooks } = useContext(BookContext);
  console.log(handleMarkAsRead, storedBooks);

  const expectedBooks = books.find((book) => book.bookId == bookId);
  return (
    <div className="card card-side bg-base-100 shadow-sm w-10/12 mx-auto grid grid-cols-2 mt-20">
      <figure className="bg-base-300 rounded-2xl">
        <img
          className="h-[400px] w-[400px] object-contain"
          src={expectedBooks.image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{expectedBooks.bookName}</h2>
        <p>BY {expectedBooks.author}</p>
        <h2 className="py-2 border-y-2 border-gray-300">
          {expectedBooks.category}
        </h2>
        <p>Review : {expectedBooks.review}</p>
        <div className="flex gap-8 items-center">
          {expectedBooks.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge badge-success font-bold border-none bg-green-100 text-[#23BE0A]"
            >
              <h1>Tag #{tag}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <p>
              Number of Pages:{" "}
              <span className="font-bold ml-10">
                {expectedBooks.totalPages}
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p>
              Publisher:{" "}
              <span className="font-bold ml-14">{expectedBooks.publisher}</span>
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p>
              Year of Publishing:{" "}
              <span className="font-bold ml-8">
                {expectedBooks.yearOfPublishing}
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p>
              Rating:{" "}
              <span className="font-bold ml-25">{expectedBooks.rating}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkAsRead(expectedBooks)}
              className="btn border-green-700"
            >
              Mark as Read
            </button>
            <button className="btn btn-primary">ADD To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
