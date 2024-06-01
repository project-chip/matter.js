[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / InteractionRecipient

# Interface: InteractionRecipient

## Methods

### handleInvokeRequest()

> **handleInvokeRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:52

***

### handleReadRequest()

> **handleReadRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:49

***

### handleSubscribeRequest()

> **handleSubscribeRequest**(`exchange`, `request`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `messenger` | [`InteractionServerMessenger`](../classes/InteractionServerMessenger.md) |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:51

***

### handleTimedRequest()

> **handleTimedRequest**(`exchange`, `request`, `message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:53

***

### handleWriteRequest()

> **handleWriteRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:50
