[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [mdns/export](../README.md) / MdnsServer

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

[packages/matter.js/src/mdns/MdnsServer.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L66)

## Properties

### multicastServer

> `private` `readonly` **multicastServer**: [`UdpMulticastServer`](../../../net/export/classes/UdpMulticastServer.md)

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L68)

***

### netInterface

> `private` `readonly` **netInterface**: `undefined` \| `string`

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L69)

***

### network

> `private` `readonly` **network**: [`Network`](../../../net/export/classes/Network.md)

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L67)

***

### recordLastSentAsMulticastAnswer

> `private` `readonly` **recordLastSentAsMulticastAnswer**: `Map`\<`string`, `number`\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L64)

***

### records

> `private` `readonly` **records**: [`Cache`](../../../util/export/classes/Cache.md)\<`Map`\<`string`, [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]\>\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L53)

***

### recordsGenerator

> `private` **recordsGenerator**: `Map`\<`string`, (`netInterface`) => [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L52)

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

[packages/matter.js/src/mdns/MdnsServer.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L234)

***

### announceRecordsForInterface()

> `private` **announceRecordsForInterface**(`netInterface`, `records`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `records` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L170)

***

### buildDnsRecordKey()

> **buildDnsRecordKey**(`record`, `netInterface`?): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\> |
| `netInterface`? | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L76)

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

[packages/matter.js/src/mdns/MdnsServer.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L80)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:298](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L298)

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

[packages/matter.js/src/mdns/MdnsServer.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L249)

***

### getMulticastInterfacesForAnnounce()

> `private` **getMulticastInterfacesForAnnounce**(): [`NetworkInterface`](../../../net/export/README.md#networkinterface)[]

#### Returns

[`NetworkInterface`](../../../net/export/README.md#networkinterface)[]

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:304](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L304)

***

### handleDnsMessage()

> `private` **handleDnsMessage**(`messageBytes`, `remoteIp`, `netInterface`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L88)

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

[packages/matter.js/src/mdns/MdnsServer.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L84)

***

### queryRecords()

> `private` **queryRecords**(`__namedParameters`, `records`): [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.recordType` | [`DnsRecordType`](../../../codec/export/enumerations/DnsRecordType.md) |
| `records` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |

#### Returns

[`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:308](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L308)

***

### sendRecords()

> `private` **sendRecords**(`dnsMessageData`, `netInterface`, `unicastTarget`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dnsMessageData` | `Partial`\<[`DnsMessage`](../../../codec/export/README.md#dnsmessage)\> |
| `netInterface` | `string` |
| `unicastTarget`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L184)

***

### setRecordsGenerator()

> **setRecordsGenerator**(`hostPort`, `type`, `generator`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `type` | [`AnnouncementType`](../enumerations/AnnouncementType.md) |
| `generator` | (`netInterface`) => [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:288](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L288)

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

[packages/matter.js/src/mdns/MdnsServer.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L37)
