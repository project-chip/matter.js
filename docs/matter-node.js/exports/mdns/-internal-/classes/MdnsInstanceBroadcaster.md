[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/mdns](../../README.md) / [\<internal\>](../README.md) / MdnsInstanceBroadcaster

# Class: MdnsInstanceBroadcaster

This class is handing MDNS Announcements for one instance of a device aka "port".

Obtain an instance via [MdnsBroadcaster.createInstanceBroadcaster](../../classes/MdnsBroadcaster.md#createinstancebroadcaster).

## Implements

- [`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md)

## Constructors

### new MdnsInstanceBroadcaster()

> **new MdnsInstanceBroadcaster**(`instancePort`, `mdnsBroadcaster`, `onclose`): [`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `instancePort` | `number` |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](../../classes/MdnsBroadcaster.md) |
| `onclose` | () => `void` |

#### Returns

[`MdnsInstanceBroadcaster`](MdnsInstanceBroadcaster.md)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:16

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:15

## Methods

### announce()

> **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`announce`](../../../common/interfaces/InstanceBroadcaster.md#announce)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:23

***

### close()

> **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`close`](../../../common/interfaces/InstanceBroadcaster.md#close)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:17

***

### expireAllAnnouncements()

> **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`expireAllAnnouncements`](../../../common/interfaces/InstanceBroadcaster.md#expireallannouncements)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:26

***

### expireCommissioningAnnouncement()

> **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`expireCommissioningAnnouncement`](../../../common/interfaces/InstanceBroadcaster.md#expirecommissioningannouncement)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:25

***

### expireFabricAnnouncement()

> **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`expireFabricAnnouncement`](../../../common/interfaces/InstanceBroadcaster.md#expirefabricannouncement)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:24

***

### setCommissionMode()

> **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../../../common/interfaces/CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`setCommissionMode`](../../../common/interfaces/InstanceBroadcaster.md#setcommissionmode)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:18

***

### setCommissionerInfo()

> **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../../../common/README.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`setCommissionerInfo`](../../../common/interfaces/InstanceBroadcaster.md#setcommissionerinfo)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:22

***

### setFabrics()

> **setFabrics**(`fabrics`, `expireCommissioningAnnouncements`?): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../../../fabric/classes/Fabric.md)[] |
| `expireCommissioningAnnouncements`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md).[`setFabrics`](../../../common/interfaces/InstanceBroadcaster.md#setfabrics)

#### Source

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:20
