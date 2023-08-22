[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[common/export](../modules/common_export.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implemented by

- [`MdnsInstanceBroadcaster`](../classes/export._internal_.MdnsInstanceBroadcaster.md)

## Table of contents

### Methods

- [announce](common_export.InstanceBroadcaster.md#announce)
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

[packages/matter.js/src/common/InstanceBroadcaster.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L202)

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

[packages/matter.js/src/common/InstanceBroadcaster.ts:193](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L193)

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

[packages/matter.js/src/common/InstanceBroadcaster.ts:199](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L199)

___

### setFabrics

▸ **setFabrics**(`fabrics`): `Promise`<`void`\>

Set operational details to Announce an operational device which is already commissioned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/fabric_export.Fabric.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:196](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L196)
