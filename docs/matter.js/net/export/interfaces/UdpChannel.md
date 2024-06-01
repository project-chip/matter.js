[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [net/export](../README.md) / UdpChannel

# Interface: UdpChannel

## Accessors

### port

> `get` **port**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/net/UdpChannel.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpChannel.ts#L22)

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/net/UdpChannel.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpChannel.ts#L21)

***

### onData()

> **onData**(`listener`): [`Listener`](../../../common/export/interfaces/Listener.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`netInterface`, `peerAddress`, `peerPort`, `data`) => `void` |

#### Returns

[`Listener`](../../../common/export/interfaces/Listener.md)

#### Source

[packages/matter.js/src/net/UdpChannel.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpChannel.ts#L19)

***

### send()

> **send**(`host`, `port`, `data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/net/UdpChannel.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/net/UdpChannel.ts#L20)
