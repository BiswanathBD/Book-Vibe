import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const bookData = useLoaderData();

  return (
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {bookData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
  );
};

export default Books;
