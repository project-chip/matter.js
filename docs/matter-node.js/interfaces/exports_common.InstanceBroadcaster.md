[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[exports/common](../modules/exports_common.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implemented by

- [`MdnsInstanceBroadcaster`](../classes/exports_mdns._internal_.MdnsInstanceBroadcaster.md)

## Table of contents

### Methods

- [announce](exports_common.InstanceBroadcaster.md#announce)
- [close](exports_common.InstanceBroadcaster.md#close)
- [expireAllAnnouncements](exports_common.InstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](exports_common.InstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](exports_common.InstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](exports_common.InstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](exports_common.InstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](exports_common.InstanceBroadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:260

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:268

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:266

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:264

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:262

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](exports_common.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:251

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/exports_common.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:258

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/exports_fabric.Fabric.md)[] |
| `expireCommissioningAnnouncements?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:256
