[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / EventStorageData

# Interface: EventStorageData\<T\>

Data of an event which was triggered and stored internally

## Extends

- [`EventData`](EventData.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

### clusterId

> **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Inherited from

[`EventData`](EventData.md).[`clusterId`](EventData.md#clusterid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:22

***

### data

> **data**: `T`

#### Inherited from

[`EventData`](EventData.md).[`data`](EventData.md#data)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:26

***

### endpointId

> **endpointId**: [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`EventData`](EventData.md).[`endpointId`](EventData.md#endpointid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:21

***

### epochTimestamp

> **epochTimestamp**: `number`

#### Inherited from

[`EventData`](EventData.md).[`epochTimestamp`](EventData.md#epochtimestamp)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:24

***

### eventId

> **eventId**: [`EventId`](../../datatype/README.md#eventid)

#### Inherited from

[`EventData`](EventData.md).[`eventId`](EventData.md#eventid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:23

***

### eventNumber

> **eventNumber**: [`EventNumber`](../../datatype/README.md#eventnumber)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:32

***

### priority

> **priority**: [`EventPriority`](../../cluster/enumerations/EventPriority.md)

#### Inherited from

[`EventData`](EventData.md).[`priority`](EventData.md#priority)

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:25
