import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
	{ id: 'q1', auter: 'Rafo', text: 'Learning React is fun!' },
	{ id: 'q2', auter: 'Rafobunyatyan', text: 'Learning React is great!' }
]

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes