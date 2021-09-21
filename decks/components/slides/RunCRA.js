import * as React from "react";
import { MiniTerminalTransitions } from "@code-hike/mini-terminal";

import { useEventListener } from "../../hooks/useKeyPress";

export const RunCRA = () => {
  const [progress, setProgress] = React.useState(0);
  const [clear, setClear] = React.useState(false);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setProgress((progress) =>
          progress + 0.01 < steps.length - 1
            ? progress + 0.01
            : steps.length - 1
        );
      }, 20);
    }

    if (clear) {
      setProgress(steps.length - 1);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, clear]);

  const handler = React.useCallback(() => {
    setStart(true);
    setClear(false);
    setTimeout(() => {
      setClear(true);
      setStart(false);
      setProgress(steps.length - 1);
    }, 2000);
  }, [setStart, setClear]);

  useEventListener("click", handler);

  return (
    <div>
      <MiniTerminalTransitions
        height={200}
        progress={progress}
        code={`
        $ npx create-react-app moneymap
        $ npm start`}
        title="bash"
        steps={steps}
      />
    </div>
  );
};

const steps = [
  "",
  `$ npx create-react-app moneymap
$ cd moneymap
$ npm start`,
];
