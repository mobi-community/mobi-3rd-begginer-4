import styled from "styled-components";

import SkeletonBase from "./skeleton-base";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description product card의 skeleton ui입니다.
 */

const SkeletonMain = () => {
	return (
		<S.SkeletonWrapper>
			<SkeletonBase $width="200px" $height="300px" />
		</S.SkeletonWrapper>
	);
};
export default SkeletonMain;

const SkeletonWrapper = styled.div`
	width: 200px;
	height: 300px;
	display: grid;
	overflow: hidden;
`;

const S = {
	SkeletonWrapper,
};
