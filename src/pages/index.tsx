import Head from "next/head";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Spotify - Web Player</title>
        <link rel="icon" href="/spotify.svg" />
      </Head>

      <h2>Spotify clone</h2>
    </Container>
  );
}
