[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / Time

# Class: Time

[time/export](../modules/time_export.md).Time

## Hierarchy

- **`Time`**

  ↳ [`TimeFake`](time_export.TimeFake.md)

## Table of contents

### Constructors

- [constructor](time_export.Time.md#constructor)

### Properties

- [get](time_export.Time.md#get)

### Methods

- [getPeriodicTimer](time_export.Time.md#getperiodictimer)
- [getTimer](time_export.Time.md#gettimer)
- [now](time_export.Time.md#now)
- [nowMs](time_export.Time.md#nowms)
- [getPeriodicTimer](time_export.Time.md#getperiodictimer-1)
- [getTimer](time_export.Time.md#gettimer-1)
- [now](time_export.Time.md#now-1)
- [nowMs](time_export.Time.md#nowms-1)
- [sleep](time_export.Time.md#sleep)

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

[packages/matter.js/src/time/Time.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L12)

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

[packages/matter.js/src/time/Time.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L26)

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

[packages/matter.js/src/time/Time.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L21)

___

### now

▸ `Abstract` **now**(): `Date`

#### Returns

`Date`

#### Defined in

[packages/matter.js/src/time/Time.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L14)

___

### nowMs

▸ `Abstract` **nowMs**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/time/Time.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L17)

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

#### Defined in

[packages/matter.js/src/time/Time.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L22)

___

### now

▸ `Static` `Readonly` **now**(): `Date`

#### Returns

`Date`

#### Defined in

[packages/matter.js/src/time/Time.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L15)

___

### nowMs

▸ `Static` `Readonly` **nowMs**(): `number`

#### Returns

`number`

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

#### Defined in

[packages/matter.js/src/time/Time.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/time/Time.ts#L30)
