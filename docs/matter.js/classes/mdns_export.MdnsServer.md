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

• **new MdnsServer**(`multicastServer`, `netInterface`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |
| `netInterface` | `undefined` \| `string` |

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:63](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L63)

## Properties

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net_export.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:64](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L64)

___

### netInterface

• `Private` `Readonly` **netInterface**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:65](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L65)

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:49](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L49)

___

### recordLastSentAsMulticastAnswer

• `Private` `Readonly` **recordLastSentAsMulticastAnswer**: `Map`<`string`, `number`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:61](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L61)

___

### records

• `Private` `Readonly` **records**: [`Cache`](util_export.Cache.md)<`Map`<`string`, [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[]\>\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:51](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L51)

___

### recordsGenerator

• `Private` **recordsGenerator**: `Map`<`string`, (`netInterface`: `string`) => [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[]\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:50](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L50)

## Methods

### announce

▸ **announce**(`announcedNetPort?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:230](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L230)

___

### announceRecordsForInterface

▸ `Private` **announceRecordsForInterface**(`netInterface`, `records`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |
| `records` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:166](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L166)

___

### buildDnsRecordKey

▸ **buildDnsRecordKey**(`record`, `netInterface?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\> |
| `netInterface?` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:72](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L72)

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

[packages/matter.js/src/mdns/MdnsServer.ts:76](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L76)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:294](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L294)

___

### expireAnnouncements

▸ **expireAnnouncements**(`announcedNetPort?`, `type?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort?` | `number` |
| `type?` | [`AnnouncementType`](../enums/mdns_export.AnnouncementType.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:245](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L245)

___

### getMulticastInterfacesForAnnounce

▸ `Private` **getMulticastInterfacesForAnnounce**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:300](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L300)

___

### handleDnsMessage

▸ `Private` **handleDnsMessage**(`messageBytes`, `remoteIp`, `netInterface`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:84](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L84)

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

[packages/matter.js/src/mdns/MdnsServer.ts:80](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L80)

___

### queryRecords

▸ `Private` **queryRecords**(`«destructured»`, `records`): [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `string` |
| › `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `records` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[] |

#### Returns

[`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:304](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L304)

___

### sendRecords

▸ `Private` **sendRecords**(`dnsMessageData`, `netInterface`, `unicastTarget?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dnsMessageData` | `Partial`<[`DnsMessage`](../modules/codec_export.md#dnsmessage)\> |
| `netInterface` | `string` |
| `unicastTarget?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:180](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L180)

___

### setRecordsGenerator

▸ **setRecordsGenerator**(`hostPort`, `type`, `generator`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `type` | [`AnnouncementType`](../enums/mdns_export.AnnouncementType.md) |
| `generator` | (`netInterface`: `string`) => [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:284](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L284)

___

### create

▸ `Static` **create**(`options?`): `Promise`<[`MdnsServer`](mdns_export.MdnsServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsServer`](mdns_export.MdnsServer.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:36](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsServer.ts#L36)
