import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90px;
  border-top: 1px solid var(--lightBorder);
  padding: 0 16px;
  background: var(--shape);

  display: flex;
  align-items: center;
`;

export const CurrentMusicContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MusicCover = styled.div`
  width: 56px;
  height: 56px;
  background: #ccc;
`;

export const MusicNameAndArtirts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 14px;
`;

export const MusicName = styled.span`
  font-size: 14px;
  color: var(--text);
`;

export const MusicArtists = styled.div`
  font-size: 12px;
  color: var(--fourthText);
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;
