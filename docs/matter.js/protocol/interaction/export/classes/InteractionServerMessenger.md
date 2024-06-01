[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

## Extends

- [`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

## Constructors

### new InteractionServerMessenger()

> **new InteractionServerMessenger**(`exchange`): [`InteractionServerMessenger`](InteractionServerMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

[`InteractionServerMessenger`](InteractionServerMessenger.md)

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`constructor`](../-internal-/classes/InteractionMessenger.md#constructors)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`exchange`](../-internal-/classes/InteractionMessenger.md#exchange)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`close`](../-internal-/classes/InteractionMessenger.md#close)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L111)

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`getExchangeChannelName`](../-internal-/classes/InteractionMessenger.md#getexchangechannelname)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L126)

***

### handleRequest()

> **handleRequest**(`recipient`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `recipient` | [`InteractionRecipient`](../interfaces/InteractionRecipient.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L157)

***

### nextMessage()

> **nextMessage**(`expectedMessageType`?): `Promise`\<[`Message`](../../../../codec/export/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../../../codec/export/interfaces/Message.md)\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`nextMessage`](../-internal-/classes/InteractionMessenger.md#nextmessage)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L99)

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../../../export/README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`send`](../-internal-/classes/InteractionMessenger.md#send)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L83)

***

### sendDataReport()

> **sendDataReport**(`dataReportPayload`): `Promise`\<`void`\>

Handle DataReportPayload with the content of a DataReport to send, split them into multiple DataReport
messages and send them out based on the size.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dataReportPayload` | [`DataReportPayload`](../README.md#datareportpayload) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L232)

***

### sendDataReportMessage()

> **sendDataReportMessage**(`dataReport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:319](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L319)

***

### sendStatus()

> **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enumerations/StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`sendStatus`](../-internal-/classes/InteractionMessenger.md#sendstatus)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

***

### throwIfErrorStatusMessage()

> `protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`void`

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`throwIfErrorStatusMessage`](../-internal-/classes/InteractionMessenger.md#throwiferrorstatusmessage)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L115)

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`waitForSuccess`](../-internal-/classes/InteractionMessenger.md#waitforsuccess)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L94)
