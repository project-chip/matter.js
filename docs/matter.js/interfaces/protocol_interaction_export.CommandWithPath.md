[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / CommandWithPath

# Interface: CommandWithPath

[protocol/interaction/export](../modules/protocol_interaction_export.md).CommandWithPath

## Table of contents

### Properties

- [command](protocol_interaction_export.CommandWithPath.md#command)
- [path](protocol_interaction_export.CommandWithPath.md#path)

## Properties

### command

• **command**: [`CommandServer`](../classes/cluster_export.CommandServer.md)\<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L103)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](tlv_export.FieldType.md)\<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L102)
