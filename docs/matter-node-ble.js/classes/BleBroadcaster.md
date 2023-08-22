[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / BleBroadcaster

# Class: BleBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implements

- [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md)

## Table of contents

### Constructors

- [constructor](BleBroadcaster.md#constructor)

### Properties

- [additionalAdvertisementData](BleBroadcaster.md#additionaladvertisementdata)
- [advertise](BleBroadcaster.md#advertise)
- [blenoServer](BleBroadcaster.md#blenoserver)
- [discriminator](BleBroadcaster.md#discriminator)
- [productId](BleBroadcaster.md#productid)
- [vendorId](BleBroadcaster.md#vendorid)

### Methods

- [announce](BleBroadcaster.md#announce)
- [close](BleBroadcaster.md#close)
- [setCommissionMode](BleBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](BleBroadcaster.md#setcommissionerinfo)
- [setFabrics](BleBroadcaster.md#setfabrics)

## Constructors

### constructor

• **new BleBroadcaster**(`blenoServer`, `additionalAdvertisementData?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blenoServer` | [`BlenoBleServer`](internal_.BlenoBleServer.md) |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L26)

## Properties

### additionalAdvertisementData

• `Private` `Optional` `Readonly` **additionalAdvertisementData**: `Uint8Array`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L28)

___

### advertise

• `Private` **advertise**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L24)

___

### blenoServer

• `Private` `Readonly` **blenoServer**: [`BlenoBleServer`](internal_.BlenoBleServer.md)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L27)

___

### discriminator

• `Private` **discriminator**: `undefined` \| `number`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L23)

___

### productId

• `Private` **productId**: `undefined` \| `number`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L22)

___

### vendorId

• `Private` **vendorId**: `undefined` \| [`VendorId`](../modules/internal_.md#vendorid)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L21)

## Methods

### announce

▸ **announce**(): `Promise`<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[announce](../interfaces/internal_.InstanceBroadcaster.md#announce)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L65)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L90)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `«destructured»`): `Promise`<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../modules/internal_.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[setCommissionMode](../interfaces/internal_.InstanceBroadcaster.md#setcommissionmode)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L31)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`_commissionerData`): `Promise`<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_commissionerData` | [`CommissionerInstanceData`](../modules/internal_.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[setCommissionerInfo](../interfaces/internal_.InstanceBroadcaster.md#setcommissionerinfo)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L60)

___

### setFabrics

▸ **setFabrics**(): `Promise`<`void`\>

Set operational details to Announce an operational device which is already commissioned.

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[setFabrics](../interfaces/internal_.InstanceBroadcaster.md#setfabrics)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L53)
