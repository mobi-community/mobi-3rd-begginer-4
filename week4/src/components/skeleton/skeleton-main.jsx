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
			<SkeletonBase width="200px" height="10px" />
			<SkeletonBase width="200px" height="300px" />
		</S.SkeletonWrapper>
	);
};
export default SkeletonMain;

const SkeletonWrapper = styled.div`
	display: grid;
	overflow: hidden;
	padding: 20px 0;
`;

const S = {
	SkeletonWrapper,
};
