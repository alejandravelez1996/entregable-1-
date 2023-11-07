import './styles/QuoteBox.css'

const QuoteBox = ({handleChangeQuote, quote}) => {
    
  return (
    <section className='quoteBox'>
      <h1 className='title'>Galleta de la <span className='title-fortune'>Fortuna</span></h1>

      <section>
        <button  onClick={handleChangeQuote} className='Button'><b> prueba suerte</b></button>
        <article>
            <p className='phrase'>
              {quote.phrase}
            </p>
        </article>
      </section>
      <footer>
        <h4 className='footer'> fuente: &copy; {quote.author}</h4>
      </footer>
    </section>
  );
};

export default QuoteBox;

