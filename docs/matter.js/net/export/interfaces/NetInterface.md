[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / NetInterface

# Interface: NetInterface

A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.

## Extends

- [`TransportInterface`](../../../common/export/interfaces/TransportInterface.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`TransportInterface`](../../../common/export/interfaces/TransportInterface.md).[`close`](../../../common/export/interfaces/TransportInterface.md#close)

#### Source

[packages/matter.js/src/common/TransportInterface.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/TransportInterface.ts#L20)

***

### onData()

> **onData**(`listener`): [`Listener`](../../../common/export/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`socket`, `data`) => `void` |

#### Returns

[`Listener`](../../../common/export/interfaces/Listener.md)

#### Inherited from

[`TransportInterface`](../../../common/export/interfaces/TransportInterface.md).[`onData`](../../../common/export/interfaces/TransportInterface.md#ondata)

#### Source

[packages/matter.js/src/common/TransportInterface.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/TransportInterface.ts#L19)

***

### openChannel()

> **openChannel**(`address`): `Promise`\<[`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../../../common/export/README.md#serveraddress) |

#### Returns

`Promise`\<[`Channel`](../../../common/export/interfaces/Channel.md)\<`Uint8Array`\>\>

#### Source

[packages/matter.js/src/net/NetInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/NetInterface.ts#L16)
