[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

[<internal>](../modules/internal_.md).InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implemented by

- [`BleBroadcaster`](../classes/BleBroadcaster.md)

## Table of contents

### Methods

- [announce](internal_.InstanceBroadcaster.md#announce)
- [setCommissionMode](internal_.InstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](internal_.InstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](internal_.InstanceBroadcaster.md#setfabrics)

## Methods

### announce

▸ **announce**(): `Promise`<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:258

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../modules/internal_.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:252

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/internal_.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:256

___

### setFabrics

▸ **setFabrics**(`fabrics`): `Promise`<`void`\>

Set operational details to Announce an operational device which is already commissioned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../classes/internal_.Fabric.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:254
