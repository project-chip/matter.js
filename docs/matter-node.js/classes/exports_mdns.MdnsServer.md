[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsServer

# Class: MdnsServer

[exports/mdns](../modules/exports_mdns.md).MdnsServer

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsServer.md#constructor)

### Properties

- [announceRecordsForInterface](exports_mdns.MdnsServer.md#announcerecordsforinterface)
- [getMulticastInterfacesForAnnounce](exports_mdns.MdnsServer.md#getmulticastinterfacesforannounce)
- [handleDnsMessage](exports_mdns.MdnsServer.md#handlednsmessage)
- [multicastServer](exports_mdns.MdnsServer.md#multicastserver)
- [netInterface](exports_mdns.MdnsServer.md#netinterface)
- [network](exports_mdns.MdnsServer.md#network)
- [queryRecords](exports_mdns.MdnsServer.md#queryrecords)
- [recordLastSentAsMulticastAnswer](exports_mdns.MdnsServer.md#recordlastsentasmulticastanswer)
- [records](exports_mdns.MdnsServer.md#records)
- [recordsGenerator](exports_mdns.MdnsServer.md#recordsgenerator)
- [sendRecords](exports_mdns.MdnsServer.md#sendrecords)

### Methods

- [announce](exports_mdns.MdnsServer.md#announce)
- [buildDnsRecordKey](exports_mdns.MdnsServer.md#builddnsrecordkey)
- [buildTypePortKey](exports_mdns.MdnsServer.md#buildtypeportkey)
- [close](exports_mdns.MdnsServer.md#close)
- [expireAnnouncements](exports_mdns.MdnsServer.md#expireannouncements)
- [isKeyForPort](exports_mdns.MdnsServer.md#iskeyforport)
- [setRecordsGenerator](exports_mdns.MdnsServer.md#setrecordsgenerator)
- [create](exports_mdns.MdnsServer.md#create)

## Constructors

### constructor

• **new MdnsServer**(`network`, `multicastServer`, `netInterface`): [`MdnsServer`](exports_mdns.MdnsServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |
| `netInterface` | `undefined` \| `string` |

#### Returns

[`MdnsServer`](exports_mdns.MdnsServer.md)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:27

## Properties

### announceRecordsForInterface

• `Private` **announceRecordsForInterface**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:32

___

### getMulticastInterfacesForAnnounce

• `Private` **getMulticastInterfacesForAnnounce**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:38

___

### handleDnsMessage

• `Private` **handleDnsMessage**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:31

___

### multicastServer

• `Private` `Readonly` **multicastServer**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:18

___

### netInterface

• `Private` `Readonly` **netInterface**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:19

___

### network

• `Private` `Readonly` **network**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:17

___

### queryRecords

• `Private` **queryRecords**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:39

___

### recordLastSentAsMulticastAnswer

• `Private` `Readonly` **recordLastSentAsMulticastAnswer**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:26

___

### records

• `Private` `Readonly` **records**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:25

___

### recordsGenerator

• `Private` **recordsGenerator**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:24

___

### sendRecords

• `Private` **sendRecords**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:33

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

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:34

___

### buildDnsRecordKey

▸ **buildDnsRecordKey**(`record`, `netInterface?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/exports_codec.md#dnsrecord)\<`any`\> |
| `netInterface?` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:28

___

### buildTypePortKey

▸ **buildTypePortKey**(`type`, `port`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnouncementType`](../enums/exports_mdns.AnnouncementType.md) |
| `port` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:29

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:37

___

### expireAnnouncements

▸ **expireAnnouncements**(`announcedNetPort?`, `type?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort?` | `number` |
| `type?` | [`AnnouncementType`](../enums/exports_mdns.AnnouncementType.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:35

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

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:30

___

### setRecordsGenerator

▸ **setRecordsGenerator**(`hostPort`, `type`, `generator`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `type` | [`AnnouncementType`](../enums/exports_mdns.AnnouncementType.md) |
| `generator` | (`netInterface`: `string`) => [`DnsRecord`](../modules/exports_codec.md#dnsrecord)\<`any`\>[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:36

___

### create

▸ **create**(`network`, `options?`): `Promise`\<[`MdnsServer`](exports_mdns.MdnsServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.netInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsServer`](exports_mdns.MdnsServer.md)\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:20
