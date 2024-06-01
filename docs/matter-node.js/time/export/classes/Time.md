[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [time/export](../README.md) / Time

# Class: `abstract` Time

## Extended by

- [`TimeNode`](TimeNode.md)

## Constructors

### new Time()

> **new Time**(): [`Time`](Time.md)

#### Returns

[`Time`](Time.md)

## Properties

### get()

> `static` **get**: () => [`Time`](Time.md)

#### Returns

[`Time`](Time.md)

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

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:16

***

### now()

> `static` `readonly` **now**: () => `Date`

#### Returns

`Date`

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:11

***

### nowMs()

> `static` `readonly` **nowMs**: () => `number`

#### Returns

`number`

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

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:20

## Methods

### getPeriodicTimer()

> `abstract` **getPeriodicTimer**(`name`, `intervalMs`, `callback`): [`Timer`](../interfaces/Timer.md)

Returns a timer that will periodically call callback at intervalMs intervals.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:18

***

### getTimer()

> `abstract` **getTimer**(`name`, `durationMs`, `callback`): [`Timer`](../interfaces/Timer.md)

Returns a timer that will call callback after durationMs has passed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:15

***

### now()

> `abstract` **now**(): `Date`

#### Returns

`Date`

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:10

***

### nowMs()

> `abstract` **nowMs**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:12

***

### register()

> `static` **register**(`timer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timer` | [`Timer`](../interfaces/Timer.md) |

#### Returns

`void`

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

#### Source

packages/matter.js/dist/esm/time/Time.d.ts:22
