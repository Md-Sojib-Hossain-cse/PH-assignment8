import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import BookDetails from './Pages/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('books.json')
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader : () => fetch('../books.json'),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path : '/book-details/:bookId',
        element : <BookDetails></BookDetails>,
        loader : () => fetch('../books.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
