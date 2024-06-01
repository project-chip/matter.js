[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / RouteTableStruct

# Interface: RouteTableStruct

## See

MatterSpecification.v11.Core § 11.13.5.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvRouteTableStruct`](../README.md#tlvroutetablestruct)\>

## Properties

### age

> **age**: `number`

This field shall specify the duration of time, in seconds, since a frame has been received from the Node for
which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.8

#### Inherited from

`TypeFromSchema.age`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:211

***

### allocated

> **allocated**: `boolean`

This field shall specify if the router ID as defined within the RouterId field has been allocated.

#### See

MatterSpecification.v11.Core § 11.13.5.5.9

#### Inherited from

`TypeFromSchema.allocated`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:217

***

### extAddress

> **extAddress**: `number` \| `bigint`

This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table entry
corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.1

#### Inherited from

`TypeFromSchema.extAddress`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:165

***

### linkEstablished

> **linkEstablished**: `boolean`

This field shall specify if a link has been established to the Node for which this route table entry
corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.10

#### Inherited from

`TypeFromSchema.linkEstablished`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:224

***

### lqiIn

> **lqiIn**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255, from the perspective of the Node reporting the neighbor table.

#### See

MatterSpecification.v11.Core § 11.13.5.5.6

#### Inherited from

`TypeFromSchema.lqiIn`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:197

***

### lqiOut

> **lqiOut**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255, from the perspective of the Node specified within the NextHop field.

#### See

MatterSpecification.v11.Core § 11.13.5.5.7

#### Inherited from

`TypeFromSchema.lqiOut`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:204

***

### nextHop

> **nextHop**: `number`

This field shall specify the Router ID for the next hop in the route to the Node for which this route table
entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.4

#### Inherited from

`TypeFromSchema.nextHop`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:184

***

### pathCost

> **pathCost**: `number`

This Field shall specify the cost of the route to the Node for which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.5

#### Inherited from

`TypeFromSchema.pathCost`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:190

***

### rloc16

> **rloc16**: `number`

This field shall specify the RLOC16 for the Node for which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.2

#### Inherited from

`TypeFromSchema.rloc16`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:171

***

### routerId

> **routerId**: `number`

This field shall specify the Router ID for the Node for which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.3

#### Inherited from

`TypeFromSchema.routerId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:177
