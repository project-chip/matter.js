[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/mdns](../README.md) / MdnsServer

# Class: MdnsServer

## Constructors

### new MdnsServer()

> **new MdnsServer**(`network`, `multicastServer`, `netInterface`): [`MdnsServer`](MdnsServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](../../../net/export/classes/Network.md) |
| `multicastServer` | [`UdpMulticastServer`](../../../net/export/classes/UdpMulticastServer.md) |
| `netInterface` | `undefined` \| `string` |

#### Returns

[`MdnsServer`](MdnsServer.md)

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:27

## Properties

### announceRecordsForInterface

> `private` **announceRecordsForInterface**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:32

***

### getMulticastInterfacesForAnnounce

> `private` **getMulticastInterfacesForAnnounce**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:38

***

### handleDnsMessage

> `private` **handleDnsMessage**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:31

***

### multicastServer

> `private` `readonly` **multicastServer**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:18

***

### netInterface

> `private` `readonly` **netInterface**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:19

***

### network

> `private` `readonly` **network**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:17

***

### queryRecords

> `private` **queryRecords**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:39

***

### recordLastSentAsMulticastAnswer

> `private` `readonly` **recordLastSentAsMulticastAnswer**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:26

***

### records

> `private` `readonly` **records**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:25

***

### recordsGenerator

> `private` **recordsGenerator**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:24

***

### sendRecords

> `private` **sendRecords**: `any`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:33

## Methods

### announce()

> **announce**(`announcedNetPort`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:34

***

### buildDnsRecordKey()

> **buildDnsRecordKey**(`record`, `netInterface`?): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../../codec/README.md#dnsrecordt)\<`any`\> |
| `netInterface`? | `string` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:28

***

### buildTypePortKey()

> **buildTypePortKey**(`type`, `port`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`AnnouncementType`](../enumerations/AnnouncementType.md) |
| `port` | `number` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:29

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:37

***

### expireAnnouncements()

> **expireAnnouncements**(`announcedNetPort`?, `type`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announcedNetPort`? | `number` |
| `type`? | [`AnnouncementType`](../enumerations/AnnouncementType.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:35

***

### isKeyForPort()

> **isKeyForPort**(`key`, `port`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `port` | `number` |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:30

***

### setRecordsGenerator()

> **setRecordsGenerator**(`hostPort`, `type`, `generator`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `type` | [`AnnouncementType`](../enumerations/AnnouncementType.md) |
| `generator` | (`netInterface`) => [`DnsRecord`](../../codec/README.md#dnsrecordt)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:36

***

### create()

> `static` **create**(`network`, `options`?): `Promise`\<[`MdnsServer`](MdnsServer.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](../../../net/export/classes/Network.md) |
| `options`? | `object` |
| `options.enableIpv4`? | `boolean` |
| `options.netInterface`? | `string` |

#### Returns

`Promise`\<[`MdnsServer`](MdnsServer.md)\>

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:20
