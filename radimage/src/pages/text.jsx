import styled from "styled-components";
import Frame from "./../common/frame";
const Text = () => {
    return (
        <Wrapper>
            <Frame />
        </Wrapper>
    );
};
export default Text;
const Wrapper = styled.div`
    width: calc(100%-1rem);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: yellow;
    flex-direction: column;
`;
