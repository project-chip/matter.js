[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time/export](../modules/time_export.md) / TimeNode

# Class: TimeNode

[time/export](../modules/time_export.md).TimeNode

## Hierarchy

- [`Time`](time_export.Time.md)

  ↳ **`TimeNode`**

## Table of contents

### Constructors

- [constructor](time_export.TimeNode.md#constructor)

### Properties

- [get](time_export.TimeNode.md#get)
- [getPeriodicTimer](time_export.TimeNode.md#getperiodictimer)
- [getTimer](time_export.TimeNode.md#gettimer)
- [now](time_export.TimeNode.md#now)
- [nowMs](time_export.TimeNode.md#nowms)
- [sleep](time_export.TimeNode.md#sleep)

### Methods

- [getPeriodicTimer](time_export.TimeNode.md#getperiodictimer-1)
- [getTimer](time_export.TimeNode.md#gettimer-1)
- [now](time_export.TimeNode.md#now-1)
- [nowMs](time_export.TimeNode.md#nowms-1)
- [register](time_export.TimeNode.md#register)
- [unregister](time_export.TimeNode.md#unregister)

## Constructors

### constructor

• **new TimeNode**(): [`TimeNode`](time_export.TimeNode.md)

#### Returns

[`TimeNode`](time_export.TimeNode.md)

#### Inherited from

[Time](time_export.Time.md).[constructor](time_export.Time.md#constructor)

## Properties

### get

▪ `Static` **get**: () => [`Time`](time_export.Time.md)

#### Type declaration

▸ (): [`Time`](time_export.Time.md)

##### Returns

[`Time`](time_export.Time.md)

#### Inherited from

[Time](time_export.Time.md).[get](time_export.Time.md#get)

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

#### Inherited from

[Time](time_export.Time.md).[getPeriodicTimer](time_export.Time.md#getperiodictimer)

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

#### Inherited from

[Time](time_export.Time.md).[getTimer](time_export.Time.md#gettimer)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:16

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

packages/matter.js/dist/esm/time/Time.d.ts:11

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

#### Inherited from

[Time](time_export.Time.md).[sleep](time_export.Time.md#sleep)

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

#### Overrides

[Time](time_export.Time.md).[getPeriodicTimer](time_export.Time.md#getperiodictimer-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/time/TimeNode.ts#L85)

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

#### Overrides

[Time](time_export.Time.md).[getTimer](time_export.Time.md#gettimer-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/time/TimeNode.ts#L81)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time_export.Time.md).[now](time_export.Time.md#now-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/time/TimeNode.ts#L73)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time_export.Time.md).[nowMs](time_export.Time.md#nowms-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/time/TimeNode.ts#L77)

___

### register

▸ **register**(`timer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timer` | [`Timer`](../interfaces/time_export.Timer.md) |

#### Returns

`void`

#### Inherited from

[Time](time_export.Time.md).[register](time_export.Time.md#register)

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

#### Inherited from

[Time](time_export.Time.md).[unregister](time_export.Time.md#unregister)

#### Defined in

packages/matter.js/dist/esm/time/Time.d.ts:22
