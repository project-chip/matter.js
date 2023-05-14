[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [time](../modules/time.md) / Time

# Class: Time

[time](../modules/time.md).Time

## Hierarchy

- **`Time`**

  ↳ [`TimeFake`](time.TimeFake.md)

## Table of contents

### Constructors

- [constructor](time.Time.md#constructor)

### Properties

- [get](time.Time.md#get)

### Methods

- [getPeriodicTimer](time.Time.md#getperiodictimer)
- [getTimer](time.Time.md#gettimer)
- [now](time.Time.md#now)
- [nowMs](time.Time.md#nowms)
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

[packages/matter.js/src/time/Time.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L10)

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

[packages/matter.js/src/time/Time.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L23)

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

[packages/matter.js/src/time/Time.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L19)

___

### now

▸ `Abstract` **now**(): `Date`

#### Returns

`Date`

#### Defined in

[packages/matter.js/src/time/Time.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L12)

___

### nowMs

▸ `Abstract` **nowMs**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/time/Time.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L15)

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

#### Defined in

[packages/matter.js/src/time/Time.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L20)

___

### now

▸ `Static` `Readonly` **now**(): `Date`

#### Returns

`Date`

#### Defined in

[packages/matter.js/src/time/Time.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L13)

___

### nowMs

▸ `Static` `Readonly` **nowMs**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/time/Time.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/time/Time.ts#L16)
