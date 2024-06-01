[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / EventStorageData

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

> **clusterId**: [`ClusterId`](../README.md#clusterid)

#### Inherited from

[`EventData`](EventData.md).[`clusterId`](EventData.md#clusterid)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:22

***

### data

> **data**: `T`

#### Inherited from

[`EventData`](EventData.md).[`data`](EventData.md#data)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:26

***

### endpointId

> **endpointId**: [`EndpointNumber`](../README.md#endpointnumber)

#### Inherited from

[`EventData`](EventData.md).[`endpointId`](EventData.md#endpointid)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:21

***

### epochTimestamp

> **epochTimestamp**: `number`

#### Inherited from

[`EventData`](EventData.md).[`epochTimestamp`](EventData.md#epochtimestamp)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:24

***

### eventId

> **eventId**: [`EventId`](../README.md#eventid-1)

#### Inherited from

[`EventData`](EventData.md).[`eventId`](EventData.md#eventid)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:23

***

### eventNumber

> **eventNumber**: [`EventNumber`](../README.md#eventnumber-1)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:32

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`EventData`](EventData.md).[`priority`](EventData.md#priority)

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:25
