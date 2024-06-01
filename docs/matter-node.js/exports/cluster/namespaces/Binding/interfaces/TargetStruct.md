[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Binding](../README.md) / TargetStruct

# Interface: TargetStruct

## See

MatterSpecification.v11.Core § 9.6.5.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvTargetStruct`](../README.md#tlvtargetstruct)\>

## Properties

### cluster?

> `optional` **cluster**: [`ClusterId`](../../../../datatype/README.md#clusterid)

This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is
present, the client cluster shall also exist on this endpoint (with this Binding cluster). If this field is
present, the target shall be this cluster on the target endpoint(s).

#### See

MatterSpecification.v11.Core § 9.6.5.1.4

#### Inherited from

`TypeFromSchema.cluster`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:43

***

### endpoint?

> `optional` **endpoint**: [`EndpointNumber`](../../../../datatype/README.md#endpointnumber)

This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this
field shall NOT be present.

#### See

MatterSpecification.v11.Core § 9.6.5.1.3

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:35

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:44

***

### group?

> `optional` **group**: [`GroupId`](../../../../datatype/README.md#groupid)

This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this
field shall NOT be present.

#### See

MatterSpecification.v11.Core § 9.6.5.1.2

#### Inherited from

`TypeFromSchema.group`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:28

***

### node?

> `optional` **node**: [`NodeId`](../../../../datatype/README.md#nodeid)

This field is the remote target node ID. If the Endpoint field is present, this field shall be present.

#### See

MatterSpecification.v11.Core § 9.6.5.1.1

#### Inherited from

`TypeFromSchema.node`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:21
