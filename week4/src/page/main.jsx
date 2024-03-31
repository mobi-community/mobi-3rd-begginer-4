import { useSelector } from "react-redux";
import styled from "styled-components";

import ImageLoader from "../components/common/imageLoader";
import usePreloadImage from "../hooks/usePreloadImage";

const Main = () => {
	const imgState = useSelector((state) => state.images.imgState);

	usePreloadImage({ url: "https://i.ibb.co/Y77K6Kx/456-1.webp" });

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
