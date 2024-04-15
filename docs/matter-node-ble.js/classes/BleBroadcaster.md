[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / BleBroadcaster

# Class: BleBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implements

- [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md)

## Table of contents

### Constructors

- [constructor](BleBroadcaster.md#constructor)

### Properties

- [#additionalAdvertisementData](BleBroadcaster.md##additionaladvertisementdata)
- [#advertise](BleBroadcaster.md##advertise)
- [#blenoServer](BleBroadcaster.md##blenoserver)
- [#discriminator](BleBroadcaster.md##discriminator)
- [#isClosed](BleBroadcaster.md##isclosed)
- [#productId](BleBroadcaster.md##productid)
- [#vendorId](BleBroadcaster.md##vendorid)

### Methods

- [#assertOpen](BleBroadcaster.md##assertopen)
- [announce](BleBroadcaster.md#announce)
- [close](BleBroadcaster.md#close)
- [expireAllAnnouncements](BleBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](BleBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](BleBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](BleBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](BleBroadcaster.md#setcommissionerinfo)
- [setFabrics](BleBroadcaster.md#setfabrics)

## Constructors

### constructor

• **new BleBroadcaster**(`blenoServer`, `additionalAdvertisementData?`): [`BleBroadcaster`](BleBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blenoServer` | [`BlenoBleServer`](internal_.BlenoBleServer.md) |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

[`BleBroadcaster`](BleBroadcaster.md)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L30)

## Properties

### #additionalAdvertisementData

• `Private` `Optional` **#additionalAdvertisementData**: `Uint8Array`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L23)

___

### #advertise

• `Private` **#advertise**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L27)

___

### #blenoServer

• `Private` **#blenoServer**: [`BlenoBleServer`](internal_.BlenoBleServer.md)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L22)

___

### #discriminator

• `Private` **#discriminator**: `undefined` \| `number`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L26)

___

### #isClosed

• `Private` **#isClosed**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L28)

___

### #productId

• `Private` **#productId**: `undefined` \| `number`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L25)

___

### #vendorId

• `Private` **#vendorId**: `undefined` \| [`VendorId`](../modules/internal_.md#vendorid)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L24)

## Methods

### #assertOpen

▸ **#assertOpen**(): `void`

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L123)

___

### announce

▸ **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[announce](../interfaces/internal_.InstanceBroadcaster.md#announce)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L72)

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[close](../interfaces/internal_.InstanceBroadcaster.md#close)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L114)

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[expireAllAnnouncements](../interfaces/internal_.InstanceBroadcaster.md#expireallannouncements)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L108)

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[expireCommissioningAnnouncement](../interfaces/internal_.InstanceBroadcaster.md#expirecommissioningannouncement)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L98)

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[expireFabricAnnouncement](../interfaces/internal_.InstanceBroadcaster.md#expirefabricannouncement)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L104)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `«destructured»`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../interfaces/internal_.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[setCommissionMode](../interfaces/internal_.InstanceBroadcaster.md#setcommissionmode)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L35)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`_commissionerData`): `Promise`\<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_commissionerData` | [`CommissionerInstanceData`](../modules/internal_.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[setCommissionerInfo](../interfaces/internal_.InstanceBroadcaster.md#setcommissionerinfo)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L66)

___

### setFabrics

▸ **setFabrics**(): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/internal_.InstanceBroadcaster.md).[setFabrics](../interfaces/internal_.InstanceBroadcaster.md#setfabrics)

#### Defined in

[matter-node-ble.js/src/ble/BleBroadcaster.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L58)
