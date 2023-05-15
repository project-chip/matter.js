[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time](../modules/time.md) / Time

# Class: Time

[time](../modules/time.md).Time

## Hierarchy

- **`Time`**

  ↳ [`TimeNode`](time.TimeNode.md)

  ↳ [`TimeFake`](time.TimeFake.md)

## Table of contents

### Constructors

- [constructor](time.Time.md#constructor)

### Properties

- [get](time.Time.md#get)
- [getPeriodicTimer](time.Time.md#getperiodictimer)
- [getTimer](time.Time.md#gettimer)
- [now](time.Time.md#now)
- [nowMs](time.Time.md#nowms)

### Methods

- [getPeriodicTimer](time.Time.md#getperiodictimer-1)
- [getTimer](time.Time.md#gettimer-1)
- [now](time.Time.md#now-1)
- [nowMs](time.Time.md#nowms-1)

## Constructors

### constructor

• **new Time**()

## Properties

### get

▪ `Static` **get**: () => [`Time`](time.Time.md)

#### Type declaration

▸ (): [`Time`](time.Time.md)

##### Returns

[`Time`](time.Time.md)

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

## Methods

### getPeriodicTimer

▸ `Abstract` **getPeriodicTimer**(`intervalMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time.Timer.md)

#### Defined in

packages/matter.js/dist/cjs/time/Time.d.ts:17

___

### getTimer

▸ `Abstract` **getTimer**(`durationMs`, `callback`): [`Timer`](../interfaces/time.Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time.Timer.md)

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
