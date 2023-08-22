[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventData

# Interface: EventData<T\>

[<internal>](../modules/internal_.md).EventData

Data of one Event

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventData`**

  ↳ [`EventStorageData`](internal_.EventStorageData.md)

## Table of contents

### Properties

- [clusterId](internal_.EventData.md#clusterid)
- [data](internal_.EventData.md#data)
- [endpointId](internal_.EventData.md#endpointid)
- [epochTimestamp](internal_.EventData.md#epochtimestamp)
- [eventId](internal_.EventData.md#eventid)
- [priority](internal_.EventData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:18

___

### data

• **data**: `T`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:22

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:17

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:20

___

### eventId

• **eventId**: [`EventId`](../modules/internal_.md#eventid)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:19

___

### priority

• **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:21
