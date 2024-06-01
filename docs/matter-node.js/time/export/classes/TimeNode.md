[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [time/export](../README.md) / TimeNode

# Class: TimeNode

## Extends

- [`Time`](Time.md)

## Constructors

### new TimeNode()

> **new TimeNode**(): [`TimeNode`](TimeNode.md)

#### Returns

[`TimeNode`](TimeNode.md)

#### Inherited from

[`Time`](Time.md).[`constructor`](Time.md#constructors)

## Properties

### get()

> `static` **get**: () => [`Time`](Time.md)

#### Returns

[`Time`](Time.md)

#### Inherited from

[`Time`](Time.md).[`get`](Time.md#get)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:9

***

### getPeriodicTimer()

> `static` `readonly` **getPeriodicTimer**: (`name`, `intervalMs`, `callback`) => [`Timer`](../interfaces/Timer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Inherited from

[`Time`](Time.md).[`getPeriodicTimer`](Time.md#getperiodictimer)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:19

***

### getTimer()

> `static` `readonly` **getTimer**: (`name`, `durationMs`, `callback`) => [`Timer`](../interfaces/Timer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Inherited from

[`Time`](Time.md).[`getTimer`](Time.md#gettimer)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:16

***

### now()

> `static` `readonly` **now**: () => `Date`

#### Returns

`Date`

#### Inherited from

[`Time`](Time.md).[`now`](Time.md#now)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:11

***

### nowMs()

> `static` `readonly` **nowMs**: () => `number`

#### Returns

`number`

#### Inherited from

[`Time`](Time.md).[`nowMs`](Time.md#nowms)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:13

***

### sleep()

> `static` `readonly` **sleep**: (`name`, `durationMs`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Time`](Time.md).[`sleep`](Time.md#sleep)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:20

## Methods

### getPeriodicTimer()

> **getPeriodicTimer**(`name`, `intervalMs`, `callback`): [`Timer`](../interfaces/Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Overrides

[`Time`](Time.md).[`getPeriodicTimer`](Time.md#getperiodictimer-1)

#### Source

[packages/matter-node.js/src/time/TimeNode.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/time/TimeNode.ts#L85)

***

### getTimer()

> **getTimer**(`name`, `durationMs`, `callback`): [`Timer`](../interfaces/Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Overrides

[`Time`](Time.md).[`getTimer`](Time.md#gettimer-1)

#### Source

[packages/matter-node.js/src/time/TimeNode.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/time/TimeNode.ts#L81)

***

### now()

> **now**(): `Date`

#### Returns

`Date`

#### Overrides

[`Time`](Time.md).[`now`](Time.md#now-1)

#### Source

[packages/matter-node.js/src/time/TimeNode.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/time/TimeNode.ts#L73)

***

### nowMs()

> **nowMs**(): `number`

#### Returns

`number`

#### Overrides

[`Time`](Time.md).[`nowMs`](Time.md#nowms-1)

#### Source

[packages/matter-node.js/src/time/TimeNode.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/time/TimeNode.ts#L77)

***

### register()

> `static` **register**(`timer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timer` | [`Timer`](../interfaces/Timer.md) |

#### Returns

`void`

#### Inherited from

[`Time`](Time.md).[`register`](Time.md#register)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:21

***

### unregister()

> `static` **unregister**(`timer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timer` | [`Timer`](../interfaces/Timer.md) |

#### Returns

`void`

#### Inherited from

[`Time`](Time.md).[`unregister`](Time.md#unregister)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:22
