import { useEffect, useState } from "react";
import styled from "styled-components";

import SkeletonMain from "../skeleton/skeleton-main";

const ImageLoader = ({ src, sizes, srcSet }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setLoading(false);
		img.src = src;
	}, [src]);

	if (loading) {
		return <SkeletonMain />;
	} else {
		return (
			<SImage
				alt="image"
				fetchpriority="high"
				src={src}
				sizes={sizes}
				srcSet={srcSet}
			/>
		);
	}
};

export default ImageLoader;

const SImage = styled.img`
	width: 200px;
	height: 300px;
	aspect-ratio: 200/300;
	opacity: ${({ loading }) => (loading ? 0 : 1)};
	transition: opacity 0.3s ease-in-out;
`;
// const Container = styled.div``;

// const ImageWrapper = styled.div`
// 	width: 200px;
// 	height: 310px;
// `;
