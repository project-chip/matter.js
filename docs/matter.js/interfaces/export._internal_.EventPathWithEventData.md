[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / EventPathWithEventData

# Interface: EventPathWithEventData<T\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).EventPathWithEventData

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [event](export._internal_.EventPathWithEventData.md#event)
- [path](export._internal_.EventPathWithEventData.md#path)
- [schema](export._internal_.EventPathWithEventData.md#schema)

## Properties

### event

• **event**: [`EventStorageData`](export._internal_.EventStorageData.md)<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:63](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L63)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:61](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L61)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:62](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L62)
