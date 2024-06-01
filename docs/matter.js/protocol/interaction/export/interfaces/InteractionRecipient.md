[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / InteractionRecipient

# Interface: InteractionRecipient

## Methods

### handleInvokeRequest()

> **handleInvokeRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L148)

***

### handleReadRequest()

> **handleReadRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L132)

***

### handleSubscribeRequest()

> **handleSubscribeRequest**(`exchange`, `request`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `messenger` | [`InteractionServerMessenger`](../classes/InteractionServerMessenger.md) |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L142)

***

### handleTimedRequest()

> **handleTimedRequest**(`exchange`, `request`, `message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L153)

***

### handleWriteRequest()

> **handleWriteRequest**(`exchange`, `request`, `message`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `request` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L137)
