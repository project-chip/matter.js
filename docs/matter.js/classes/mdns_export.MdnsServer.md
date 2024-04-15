[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns/export](../modules/mdns_export.md) / MdnsServer

# Class: MdnsServer

[mdns/export](../modules/mdns_export.md).MdnsServer

## Table of contents

### Constructors

- [constructor](mdns_export.MdnsServer.md#constructor)

### Properties

- [multicastServer](mdns_export.MdnsServer.md#multicastserver)
- [netInterface](mdns_export.MdnsServer.md#netinterface)
- [network](mdns_export.MdnsServer.md#network)
- [recordLastSentAsMulticastAnswer](mdns_export.MdnsServer.md#recordlastsentasmulticastanswer)
- [records](mdns_export.MdnsServer.md#records)
- [recordsGenerator](mdns_export.MdnsServer.md#recordsgenerator)

### Methods

- [announce](mdns_export.MdnsServer.md#announce)
- [announceRecordsForInterface](mdns_export.MdnsServer.md#announcerecordsforinterface)
- [buildDnsRecordKey](mdns_export.MdnsServer.md#builddnsrecordkey)
- [buildTypePortKey](mdns_export.MdnsServer.md#buildtypeportkey)
- [close](mdns_export.MdnsServer.md#close)
- [expireAnnouncements](mdns_export.MdnsServer.md#expireannouncements)
- [getMulticastInterfacesForAnnounce](mdns_export.MdnsServer.md#getmulticastinterfacesforannounce)
- [handleDnsMessage](mdns_export.MdnsServer.md#handlednsmessage)
- [isKeyForPort](mdns_export.MdnsServer.md#iskeyforport)
- [queryRecords](mdns_export.MdnsServer.md#queryrecords)
- [sendRecords](mdns_export.MdnsServer.md#sendrecords)
- [setRecordsGenerator](mdns_export.MdnsServer.md#setrecordsgenerator)
- [create](mdns_export.MdnsServer.md#create)

## Constructors

### constructor

• **new MdnsServer**(`network`, `multicastServer`, `netInterface`): [`MdnsServer`](mdns_export.MdnsServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |
| `netInterface` | `undefined` \| `string` |

#### Returns

[`MdnsServer`](mdns_export.MdnsServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L66)

## Properties

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net_export.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L68)

___

### netInterface

• `Private` `Readonly` **netInterface**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L69)

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L67)

___

### recordLastSentAsMulticastAnswer

• `Private` `Readonly` **recordLastSentAsMulticastAnswer**: `Map`\<`string`, `number`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L64)

___

### records

• `Private` `Readonly` **records**: [`Cache`](util_export.Cache.md)\<`Map`\<`string`, [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]\>\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L53)

___

### recordsGenerator

• `Private` **recordsGenerator**: `Map`\<`string`, (`netInterface`: `string`) => [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L52)

## Methods

### announce

▸ **announce**(`announcedNetPort?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L234)

___

### announceRecordsForInterface

▸ **announceRecordsForInterface**(`netInterface`, `records`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `records` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L170)

___

### buildDnsRecordKey

▸ **buildDnsRecordKey**(`record`, `netInterface?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\> |
| `netInterface?` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L76)

___

### buildTypePortKey

▸ **buildTypePortKey**(`type`, `port`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnouncementType`](../enums/mdns_export.AnnouncementType.md) |
| `port` | `number` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L80)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:298](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L298)

___

### expireAnnouncements

▸ **expireAnnouncements**(`announcedNetPort?`, `type?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort?` | `number` |
| `type?` | [`AnnouncementType`](../enums/mdns_export.AnnouncementType.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L249)

___

### getMulticastInterfacesForAnnounce

▸ **getMulticastInterfacesForAnnounce**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:304](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L304)

___

### handleDnsMessage

▸ **handleDnsMessage**(`messageBytes`, `remoteIp`, `netInterface`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L88)

___

### isKeyForPort

▸ **isKeyForPort**(`key`, `port`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `port` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L84)

___

### queryRecords

▸ **queryRecords**(`«destructured»`, `records`): [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `string` |
| › `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `records` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |

#### Returns

[`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L308)

___

### sendRecords

▸ **sendRecords**(`dnsMessageData`, `netInterface`, `unicastTarget?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dnsMessageData` | `Partial`\<[`DnsMessage`](../modules/codec_export.md#dnsmessage)\> |
| `netInterface` | `string` |
| `unicastTarget?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L184)

___

### setRecordsGenerator

▸ **setRecordsGenerator**(`hostPort`, `type`, `generator`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `type` | [`AnnouncementType`](../enums/mdns_export.AnnouncementType.md) |
| `generator` | (`netInterface`: `string`) => [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:288](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L288)

___

### create

▸ **create**(`network`, `options?`): `Promise`\<[`MdnsServer`](mdns_export.MdnsServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.netInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsServer`](mdns_export.MdnsServer.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsServer.ts#L37)
