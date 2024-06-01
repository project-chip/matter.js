[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [protocol/interaction/export](../../README.md) / [\<internal\>](../README.md) / AttributePathWithValueVersion

# Interface: AttributePathWithValueVersion\<T\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

### path

> **path**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### attributeId

> **attributeId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`AttributeId`](../../../../../datatype/export/README.md#attributeid)\>

##### clusterId

> **clusterId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`ClusterId`](../../../../../datatype/export/README.md#clusterid)\>

##### enableTagCompression

> **enableTagCompression**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### endpointId

> **endpointId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../../../datatype/export/README.md#endpointnumber)\>

##### listIndex

> **listIndex**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<`null` \| `number`\>

##### nodeId

> **nodeId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L50)

***

### schema

> **schema**: [`TlvSchema`](../../../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L51)

***

### value

> **value**: `T`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L52)

***

### version

> **version**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L53)
