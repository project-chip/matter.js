[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / MdnsInstanceBroadcaster

# Class: MdnsInstanceBroadcaster

This class is handing MDNS Announcements for one instance of a device aka "port".

Obtain an instance via [MdnsBroadcaster.createInstanceBroadcaster](../../../../mdns/export/classes/MdnsBroadcaster.md#createinstancebroadcaster).

## Implements

- [`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md)

## Constructors

### new MdnsInstanceBroadcaster()

> **new MdnsInstanceBroadcaster**(`instancePort`, `mdnsBroadcaster`, `onclose`): [`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `instancePort` | `number` |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](../../../../mdns/export/classes/MdnsBroadcaster.md) |
| `onclose` | () => `void` |

#### Returns

[`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L27)

## Properties

### #instancePort

> `private` `readonly` **#instancePort**: `number`

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L22)

***

### #isClosed

> `private` **#isClosed**: `boolean` = `false`

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L25)

***

### #mdnsBroadcaster

> `private` `readonly` **#mdnsBroadcaster**: [`MdnsBroadcaster`](../../../../mdns/export/classes/MdnsBroadcaster.md)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L23)

***

### #onclose()

> `private` `readonly` **#onclose**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L24)

## Methods

### #assertOpen()

> `private` **#assertOpen**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L83)

***

### announce()

> **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`announce`](../../../../common/export/interfaces/InstanceBroadcaster.md#announce)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L63)

***

### close()

> **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`close`](../../../../common/export/interfaces/InstanceBroadcaster.md#close)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L33)

***

### expireAllAnnouncements()

> **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`expireAllAnnouncements`](../../../../common/export/interfaces/InstanceBroadcaster.md#expireallannouncements)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L78)

***

### expireCommissioningAnnouncement()

> **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`expireCommissioningAnnouncement`](../../../../common/export/interfaces/InstanceBroadcaster.md#expirecommissioningannouncement)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L73)

***

### expireFabricAnnouncement()

> **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`expireFabricAnnouncement`](../../../../common/export/interfaces/InstanceBroadcaster.md#expirefabricannouncement)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L68)

***

### setCommissionMode()

> **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../../../../common/export/interfaces/CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`setCommissionMode`](../../../../common/export/interfaces/InstanceBroadcaster.md#setcommissionmode)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L43)

***

### setCommissionerInfo()

> **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../../../../common/export/README.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`setCommissionerInfo`](../../../../common/export/interfaces/InstanceBroadcaster.md#setcommissionerinfo)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L58)

***

### setFabrics()

> **setFabrics**(`fabrics`, `expireCommissioningAnnouncements`): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](../../../../fabric/export/classes/Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncements` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../../common/export/interfaces/InstanceBroadcaster.md).[`setFabrics`](../../../../common/export/interfaces/InstanceBroadcaster.md#setfabrics)

#### Source

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L49)
