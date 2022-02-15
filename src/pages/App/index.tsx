import { useEffect, useState } from "react";
import { config, text } from "../../config";
import { Container, Number, Seconds, Subtitle, Total } from "./styles";

import clock from "../../core/clock";
import utils from "../../utils";

function App() {
  const [time, setTime] = useState({ time: config().RUNNING_TIME, total: 0 });
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setTimeout(() => {
      const { total } = time;
      setTime({ time: clock.tick(), total: total + 1 });
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) start();
    else clearTimeout();
  }, [isRunning, time]);

  return (
    <Container isRunning={clock.isRunning} onClick={() => setIsRunning(!isRunning)}>
      <Number>
        {time.time}
        <Seconds>s</Seconds>
      </Number>
      <Total>{utils.formatTotal(time.total)}</Total>
      <Subtitle>{clock.isRunning ? text.run.toUpperCase() : text.rest.toUpperCase()}</Subtitle>
    </Container>
  );
}

export default App;
