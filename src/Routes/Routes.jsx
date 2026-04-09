import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../layout/MainLayout";
import Books from "../Pages/Books/Books";
import Error from "../Pages/Error/Error";
import BookDetails from "../Pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <Error></Error>,
  },
]);
