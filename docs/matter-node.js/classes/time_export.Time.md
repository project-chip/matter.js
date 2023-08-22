[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / Time

# Class: Time

[time/export](../modules/time_export.md).Time

## Hierarchy

- **`Time`**

  ↳ [`TimeFake`](time_export.TimeFake.md)

  ↳ [`TimeNode`](time_export.TimeNode.md)

## Table of contents

### Constructors

- [constructor](time_export.Time.md#constructor)

### Properties

- [get](time_export.Time.md#get)
- [getPeriodicTimer](time_export.Time.md#getperiodictimer)
- [getTimer](time_export.Time.md#gettimer)
- [now](time_export.Time.md#now)
- [nowMs](time_export.Time.md#nowms)
- [sleep](time_export.Time.md#sleep)

### Methods

- [getPeriodicTimer](time_export.Time.md#getperiodictimer-1)
- [getTimer](time_export.Time.md#gettimer-1)
- [now](time_export.Time.md#now-1)
- [nowMs](time_export.Time.md#nowms-1)

## Constructors

### constructor

• **new Time**()

## Properties

### get

▪ `Static` **get**: () => [`Time`](time_export.Time.md)

#### Type declaration

▸ (): [`Time`](time_export.Time.md)

##### Returns

[`Time`](time_export.Time.md)

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

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:15

___

### now

▪ `Static` `Readonly` **now**: () => `Date`

#### Type declaration

▸ (): `Date`

##### Returns

`Date`

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:10

___

### nowMs

▪ `Static` `Readonly` **nowMs**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

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

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:19

## Methods

### getPeriodicTimer

▸ `Abstract` **getPeriodicTimer**(`intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:17

___

### getTimer

▸ `Abstract` **getTimer**(`durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:14

___

### now

▸ `Abstract` **now**(): `Date`

#### Returns

`Date`

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:9

___

### nowMs

▸ `Abstract` **nowMs**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:11
