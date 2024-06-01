[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [time/export](../README.md) / Time

# Class: `abstract` Time

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

[packages/matter.js/src/time/Time.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L16)

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

[packages/matter.js/src/time/Time.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L30)

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

[packages/matter.js/src/time/Time.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L25)

***

### now()

> `abstract` **now**(): `Date`

#### Returns

`Date`

#### Source

[packages/matter.js/src/time/Time.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L18)

***

### nowMs()

> `abstract` **nowMs**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/time/Time.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L21)

***

### getPeriodicTimer()

> `static` `readonly` **getPeriodicTimer**(`name`, `intervalMs`, `callback`): [`Timer`](../interfaces/Timer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `intervalMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Source

[packages/matter.js/src/time/Time.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L31)

***

### getTimer()

> `static` `readonly` **getTimer**(`name`, `durationMs`, `callback`): [`Timer`](../interfaces/Timer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |
| `callback` | [`TimerCallback`](../README.md#timercallback) |

#### Returns

[`Timer`](../interfaces/Timer.md)

#### Source

[packages/matter.js/src/time/Time.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L26)

***

### now()

> `static` `readonly` **now**(): `Date`

#### Returns

`Date`

#### Source

[packages/matter.js/src/time/Time.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L19)

***

### nowMs()

> `static` `readonly` **nowMs**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/time/Time.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L22)

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

[packages/matter.js/src/time/Time.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L37)

***

### sleep()

> `static` `readonly` **sleep**(`name`, `durationMs`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `durationMs` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/time/Time.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L34)

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

[packages/matter.js/src/time/Time.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/time/Time.ts#L42)
