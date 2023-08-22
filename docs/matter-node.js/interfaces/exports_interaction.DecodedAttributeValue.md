[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / DecodedAttributeValue

# Interface: DecodedAttributeValue<T\>

[exports/interaction](../modules/exports_interaction.md).DecodedAttributeValue

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [path](exports_interaction.DecodedAttributeValue.md#path)
- [value](exports_interaction.DecodedAttributeValue.md#value)
- [version](exports_interaction.DecodedAttributeValue.md#version)

## Properties

### path

• **path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeId` | [`AttributeId`](../modules/exports_datatype.md#attributeid) |
| `attributeName` | `string` |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `nodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:25

___

### value

• **value**: `T`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:33

___

### version

• `Optional` **version**: `number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:32
