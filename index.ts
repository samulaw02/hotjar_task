import session from 'express-session';
import { app, sessionOptions } from "./src/config";
import { serveDirectories } from './src/controllers';
import { serveControl, servePricing, serveVariant } from "./src/middlewares";

declare module 'express-session' {
  interface Session {
    page: string;
  }
}

async function main() {
  app.use(session(sessionOptions));
  app.use("/", serveDirectories);
  app.use("/pricing/monthly", serveControl);
  app.use("/pricing/annually", serveVariant);
  app.use("/pricing", servePricing);

  app.listen(8080, () => {
    console.log("app running on port 8080");
  });
}

main().catch((err) => console.error(err));
