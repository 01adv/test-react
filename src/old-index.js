import React from 'react';
import ReactDOM from 'react-dom/client';
import './books.css'



const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Fourth Wing (Special Edition) (The Empyrean, 1)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81im9aAFBOL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },

  // id can be anything until it is unique even we don't need to name it id we can name it anything

  //we can also give index no as a key as it is a unique no for each item but if the list changed it'll get bugs
  {
    author: 'Morgan Housel',
    title: 'The Psychology Of Money',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },

];

// const naam = ['jonnie', 'ballu', 'kantara']
// console.log(name)
const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        console.log(book.title)
        {/* const { author, title, img, id } = book */ }
        {/* return (
          <Book img={img} title={title} author={author} key={id}
          /> */   // alternate method 

          return (
            <Book book={book} key={book.id}
            // we can also use spread operator in the above
            /* <Book book={...book} key={book.id} this will copy everything from book obj*/
            />
          )
        }

      })}
    </section>
  )
};

// read about these topics in readme.md
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type='text' name='example' onChange={(e) => console.log(e.target.value)} style={{ margin: '1rem 0' }} />
        <button type='submit' onClick={() => console.log('submitted')}>Submit</button>
        <div>

          <button onClick={() => console.log('click me')} type='button'>Click me</button>
        </div>
      </form>
    </section>
  )
}

// isme direct props.property use karne ki jgh hum direct access krre h func m

// const Book = ({book:{ title, img, author, children }}) => {
const Book = (props) => {
  const { img, title, author } = props.book
  // console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);