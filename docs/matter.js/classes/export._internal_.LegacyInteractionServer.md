[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / LegacyInteractionServer

# Class: LegacyInteractionServer

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).LegacyInteractionServer

Interactionserver for the legacy API code paths which includes ACL checks before calling the actual
attribute/command handlers.

## Hierarchy

- [`InteractionServer`](protocol_interaction_export.InteractionServer-1.md)

  ↳ **`LegacyInteractionServer`**

## Table of contents

### Constructors

- [constructor](export._internal_.LegacyInteractionServer.md#constructor)

### Properties

- [#aclManager](export._internal_.LegacyInteractionServer.md##aclmanager)
- [#endpointStructure](export._internal_.LegacyInteractionServer.md##endpointstructure)
- [#endpointStructure](export._internal_.LegacyInteractionServer.md##endpointstructure-1)
- [#eventHandler](export._internal_.LegacyInteractionServer.md##eventhandler)
- [#isClosing](export._internal_.LegacyInteractionServer.md##isclosing)
- [#nextSubscriptionId](export._internal_.LegacyInteractionServer.md##nextsubscriptionid)
- [#subscriptionConfig](export._internal_.LegacyInteractionServer.md##subscriptionconfig)
- [#subscriptionMap](export._internal_.LegacyInteractionServer.md##subscriptionmap)

### Accessors

- [isClosing](export._internal_.LegacyInteractionServer.md#isclosing)

### Methods

- [#assertAccess](export._internal_.LegacyInteractionServer.md##assertaccess)
- [#getAclManager](export._internal_.LegacyInteractionServer.md##getaclmanager)
- [close](export._internal_.LegacyInteractionServer.md#close)
- [getId](export._internal_.LegacyInteractionServer.md#getid)
- [handleInvokeRequest](export._internal_.LegacyInteractionServer.md#handleinvokerequest)
- [handleReadRequest](export._internal_.LegacyInteractionServer.md#handlereadrequest)
- [handleSubscribeRequest](export._internal_.LegacyInteractionServer.md#handlesubscriberequest)
- [handleTimedRequest](export._internal_.LegacyInteractionServer.md#handletimedrequest)
- [handleWriteRequest](export._internal_.LegacyInteractionServer.md#handlewriterequest)
- [invokeCommand](export._internal_.LegacyInteractionServer.md#invokecommand)
- [onNewExchange](export._internal_.LegacyInteractionServer.md#onnewexchange)
- [readAttribute](export._internal_.LegacyInteractionServer.md#readattribute)
- [readEvent](export._internal_.LegacyInteractionServer.md#readevent)
- [writeAttribute](export._internal_.LegacyInteractionServer.md#writeattribute)

## Constructors

### constructor

• **new LegacyInteractionServer**(`config`): [`LegacyInteractionServer`](export._internal_.LegacyInteractionServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](../interfaces/protocol_interaction_export.InteractionServer.Configuration.md) |

#### Returns

[`LegacyInteractionServer`](export._internal_.LegacyInteractionServer.md)

#### Overrides

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[constructor](protocol_interaction_export.InteractionServer-1.md#constructor)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:39](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L39)

## Properties

### #aclManager

• `Private` `Optional` **#aclManager**: [`AccessControlManager`](behavior_definitions_access_control_export._internal_.AccessControlManager.md)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:37](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L37)

___

### #endpointStructure

• `Private` **#endpointStructure**: [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[#endpointStructure](protocol_interaction_export.InteractionServer-1.md##endpointstructure)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:36](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L36)

___

### #endpointStructure

• `Private` **#endpointStructure**: [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Inherited from

InteractionServer.#endpointStructure

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:165](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L165)

___

### #eventHandler

• `Private` **#eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[#eventHandler](protocol_interaction_export.InteractionServer-1.md##eventhandler)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:170](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L170)

___

### #isClosing

• `Private` **#isClosing**: `boolean` = `false`

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[#isClosing](protocol_interaction_export.InteractionServer-1.md##isclosing)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:168](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L168)

___

### #nextSubscriptionId

• `Private` **#nextSubscriptionId**: `number`

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[#nextSubscriptionId](protocol_interaction_export.InteractionServer-1.md##nextsubscriptionid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:166](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L166)

___

### #subscriptionConfig

• `Private` **#subscriptionConfig**: [`Configuration`](../interfaces/node_export._internal_.SubscriptionOptions.Configuration.md)

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[#subscriptionConfig](protocol_interaction_export.InteractionServer-1.md##subscriptionconfig)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:169](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L169)

___

### #subscriptionMap

• `Private` `Readonly` **#subscriptionMap**: `Map`\<`number`, [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)\>

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[#subscriptionMap](protocol_interaction_export.InteractionServer-1.md##subscriptionmap)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:167](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L167)

## Accessors

### isClosing

• `get` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionServer.isClosing

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:188](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L188)

## Methods

### #assertAccess

▸ **#assertAccess**(`path`, `exchange`, `desiredAccessLevel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) \| [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md) \| [`CommandPath`](../interfaces/protocol_interaction_export.CommandPath.md) |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `desiredAccessLevel` | [`AccessLevel`](../enums/cluster_export.AccessLevel.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:66](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L66)

___

### #getAclManager

▸ **#getAclManager**(`session`): [`AccessControlManager`](behavior_definitions_access_control_export._internal_.AccessControlManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |

#### Returns

[`AccessControlManager`](behavior_definitions_access_control_export._internal_.AccessControlManager.md)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:45](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L45)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[close](protocol_interaction_export.InteractionServer-1.md#close)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1236](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1236)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[getId](protocol_interaction_export.InteractionServer-1.md#getid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:184](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L184)

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

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[handleInvokeRequest](protocol_interaction_export.InteractionServer-1.md#handleinvokerequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1023](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1023)

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

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[handleReadRequest](protocol_interaction_export.InteractionServer-1.md#handlereadrequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:199](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L199)

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

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[handleSubscribeRequest](protocol_interaction_export.InteractionServer-1.md#handlesubscriberequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:854](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L854)

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

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[handleTimedRequest](protocol_interaction_export.InteractionServer-1.md#handletimedrequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:1224](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L1224)

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

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[handleWriteRequest](protocol_interaction_export.InteractionServer-1.md#handlewriterequest)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:501](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L501)

___

### invokeCommand

▸ **invokeCommand**(`path`, `command`, `exchange`, `commandFields`, `message`, `endpoint`, `receivedWithinTimedInteraction?`): `Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) ; `response`: [`TlvStream`](../modules/tlv_export.md#tlvstream) ; `responseId`: [`CommandId`](../modules/datatype_export.md#commandid)  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | [`CommandPath`](../interfaces/protocol_interaction_export.CommandPath.md) | `undefined` |
| `command` | [`CommandServer`](cluster_export.CommandServer.md)\<`any`, `any`\> | `undefined` |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> | `undefined` |
| `commandFields` | `any` | `undefined` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) | `undefined` |
| `receivedWithinTimedInteraction` | `boolean` | `false` |

#### Returns

`Promise`\<\{ `clusterCode?`: `number` ; `code`: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) ; `response`: [`TlvStream`](../modules/tlv_export.md#tlvstream) ; `responseId`: [`CommandId`](../modules/datatype_export.md#commandid)  }\>

#### Overrides

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[invokeCommand](protocol_interaction_export.InteractionServer-1.md#invokecommand)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:134](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L134)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[onNewExchange](protocol_interaction_export.InteractionServer-1.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:192](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L192)

___

### readAttribute

▸ **readAttribute**(`path`, `attribute`, `exchange`, `isFabricFiltered`, `message`, `endpoint`): `Promise`\<\{ `value`: `any` ; `version`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) |
| `attribute` | [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\> |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`Promise`\<\{ `value`: `any` ; `version`: `number`  }\>

#### Overrides

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[readAttribute](protocol_interaction_export.InteractionServer-1.md#readattribute)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:86](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L86)

___

### readEvent

▸ **readEvent**(`path`, `eventFilters`, `event`, `exchange`, `isFabricFiltered`, `message`, `endpoint`): `Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md) |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |
| `event` | [`EventServer`](cluster_export.EventServer.md)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`Promise`\<[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]\>

#### Overrides

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[readEvent](protocol_interaction_export.InteractionServer-1.md#readevent)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:98](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L98)

___

### writeAttribute

▸ **writeAttribute**(`path`, `attribute`, `value`, `exchange`, `message`, `endpoint`, `receivedWithinTimedInteraction?`, `isListWrite?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md) |
| `attribute` | [`AttributeServer`](cluster_export.AttributeServer.md)\<`any`\> |
| `value` | `any` |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |
| `receivedWithinTimedInteraction?` | `boolean` |
| `isListWrite?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[InteractionServer](protocol_interaction_export.InteractionServer-1.md).[writeAttribute](protocol_interaction_export.InteractionServer-1.md#writeattribute)

#### Defined in

[packages/matter.js/src/device/LegacyInteractionServer.ts:111](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/device/LegacyInteractionServer.ts#L111)
