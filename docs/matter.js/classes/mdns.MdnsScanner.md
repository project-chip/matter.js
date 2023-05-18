[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns](../modules/mdns.md) / MdnsScanner

# Class: MdnsScanner

[mdns](../modules/mdns.md).MdnsScanner

## Implements

- [`Scanner`](../interfaces/common.Scanner.md)

## Table of contents

### Constructors

- [constructor](mdns.MdnsScanner.md#constructor)

### Properties

- [matterDeviceRecords](mdns.MdnsScanner.md#matterdevicerecords)
- [multicastServer](mdns.MdnsScanner.md#multicastserver)
- [periodicTimer](mdns.MdnsScanner.md#periodictimer)
- [recordWaiters](mdns.MdnsScanner.md#recordwaiters)

### Methods

- [close](mdns.MdnsScanner.md#close)
- [expire](mdns.MdnsScanner.md#expire)
- [findDevice](mdns.MdnsScanner.md#finddevice)
- [handleDnsMessage](mdns.MdnsScanner.md#handlednsmessage)
- [create](mdns.MdnsScanner.md#create)

## Constructors

### constructor

• **new MdnsScanner**(`multicastServer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net.UdpMulticastServer.md) |

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L34)

## Properties

### matterDeviceRecords

• `Private` `Readonly` **matterDeviceRecords**: `Map`<`string`, [`MatterServerRecordWithExpire`](../modules/index._internal_.md#matterserverrecordwithexpire)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L30)

___

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L35)

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: [`Timer`](../interfaces/time.Timer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L32)

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `Map`<`string`, (`record`: `undefined` \| [`MatterServer`](../modules/common.md#matterserver)) => `void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L31)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/common.Scanner.md).[close](../interfaces/common.Scanner.md#close)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L60)

___

### expire

▸ `Private` **expire**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L87)

___

### findDevice

▸ **findDevice**(`«destructured»`, `nodeId`, `timeoutSeconds?`): `Promise`<`undefined` \| [`MatterServer`](../modules/common.md#matterserver)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | [`Fabric`](fabric.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](datatype.NodeId.md) | `undefined` |
| `timeoutSeconds` | `number` | `5` |

#### Returns

`Promise`<`undefined` \| [`MatterServer`](../modules/common.md#matterserver)\>

#### Implementation of

[Scanner](../interfaces/common.Scanner.md).[findDevice](../interfaces/common.Scanner.md#finddevice)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L41)

___

### handleDnsMessage

▸ `Private` **handleDnsMessage**(`messageBytes`, `_remoteIp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `_remoteIp` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L66)

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsScanner`](mdns.MdnsScanner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsScanner`](mdns.MdnsScanner.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L21)
