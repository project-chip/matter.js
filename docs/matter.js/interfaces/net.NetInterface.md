[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [net](../modules/net.md) / NetInterface

# Interface: NetInterface

[net](../modules/net.md).NetInterface

## Implemented by

- [`UdpInterface`](../classes/net.UdpInterface.md)

## Table of contents

### Methods

- [onData](net.NetInterface.md#ondata)
- [openChannel](net.NetInterface.md#openchannel)

## Methods

### onData

▸ **onData**(`listener`): [`NetListener`](net.NetListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`socket`: [`Channel`](net.Channel.md)<`Uint8Array`\>, `data`: `Uint8Array`) => `void` |

#### Returns

[`NetListener`](net.NetListener.md)

#### Defined in

[packages/matter.js/src/net/NetInterface.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/NetInterface.ts#L16)

___

### openChannel

▸ **openChannel**(`address`, `port`): `Promise`<[`Channel`](net.Channel.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `port` | `number` |

#### Returns

`Promise`<[`Channel`](net.Channel.md)<`Uint8Array`\>\>

#### Defined in

[packages/matter.js/src/net/NetInterface.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/net/NetInterface.ts#L15)
