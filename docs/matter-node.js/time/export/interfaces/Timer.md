[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [time/export](../README.md) / Timer

# Interface: Timer

## Properties

### elapsed?

> `optional` **elapsed**: [`Elapsed`](../../../log/export/namespaces/Diagnostic/interfaces/Elapsed.md)

Amount of time interval has been active (diagnostics)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:36

***

### intervalMs

> **intervalMs**: `number`

Interval (diagnostics)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:32

***

### isPeriodic

> **isPeriodic**: `boolean`

Is the timer periodic? (diagnostics)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:34

***

### isRunning

> **isRunning**: `boolean`

Is true if this timer is running.

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:38

***

### name

> **name**: `string`

Name (diagnostics)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:26

***

### systemId

> **systemId**: `unknown`

System ID (diagnostics)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:30

***

### utility

> **utility**: `boolean`

Set to true to indicate the timer should not prevent program exit

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:28

## Methods

### start()

> **start**(): [`Timer`](Timer.md)

Starts this timer, chainable.

#### Returns

[`Timer`](Timer.md)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:40

***

### stop()

> **stop**(): [`Timer`](Timer.md)

Stops this timer, chainable.

#### Returns

[`Timer`](Timer.md)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:42
