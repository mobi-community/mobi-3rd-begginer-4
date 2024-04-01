import "./App.css";

import { Provider } from "react-redux";

import store from "./libs/redux/store";
import Main from "./page/main";
import GlobalStyle from "./styles/global-style";

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Main />
		</Provider>
	);
}

export default App;
