[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / RouteTableStruct

# Interface: RouteTableStruct

## See

MatterSpecification.v11.Core § 11.13.5.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRouteTableStruct`](../README.md#tlvroutetablestruct)\>

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L258)

***

### allocated

> **allocated**: `boolean`

This field shall specify if the router ID as defined within the RouterId field has been allocated.

#### See

MatterSpecification.v11.Core § 11.13.5.5.9

#### Inherited from

`TypeFromSchema.allocated`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L265)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:205](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L205)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L273)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L242)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:250](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L250)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L227)

***

### pathCost

> **pathCost**: `number`

This Field shall specify the cost of the route to the Node for which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.5

#### Inherited from

`TypeFromSchema.pathCost`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L234)

***

### rloc16

> **rloc16**: `number`

This field shall specify the RLOC16 for the Node for which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.2

#### Inherited from

`TypeFromSchema.rloc16`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L212)

***

### routerId

> **routerId**: `number`

This field shall specify the Router ID for the Node for which this route table entry corresponds.

#### See

MatterSpecification.v11.Core § 11.13.5.5.3

#### Inherited from

`TypeFromSchema.routerId`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L219)
