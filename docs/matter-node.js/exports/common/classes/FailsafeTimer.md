[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / FailsafeTimer

# Class: FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](../namespaces/FailsafeContext/README.md).

## Constructors

### new FailsafeTimer()

> **new FailsafeTimer**(`associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`): [`FailsafeTimer`](FailsafeTimer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`\<`void`\> |

#### Returns

[`FailsafeTimer`](FailsafeTimer.md)

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:16

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:14

***

### associatedFabric

> **associatedFabric**: `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:15

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:17

***

### complete()

> **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:23

***

### expire()

> **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:21

***

### reArm()

> **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:19
