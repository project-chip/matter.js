[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/mdns](../README.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Constructors

### new MdnsBroadcaster()

> **new MdnsBroadcaster**(`network`, `mdnsServer`, `enableIpv4`?): [`MdnsBroadcaster`](MdnsBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](../../../net/export/classes/Network.md) |
| `mdnsServer` | [`MdnsServer`](MdnsServer.md) |
| `enableIpv4`? | `boolean` |

#### Returns

[`MdnsBroadcaster`](MdnsBroadcaster.md)

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:21

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:16

***

### getIpRecords

> `private` **getIpRecords**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:24

## Methods

### announce()

> **announce**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:31

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:35

***

### createInstanceBroadcaster()

> **createInstanceBroadcaster**(`port`): [`MdnsInstanceBroadcaster`](../-internal-/classes/MdnsInstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

[`MdnsInstanceBroadcaster`](../-internal-/classes/MdnsInstanceBroadcaster.md)

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:22

***

### expireAllAnnouncements()

> **expireAllAnnouncements**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:34

***

### expireCommissioningAnnouncement()

> **expireCommissioningAnnouncement**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:33

***

### expireFabricAnnouncement()

> **expireFabricAnnouncement**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:32

***

### setCommissionMode()

> **setCommissionMode**(`announcedNetPort`, `mode`, `__namedParameters`): `Promise`\<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `__namedParameters` | [`CommissioningModeInstanceData`](../../common/interfaces/CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:26

***

### setCommissionerInfo()

> **setCommissionerInfo**(`announcedNetPort`, `__namedParameters`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `__namedParameters` | [`CommissionerInstanceData`](../../common/README.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:30

***

### setFabrics()

> **setFabrics**(`announcedNetPort`, `fabrics`, `__namedParameters`?): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](../../fabric/classes/Fabric.md)[] |
| `__namedParameters`? | [`OperationalInstanceData`](../../common/README.md#operationalinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:28

***

### validatePairingInstructions()

> **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`object`\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:23

***

### create()

> `static` **create**(`network`, `options`?): `Promise`\<[`MdnsBroadcaster`](MdnsBroadcaster.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](../../../net/export/classes/Network.md) |
| `options`? | `object` |
| `options.enableIpv4`? | `boolean` |
| `options.multicastInterface`? | `string` |

#### Returns

`Promise`\<[`MdnsBroadcaster`](MdnsBroadcaster.md)\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:17
