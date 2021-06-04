import { Provider } from "react-redux";
import store from "./redux/store";
import TempContainer from "./components/TemperatureContainer";
import SelectCity from "./components/SelectCityName";
import icon from "./icon.svg";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<img
					src={icon}
					className="sun-icon"
					alt="image"
					style={{ top: "5vh", left: "3vw" }}
				/>

				<TempContainer />
				<div className="search_City">
					<SelectCity />
				</div>
				<img
					src={icon}
					className="sun-icon"
					alt="image"
					style={{ bottom: "5vh", right: "3vw" }}
				/>
			</div>
		</Provider>
	);
}

export default App;
