import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BooksTable from '../components/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/books')
      .then((response) => {
        console.log (response.data)
        setBooks(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <BooksTable books={books} />
      </div>
     </div>
  );
};

export default Home;
