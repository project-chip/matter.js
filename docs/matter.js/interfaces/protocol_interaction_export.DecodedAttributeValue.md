[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / DecodedAttributeValue

# Interface: DecodedAttributeValue<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).DecodedAttributeValue

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [path](protocol_interaction_export.DecodedAttributeValue.md#path)
- [value](protocol_interaction_export.DecodedAttributeValue.md#value)
- [version](protocol_interaction_export.DecodedAttributeValue.md#version)

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

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L36)

___

### value

• **value**: `T`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L44)

___

### version

• `Optional` **version**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L43)
