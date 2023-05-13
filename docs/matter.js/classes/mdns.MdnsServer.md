[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns](../modules/mdns.md) / MdnsServer

# Class: MdnsServer

[mdns](../modules/mdns.md).MdnsServer

## Table of contents

### Constructors

- [constructor](mdns.MdnsServer.md#constructor)

### Properties

- [multicastServer](mdns.MdnsServer.md#multicastserver)
- [netInterface](mdns.MdnsServer.md#netinterface)
- [network](mdns.MdnsServer.md#network)
- [records](mdns.MdnsServer.md#records)
- [recordsGenerator](mdns.MdnsServer.md#recordsgenerator)

### Methods

- [announce](mdns.MdnsServer.md#announce)
- [close](mdns.MdnsServer.md#close)
- [getMulticastInterfacesForAnnounce](mdns.MdnsServer.md#getmulticastinterfacesforannounce)
- [handleDnsMessage](mdns.MdnsServer.md#handlednsmessage)
- [queryRecords](mdns.MdnsServer.md#queryrecords)
- [setRecordsGenerator](mdns.MdnsServer.md#setrecordsgenerator)
- [create](mdns.MdnsServer.md#create)

## Constructors

### constructor

• **new MdnsServer**(`multicastServer`, `netInterface`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net.UdpMulticastServer.md) |
| `netInterface` | `undefined` \| `string` |

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L34)

## Properties

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L35)

___

### netInterface

• `Private` `Readonly` **netInterface**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L36)

___

### network

• `Private` `Readonly` **network**: [`Network`](net.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L30)

___

### records

• `Private` `Readonly` **records**: [`Cache`](util.Cache.md)<[`Record`](../interfaces/codec.Record.md)<`any`\>[]\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L32)

___

### recordsGenerator

• `Private` **recordsGenerator**: (`netInterface`: `string`) => [`Record`](../interfaces/codec.Record.md)<`any`\>[]

#### Type declaration

▸ (`netInterface`): [`Record`](../interfaces/codec.Record.md)<`any`\>[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | `string` |

##### Returns

[`Record`](../interfaces/codec.Record.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L31)

## Methods

### announce

▸ **announce**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L63)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L77)

___

### getMulticastInterfacesForAnnounce

▸ `Private` **getMulticastInterfacesForAnnounce**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:82](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L82)

___

### handleDnsMessage

▸ `Private` **handleDnsMessage**(`messageBytes`, `_remoteIp`, `netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `_remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L41)

___

### queryRecords

▸ `Private` **queryRecords**(`«destructured»`, `records`): [`Record`](../interfaces/codec.Record.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `name` | `string` |
| › `recordType` | [`RecordType`](../enums/codec.RecordType.md) |
| `records` | [`Record`](../interfaces/codec.Record.md)<`any`\>[] |

#### Returns

[`Record`](../interfaces/codec.Record.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L86)

___

### setRecordsGenerator

▸ **setRecordsGenerator**(`generator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | (`netInterface`: `string`) => [`Record`](../interfaces/codec.Record.md)<`any`\>[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L72)

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsServer`](mdns.MdnsServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsServer`](mdns.MdnsServer.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L18)
