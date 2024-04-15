[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / RouteTableStruct

# Interface: RouteTableStruct

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).RouteTableStruct

This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table entry
corresponds.

This field shall specify the RLOC16 for the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvRouteTableStruct`](../modules/exports_cluster.ThreadNetworkDiagnostics.md#tlvroutetablestruct)\>

  ↳ **`RouteTableStruct`**

## Table of contents

### Properties

- [age](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#age)
- [allocated](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#allocated)
- [extAddress](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#extaddress)
- [linkEstablished](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#linkestablished)
- [lqiIn](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#lqiin)
- [lqiOut](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#lqiout)
- [nextHop](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#nexthop)
- [pathCost](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#pathcost)
- [rloc16](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#rloc16)
- [routerId](exports_cluster.ThreadNetworkDiagnostics.RouteTableStruct.md#routerid)

## Properties

### age

• **age**: `number`

#### Inherited from

TypeFromSchema.age

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:202

___

### allocated

• **allocated**: `boolean`

This field shall specify if the router ID as defined within the RouterId field has been allocated.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.6

#### Inherited from

TypeFromSchema.allocated

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:208

___

### extAddress

• **extAddress**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.extAddress

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:164

___

### linkEstablished

• **linkEstablished**: `boolean`

This field shall specify if a link has been established to the Node for which this route table entry
corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.7

#### Inherited from

TypeFromSchema.linkEstablished

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:215

___

### lqiIn

• **lqiIn**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255, from the perspective of the Node reporting the neighbor table.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.4

#### Inherited from

TypeFromSchema.lqiIn

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:191

___

### lqiOut

• **lqiOut**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255, from the perspective of the Node specified within the NextHop field.

This field shall specify the duration of time, in seconds, since a frame has been received from the Node for
which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.5

#### Inherited from

TypeFromSchema.lqiOut

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:201

___

### nextHop

• **nextHop**: `number`

This field shall specify the Router ID for the next hop in the route to the Node for which this route table
entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.2

#### Inherited from

TypeFromSchema.nextHop

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:178

___

### pathCost

• **pathCost**: `number`

This Field shall specify the cost of the route to the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.3

#### Inherited from

TypeFromSchema.pathCost

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:184

___

### rloc16

• **rloc16**: `number`

#### Inherited from

TypeFromSchema.rloc16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:165

___

### routerId

• **routerId**: `number`

This field shall specify the Router ID for the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.1

#### Inherited from

TypeFromSchema.routerId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:171
