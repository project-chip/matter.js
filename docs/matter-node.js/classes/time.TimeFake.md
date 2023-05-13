[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time](../modules/time.md) / TimeFake

# Class: TimeFake

[time](../modules/time.md).TimeFake

## Hierarchy

- [`Time`](time.Time.md)

  ↳ **`TimeFake`**

## Table of contents

### Constructors

- [constructor](time.TimeFake.md#constructor)

### Properties

- [callbacks](time.TimeFake.md#callbacks)
- [timeMs](time.TimeFake.md#timems)
- [get](time.TimeFake.md#get)
- [getPeriodicTimer](time.TimeFake.md#getperiodictimer)
- [getTimer](time.TimeFake.md#gettimer)
- [now](time.TimeFake.md#now)
- [nowMs](time.TimeFake.md#nowms)

### Methods

- [advanceTime](time.TimeFake.md#advancetime)
- [callbackAtTime](time.TimeFake.md#callbackattime)
- [getPeriodicTimer](time.TimeFake.md#getperiodictimer-1)
- [getTimer](time.TimeFake.md#gettimer-1)
- [now](time.TimeFake.md#now-1)
- [nowMs](time.TimeFake.md#nowms-1)
- [removeCallback](time.TimeFake.md#removecallback)
- [yield](time.TimeFake.md#yield)

## Constructors

### constructor

• **new TimeFake**(`timeMs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeMs` | `number` |

#### Overrides

[Time](time.Time.md).[constructor](time.Time.md#constructor)

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

▪ `Static` **get**: () => [`Time`](time.Time.md)

#### Type declaration

▸ (): [`Time`](time.Time.md)

##### Returns

[`Time`](time.Time.md)

#### Inherited from

[Time](time.Time.md).[get](time.Time.md#get)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:8

___

### getPeriodicTimer

▪ `Static` `Readonly` **getPeriodicTimer**: (`intervalMs`: `number`, `callback`: [`TimerCallback`](../modules/time.md#timercallback)) => [`Timer`](../interfaces/time.Timer.md)

#### Type declaration

▸ (`intervalMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

##### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Inherited from

[Time](time.Time.md).[getPeriodicTimer](time.Time.md#getperiodictimer)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:18

___

### getTimer

▪ `Static` `Readonly` **getTimer**: (`durationMs`: `number`, `callback`: [`TimerCallback`](../modules/time.md#timercallback)) => [`Timer`](../interfaces/time.Timer.md)

#### Type declaration

▸ (`durationMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

##### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Inherited from

[Time](time.Time.md).[getTimer](time.Time.md#gettimer)

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

[Time](time.Time.md).[now](time.Time.md#now)

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

[Time](time.Time.md).[nowMs](time.Time.md#nowms)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:12

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
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:17

___

### getPeriodicTimer

▸ **getPeriodicTimer**(`intervalMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Overrides

[Time](time.Time.md).[getPeriodicTimer](time.Time.md#getperiodictimer-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:14

___

### getTimer

▸ **getTimer**(`durationMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Overrides

[Time](time.Time.md).[getTimer](time.Time.md#gettimer-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:13

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time.Time.md).[now](time.Time.md#now-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:11

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time.Time.md).[nowMs](time.Time.md#nowms-1)

#### Defined in

packages/matter.js/dist/cjs/time/TimeFake.d.ts:12

___

### removeCallback

▸ **removeCallback**(`callbackToRemove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackToRemove` | [`TimerCallback`](../modules/time.md#timercallback) |

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
