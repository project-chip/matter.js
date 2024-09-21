[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / [\<internal\>](../modules/protocol_interaction_export._internal_.md) / AttributePathWithValueVersion

# Interface: AttributePathWithValueVersion\<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).[\<internal\>](../modules/protocol_interaction_export._internal_.md).AttributePathWithValueVersion

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [attribute](protocol_interaction_export._internal_.AttributePathWithValueVersion.md#attribute)
- [path](protocol_interaction_export._internal_.AttributePathWithValueVersion.md#path)
- [schema](protocol_interaction_export._internal_.AttributePathWithValueVersion.md#schema)
- [value](protocol_interaction_export._internal_.AttributePathWithValueVersion.md#value)
- [version](protocol_interaction_export._internal_.AttributePathWithValueVersion.md#version)

## Properties

### attribute

• **attribute**: [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:53](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L53)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:52](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L52)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:54](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L54)

___

### value

• **value**: `T`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:55](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L55)

___

### version

• **version**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:56](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L56)
