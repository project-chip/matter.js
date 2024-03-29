[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Timer

# Interface: Timer

[\<internal\>](../modules/internal_.md).Timer

## Table of contents

### Properties

- [elapsed](internal_.Timer.md#elapsed)
- [intervalMs](internal_.Timer.md#intervalms)
- [isPeriodic](internal_.Timer.md#isperiodic)
- [isRunning](internal_.Timer.md#isrunning)
- [name](internal_.Timer.md#name)
- [systemId](internal_.Timer.md#systemid)
- [utility](internal_.Timer.md#utility)

### Methods

- [start](internal_.Timer.md#start)
- [stop](internal_.Timer.md#stop)

## Properties

### elapsed

• `Optional` **elapsed**: [`Elapsed`](internal_.Elapsed.md)

Amount of time interval has been active (diagnostics)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:36

___

### intervalMs

• **intervalMs**: `number`

Interval (diagnostics)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:32

___

### isPeriodic

• **isPeriodic**: `boolean`

Is the timer periodic? (diagnostics)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:34

___

### isRunning

• **isRunning**: `boolean`

Is true if this timer is running.

#### Defined in

matter.js/dist/esm/time/Time.d.ts:38

___

### name

• **name**: `string`

Name (diagnostics)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:26

___

### systemId

• **systemId**: `unknown`

System ID (diagnostics)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:30

___

### utility

• **utility**: `boolean`

Set to true to indicate the timer should not prevent program exit

#### Defined in

matter.js/dist/esm/time/Time.d.ts:28

## Methods

### start

▸ **start**(): [`Timer`](internal_.Timer.md)

Starts this timer, chainable.

#### Returns

[`Timer`](internal_.Timer.md)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:40

___

### stop

▸ **stop**(): [`Timer`](internal_.Timer.md)

Stops this timer, chainable.

#### Returns

[`Timer`](internal_.Timer.md)

#### Defined in

matter.js/dist/esm/time/Time.d.ts:42
