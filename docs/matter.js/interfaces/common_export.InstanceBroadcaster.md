[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[common/export](../modules/common_export.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implemented by

- [`MdnsInstanceBroadcaster`](../classes/node_export._internal_.MdnsInstanceBroadcaster.md)

## Table of contents

### Methods

- [announce](common_export.InstanceBroadcaster.md#announce)
- [close](common_export.InstanceBroadcaster.md#close)
- [expireAllAnnouncements](common_export.InstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](common_export.InstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](common_export.InstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](common_export.InstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](common_export.InstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](common_export.InstanceBroadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L203)

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L215)

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L212)

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L209)

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L206)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](common_export.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L191)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L200)

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/fabric_export.Fabric.md)[] |
| `expireCommissioningAnnouncements?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L197)
