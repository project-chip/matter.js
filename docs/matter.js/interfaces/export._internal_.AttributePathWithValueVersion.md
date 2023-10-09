[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / AttributePathWithValueVersion

# Interface: AttributePathWithValueVersion<T\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).AttributePathWithValueVersion

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [path](export._internal_.AttributePathWithValueVersion.md#path)
- [schema](export._internal_.AttributePathWithValueVersion.md#schema)
- [value](export._internal_.AttributePathWithValueVersion.md#value)
- [version](export._internal_.AttributePathWithValueVersion.md#version)

## Properties

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:54

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:55

___

### value

• **value**: `T`

#### Defined in

packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:56

___

### version

• **version**: `number`

#### Defined in

packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:57
