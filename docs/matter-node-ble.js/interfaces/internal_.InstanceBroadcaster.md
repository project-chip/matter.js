[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[\<internal\>](../modules/internal_.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implemented by

- [`BleBroadcaster`](../classes/BleBroadcaster.md)

## Table of contents

### Methods

- [announce](internal_.InstanceBroadcaster.md#announce)
- [close](internal_.InstanceBroadcaster.md#close)
- [expireAllAnnouncements](internal_.InstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](internal_.InstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](internal_.InstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](internal_.InstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](internal_.InstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](internal_.InstanceBroadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:260

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:268

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:266

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:264

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:262

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](internal_.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:251

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/internal_.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:258

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/internal_.Fabric.md)[] |
| `expireCommissioningAnnouncements?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:256
