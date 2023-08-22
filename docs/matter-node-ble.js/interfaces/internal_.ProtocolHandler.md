[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ProtocolHandler

# Interface: ProtocolHandler<ContextT\>

[<internal>](../modules/internal_.md).ProtocolHandler

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Methods

- [getId](internal_.ProtocolHandler.md#getid)
- [onNewExchange](internal_.ProtocolHandler.md#onnewexchange)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/protocol/ProtocolHandler.d.ts:9

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/internal_.MessageExchange.md)<`ContextT`\> |
| `message` | [`Message`](internal_.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/ProtocolHandler.d.ts:10
