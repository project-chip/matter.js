[**@project-chip/matter-node-ble.js**](../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../globals.md) / BleBroadcaster

# Class: BleBroadcaster

Interface for classes that allow to announce one Matter instance.

## Implements

- [`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md)

## Constructors

### new BleBroadcaster()

> **new BleBroadcaster**(`blenoServer`, `additionalAdvertisementData`?): [`BleBroadcaster`](BleBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `blenoServer` | [`BlenoBleServer`](../-internal-/classes/BlenoBleServer.md) |
| `additionalAdvertisementData`? | `Uint8Array` |

#### Returns

[`BleBroadcaster`](BleBroadcaster.md)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L30)

## Properties

### #additionalAdvertisementData?

> `private` `optional` **#additionalAdvertisementData**: `Uint8Array`

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L23)

***

### #advertise

> `private` **#advertise**: `boolean` = `false`

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L27)

***

### #blenoServer

> `private` **#blenoServer**: [`BlenoBleServer`](../-internal-/classes/BlenoBleServer.md)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L22)

***

### #discriminator

> `private` **#discriminator**: `undefined` \| `number`

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L26)

***

### #isClosed

> `private` **#isClosed**: `boolean` = `false`

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L28)

***

### #productId

> `private` **#productId**: `undefined` \| `number`

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L25)

***

### #vendorId

> `private` **#vendorId**: `undefined` \| [`VendorId`](../-internal-/README.md#vendorid-1)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L24)

## Methods

### #assertOpen()

> `private` **#assertOpen**(): `void`

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L123)

***

### announce()

> **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`announce`](../-internal-/interfaces/InstanceBroadcaster.md#announce)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L72)

***

### close()

> **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`close`](../-internal-/interfaces/InstanceBroadcaster.md#close)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L114)

***

### expireAllAnnouncements()

> **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`expireAllAnnouncements`](../-internal-/interfaces/InstanceBroadcaster.md#expireallannouncements)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L108)

***

### expireCommissioningAnnouncement()

> **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`expireCommissioningAnnouncement`](../-internal-/interfaces/InstanceBroadcaster.md#expirecommissioningannouncement)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L98)

***

### expireFabricAnnouncement()

> **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`expireFabricAnnouncement`](../-internal-/interfaces/InstanceBroadcaster.md#expirefabricannouncement)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L104)

***

### setCommissionMode()

> **setCommissionMode**(`mode`, `__namedParameters`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | `number` |
| `__namedParameters` | [`CommissioningModeInstanceData`](../-internal-/interfaces/CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`setCommissionMode`](../-internal-/interfaces/InstanceBroadcaster.md#setcommissionmode)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L35)

***

### setCommissionerInfo()

> **setCommissionerInfo**(`_commissionerData`): `Promise`\<`void`\>

Set commissioner details to announce a commissioner service for User directed commissioning (UDC).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_commissionerData` | [`CommissionerInstanceData`](../-internal-/README.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`setCommissionerInfo`](../-internal-/interfaces/InstanceBroadcaster.md#setcommissionerinfo)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L66)

***

### setFabrics()

> **setFabrics**(): `Promise`\<`void`\>

Set operational details to Announce an operational device which is already commissioned.
Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md).[`setFabrics`](../-internal-/interfaces/InstanceBroadcaster.md#setfabrics)

#### Source

[matter-node-ble.js/src/ble/BleBroadcaster.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleBroadcaster.ts#L58)
