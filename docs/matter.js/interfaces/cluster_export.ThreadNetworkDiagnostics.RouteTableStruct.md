[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / RouteTableStruct

# Interface: RouteTableStruct

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).RouteTableStruct

This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table entry
corresponds.

This field shall specify the RLOC16 for the Node for which this route table entry corresponds.

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

#### Inherited from

TypeFromSchema.age

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L248)

___

### allocated

• **allocated**: `boolean`

This field shall specify if the router ID as defined within the RouterId field has been allocated.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.6

#### Inherited from

TypeFromSchema.allocated

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L255)

___

### extAddress

• **extAddress**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.extAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L204)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:263](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L263)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L235)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:246](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L246)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L220)

___

### pathCost

• **pathCost**: `number`

This Field shall specify the cost of the route to the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.3

#### Inherited from

TypeFromSchema.pathCost

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L227)

___

### rloc16

• **rloc16**: `number`

#### Inherited from

TypeFromSchema.rloc16

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L205)

___

### routerId

• **routerId**: `number`

This field shall specify the Router ID for the Node for which this route table entry corresponds.

**`See`**

MatterSpecification.v11.Core § 11.13.5.5.1

#### Inherited from

TypeFromSchema.routerId

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L212)
