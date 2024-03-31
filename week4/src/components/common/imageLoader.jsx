import { useState } from "react";
import styled from "styled-components";

import SkeletonMain from "../skeleton/skeleton-main";

const ImageLoader = ({ src, sizes, srcSet }) => {
	const [loading, setLoading] = useState(true);

	return (
		<Container>
			{loading && <SkeletonMain />}
			<ImageWrapper>
				<p>Title</p>
				<Image
					alt="image"
					fetchPriority="high"
					src={src}
					sizes={sizes}
					srcSet={srcSet}
					onLoad={() => setLoading(false)}
				/>
			</ImageWrapper>
		</Container>
	);
};

export default ImageLoader;

const Image = styled.img`
	width: 200px;
	height: 300px;
	aspect-ratio: 200/300;
	opacity: ${({ loading }) => (loading ? 0 : 1)};
	transition: opacity 0.3s ease-in-out;
`;
const Container = styled.div``;

const ImageWrapper = styled.div`
	width: 200px;
	height: 310px;
`;
