[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [protocol/interaction/export](../../README.md) / [\<internal\>](../README.md) / EventPathWithEventData

# Interface: EventPathWithEventData\<T\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

### event

> **event**: [`EventStorageData`](../../interfaces/EventStorageData.md)\<`T`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L59)

***

### path

> **path**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### clusterId

> **clusterId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`ClusterId`](../../../../../datatype/export/README.md#clusterid)\>

##### endpointId

> **endpointId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../../../datatype/export/README.md#endpointnumber)\>

##### eventId

> **eventId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)\>

##### isUrgent

> **isUrgent**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### nodeId

> **nodeId**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L57)

***

### schema

> **schema**: [`TlvSchema`](../../../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L58)
