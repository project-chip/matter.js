[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / FailsafeTimer

# Class: FailsafeTimer

[exports/common](../modules/exports_common.md).FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](../modules/exports_common.FailsafeContext.md).

## Table of contents

### Constructors

- [constructor](exports_common.FailsafeTimer.md#constructor)

### Properties

- [associatedFabric](exports_common.FailsafeTimer.md#associatedfabric)
- [expiryCallback](exports_common.FailsafeTimer.md#expirycallback)
- [failsafeTimer](exports_common.FailsafeTimer.md#failsafetimer)
- [maxCumulativeFailsafeTimer](exports_common.FailsafeTimer.md#maxcumulativefailsafetimer)

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

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:19

## Properties

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:15

___

### expiryCallback

• `Private` `Readonly` **expiryCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:16

___

### failsafeTimer

• **failsafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:17

___

### maxCumulativeFailsafeTimer

• `Private` **maxCumulativeFailsafeTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:18

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:20

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:26

___

### expire

▸ **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:24

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

packages/matter.js/dist/esm/common/FailsafeTimer.d.ts:22
