[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Methods

### announce()

> **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:260

***

### close()

> **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:268

***

### expireAllAnnouncements()

> **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:266

***

### expireCommissioningAnnouncement()

> **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:264

***

### expireFabricAnnouncement()

> **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:262

***

### setCommissionMode()

> **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:251

***

### setCommissionerInfo()

> **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../README.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:258

***

### setFabrics()

> **setFabrics**(`fabrics`, `expireCommissioningAnnouncements`?): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../../fabric/classes/Fabric.md)[] |
| `expireCommissioningAnnouncements`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:256
