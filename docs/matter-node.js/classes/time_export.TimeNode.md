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

## Constructors

### constructor

• **new TimeNode**()

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

[packages/matter-node.js/src/time/TimeNode.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/time/TimeNode.ts#L51)

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

[packages/matter-node.js/src/time/TimeNode.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/time/TimeNode.ts#L47)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time_export.Time.md).[now](time_export.Time.md#now-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/time/TimeNode.ts#L39)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time_export.Time.md).[nowMs](time_export.Time.md#nowms-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/time/TimeNode.ts#L43)
