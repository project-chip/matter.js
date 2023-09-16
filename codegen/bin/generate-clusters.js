#!/usr/bin/env -S node --enable-source-maps
import { main } from "../dist/esm/generate-clusters.js";
await main();
