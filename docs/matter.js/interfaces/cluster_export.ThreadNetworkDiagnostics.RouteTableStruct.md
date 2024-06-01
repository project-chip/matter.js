[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / RouteTableStruct

# Interface: RouteTableStruct

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).RouteTableStruct

**`See`**

MatterSpecification.v11.Core § 11.13.5.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRouteTableStruct`](../modules/cluster_export.ThreadNetworkDiagnostics.md#tlvroutetablestruct)\>

  ↳ **`RouteTableStruct`**

## Table of contents

### Properties

- [age](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#age)
- [allocated](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#allocated)
- [extAddress](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#extaddress)
- [linkEstablished](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#linkestablished)
- [lqiIn](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#lqiin)
- [lqiOut](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#lqiout)
- [nextHop](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#nexthop)
- [pathCost](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#pathcost)
- [rloc16](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#rloc16)
- [routerId](cluster_export.ThreadNetworkDiagnostics.RouteTableStruct.md#routerid)

## Properties

### age

• **age**: `number`

This field shall specify the duration of time, in seconds, since a frame has been received from the Node for
which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.8

#### Inherited from

TypeFromSchema.age

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:258](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L258)

___

### allocated

• **allocated**: `boolean`

This field shall specify if the router ID as defined within the RouterId field has been allocated.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.9

#### Inherited from

TypeFromSchema.allocated

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:265](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L265)

___

### extAddress

• **extAddress**: `number` \| `bigint`

This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table entry
corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.1

#### Inherited from

TypeFromSchema.extAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:205](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L205)

___

### linkEstablished

• **linkEstablished**: `boolean`

This field shall specify if a link has been established to the Node for which this route table entry
corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.10

#### Inherited from

TypeFromSchema.linkEstablished

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:273](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L273)

___

### lqiIn

• **lqiIn**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255, from the perspective of the Node reporting the neighbor table.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.6

#### Inherited from

TypeFromSchema.lqiIn

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:242](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L242)

___

### lqiOut

• **lqiOut**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255, from the perspective of the Node specified within the NextHop field.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.7

#### Inherited from

TypeFromSchema.lqiOut

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:250](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L250)

___

### nextHop

• **nextHop**: `number`

This field shall specify the Router ID for the next hop in the route to the Node for which this route table
entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.4

#### Inherited from

TypeFromSchema.nextHop

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:227](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L227)

___

### pathCost

• **pathCost**: `number`

This Field shall specify the cost of the route to the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.5

#### Inherited from

TypeFromSchema.pathCost

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:234](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L234)

___

### rloc16

• **rloc16**: `number`

This field shall specify the RLOC16 for the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.2

#### Inherited from

TypeFromSchema.rloc16

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:212](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L212)

___

### routerId

• **routerId**: `number`

This field shall specify the Router ID for the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.3

#### Inherited from

TypeFromSchema.routerId

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:219](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L219)
