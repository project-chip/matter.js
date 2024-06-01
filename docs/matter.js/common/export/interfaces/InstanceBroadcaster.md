[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / InstanceBroadcaster

# Interface: InstanceBroadcaster

Interface for classes that allow to announce one Matter instance.

## Methods

### announce()

> **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L203)

***

### close()

> **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L215)

***

### expireAllAnnouncements()

> **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L212)

***

### expireCommissioningAnnouncement()

> **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:209](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L209)

***

### expireFabricAnnouncement()

> **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L206)

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

[packages/matter.js/src/common/InstanceBroadcaster.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L191)

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

[packages/matter.js/src/common/InstanceBroadcaster.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L200)

***

### setFabrics()

> **setFabrics**(`fabrics`, `expireCommissioningAnnouncements`?): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../../../fabric/export/classes/Fabric.md)[] |
| `expireCommissioningAnnouncements`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L197)
