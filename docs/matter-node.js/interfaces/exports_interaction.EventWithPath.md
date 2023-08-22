[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / EventWithPath

# Interface: EventWithPath

[exports/interaction](../modules/exports_interaction.md).EventWithPath

## Table of contents

### Properties

- [event](exports_interaction.EventWithPath.md#event)
- [path](exports_interaction.EventWithPath.md#path)

## Properties

### event

• **event**: [`EventServer`](../classes/exports_cluster.EventServer.md)<`any`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:45

___

### path

• **path**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:44
