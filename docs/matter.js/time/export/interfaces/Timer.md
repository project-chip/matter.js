[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [time/export](../README.md) / Timer

# Interface: Timer

## Properties

### elapsed?

> `optional` **elapsed**: [`Elapsed`](../../../log/export/namespaces/Diagnostic/interfaces/Elapsed.md)

Amount of time interval has been active (diagnostics)

#### Source

[packages/matter.js/src/time/Time.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L82)

***

### intervalMs

> **intervalMs**: `number`

Interval (diagnostics)

#### Source

[packages/matter.js/src/time/Time.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L76)

***

### isPeriodic

> **isPeriodic**: `boolean`

Is the timer periodic? (diagnostics)

#### Source

[packages/matter.js/src/time/Time.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L79)

***

### isRunning

> **isRunning**: `boolean`

Is true if this timer is running.

#### Source

[packages/matter.js/src/time/Time.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L85)

***

### name

> **name**: `string`

Name (diagnostics)

#### Source

[packages/matter.js/src/time/Time.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L67)

***

### systemId

> **systemId**: `unknown`

System ID (diagnostics)

#### Source

[packages/matter.js/src/time/Time.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L73)

***

### utility

> **utility**: `boolean`

Set to true to indicate the timer should not prevent program exit

#### Source

[packages/matter.js/src/time/Time.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L70)

## Methods

### start()

> **start**(): [`Timer`](Timer.md)

Starts this timer, chainable.

#### Returns

[`Timer`](Timer.md)

#### Source

[packages/matter.js/src/time/Time.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L88)

***

### stop()

> **stop**(): [`Timer`](Timer.md)

Stops this timer, chainable.

#### Returns

[`Timer`](Timer.md)

#### Source

[packages/matter.js/src/time/Time.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L91)
