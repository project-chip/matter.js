[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / Timer

# Interface: Timer

[time/export](../modules/time_export.md).Timer

## Table of contents

### Properties

- [elapsed](time_export.Timer.md#elapsed)
- [intervalMs](time_export.Timer.md#intervalms)
- [isPeriodic](time_export.Timer.md#isperiodic)
- [isRunning](time_export.Timer.md#isrunning)
- [name](time_export.Timer.md#name)
- [systemId](time_export.Timer.md#systemid)
- [utility](time_export.Timer.md#utility)

### Methods

- [start](time_export.Timer.md#start)
- [stop](time_export.Timer.md#stop)

## Properties

### elapsed

• `Optional` **elapsed**: [`Elapsed`](log_export.Diagnostic.Elapsed.md)

Amount of time interval has been active (diagnostics)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:36

___

### intervalMs

• **intervalMs**: `number`

Interval (diagnostics)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:32

___

### isPeriodic

• **isPeriodic**: `boolean`

Is the timer periodic? (diagnostics)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:34

___

### isRunning

• **isRunning**: `boolean`

Is true if this timer is running.

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:38

___

### name

• **name**: `string`

Name (diagnostics)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:26

___

### systemId

• **systemId**: `unknown`

System ID (diagnostics)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:30

___

### utility

• **utility**: `boolean`

Set to true to indicate the timer should not prevent program exit

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:28

## Methods

### start

▸ **start**(): [`Timer`](time_export.Timer.md)

Starts this timer, chainable.

#### Returns

[`Timer`](time_export.Timer.md)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:40

___

### stop

▸ **stop**(): [`Timer`](time_export.Timer.md)

Stops this timer, chainable.

#### Returns

[`Timer`](time_export.Timer.md)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:42
