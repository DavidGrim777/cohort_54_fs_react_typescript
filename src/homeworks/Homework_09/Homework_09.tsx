import { useEffect, useState } from "react";
import { ContainerJokes, Card, PageWrapper, Text } from "./styles";
import { Button } from "./styles";
import { type Joke } from "./types";

function Homework_09() {
  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState<Joke | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

  const getJoke = async () => {
    const response = await fetch(JOKE_URL, {
      method: "GET",
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      setJoke(result);
      setError(undefined);
    } else {
      setJoke(undefined);
      setError("Some Network Error");
    }
  };
  
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerJokes>
          {error && <Text>{error}</Text>}
          {joke && (
            <>
              <Text>{joke.setup}</Text>
              <Text>{joke.punchline}</Text>
            </>
          )}
        </ContainerJokes>
        <Button onClick={getJoke}>Get new joke</Button>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
