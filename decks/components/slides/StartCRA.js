import * as React from "react";

import { CodeSurferColumns, Step } from "code-surfer";
import { github, vsDark } from "@code-surfer/themes";

import { MiniTerminalTransitions } from "@code-hike/mini-terminal";
import { MiniEditor } from "@code-hike/mini-editor";
import { MiniBrowser } from "@code-hike/mini-browser";

import logo from "../../logo.svg"

import { useEventListener } from "../../hooks/useKeyPress";

import { TransactionsTable } from "@mx-cartographer/transactions/TransactionsTable";

import transactions from "../../transactions.json";

const terminalSteps = [
  `
$ npx create-react-app moneymap
$ cd moneymap
$ npm start
`,
  `
$ npm install --save-dev @babel/core webpack ...
`,
  `
$ npm install @kyper/table @mx-cartographer/transactions ...
`,
  `
$ touch webpack.config.js
`,
  `
$ touch babel.config.js
`,
];

const editorSteps = [
  {
    code: `
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
      </header>
    </div>
  );
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: ["app.js"],
  },
  {
    code: `
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
      </header>
    </div>
  );
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: ["app.js"],
  },
  {
    code: `
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
      </header>
    </div>
  );
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: ["app.js"],
  },
  {
    code: `
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
      </header>
    </div>
  );
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: ["app.js", "webpack.config.js"],
  },
  {
    code: `
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
      </header>
    </div>
  );
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
module.exports = {
  ...
  presets: [
      ...
      '@babel/env',
      '@babel/preset-react',
  ],
}
   
`,
    file: "babel.config.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
module.exports = {
  ...,
  module: {
      rules: [
        ...,
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules/@kyper/'),
            exclude: [/__tests__/],
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react'],
            },
        },
      ],
  },
}
`,
    file: "webpack.config.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
module.exports = {
  ...,
  module: {
      rules: [
        ...,
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules/@kyper/'),
            exclude: [/__tests__/],
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react'],
            },
        },
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules/@mx-cartographer/'),
            exclude: [/__tests__/],
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react'],
            },
        },
      ],
  },
}
`,
    file: "webpack.config.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        Learn React
        </a>
      </header>
    </div>
  );
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
import React from 'react'
import { TransactionsTable } from '@mx-cartographer/transactions/TransactionsTable'

function App() {
  const [transactions, setTransactions] = React.useState([])

  return <TransactionsTable transactions={transactions} />
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
import React from 'react'
import { TransactionsTable } from '@mx-cartographer/transactions/TransactionsTable'

import { fetchTransactions } from 'utils/fetchTransactions'

function App() {
  const [transactions, setTransactions] = React.useState([])

  useEffect(() => {
    fetchTransactions().then(fetchedTransactions => 
      setTransactions(fetchedTransactions)
    )
  }, [fetchTransactions])

  return <TransactionsTable transactions={transactions} />
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
  {
    code: `
import React from 'react'
import { TransactionsTable } from '@mx-cartographer/transactions/TransactionsTable'

import { fetchTransactions } from 'utils/fetchTransactions'

function App() {
  const [transactions, setTransactions] = React.useState([])

  useEffect(() => {
    fetchTransactions().then(fetchedTransactions => 
      setTransactions(fetchedTransactions)
    )
  }, [fetchTransactions])

  return <TransactionsTable transactions={transactions} />
}
`,
    file: "app.js",
    lang: "javascript",
    tabs: [
      "app.js",
      "webpack.config.js",
      "babel.config.js",
    ],
  },
];

const browserSteps = [
  {
    url: "http://localhost:8000",
    children: (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ),
  },
  {
    url: "http://localhost:8000",
    children: (
      <TransactionsTable
        transactions={[]}
        height={900}
        width={800}
      />
    ),
  },
  {
    url: "http://localhost:8000",
    children: (
      <TransactionsTable
        key={2}
        transactions={transactions}
        height={900}
        width={800}
      />
    ),
  },
];

export const StartCRA = () => {
  const [
    editorProgress,
    setEditorProgress,
  ] = React.useState(0);
  const [
    terminalProgress,
    setTerminalProgress,
  ] = React.useState(0);
  const [
    broswerProgress,
    setBrowserProgress,
  ] = React.useState(0);
  const [clear, setClear] = React.useState(false);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    let interval;

    if (start) {
      if (terminalProgress < 4) {
        interval = setInterval(() => {
          setTerminalProgress((terminalProgress) =>
            terminalProgress + 0.01 > 4
              ? 4
              : terminalProgress + 0.01
          );
        }, 10);
      }
    }

    if (clear) {
      clearInterval(interval);
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
      setEditorProgress((editorProgress) =>
        editorProgress + 1 < editorSteps.length
          ? editorProgress + 1
          : editorProgress
      );
      if (editorProgress >= 8) {
        setBrowserProgress((broswerProgress) =>
          broswerProgress + 1 < browserSteps.length
            ? broswerProgress + 1
            : broswerProgress
        );
      }
    }, 1000);
  }, [setStart, setClear, editorProgress]);

  useEventListener("click", handler);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gap: 200,
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ margin: "50px auto" }}>
          <MiniTerminalTransitions
            height={200}
            progress={terminalProgress}
            title="bash"
            steps={terminalSteps}
          />
        </div>
        <MiniEditor
          height={600}
          progress={editorProgress}
          steps={editorSteps}
        />
      </div>

      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MiniBrowser
          progress={broswerProgress}
          steps={browserSteps}
        />
      </div>
    </div>
  );
};
