[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / InteractionServer

# Class: InteractionServer

Translates interactions from the Matter protocol to Matter.js APIs.

## Extended by

- [`TransactionalInteractionServer`](../../../../node/export/-internal-/classes/TransactionalInteractionServer.md)
- [`LegacyInteractionServer`](../../../../export/-internal-/classes/LegacyInteractionServer.md)

## Implements

- [`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>
- [`InteractionRecipient`](../interfaces/InteractionRecipient.md)

## Constructors

### new InteractionServer()

> **new InteractionServer**(`__namedParameters`): [`InteractionServer`](InteractionServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Configuration`](../namespaces/InteractionServer/interfaces/Configuration.md) |

#### Returns

[`InteractionServer`](InteractionServer.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L172)

## Properties

### #endpointStructure

> `private` **#endpointStructure**: [`InteractionEndpointStructure`](InteractionEndpointStructure.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L165)

***

### #eventHandler

> `private` **#eventHandler**: [`EventHandler`](EventHandler.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L170)

***

### #isClosing

> `private` **#isClosing**: `boolean` = `false`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L168)

***

### #nextSubscriptionId

> `private` **#nextSubscriptionId**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L166)

***

### #subscriptionConfig

> `private` **#subscriptionConfig**: [`Configuration`](../../../../node/export/-internal-/namespaces/SubscriptionOptions/interfaces/Configuration.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L169)

***

### #subscriptionMap

> `private` `readonly` **#subscriptionMap**: `Map`\<`number`, [`SubscriptionHandler`](SubscriptionHandler.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L167)

## Accessors

### isClosing

> `get` `protected` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L188)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`close`](../../../export/interfaces/ProtocolHandler.md#close)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1236)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`getId`](../../../export/interfaces/ProtocolHandler.md#getid)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L184)

***

### handleInvokeRequest()

> **handleInvokeRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleInvokeRequest`](../interfaces/InteractionRecipient.md#handleinvokerequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1023](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1023)

***

### handleReadRequest()

> **handleReadRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`DataReportPayload`](../README.md#datareportpayload)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`DataReportPayload`](../README.md#datareportpayload)\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleReadRequest`](../interfaces/InteractionRecipient.md#handlereadrequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L199)

***

### handleSubscribeRequest()

> **handleSubscribeRequest**(`exchange`, `__namedParameters`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `messenger` | [`InteractionServerMessenger`](InteractionServerMessenger.md) |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleSubscribeRequest`](../interfaces/InteractionRecipient.md#handlesubscriberequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:854](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L854)

***

### handleTimedRequest()

> **handleTimedRequest**(`exchange`, `__namedParameters`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleTimedRequest`](../interfaces/InteractionRecipient.md#handletimedrequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1224)

***

### handleWriteRequest()

> **handleWriteRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleWriteRequest`](../interfaces/InteractionRecipient.md#handlewriterequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:501](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L501)

***

### invokeCommand()

> `protected` **invokeCommand**(`_path`, `command`, `exchange`, `commandFields`, `message`, `endpoint`, `_receivedWithinTimedInteraction`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `_path` | [`CommandPath`](../interfaces/CommandPath.md) | `undefined` |
| `command` | [`CommandServer`](../../../../cluster/export/classes/CommandServer.md)\<`any`, `any`\> | `undefined` |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> | `undefined` |
| `commandFields` | `any` | `undefined` |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) | `undefined` |
| `endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) | `undefined` |
| `_receivedWithinTimedInteraction` | `boolean` | `false` |

#### Returns

`Promise`\<`object`\>

##### clusterCode?

> `optional` **clusterCode**: `number`

Cluster specific StatusCode of the invoke request if required

##### code

> **code**: [`StatusCode`](../enumerations/StatusCode.md)

Primary StatusCode of the invoke request  as defined by Interaction proptocol.

##### response

> **response**: [`TlvStream`](../../../../tlv/export/README.md#tlvstream)

Response data

##### responseId

> **responseId**: [`CommandId`](../../../../datatype/export/README.md#commandid)

ID of the response

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1212)

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`onNewExchange`](../../../export/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L192)

***

### readAttribute()

> `protected` **readAttribute**(`_path`, `attribute`, `exchange`, `isFabricFiltered`, `message`, `_endpoint`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_path` | [`AttributePath`](../interfaces/AttributePath.md) |
| `attribute` | [`AnyAttributeServer`](../../../../cluster/export/README.md#anyattributeservert)\<`any`\> |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |
| `_endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`object`\>

##### value

> **value**: `any`

##### version

> **version**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:478](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L478)

***

### readEvent()

> `protected` **readEvent**(`_path`, `eventFilters`, `event`, `exchange`, `isFabricFiltered`, `message`, `_endpoint`): `Promise`\<[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_path` | [`EventPath`](../interfaces/EventPath.md) |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `event` | [`EventServer`](../../../../cluster/export/classes/EventServer.md)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |
| `_endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:489](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L489)

***

### writeAttribute()

> `protected` **writeAttribute**(`_path`, `attribute`, `value`, `exchange`, `message`, `_endpoint`, `_receivedWithinTimedInteraction`?, `isListWrite`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `_path` | [`AttributePath`](../interfaces/AttributePath.md) | `undefined` |
| `attribute` | [`AttributeServer`](../../../../cluster/export/classes/AttributeServer.md)\<`any`\> | `undefined` |
| `value` | `any` | `undefined` |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> | `undefined` |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) | `undefined` |
| `_endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) | `undefined` |
| `_receivedWithinTimedInteraction`? | `boolean` | `undefined` |
| `isListWrite`? | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:841](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L841)
