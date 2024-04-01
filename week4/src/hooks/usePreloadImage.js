import { useEffect } from "react";

const usePreloadImage = ({ url }) => {
	useEffect(() => {
		const preloadLink = document.createElement("link");
		preloadLink.href = url;
		preloadLink.rel = "preload";
		preloadLink.as = "image";
		document.head.appendChild(preloadLink);

		return () => {
			if (preloadLink) {
				document.head.removeChild(preloadLink);
			}
		};
	}, [url]);
};
export default usePreloadImage;
