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
- [records](mdns_export.MdnsServer.md#records)
- [recordsGenerator](mdns_export.MdnsServer.md#recordsgenerator)

### Methods

- [announce](mdns_export.MdnsServer.md#announce)
- [close](mdns_export.MdnsServer.md#close)
- [getMulticastInterfacesForAnnounce](mdns_export.MdnsServer.md#getmulticastinterfacesforannounce)
- [handleDnsMessage](mdns_export.MdnsServer.md#handlednsmessage)
- [queryRecords](mdns_export.MdnsServer.md#queryrecords)
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

[packages/matter.js/src/mdns/MdnsServer.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L44)

## Properties

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net_export.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L45)

___

### netInterface

• `Private` `Readonly` **netInterface**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L46)

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L31)

___

### records

• `Private` `Readonly` **records**: [`Cache`](util_export.Cache.md)<`Map`<`number`, [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[]\>\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L33)

___

### recordsGenerator

• `Private` **recordsGenerator**: `Map`<`number`, (`netInterface`: `string`) => [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[]\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L32)

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

[packages/matter.js/src/mdns/MdnsServer.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L89)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L118)

___

### getMulticastInterfacesForAnnounce

▸ `Private` **getMulticastInterfacesForAnnounce**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L123)

___

### handleDnsMessage

▸ `Private` **handleDnsMessage**(`messageBytes`, `_remoteIp`, `netInterface`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `_remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L53)

___

### queryRecords

▸ `Private` **queryRecords**(`«destructured»`, `records`): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `string` |
| › `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `records` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:127](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L127)

___

### setRecordsGenerator

▸ **setRecordsGenerator**(`hostPort`, `generator`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `generator` | (`netInterface`: `string`) => [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L113)

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsServer`](mdns_export.MdnsServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsServer`](mdns_export.MdnsServer.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsServer.ts#L19)
