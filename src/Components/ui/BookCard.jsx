import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm space-y-5"
    >
      <figure className="p-6 bg-base-300 rounded-2xl">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-[250px]"
        />
      </figure>
      <div className="card-body space-y-2">
        <div className="flex gap-8 items-center">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge badge-success font-bold border-none bg-green-100 text-[#23BE0A]"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="font-bold">BY. {book.author}</p>
        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-5">
          <div className="font-semibold text-xl">{book.category}</div>
          <div className="font-semibold flex gap-1 items-center text-xl ">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
