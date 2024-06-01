[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / InteractionRecipient

# Interface: InteractionRecipient

## Methods

### handleInvokeRequest()

> **handleInvokeRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<[`MatterDevice`](../classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:52

***

### handleReadRequest()

> **handleReadRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<[`MatterDevice`](../classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:49

***

### handleSubscribeRequest()

> **handleSubscribeRequest**(`exchange`, `request`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<[`MatterDevice`](../classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |
| `messenger` | [`InteractionServerMessenger`](../classes/InteractionServerMessenger.md) |
| `message` | [`Message`](Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:51

***

### handleTimedRequest()

> **handleTimedRequest**(`exchange`, `request`, `message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<[`MatterDevice`](../classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](Message.md) |

#### Returns

`void`

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:53

***

### handleWriteRequest()

> **handleWriteRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../classes/MessageExchange.md)\<[`MatterDevice`](../classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:50
