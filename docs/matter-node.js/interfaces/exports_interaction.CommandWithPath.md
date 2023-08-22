[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / CommandWithPath

# Interface: CommandWithPath

[exports/interaction](../modules/exports_interaction.md).CommandWithPath

## Table of contents

### Properties

- [command](exports_interaction.CommandWithPath.md#command)
- [path](exports_interaction.CommandWithPath.md#path)

## Properties

### command

• **command**: [`CommandServer`](../classes/exports_cluster.CommandServer.md)<`any`, `any`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:49

___

### path

• **path**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](exports_tlv.FieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `commandId`: [`FieldType`](exports_tlv.FieldType.md)<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:48
