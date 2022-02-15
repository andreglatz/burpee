import { useEffect, useState } from "react";
import { config, text } from "../../config";
import { Container, Number, Seconds, Subtitle, Total } from "./styles";

import clock from "../../core/clock";
import utils from "../../utils";

function App() {
  const [timer, setTimer] = useState({ time: config().RUNNING_TIME, total: 0 });
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setTimeout(() => {
      const { total } = timer;
      setTimer({ time: clock.tick(), total: total + 1 });
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) start();
    else clearTimeout();
  }, [isRunning, timer]);

  return (
    <Container isRunning={clock.isRunning} onClick={() => setIsRunning(!isRunning)}>
      <Number>
        {timer.time}
        <Seconds>s</Seconds>
      </Number>
      <Total>{utils.formatTotal(timer.total)}</Total>
      <Subtitle>{clock.isRunning ? text.run.toUpperCase() : text.rest.toUpperCase()}</Subtitle>
    </Container>
  );
}

export default App;
