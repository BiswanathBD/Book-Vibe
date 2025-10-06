import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const numId = parseInt(id);
  const bookData = useLoaderData();
  const clickedBook = bookData.find((book) => book.bookID === numId);
  console.log(clickedBook);

  return <div>Book Details</div>;
};

export default BookDetails;
