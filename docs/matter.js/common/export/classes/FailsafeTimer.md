[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / FailsafeTimer

# Class: FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](FailsafeContext.md).

## Constructors

### new FailsafeTimer()

> **new FailsafeTimer**(`associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`): [`FailsafeTimer`](FailsafeTimer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`\<`void`\> |

#### Returns

[`FailsafeTimer`](FailsafeTimer.md)

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L25)

## Properties

### #expiryCallback()

> `private` **#expiryCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L21)

***

### #failsafeTimer

> `private` **#failsafeTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L22)

***

### #maxCumulativeFailsafeTimer

> `private` **#maxCumulativeFailsafeTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L23)

***

### associatedFabric

> **associatedFabric**: `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L26)

## Methods

### #startFailsafeTimer()

> `private` **#startFailsafeTimer**(`expiryLengthSeconds`): [`Timer`](../../../time/export/interfaces/Timer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |

#### Returns

[`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L88)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L40)

***

### complete()

> **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L83)

***

### expire()

> **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L77)

***

### reArm()

> **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/FailsafeTimer.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/FailsafeTimer.ts#L50)
