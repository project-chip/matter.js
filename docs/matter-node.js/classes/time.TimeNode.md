[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [time](../modules/time.md) / TimeNode

# Class: TimeNode

[time](../modules/time.md).TimeNode

## Hierarchy

- [`Time`](time.Time.md)

  ↳ **`TimeNode`**

## Table of contents

### Constructors

- [constructor](time.TimeNode.md#constructor)

### Properties

- [get](time.TimeNode.md#get)
- [getPeriodicTimer](time.TimeNode.md#getperiodictimer)
- [getTimer](time.TimeNode.md#gettimer)
- [now](time.TimeNode.md#now)
- [nowMs](time.TimeNode.md#nowms)

### Methods

- [getPeriodicTimer](time.TimeNode.md#getperiodictimer-1)
- [getTimer](time.TimeNode.md#gettimer-1)
- [now](time.TimeNode.md#now-1)
- [nowMs](time.TimeNode.md#nowms-1)

## Constructors

### constructor

• **new TimeNode**()

#### Inherited from

[Time](time.Time.md).[constructor](time.Time.md#constructor)

## Properties

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

[packages/matter-node.js/src/time/TimeNode.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/time/TimeNode.ts#L42)

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

[packages/matter-node.js/src/time/TimeNode.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/time/TimeNode.ts#L38)

___

### now

▸ **now**(): `Date`

#### Returns

`Date`

#### Overrides

[Time](time.Time.md).[now](time.Time.md#now-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/time/TimeNode.ts#L30)

___

### nowMs

▸ **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[Time](time.Time.md).[nowMs](time.Time.md#nowms-1)

#### Defined in

[packages/matter-node.js/src/time/TimeNode.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/time/TimeNode.ts#L34)
