import { configureStore } from "@reduxjs/toolkit";

const initState = {
	imgState: [
		"https://i.ibb.co/Y77K6Kx/456-1.webp",
		"https://i.ibb.co/bsHPkqD/slamdunk-1-1.webp",
		"https://i.ibb.co/Z2pJgtM/slamdunk-poster-1.webp",
		"https://i.ibb.co/XbH5JHM/123-1.webp",
	],
};

const imageReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const store = configureStore({
	reducer: {
		images: imageReducer,
	},
});
export default store;
