import { useState } from "react";
import { FiHeart } from "react-icons/fi";

import {
  Container,
  CurrentMusicContainer,
  MusicCover,
  MusicNameAndArtirts,
  MusicName,
  MusicArtists,
  ActionsContainer,
} from "./styles";

export function Player() {
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <CurrentMusicContainer>
        <MusicCover />
        <MusicNameAndArtirts>
          <MusicName>Mommy</MusicName>
          <MusicArtists>Leozin, Dudu, Ecologyk</MusicArtists>
        </MusicNameAndArtirts>

        <ActionsContainer>
          <FiHeart
            onClick={() => setLiked((prevState) => !prevState)}
            size={16}
            fill={liked ? "var(--spotify)" : "transparent"}
            color={liked ? "var(--spotify)" : "var(--fourthText)"}
          />
        </ActionsContainer>
      </CurrentMusicContainer>
    </Container>
  );
}
