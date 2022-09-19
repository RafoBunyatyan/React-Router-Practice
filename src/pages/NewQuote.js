import QuoteFrom from '../components/quotes/QuoteForm'

const NewQuote = () => {
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
	}

	return <QuoteFrom onAddQuote={addQuoteHandler} />
}

export default NewQuote