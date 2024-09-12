import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const domTree = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "styles",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      children: [
        {
          name: "element",
        },
      ],
    },
    {
      name: "vite.config.ts",
      children: [
        {
          name: "new element",
          children: [
            {
              name: "new element 2",
              children: [
                {
                  name: "new element 3",
                  children: [
                    {
                      name: "new element 4",
                      children: [
                        {
                          name: "new element 5",
                          children: [
                            {
                              name: "new element 6",
                              children: [
                                {
                                  name: "new element 7",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, depth }: { name: TEntry; depth: number }) {
  return (
    <div>
      {entry.children ? (
        <details>
          <summary>{entry.name}</summary>
          <div style={{ paddingLeft: `${depth * 30}px` }}>
            {entry.children?.map(entry => (
              <Entry entry={entry} depth={depth + 1} />
            ))}
          </div>
        </details>
      ) : (
        <div>
          {entry.name}
          <div style={{ paddingLeft: `${depth * 30}px` }}>
            {entry.children?.map(entry => (
              <Entry entry={entry} depth={depth + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <h1>DOM TREE</h1>
      <div>
        {domTree.children.map(entry => (
          <Entry entry={entry} depth={1} />
        ))}
      </div>
    </>
  );
}

export default App;
