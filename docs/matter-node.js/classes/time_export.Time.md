[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / Time

# Class: Time

[time/export](../modules/time_export.md).Time

## Hierarchy

- **`Time`**

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
- [register](time_export.Time.md#register)
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

packages/matter.js/dist/esm/time/Time.d.ts:9

___

### getPeriodicTimer

▪ `Static` `Readonly` **getPeriodicTimer**: (`name`: `string`, `intervalMs`: `number`, `callback`: [`TimerCallback`](../modules/time_export.md#timercallback)) => [`Timer`](../interfaces/time_export.Timer.md)

#### Type declaration

▸ (`name`, `intervalMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

##### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:19

___

### getTimer

▪ `Static` `Readonly` **getTimer**: (`name`: `string`, `durationMs`: `number`, `callback`: [`TimerCallback`](../modules/time_export.md#timercallback)) => [`Timer`](../interfaces/time_export.Timer.md)

#### Type declaration

▸ (`name`, `durationMs`, `callback`): [`Timer`](../interfaces/time_export.Timer.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../modules/time_export.md#timercallback) |

##### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:16

___

### now

▪ `Static` `Readonly` **now**: () => `Date`

#### Type declaration

▸ (): `Date`

##### Returns

`Date`

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:11

___

### nowMs

▪ `Static` `Readonly` **nowMs**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:13

___

### sleep

▪ `Static` `Readonly` **sleep**: (`name`: `string`, `durationMs`: `number`) => `Promise`\<`void`\>

#### Type declaration

▸ (`name`, `durationMs`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |

##### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:20

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

packages/matter.js/dist/esm/time/Time.d.ts:18

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

packages/matter.js/dist/esm/time/Time.d.ts:15

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:10

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:12

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

packages/matter.js/dist/esm/time/Time.d.ts:21

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

packages/matter.js/dist/esm/time/Time.d.ts:22
