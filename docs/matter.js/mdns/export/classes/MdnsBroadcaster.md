[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [mdns/export](../README.md) / MdnsBroadcaster

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L77)

## Properties

### #activeCommissioningAnnouncements

> `private` `readonly` **#activeCommissioningAnnouncements**: `Set`\<`number`\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L61)

***

### #activeOperationalAnnouncements

> `private` `readonly` **#activeOperationalAnnouncements**: `Map`\<`number`, [`FabricIndex`](../../../datatype/export/README.md#fabricindex)[]\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L62)

***

### #enableIpv4?

> `private` `optional` `readonly` **#enableIpv4**: `boolean`

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L65)

***

### #instances

> `private` `readonly` **#instances**: [`BasicSet`](../../../util/export/classes/BasicSet.md)\<[`MdnsInstanceBroadcaster`](../../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md), [`MdnsInstanceBroadcaster`](../../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md)\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L66)

***

### #mdnsServer

> `private` `readonly` **#mdnsServer**: [`MdnsServer`](MdnsServer.md)

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L64)

***

### #network

> `private` `readonly` **#network**: [`Network`](../../../net/export/classes/Network.md)

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L63)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:344](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L344)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:373](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L373)

***

### createInstanceBroadcaster()

> **createInstanceBroadcaster**(`port`): [`MdnsInstanceBroadcaster`](../../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

[`MdnsInstanceBroadcaster`](../../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md)

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L83)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L362)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:355](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L355)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:348](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L348)

***

### getIpRecords()

> `private` **getIpRecords**(`hostname`, `ips`): [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hostname` | `string` |
| `ips` | `string`[] |

#### Returns

[`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L116)

***

### setCommissionMode()

> **setCommissionMode**(`announcedNetPort`, `mode`, `__namedParameters`): `Promise`\<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `__namedParameters` | [`CommissioningModeInstanceData`](../../../common/export/interfaces/CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L133)

***

### setCommissionerInfo()

> **setCommissionerInfo**(`announcedNetPort`, `__namedParameters`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `__namedParameters` | [`CommissionerInstanceData`](../../../common/export/README.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L286)

***

### setFabrics()

> **setFabrics**(`announcedNetPort`, `fabrics`, `__namedParameters`): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](../../../fabric/export/classes/Fabric.md)[] |
| `__namedParameters` | [`OperationalInstanceData`](../../../common/export/README.md#operationalinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L219)

***

### validatePairingInstructions()

> **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L92)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L68)
