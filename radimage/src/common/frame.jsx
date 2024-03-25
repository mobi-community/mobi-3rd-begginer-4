import styled from "styled-components";
import { COLORS } from "./../consts/design-token/color";

const Frame = () => {
    return (
        <S.FrameWrapper>
            <S.Text>
                <S.TText>
                    <S.LeftUpFrame></S.LeftUpFrame>
                    <S.LeftDownFrame></S.LeftDownFrame>
                </S.TText>
                <S.TText>
                    <S.RightUpFrame></S.RightUpFrame>
                    <S.RightDownFrame></S.RightDownFrame>
                </S.TText>
            </S.Text>
            <S.CenterFrame></S.CenterFrame>
        </S.FrameWrapper>
    );
};
export default Frame;

const FrameWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Text = styled.div`
    width: 95%;
    height: 95%;
    position: fixed;

    display: flex;
    justify-content: space-between;
`;
const TText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const LeftUpFrame = styled.div`
    top: 0;
    left: 0;
    border-top: 2px solid ${COLORS.GSCALE[200]};
    border-left: 2px solid ${COLORS.GSCALE[200]};
    width: 3rem;
    height: 3rem;
`;
const RightUpFrame = styled.div`
    top: 0;
    right: 0;
    border-top: 2px solid ${COLORS.GSCALE[200]};
    border-right: 2px solid ${COLORS.GSCALE[200]};
    width: 3rem;
    height: 3rem;
`;
const CenterFrame = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TopHalf = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.GSCALE[200]};
`;
const BottomHalf = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.GSCALE[600]};
`;
const LeftDownFrame = styled.div`
    bottom: 0;
    left: 0;
    border-bottom: 2px solid ${COLORS.GSCALE[200]};
    border-left: 2px solid ${COLORS.GSCALE[200]};
    width: 3rem;
    height: 3rem;
`;
const RightDownFrame = styled.div`
    bottom: 0;
    right: 0;
    border-bottom: 2px solid ${COLORS.GSCALE[200]};
    border-right: 2px solid ${COLORS.GSCALE[200]};
    width: 3rem;
    height: 3rem;
`;
const S = {
    FrameWrapper,
    Text,
    TText,
    LeftUpFrame,
    RightUpFrame,
    CenterFrame,
    TopHalf,
    BottomHalf,
    LeftDownFrame,
    RightDownFrame,
};
