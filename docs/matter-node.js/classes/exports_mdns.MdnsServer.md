[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsServer

# Class: MdnsServer

[exports/mdns](../modules/exports_mdns.md).MdnsServer

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsServer.md#constructor)

### Properties

- [getMulticastInterfacesForAnnounce](exports_mdns.MdnsServer.md#getmulticastinterfacesforannounce)
- [handleDnsMessage](exports_mdns.MdnsServer.md#handlednsmessage)
- [multicastServer](exports_mdns.MdnsServer.md#multicastserver)
- [netInterface](exports_mdns.MdnsServer.md#netinterface)
- [network](exports_mdns.MdnsServer.md#network)
- [queryRecords](exports_mdns.MdnsServer.md#queryrecords)
- [records](exports_mdns.MdnsServer.md#records)
- [recordsGenerator](exports_mdns.MdnsServer.md#recordsgenerator)

### Methods

- [announce](exports_mdns.MdnsServer.md#announce)
- [close](exports_mdns.MdnsServer.md#close)
- [setRecordsGenerator](exports_mdns.MdnsServer.md#setrecordsgenerator)
- [create](exports_mdns.MdnsServer.md#create)

## Constructors

### constructor

• **new MdnsServer**(`multicastServer`, `netInterface`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |
| `netInterface` | `undefined` \| `string` |

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:18

## Properties

### getMulticastInterfacesForAnnounce

• `Private` **getMulticastInterfacesForAnnounce**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:23

___

### handleDnsMessage

• `Private` **handleDnsMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:19

___

### multicastServer

• `Private` `Readonly` **multicastServer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:12

___

### netInterface

• `Private` `Readonly` **netInterface**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:13

___

### network

• `Private` `Readonly` **network**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:15

___

### queryRecords

• `Private` **queryRecords**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:24

___

### records

• `Private` `Readonly` **records**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:17

___

### recordsGenerator

• `Private` **recordsGenerator**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:16

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

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:20

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:22

___

### setRecordsGenerator

▸ **setRecordsGenerator**(`hostPort`, `generator`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostPort` | `number` |
| `generator` | (`netInterface`: `string`) => [`DnsRecord`](../interfaces/exports_codec.DnsRecord.md)<`any`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:21

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsServer`](exports_mdns.MdnsServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsServer`](exports_mdns.MdnsServer.md)\>

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:14
