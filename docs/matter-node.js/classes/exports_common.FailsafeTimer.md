[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / FailsafeTimer

# Class: FailsafeTimer

[exports/common](../modules/exports_common.md).FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](../modules/exports_common.FailsafeContext.md).

## Table of contents

### Constructors

- [constructor](exports_common.FailsafeTimer.md#constructor)

### Properties

- [#private](exports_common.FailsafeTimer.md##private)
- [associatedFabric](exports_common.FailsafeTimer.md#associatedfabric)

### Methods

- [close](exports_common.FailsafeTimer.md#close)
- [complete](exports_common.FailsafeTimer.md#complete)
- [expire](exports_common.FailsafeTimer.md#expire)
- [reArm](exports_common.FailsafeTimer.md#rearm)

## Constructors

### constructor

• **new FailsafeTimer**(`associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`): [`FailsafeTimer`](exports_common.FailsafeTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`\<`void`\> |

#### Returns

[`FailsafeTimer`](exports_common.FailsafeTimer.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:16

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:14

___

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:15

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:17

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:23

___

### expire

▸ **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:21

___

### reArm

▸ **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:19
