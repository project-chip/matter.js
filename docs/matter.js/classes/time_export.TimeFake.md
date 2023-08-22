[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / TimeFake

# Class: TimeFake

[time/export](../modules/time_export.md).TimeFake

## Hierarchy

- [`Time`](time_export.Time.md)

  ↳ **`TimeFake`**

## Table of contents

### Constructors

- [constructor](time_export.TimeFake.md#constructor)

### Properties

- [callbacks](time_export.TimeFake.md#callbacks)
- [timeMs](time_export.TimeFake.md#timems)
- [get](time_export.TimeFake.md#get)

### Methods

- [advanceTime](time_export.TimeFake.md#advancetime)
- [callbackAtTime](time_export.TimeFake.md#callbackattime)
- [getPeriodicTimer](time_export.TimeFake.md#getperiodictimer)
- [getTimer](time_export.TimeFake.md#gettimer)
- [now](time_export.TimeFake.md#now)
- [nowMs](time_export.TimeFake.md#nowms)
- [removeCallback](time_export.TimeFake.md#removecallback)
- [yield](time_export.TimeFake.md#yield)
- [getPeriodicTimer](time_export.TimeFake.md#getperiodictimer-1)
- [getTimer](time_export.TimeFake.md#gettimer-1)
- [now](time_export.TimeFake.md#now-1)
- [nowMs](time_export.TimeFake.md#nowms-1)
- [sleep](time_export.TimeFake.md#sleep)

## Constructors

### constructor

• **new TimeFake**(`timeMs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeMs` | `number` |

#### Overrides

[Time](time_export.Time.md).[constructor](time_export.Time.md#constructor)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L55)

## Properties

### callbacks

• `Private` `Readonly` **callbacks**: { `atMs`: `number` ; `callback`: [`TimerCallback`](../modules/time_export.md#timercallback)  }[]

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L53)

___

### timeMs

• `Private` **timeMs**: `number`

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L55)

___

### get

▪ `Static` **get**: () => [`Time`](time_export.Time.md)

#### Type declaration

▸ (): [`Time`](time_export.Time.md)

##### Returns

[`Time`](time_export.Time.md)

#### Inherited from

[Time](time_export.Time.md).[get](time_export.Time.md#get)

#### Defined in

[packages/matter.js/src/time/Time.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L12)

## Methods

### advanceTime

▸ **advanceTime**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L75)

___

### callbackAtTime

▸ **callbackAtTime**(`atMs`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `atMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L96)

___

### getPeriodicTimer

▸ **getPeriodicTimer**(`intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Overrides

[Time](time_export.Time.md).[getPeriodicTimer](time_export.Time.md#getperiodictimer)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L71)

___

### getTimer

▸ **getTimer**(`durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Overrides

[Time](time_export.Time.md).[getTimer](time_export.Time.md#gettimer)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L67)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time_export.Time.md).[now](time_export.Time.md#now)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L59)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time_export.Time.md).[nowMs](time_export.Time.md#nowms)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L63)

___

### removeCallback

▸ **removeCallback**(`callbackToRemove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackToRemove` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:101](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L101)

___

### yield

▸ **yield**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/TimeFake.ts#L90)

___

### getPeriodicTimer

▸ `Static` `Readonly` **getPeriodicTimer**(`intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Inherited from

[Time](time_export.Time.md).[getPeriodicTimer](time_export.Time.md#getperiodictimer-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L27)

___

### getTimer

▸ `Static` `Readonly` **getTimer**(`durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Inherited from

[Time](time_export.Time.md).[getTimer](time_export.Time.md#gettimer-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L22)

___

### now

▸ `Static` `Readonly` **now**(): `Date`

#### Returns

`Date`

#### Inherited from

[Time](time_export.Time.md).[now](time_export.Time.md#now-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L15)

___

### nowMs

▸ `Static` `Readonly` **nowMs**(): `number`

#### Returns

`number`

#### Inherited from

[Time](time_export.Time.md).[nowMs](time_export.Time.md#nowms-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L18)

___

### sleep

▸ `Static` `Readonly` **sleep**(`durationMs`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Time](time_export.Time.md).[sleep](time_export.Time.md#sleep)

#### Defined in

[packages/matter.js/src/time/Time.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L30)
