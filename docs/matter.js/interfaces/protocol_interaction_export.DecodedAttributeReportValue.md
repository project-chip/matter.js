[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / DecodedAttributeReportValue

# Interface: DecodedAttributeReportValue<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).DecodedAttributeReportValue

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [path](protocol_interaction_export.DecodedAttributeReportValue.md#path)
- [value](protocol_interaction_export.DecodedAttributeReportValue.md#value)
- [version](protocol_interaction_export.DecodedAttributeReportValue.md#version)

## Properties

### path

• **path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeId` | [`AttributeId`](../modules/datatype_export.md#attributeid) |
| `attributeName` | `string` |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `nodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L24)

___

### value

• **value**: `T`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L32)

___

### version

• **version**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L31)
