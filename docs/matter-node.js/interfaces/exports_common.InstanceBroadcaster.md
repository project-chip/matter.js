[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[exports/common](../modules/exports_common.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Table of contents

### Methods

- [announce](exports_common.InstanceBroadcaster.md#announce)
- [setCommissionMode](exports_common.InstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](exports_common.InstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](exports_common.InstanceBroadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `Promise`<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:258

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../modules/exports_common.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:252

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/exports_common.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:256

___

### setFabrics

▸ **setFabrics**(`fabrics`): `Promise`<`void`\>

Set operational details to Announce an operational device which is already commissioned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/exports_fabric.Fabric.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:254
