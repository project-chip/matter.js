[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / UdpInterface

# Class: UdpInterface

[net](../modules/net.md).UdpInterface

## Implements

- [`NetInterface`](../interfaces/net.NetInterface.md)

## Table of contents

### Constructors

- [constructor](net.UdpInterface.md#constructor)

### Properties

- [server](net.UdpInterface.md#server)

### Methods

- [onData](net.UdpInterface.md#ondata)
- [openChannel](net.UdpInterface.md#openchannel)
- [create](net.UdpInterface.md#create)

## Constructors

### constructor

• **new UdpInterface**(`server`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`UdpChannel`](../interfaces/net.UdpChannel.md) |

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L19)

## Properties

### server

• `Private` `Readonly` **server**: [`UdpChannel`](../interfaces/net.UdpChannel.md)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L20)

## Methods

### onData

▸ **onData**(`listener`): [`NetListener`](../interfaces/net.NetListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`channel`: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\>, `messageBytes`: `Uint8Array`) => `void` |

#### Returns

[`NetListener`](../interfaces/net.NetListener.md)

#### Implementation of

[NetInterface](../interfaces/net.NetInterface.md).[onData](../interfaces/net.NetInterface.md#ondata)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L27)

___

### openChannel

▸ **openChannel**(`address`, `port`): `Promise`<[`UdpConnection`](index._internal_.UdpConnection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `port` | `number` |

#### Returns

`Promise`<[`UdpConnection`](index._internal_.UdpConnection.md)\>

#### Implementation of

[NetInterface](../interfaces/net.NetInterface.md).[openChannel](../interfaces/net.NetInterface.md#openchannel)

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L23)

___

### create

▸ `Static` **create**(`port`, `type`, `address?`, `netInterface?`): `Promise`<[`UdpInterface`](net.UdpInterface.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `type` | ``"udp4"`` \| ``"udp6"`` |
| `address?` | `string` |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`UdpInterface`](net.UdpInterface.md)\>

#### Defined in

[packages/matter.js/src/net/UdpInterface.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/UdpInterface.ts#L15)
