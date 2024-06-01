[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [export](../../README.md) / [\<internal\>](../README.md) / LegacyInteractionServer

# Class: LegacyInteractionServer

Interactionserver for the legacy API code paths which includes ACL checks before calling the actual
attribute/command handlers.

## Extends

- [`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md)

## Constructors

### new LegacyInteractionServer()

> **new LegacyInteractionServer**(`config`): [`LegacyInteractionServer`](LegacyInteractionServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`Configuration`](../../../protocol/interaction/export/namespaces/InteractionServer/interfaces/Configuration.md) |

#### Returns

[`LegacyInteractionServer`](LegacyInteractionServer.md)

#### Overrides

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`constructor`](../../../protocol/interaction/export/classes/InteractionServer.md#constructors)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L39)

## Properties

### #aclManager?

> `private` `optional` **#aclManager**: [`AccessControlManager`](../../../behavior/definitions/access-control/export/-internal-/classes/AccessControlManager.md)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L37)

***

### #endpointStructure

> `private` **#endpointStructure**: [`InteractionEndpointStructure`](../../../protocol/interaction/export/classes/InteractionEndpointStructure.md)

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`#endpointStructure`](../../../protocol/interaction/export/classes/InteractionServer.md##endpointstructure)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L36)

***

### #endpointStructure

> `private` **#endpointStructure**: [`InteractionEndpointStructure`](../../../protocol/interaction/export/classes/InteractionEndpointStructure.md)

#### Inherited from

`InteractionServer.#endpointStructure`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L165)

***

### #eventHandler

> `private` **#eventHandler**: [`EventHandler`](../../../protocol/interaction/export/classes/EventHandler.md)\<`any`\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`#eventHandler`](../../../protocol/interaction/export/classes/InteractionServer.md##eventhandler)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L170)

***

### #isClosing

> `private` **#isClosing**: `boolean` = `false`

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`#isClosing`](../../../protocol/interaction/export/classes/InteractionServer.md##isclosing)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L168)

***

### #nextSubscriptionId

> `private` **#nextSubscriptionId**: `number`

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`#nextSubscriptionId`](../../../protocol/interaction/export/classes/InteractionServer.md##nextsubscriptionid)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L166)

***

### #subscriptionConfig

> `private` **#subscriptionConfig**: [`Configuration`](../../../node/export/-internal-/namespaces/SubscriptionOptions/interfaces/Configuration.md)

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`#subscriptionConfig`](../../../protocol/interaction/export/classes/InteractionServer.md##subscriptionconfig)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L169)

***

### #subscriptionMap

> `private` `readonly` **#subscriptionMap**: `Map`\<`number`, [`SubscriptionHandler`](../../../protocol/interaction/export/classes/SubscriptionHandler.md)\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`#subscriptionMap`](../../../protocol/interaction/export/classes/InteractionServer.md##subscriptionmap)

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

### #assertAccess()

> `private` **#assertAccess**(`path`, `exchange`, `desiredAccessLevel`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../../../protocol/interaction/export/interfaces/AttributePath.md) \| [`EventPath`](../../../protocol/interaction/export/interfaces/EventPath.md) \| [`CommandPath`](../../../protocol/interaction/export/interfaces/CommandPath.md) |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `desiredAccessLevel` | [`AccessLevel`](../../../cluster/export/enumerations/AccessLevel.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L66)

***

### #getAclManager()

> `private` **#getAclManager**(`session`): [`AccessControlManager`](../../../behavior/definitions/access-control/export/-internal-/classes/AccessControlManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

[`AccessControlManager`](../../../behavior/definitions/access-control/export/-internal-/classes/AccessControlManager.md)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L45)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`close`](../../../protocol/interaction/export/classes/InteractionServer.md#close)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1236)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`getId`](../../../protocol/interaction/export/classes/InteractionServer.md#getid)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L184)

***

### handleInvokeRequest()

> **handleInvokeRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`handleInvokeRequest`](../../../protocol/interaction/export/classes/InteractionServer.md#handleinvokerequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1023](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1023)

***

### handleReadRequest()

> **handleReadRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`DataReportPayload`](../../../protocol/interaction/export/README.md#datareportpayload)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`DataReportPayload`](../../../protocol/interaction/export/README.md#datareportpayload)\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`handleReadRequest`](../../../protocol/interaction/export/classes/InteractionServer.md#handlereadrequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L199)

***

### handleSubscribeRequest()

> **handleSubscribeRequest**(`exchange`, `__namedParameters`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `messenger` | [`InteractionServerMessenger`](../../../protocol/interaction/export/classes/InteractionServerMessenger.md) |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`handleSubscribeRequest`](../../../protocol/interaction/export/classes/InteractionServer.md#handlesubscriberequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:854](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L854)

***

### handleTimedRequest()

> **handleTimedRequest**(`exchange`, `__namedParameters`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`handleTimedRequest`](../../../protocol/interaction/export/classes/InteractionServer.md#handletimedrequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1224)

***

### handleWriteRequest()

> **handleWriteRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`handleWriteRequest`](../../../protocol/interaction/export/classes/InteractionServer.md#handlewriterequest)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:501](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L501)

***

### invokeCommand()

> `protected` **invokeCommand**(`path`, `command`, `exchange`, `commandFields`, `message`, `endpoint`, `receivedWithinTimedInteraction`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `path` | [`CommandPath`](../../../protocol/interaction/export/interfaces/CommandPath.md) | `undefined` |
| `command` | [`CommandServer`](../../../cluster/export/classes/CommandServer.md)\<`any`, `any`\> | `undefined` |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> | `undefined` |
| `commandFields` | `any` | `undefined` |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) | `undefined` |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) | `undefined` |
| `receivedWithinTimedInteraction` | `boolean` | `false` |

#### Returns

`Promise`\<`object`\>

##### clusterCode?

> `optional` **clusterCode**: `number`

Cluster specific StatusCode of the invoke request if required

##### code

> **code**: [`StatusCode`](../../../protocol/interaction/export/enumerations/StatusCode.md)

Primary StatusCode of the invoke request  as defined by Interaction proptocol.

##### response

> **response**: [`TlvStream`](../../../tlv/export/README.md#tlvstream)

Response data

##### responseId

> **responseId**: [`CommandId`](../../../datatype/export/README.md#commandid)

ID of the response

#### Overrides

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`invokeCommand`](../../../protocol/interaction/export/classes/InteractionServer.md#invokecommand)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L134)

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`onNewExchange`](../../../protocol/interaction/export/classes/InteractionServer.md#onnewexchange)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L192)

***

### readAttribute()

> `protected` **readAttribute**(`path`, `attribute`, `exchange`, `isFabricFiltered`, `message`, `endpoint`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../../../protocol/interaction/export/interfaces/AttributePath.md) |
| `attribute` | [`AnyAttributeServer`](../../../cluster/export/README.md#anyattributeservert)\<`any`\> |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`object`\>

##### value

> **value**: `any`

##### version

> **version**: `number`

#### Overrides

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`readAttribute`](../../../protocol/interaction/export/classes/InteractionServer.md#readattribute)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L86)

***

### readEvent()

> `protected` **readEvent**(`path`, `eventFilters`, `event`, `exchange`, `isFabricFiltered`, `message`, `endpoint`): `Promise`\<[`EventStorageData`](../../../protocol/interaction/export/interfaces/EventStorageData.md)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | [`EventPath`](../../../protocol/interaction/export/interfaces/EventPath.md) |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `event` | [`EventServer`](../../../cluster/export/classes/EventServer.md)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<[`EventStorageData`](../../../protocol/interaction/export/interfaces/EventStorageData.md)\<`any`\>[]\>

#### Overrides

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`readEvent`](../../../protocol/interaction/export/classes/InteractionServer.md#readevent)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L98)

***

### writeAttribute()

> `protected` **writeAttribute**(`path`, `attribute`, `value`, `exchange`, `message`, `endpoint`, `receivedWithinTimedInteraction`?, `isListWrite`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../../../protocol/interaction/export/interfaces/AttributePath.md) |
| `attribute` | [`AttributeServer`](../../../cluster/export/classes/AttributeServer.md)\<`any`\> |
| `value` | `any` |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |
| `receivedWithinTimedInteraction`? | `boolean` |
| `isListWrite`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`InteractionServer`](../../../protocol/interaction/export/classes/InteractionServer.md).[`writeAttribute`](../../../protocol/interaction/export/classes/InteractionServer.md#writeattribute)

#### Source

[packages/matter.js/src/device/LegacyInteractionServer.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/LegacyInteractionServer.ts#L111)
