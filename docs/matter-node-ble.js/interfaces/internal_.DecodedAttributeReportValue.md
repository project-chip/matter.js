[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DecodedAttributeReportValue

# Interface: DecodedAttributeReportValue<T\>

[<internal>](../modules/internal_.md).DecodedAttributeReportValue

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [path](internal_.DecodedAttributeReportValue.md#path)
- [value](internal_.DecodedAttributeReportValue.md#value)
- [version](internal_.DecodedAttributeReportValue.md#version)

## Properties

### path

• **path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeId` | [`AttributeId`](../modules/internal_.md#attributeid) |
| `attributeName` | `string` |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `nodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Defined in

matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:14

___

### value

• **value**: `T`

#### Defined in

matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:22

___

### version

• **version**: `number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/AttributeDataDecoder.d.ts:21
