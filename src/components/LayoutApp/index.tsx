import { Player } from "./components/Player";
import { Sidebar } from "./components/Sidebar";

import { Container, SideBarContainer, ContentContainer } from "./styles";

type LayoutAppProps = {
  children: JSX.Element;
};

export function LayoutApp({ children }: LayoutAppProps) {
  return (
    <Container>
      <SideBarContainer>
        <Sidebar />
        <ContentContainer>{children}</ContentContainer>
      </SideBarContainer>
      <Player />
    </Container>
  );
}
