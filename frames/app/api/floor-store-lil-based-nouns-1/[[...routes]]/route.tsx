/** @jsxImportSource frog/jsx */

import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
import {
  ChainId,
  generateFloorStoreApp,
} from "../../floorStoreFrameGenerator.tsx";

const app = generateFloorStoreApp({
  collectionName: "Lil Based Nouns",
  slug: "lil-based-nouns-1",
  chainId: ChainId.BASE,
  overrideImgSrc: "/assets/lil-based-noun.png",
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);

// Uncomment to use Edge Runtime
// export const runtime = 'edge'
