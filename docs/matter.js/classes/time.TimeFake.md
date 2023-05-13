[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [time](../modules/time.md) / TimeFake

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

### Methods

- [advanceTime](time.TimeFake.md#advancetime)
- [callbackAtTime](time.TimeFake.md#callbackattime)
- [getPeriodicTimer](time.TimeFake.md#getperiodictimer)
- [getTimer](time.TimeFake.md#gettimer)
- [now](time.TimeFake.md#now)
- [nowMs](time.TimeFake.md#nowms)
- [removeCallback](time.TimeFake.md#removecallback)
- [yield](time.TimeFake.md#yield)
- [getPeriodicTimer](time.TimeFake.md#getperiodictimer-1)
- [getTimer](time.TimeFake.md#gettimer-1)
- [now](time.TimeFake.md#now-1)
- [nowMs](time.TimeFake.md#nowms-1)

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

[packages/matter.js/src/time/TimeFake.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L41)

## Properties

### callbacks

• `Private` `Readonly` **callbacks**: { `atMs`: `number` ; `callback`: [`TimerCallback`](../modules/time.md#timercallback)  }[]

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L39)

___

### timeMs

• `Private` **timeMs**: `number`

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L42)

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

[packages/matter.js/src/time/Time.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L10)

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

[packages/matter.js/src/time/TimeFake.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L63)

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

[packages/matter.js/src/time/TimeFake.ts:84](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L84)

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

[Time](time.Time.md).[getPeriodicTimer](time.Time.md#getperiodictimer)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L59)

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

[Time](time.Time.md).[getTimer](time.Time.md#gettimer)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L55)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time.Time.md).[now](time.Time.md#now)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L47)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time.Time.md).[nowMs](time.Time.md#nowms)

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L51)

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

[packages/matter.js/src/time/TimeFake.ts:89](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L89)

___

### yield

▸ **yield**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/time/TimeFake.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/TimeFake.ts#L78)

___

### getPeriodicTimer

▸ `Static` `Readonly` **getPeriodicTimer**(`intervalMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Inherited from

[Time](time.Time.md).[getPeriodicTimer](time.Time.md#getperiodictimer-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L24)

___

### getTimer

▸ `Static` `Readonly` **getTimer**(`durationMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Inherited from

[Time](time.Time.md).[getTimer](time.Time.md#gettimer-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L20)

___

### now

▸ `Static` `Readonly` **now**(): `Date`

#### Returns

`Date`

#### Inherited from

[Time](time.Time.md).[now](time.Time.md#now-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L13)

___

### nowMs

▸ `Static` `Readonly` **nowMs**(): `number`

#### Returns

`number`

#### Inherited from

[Time](time.Time.md).[nowMs](time.Time.md#nowms-1)

#### Defined in

[packages/matter.js/src/time/Time.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L16)
