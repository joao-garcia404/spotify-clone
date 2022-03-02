import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
  }
`;

export const MusicTimeContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  input[type="range"] {
    width: 100%;

    height: 4px;

    &::-webkit-slider-runnable-track {
      /* color: var(--sliderBackground); */
      color: red;
    }
  }
`;
