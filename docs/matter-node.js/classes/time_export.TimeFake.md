[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / TimeFake

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
- [getPeriodicTimer](time_export.TimeFake.md#getperiodictimer)
- [getTimer](time_export.TimeFake.md#gettimer)
- [now](time_export.TimeFake.md#now)
- [nowMs](time_export.TimeFake.md#nowms)
- [sleep](time_export.TimeFake.md#sleep)

### Methods

- [advanceTime](time_export.TimeFake.md#advancetime)
- [callbackAtTime](time_export.TimeFake.md#callbackattime)
- [getPeriodicTimer](time_export.TimeFake.md#getperiodictimer-1)
- [getTimer](time_export.TimeFake.md#gettimer-1)
- [now](time_export.TimeFake.md#now-1)
- [nowMs](time_export.TimeFake.md#nowms-1)
- [removeCallback](time_export.TimeFake.md#removecallback)
- [yield](time_export.TimeFake.md#yield)

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

packages/matter.js/dist/cjs/time/TimeFake.d.ts:10

## Properties

### callbacks

• `Private` `Readonly` **callbacks**: `any`

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:9

___

### timeMs

• `Private` **timeMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:8

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

packages/matter.js/dist/cjs/time/Time.d.ts:8

___

### getPeriodicTimer

▪ `Static` `Readonly` **getPeriodicTimer**: (`intervalMs`: `number`, `callback`: [`TimerCallback`](../modules/time_export.md#timercallback)) => [`Timer`](../interfaces/time_export.Timer.md)

#### Type declaration

▸ (`intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

##### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Inherited from

[Time](time_export.Time.md).[getPeriodicTimer](time_export.Time.md#getperiodictimer)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:18

___

### getTimer

▪ `Static` `Readonly` **getTimer**: (`durationMs`: `number`, `callback`: [`TimerCallback`](../modules/time_export.md#timercallback)) => [`Timer`](../interfaces/time_export.Timer.md)

#### Type declaration

▸ (`durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

##### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Inherited from

[Time](time_export.Time.md).[getTimer](time_export.Time.md#gettimer)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:15

___

### now

▪ `Static` `Readonly` **now**: () => `Date`

#### Type declaration

▸ (): `Date`

##### Returns

`Date`

#### Inherited from

[Time](time_export.Time.md).[now](time_export.Time.md#now)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:10

___

### nowMs

▪ `Static` `Readonly` **nowMs**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Inherited from

[Time](time_export.Time.md).[nowMs](time_export.Time.md#nowms)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:12

___

### sleep

▪ `Static` `Readonly` **sleep**: (`durationMs`: `number`) => `Promise`<`void`\>

#### Type declaration

▸ (`durationMs`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |

##### Returns

`Promise`<`void`\>

#### Inherited from

[Time](time_export.Time.md).[sleep](time_export.Time.md#sleep)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:19

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

packages/matter.js/dist/cjs/time/TimeFake.d.ts:15

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

packages/matter.js/dist/cjs/time/TimeFake.d.ts:17

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

[Time](time_export.Time.md).[getPeriodicTimer](time_export.Time.md#getperiodictimer-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:14

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

[Time](time_export.Time.md).[getTimer](time_export.Time.md#gettimer-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:13

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time_export.Time.md).[now](time_export.Time.md#now-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:11

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time_export.Time.md).[nowMs](time_export.Time.md#nowms-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:12

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

packages/matter.js/dist/cjs/time/TimeFake.d.ts:18

___

### yield

▸ **yield**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:16
