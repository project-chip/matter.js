[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / FailsafeTimer

# Class: FailsafeTimer

[common/export](../modules/common_export.md).FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](common_export.FailsafeContext-1.md).

## Table of contents

### Constructors

- [constructor](common_export.FailsafeTimer.md#constructor)

### Properties

- [associatedFabric](common_export.FailsafeTimer.md#associatedfabric)
- [expiryCallback](common_export.FailsafeTimer.md#expirycallback)
- [failsafeTimer](common_export.FailsafeTimer.md#failsafetimer)
- [maxCumulativeFailsafeTimer](common_export.FailsafeTimer.md#maxcumulativefailsafetimer)

### Methods

- [close](common_export.FailsafeTimer.md#close)
- [complete](common_export.FailsafeTimer.md#complete)
- [expire](common_export.FailsafeTimer.md#expire)
- [reArm](common_export.FailsafeTimer.md#rearm)

## Constructors

### constructor

• **new FailsafeTimer**(`associatedFabric`, `expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `expiryCallback`): [`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `expiryCallback` | () => `Promise`\<`void`\> |

#### Returns

[`FailsafeTimer`](common_export.FailsafeTimer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L21)

## Properties

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L22)

___

### expiryCallback

• `Private` `Readonly` **expiryCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L25)

___

### failsafeTimer

• **failsafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L18)

___

### maxCumulativeFailsafeTimer

• `Private` **maxCumulativeFailsafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L19)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L36)

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L81)

___

### expire

▸ **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L75)

___

### reArm

▸ **reArm**(`associatedFabric`, `expiryLengthSeconds`): `Promise`\<`void`\>

Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `expiryLengthSeconds` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/FailsafeTimer.ts#L46)
