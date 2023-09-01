#!/usr/bin/env -S node --enable-source-maps
import { main } from "../dist/esm/generate-spec.js";
await main();
