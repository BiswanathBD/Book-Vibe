import React from "react";
import { CiStar } from "react-icons/ci";
import BookDetails from "../BookDetails/BookDetails";
import { Link } from "react-router";

const Book = ({ book }) => {
  const tags = book.tags;

  return (
    <Link to={`/details/${book.bookId}`}>
      <div className="border border-gray-200 rounded-2xl p-4 shadow-lg/5 hover:bg-green-50 hover:scale-102 transition-all cursor-pointer">
        <div className="bg-gray-100 aspect-4/3 flex justify-center rounded-lg">
          <img className="h-full p-6" src={book.image} alt="" />
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-1 bg-gray-100 rounded-full mt-4 text-green-500 font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        <h3 className="text-2xl font-semibold pt-4">{book.bookName}</h3>
        <p className="font-medium text-gray-600 border-b border-dashed border-gray-200 pb-4 mt-2">
          By: {book.author}
        </p>
        <div className="flex justify-between items-center text-gray-500 py-2">
          <p>{book.category}</p>
          <p className="flex gap-1 items-center">
            {book.rating} <CiStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
