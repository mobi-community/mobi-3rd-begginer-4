import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ImageLoader from "../components/common/imageLoader";

const Main = () => {
	const imgState = useSelector((state) => state.images.imgState);

	// usePreloadImage({ url: imgState[0] });

	useEffect(() => {
		const preloadLink = document.createElement("link");
		preloadLink.href = imgState[0];
		preloadLink.rel = "preload";
		preloadLink.as = "image";
		document.head.appendChild(preloadLink);

		return () => {
			if (preloadLink) {
				document.head.removeChild(preloadLink);
			}
		};
	}, [imgState[0]]);

	return (
		<>
			<ImageBox>
				{imgState.map((item, index) => (
					<div key={index}>
						<ImageContainer>
							<ImageLoader src={item} />
						</ImageContainer>
					</div>
				))}
			</ImageBox>
		</>
	);
};
export default Main;

const ImageBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ImageContainer = styled.div`
	width: 200px;
	height: 300px;
	padding: 10px 0;
`;
