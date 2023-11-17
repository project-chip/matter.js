[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ProtocolHandler

# Interface: ProtocolHandler<ContextT\>

[<internal>](../modules/internal_.md).ProtocolHandler

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Implemented by

- [`PaseServer`](../classes/internal_.PaseServer.md)

## Table of contents

### Methods

- [close](internal_.ProtocolHandler.md#close)
- [getId](internal_.ProtocolHandler.md#getid)
- [onNewExchange](internal_.ProtocolHandler.md#onnewexchange)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/esm/protocol/ProtocolHandler.d.ts:11

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/protocol/ProtocolHandler.d.ts:9

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

matter.js/dist/esm/protocol/ProtocolHandler.d.ts:10
