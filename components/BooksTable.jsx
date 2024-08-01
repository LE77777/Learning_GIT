import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md'>Author</th>
          <th className='border border-slate-600 rounded-md'>Year</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.id} className='h-18'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.PublishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                  <BsInfoCircle className='text-2xl text-green-800' />
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                  <MdOutlineDelete className='text-2xl text-red-600' />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
