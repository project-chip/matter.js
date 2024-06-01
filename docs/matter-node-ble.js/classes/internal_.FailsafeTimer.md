[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FailsafeTimer

# Class: FailsafeTimer

[\<internal\>](../modules/internal_.md).FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](../modules/internal_.FailsafeContext.md).

## Table of contents

### Constructors

- [constructor](internal_.FailsafeTimer.md#constructor)

### Properties

- [#private](internal_.FailsafeTimer.md##private)
- [associatedFabric](internal_.FailsafeTimer.md#associatedfabric)

### Methods

- [close](internal_.FailsafeTimer.md#close)
- [complete](internal_.FailsafeTimer.md#complete)
- [expire](internal_.FailsafeTimer.md#expire)
- [reArm](internal_.FailsafeTimer.md#rearm)

## Constructors

### constructor

• **new FailsafeTimer**(`associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`): [`FailsafeTimer`](internal_.FailsafeTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`\<`void`\> |

#### Returns

[`FailsafeTimer`](internal_.FailsafeTimer.md)

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:16

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:14

___

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:15

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:17

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:23

___

### expire

▸ **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:21

___

### reArm

▸ **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/FailsafeTimer.d.ts:19
