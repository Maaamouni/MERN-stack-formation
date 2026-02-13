import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/home"
function App() {
  return (
	<Router>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/auth' element={<Auth/>}/>
		</Routes>
	</Router>
  )
}

export default App
