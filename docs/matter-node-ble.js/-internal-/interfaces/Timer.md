[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Timer

# Interface: Timer

## Properties

### elapsed?

> `optional` **elapsed**: [`Elapsed`](Elapsed.md)

Amount of time interval has been active (diagnostics)

#### Source

matter.js/dist/esm/time/Time.d.ts:36

***

### intervalMs

> **intervalMs**: `number`

Interval (diagnostics)

#### Source

matter.js/dist/esm/time/Time.d.ts:32

***

### isPeriodic

> **isPeriodic**: `boolean`

Is the timer periodic? (diagnostics)

#### Source

matter.js/dist/esm/time/Time.d.ts:34

***

### isRunning

> **isRunning**: `boolean`

Is true if this timer is running.

#### Source

matter.js/dist/esm/time/Time.d.ts:38

***

### name

> **name**: `string`

Name (diagnostics)

#### Source

matter.js/dist/esm/time/Time.d.ts:26

***

### systemId

> **systemId**: `unknown`

System ID (diagnostics)

#### Source

matter.js/dist/esm/time/Time.d.ts:30

***

### utility

> **utility**: `boolean`

Set to true to indicate the timer should not prevent program exit

#### Source

matter.js/dist/esm/time/Time.d.ts:28

## Methods

### start()

> **start**(): [`Timer`](Timer.md)

Starts this timer, chainable.

#### Returns

[`Timer`](Timer.md)

#### Source

matter.js/dist/esm/time/Time.d.ts:40

***

### stop()

> **stop**(): [`Timer`](Timer.md)

Stops this timer, chainable.

#### Returns

[`Timer`](Timer.md)

#### Source

matter.js/dist/esm/time/Time.d.ts:42
