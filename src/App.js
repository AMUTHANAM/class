import logo from './logo.svg';
import './App.css';

 export default function App() {

  return (
    <div className="App">

     < Book/>

    </div>
  );
}

function Book(){
  const book = {
     name: "the secret",
     poster: " https://www.thesecret.tv/wp-content/uploads/2015/04/the-secret-book-cover-img.png",
     summary: 
     " The Secret is a self-help book by Rhonda Byrne that explains how the law of attraction, which states that positive energy attracts positive things into your life, governs your thinking and actions, and how you can use the power of positive thinking to achieve anything you can imagine",

      rating : 9,
  }
  return(
    <div className="container">

<img  className="booh-poster"  src={book.poster} alt={book.name} />
<div className="book-spec">
<h2 className="book-name">{book.name}</h2>
<p className="book-rating">{book.rating}</p>
</div>
<p className="book-summary">{book.summary}</p>

    </div>
  )
}

