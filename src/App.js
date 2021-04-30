import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Gallery from './components/Gallery';

function App() {
	return (
		<div id="body">
			<Navbar />
			<Gallery />
		</div>
	);
}

export default App;
