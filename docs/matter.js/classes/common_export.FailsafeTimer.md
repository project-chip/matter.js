[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / FailsafeTimer

# Class: FailsafeTimer

[common/export](../modules/common_export.md).FailsafeTimer

Manages the failsafe timer associated with a [FailsafeContext](common_export.FailsafeContext-1.md).

## Table of contents

### Constructors

- [constructor](common_export.FailsafeTimer.md#constructor)

### Properties

- [#expiryCallback](common_export.FailsafeTimer.md##expirycallback)
- [#failsafeTimer](common_export.FailsafeTimer.md##failsafetimer)
- [#maxCumulativeFailsafeTimer](common_export.FailsafeTimer.md##maxcumulativefailsafetimer)
- [associatedFabric](common_export.FailsafeTimer.md#associatedfabric)

### Methods

- [#startFailsafeTimer](common_export.FailsafeTimer.md##startfailsafetimer)
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

[packages/matter.js/src/common/FailsafeTimer.ts:25](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L25)

## Properties

### #expiryCallback

• `Private` **#expiryCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:21](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L21)

___

### #failsafeTimer

• `Private` **#failsafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:22](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L22)

___

### #maxCumulativeFailsafeTimer

• `Private` **#maxCumulativeFailsafeTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:23](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L23)

___

### associatedFabric

• **associatedFabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:26](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L26)

## Methods

### #startFailsafeTimer

▸ **#startFailsafeTimer**(`expiryLengthSeconds`): [`Timer`](../interfaces/time_export.Timer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |

#### Returns

[`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:88](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L88)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:40](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L40)

___

### complete

▸ **complete**(): `void`

Complete the FailSafe context. This is called when the commissioning is completed.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:83](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L83)

___

### expire

▸ **expire**(): `Promise`\<`void`\>

Expire the FailSafe context. This is called by the timer and can also be called manually if needed.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/FailsafeTimer.ts:77](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L77)

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

[packages/matter.js/src/common/FailsafeTimer.ts:50](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/common/FailsafeTimer.ts#L50)
