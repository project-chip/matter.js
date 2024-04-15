[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / Time

# Class: Time

[time/export](../modules/time_export.md).Time

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
- [register](time_export.Time.md#register)
- [sleep](time_export.Time.md#sleep)
- [unregister](time_export.Time.md#unregister)

## Constructors

### constructor

• **new Time**(): [`Time`](time_export.Time.md)

#### Returns

[`Time`](time_export.Time.md)

## Properties

### get

▪ `Static` **get**: () => [`Time`](time_export.Time.md)

#### Type declaration

▸ (): [`Time`](time_export.Time.md)

##### Returns

[`Time`](time_export.Time.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L16)

## Methods

### getPeriodicTimer

▸ **getPeriodicTimer**(`name`, `intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L30)

___

### getTimer

▸ **getTimer**(`name`, `durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L25)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Defined in

[packages/matter.js/src/time/Time.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L18)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/time/Time.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L21)

___

### getPeriodicTimer

▸ **getPeriodicTimer**(`name`, `intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L31)

___

### getTimer

▸ **getTimer**(`name`, `durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/time/Time.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L26)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Defined in

[packages/matter.js/src/time/Time.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L19)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/time/Time.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L22)

___

### register

▸ **register**(`timer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timer` | [`Timer`](../interfaces/time_export.Timer.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/time/Time.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L37)

___

### sleep

▸ **sleep**(`name`, `durationMs`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/time/Time.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L34)

___

### unregister

▸ **unregister**(`timer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timer` | [`Timer`](../interfaces/time_export.Timer.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/time/Time.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/time/Time.ts#L42)
