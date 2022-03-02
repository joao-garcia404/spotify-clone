import {
  MdPlayCircleFilled,
  MdPauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
  MdShuffle,
  MdRepeatOne,
  MdRepeat,
} from "react-icons/md";

import { Container, ActionsContainer, MusicTimeContainer } from "./styles";

export function PlayerSlider() {
  return (
    <Container>
      <ActionsContainer>
        <MdShuffle size={20} color="var(--fourthText)" />
        <MdSkipPrevious size={24} color="var(--fourthText)" />
        <MdPlayCircleFilled size={38} color="var(--fourthText)" />
        <MdSkipNext size={24} color="var(--fourthText)" />
        <MdRepeat size={20} color="var(--fourthText)" />
      </ActionsContainer>

      <MusicTimeContainer>
        <input type="range" />
      </MusicTimeContainer>
    </Container>
  );
}
