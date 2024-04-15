[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / Timer

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

[packages/matter.js/src/time/Time.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L82)

___

### intervalMs

• **intervalMs**: `number`

Interval (diagnostics)

#### Defined in

[packages/matter.js/src/time/Time.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L76)

___

### isPeriodic

• **isPeriodic**: `boolean`

Is the timer periodic? (diagnostics)

#### Defined in

[packages/matter.js/src/time/Time.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L79)

___

### isRunning

• **isRunning**: `boolean`

Is true if this timer is running.

#### Defined in

[packages/matter.js/src/time/Time.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L85)

___

### name

• **name**: `string`

Name (diagnostics)

#### Defined in

[packages/matter.js/src/time/Time.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L67)

___

### systemId

• **systemId**: `unknown`

System ID (diagnostics)

#### Defined in

[packages/matter.js/src/time/Time.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L73)

___

### utility

• **utility**: `boolean`

Set to true to indicate the timer should not prevent program exit

#### Defined in

[packages/matter.js/src/time/Time.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L70)

## Methods

### start

▸ **start**(): [`Timer`](time_export.Timer.md)

Starts this timer, chainable.

#### Returns

[`Timer`](time_export.Timer.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L88)

___

### stop

▸ **stop**(): [`Timer`](time_export.Timer.md)

Stops this timer, chainable.

#### Returns

[`Timer`](time_export.Timer.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L91)
