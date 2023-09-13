/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
// import BookSingleCard from "./BookSingleCard";

// const BooksCard = ({ books }) => {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {books.map((item) => (
//         <BookSingleCard key={item._id} book={item}></BookSingleCard>
//       ))}
//     </div>
//   );
// };

// export default BooksCard;
import React from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item}></BookSingleCard>
      ))}
    </div>
  );
};

export default BooksCard;
