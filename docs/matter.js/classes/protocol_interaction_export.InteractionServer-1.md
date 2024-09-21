[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionServer

# Class: InteractionServer

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionServer

Translates interactions from the Matter protocol to Matter.js APIs.

## Hierarchy

- **`InteractionServer`**

  ↳ [`TransactionalInteractionServer`](node_export._internal_.TransactionalInteractionServer.md)

  ↳ [`LegacyInteractionServer`](export._internal_.LegacyInteractionServer.md)

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>
- [`InteractionRecipient`](../interfaces/protocol_interaction_export.InteractionRecipient.md)

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.InteractionServer-1.md#constructor)

### Properties

- [#endpointStructure](protocol_interaction_export.InteractionServer-1.md##endpointstructure)
- [#isClosing](protocol_interaction_export.InteractionServer-1.md##isclosing)
- [#nextSubscriptionId](protocol_interaction_export.InteractionServer-1.md##nextsubscriptionid)
- [#subscriptionConfig](protocol_interaction_export.InteractionServer-1.md##subscriptionconfig)
- [#subscriptionMap](protocol_interaction_export.InteractionServer-1.md##subscriptionmap)

### Accessors

- [isClosing](protocol_interaction_export.InteractionServer-1.md#isclosing)

### Methods

- [close](protocol_interaction_export.InteractionServer-1.md#close)
- [getId](protocol_interaction_export.InteractionServer-1.md#getid)
- [handleInvokeRequest](protocol_interaction_export.InteractionServer-1.md#handleinvokerequest)
- [handleReadRequest](protocol_interaction_export.InteractionServer-1.md#handlereadrequest)
- [handleSubscribeRequest](protocol_interaction_export.InteractionServer-1.md#handlesubscriberequest)
- [handleTimedRequest](protocol_interaction_export.InteractionServer-1.md#handletimedrequest)
- [handleWriteRequest](protocol_interaction_export.InteractionServer-1.md#handlewriterequest)
- [invokeCommand](protocol_interaction_export.InteractionServer-1.md#invokecommand)
- [onNewExchange](protocol_interaction_export.InteractionServer-1.md#onnewexchange)
- [readAttribute](protocol_interaction_export.InteractionServer-1.md#readattribute)
- [readEvent](protocol_interaction_export.InteractionServer-1.md#readevent)
- [writeAttribute](protocol_interaction_export.InteractionServer-1.md#writeattribute)

## Constructors

### constructor

• **new InteractionServer**(`«destructured»`): [`InteractionServer`](protocol_interaction_export.InteractionServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Configuration`](../interfaces/protocol_interaction_export.InteractionServer.Configuration.md) |

#### Returns

[`InteractionServer`](protocol_interaction_export.InteractionServer-1.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:224](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L224)

## Properties

### #endpointStructure

• `Private` **#endpointStructure**: [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:218](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L218)

___

### #isClosing

• `Private` **#isClosing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:221](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L221)

___

### #nextSubscriptionId

• `Private` **#nextSubscriptionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:219](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L219)

___

### #subscriptionConfig

• `Private` `Readonly` **#subscriptionConfig**: [`Configuration`](../interfaces/node_export._internal_.SubscriptionOptions.Configuration.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:222](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L222)

___

### #subscriptionMap

• `Private` `Readonly` **#subscriptionMap**: `Map`\<`number`, [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:220](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L220)

## Accessors

### isClosing

• `get` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:239](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L239)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[close](../interfaces/protocol_export.ProtocolHandler.md#close)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1305](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1305)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:235](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L235)

___

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `«destructured»`, `message`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>\>

#### Implementation of

[InteractionRecipient](../interfaces/protocol_interaction_export.InteractionRecipient.md).[handleInvokeRequest](../interfaces/protocol_interaction_export.InteractionRecipient.md#handleinvokerequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1093](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1093)

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `«destructured»`, `message`): `Promise`\<[`DataReportPayload`](../modules/protocol_interaction_export.md#datareportpayload)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<[`DataReportPayload`](../modules/protocol_interaction_export.md#datareportpayload)\>

#### Implementation of

[InteractionRecipient](../interfaces/protocol_interaction_export.InteractionRecipient.md).[handleReadRequest](../interfaces/protocol_interaction_export.InteractionRecipient.md#handlereadrequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:250](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L250)

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `«destructured»`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](protocol_interaction_export.InteractionServerMessenger.md) |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InteractionRecipient](../interfaces/protocol_interaction_export.InteractionRecipient.md).[handleSubscribeRequest](../interfaces/protocol_interaction_export.InteractionRecipient.md#handlesubscriberequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:913](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L913)

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`void`

#### Implementation of

[InteractionRecipient](../interfaces/protocol_interaction_export.InteractionRecipient.md).[handleTimedRequest](../interfaces/protocol_interaction_export.InteractionRecipient.md#handletimedrequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1293](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1293)

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `«destructured»`, `message`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\>  }\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\>  }\>[]\>  }\>\>

#### Implementation of

[InteractionRecipient](../interfaces/protocol_interaction_export.InteractionRecipient.md).[handleWriteRequest](../interfaces/protocol_interaction_export.InteractionRecipient.md#handlewriterequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:574](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L574)

___

### invokeCommand

▸ **invokeCommand**(`_path`, `command`, `exchange`, `commandFields`, `message`, `endpoint`, `_receivedWithinTimedInteraction?`): `Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) ; `response`: [`TlvStream`](../modules/tlv_export.md#tlvstream) ; `responseId`: [`CommandId`](../modules/datatype_export.md#commandid)  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_path` | [`CommandPath`](../interfaces/protocol_interaction_export.CommandPath.md) | `undefined` |
| `command` | [`CommandServer`](cluster_export.CommandServer.md)\<`any`, `any`\> | `undefined` |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `commandFields` | `any` | `undefined` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) | `undefined` |
| `_receivedWithinTimedInteraction` | `boolean` | `false` |

#### Returns

`Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) ; `response`: [`TlvStream`](../modules/tlv_export.md#tlvstream) ; `responseId`: [`CommandId`](../modules/datatype_export.md#commandid)  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1281](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1281)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:243](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L243)

___

### readAttribute

▸ **readAttribute**(`_path`, `attribute`, `exchange`, `isFabricFiltered`, `message`, `_endpoint`, `offline?`): `Promise`\<\{ `value`: `any` ; `version`: `number`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) | `undefined` |
| `attribute` | [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\> | `undefined` |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `isFabricFiltered` | `boolean` | `undefined` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `_endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) | `undefined` |
| `offline` | `boolean` | `false` |

#### Returns

`Promise`\<\{ `value`: `any` ; `version`: `number`  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:550](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L550)

___

### readEvent

▸ **readEvent**(`_path`, `eventFilters`, `event`, `exchange`, `isFabricFiltered`, `message`, `_endpoint`): `Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_path` | [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md) |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `event` | [`AnyEventServer`](../modules/cluster_export.md#anyeventserver)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `_endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:562](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L562)

___

### writeAttribute

▸ **writeAttribute**(`_path`, `attribute`, `value`, `exchange`, `message`, `_endpoint`, `_receivedWithinTimedInteraction?`, `isListWrite?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) | `undefined` |
| `attribute` | [`AttributeServer`](cluster_export.AttributeServer.md)\<`any`\> | `undefined` |
| `value` | `any` | `undefined` |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `_endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) | `undefined` |
| `_receivedWithinTimedInteraction?` | `boolean` | `undefined` |
| `isListWrite` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:900](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L900)
