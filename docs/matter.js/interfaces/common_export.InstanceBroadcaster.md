[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[common/export](../modules/common_export.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implemented by

- [`MdnsInstanceBroadcaster`](../classes/export._internal_.MdnsInstanceBroadcaster.md)

## Table of contents

### Methods

- [announce](common_export.InstanceBroadcaster.md#announce)
- [expireAllAnnouncements](common_export.InstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](common_export.InstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](common_export.InstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](common_export.InstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](common_export.InstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](common_export.InstanceBroadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `Promise`<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:205

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`<`void`\>

Expire all announcements.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:214

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:211

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:208

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../modules/common_export.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:193

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:202

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/fabric_export.Fabric.md)[] |
| `expireCommissioningAnnouncements?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/common/InstanceBroadcaster.ts:199
