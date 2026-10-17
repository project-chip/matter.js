# Test fixtures

`shade-bridge-0.9.5/` is the storage of a window-shade bridge written by the legacy matter.js 0.9.5 API
(`CommissioningServer`). It holds one fabric of a local test controller; its keys protect nothing outside this fixture.

It was generated with `fixture-generator/legacy-shade-bridge.mjs` at the package root:

1. `npm i @project-chip/matter-node.js@0.9.5 @project-chip/matter.js@0.9.5` in an empty directory and copy the
   script there.
2. `node legacy-shade-bridge.mjs -store store -port 5561 -netinterface en0` and commission it with any controller
   (passcode 20202021, discriminator 3001).
3. Stop it, then run it once with `-move` (persists positions and light state).
4. Stop it, then run it once with `-removed` (shade 401 is gone, so its entries become stale).
5. Copy `store/` to `shade-bridge-0.9.5/`.

Shades and children:

| shade | children                    | stored values                        |
|-------|-----------------------------|--------------------------------------|
| 119   | primary, secondary          | lift on both                         |
| 274   | primary, secondary, aura    | lift on both surfaces, on/off, level |
| 209   | primary (lift and tilt)     | lift, tilt                           |
| 350   | primary, aura               | on/off, level on the aura            |
| 401   | primary, secondary          | none (not moved, left out in step 4) |
| 162   | primary, secondary          | none (never moved)                   |
