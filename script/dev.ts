import { spawn } from "child_process";

const backendPort = process.env.BACKEND_PORT || "5001";
const vitePort = process.env.VITE_PORT || "5173";

const backend = spawn("tsx", ["server/index.ts"], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "development",
    PORT: backendPort,
    BACKEND_PORT: backendPort,
    VITE_DEV_SERVER: "true",
  },
});

const frontend = spawn("vite", [], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "development",
    VITE_PORT: vitePort,
    BACKEND_PORT: backendPort,
  },
});

const shutdown = (code: number | null, signal: NodeJS.Signals | null) => {
  if (!backend.killed) {
    backend.kill("SIGTERM");
  }
  if (!frontend.killed) {
    frontend.kill("SIGTERM");
  }
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
};

backend.on("exit", shutdown);
frontend.on("exit", shutdown);
