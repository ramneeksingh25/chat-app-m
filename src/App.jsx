import { Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import ThemeSwitch from "./components/theme/ThemeSwitch.jsx";
const App = () => {
	return (
		<>
			<div className="font-poppins fixed h-screen w-full bg-gradient-to-tl dark:from-pink-700 dark:to-pink-800/70 from-pink-400 to-red-200 ">
				<ThemeSwitch />
				<Routes>
					<Route
						path="/*"
						element={<Error />}></Route>
					<Route
						path="/"
						element={<Login />}></Route>
					<Route
						path="/signin"
						element={<Login />}></Route>
					<Route
						path="/register"
						element={<Register />}></Route>
					<Route
						path="/home"
						element={<Home />}></Route>
				</Routes>
			</div>
		</>
	);
};

export default App;
