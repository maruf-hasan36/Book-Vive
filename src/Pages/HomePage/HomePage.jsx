import React, { useContext } from "react";
import Banner from "./Banner";
import AllBooks from "./AllBook";
import { BookContext } from "../../context/BookContext";

const HomePage = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);
  return (
    <div>
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default HomePage;
