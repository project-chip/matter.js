[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsScanner

# Class: MdnsScanner

[exports/mdns](../modules/exports_mdns.md).MdnsScanner

## Implements

- [`Scanner`](../interfaces/exports_common.Scanner.md)

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsScanner.md#constructor)

### Properties

- [expire](exports_mdns.MdnsScanner.md#expire)
- [handleDnsMessage](exports_mdns.MdnsScanner.md#handlednsmessage)
- [matterDeviceRecords](exports_mdns.MdnsScanner.md#matterdevicerecords)
- [multicastServer](exports_mdns.MdnsScanner.md#multicastserver)
- [periodicTimer](exports_mdns.MdnsScanner.md#periodictimer)
- [recordWaiters](exports_mdns.MdnsScanner.md#recordwaiters)

### Methods

- [close](exports_mdns.MdnsScanner.md#close)
- [findDevice](exports_mdns.MdnsScanner.md#finddevice)
- [create](exports_mdns.MdnsScanner.md#create)

## Constructors

### constructor

• **new MdnsScanner**(`multicastServer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net.UdpMulticastServer.md) |

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:16

## Properties

### expire

• `Private` **expire**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:20

___

### handleDnsMessage

• `Private` **handleDnsMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:19

___

### matterDeviceRecords

• `Private` `Readonly` **matterDeviceRecords**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:13

___

### multicastServer

• `Private` `Readonly` **multicastServer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:11

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:15

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:14

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[close](../interfaces/exports_common.Scanner.md#close)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:18

___

### findDevice

▸ **findDevice**(`«destructured»`, `nodeId`, `timeoutSeconds?`): `Promise`<`undefined` \| [`MatterServer`](../modules/exports_common.md#matterserver)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| [`MatterServer`](../modules/exports_common.md#matterserver)\>

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[findDevice](../interfaces/exports_common.Scanner.md#finddevice)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:17

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsScanner`](exports_mdns.MdnsScanner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsScanner`](exports_mdns.MdnsScanner.md)\>

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:12
