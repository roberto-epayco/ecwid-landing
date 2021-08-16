import Loader from "./components/Loader";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div>
				<Loader />
				<Checkout />
			</div>
		</div>
	);
}

export default App;
