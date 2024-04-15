[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Binding](../modules/exports_cluster.Binding.md) / TargetStruct

# Interface: TargetStruct

[exports/cluster](../modules/exports_cluster.md).[Binding](../modules/exports_cluster.Binding.md).TargetStruct

**`See`**

MatterSpecification.v11.Core § 9.6.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvTargetStruct`](../modules/exports_cluster.Binding.md#tlvtargetstruct)\>

  ↳ **`TargetStruct`**

## Table of contents

### Properties

- [cluster](exports_cluster.Binding.TargetStruct.md#cluster)
- [endpoint](exports_cluster.Binding.TargetStruct.md#endpoint)
- [fabricIndex](exports_cluster.Binding.TargetStruct.md#fabricindex)
- [group](exports_cluster.Binding.TargetStruct.md#group)
- [node](exports_cluster.Binding.TargetStruct.md#node)

## Properties

### cluster

• `Optional` **cluster**: [`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>

This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is
present, the client cluster shall also exist on this endpoint (with this Binding cluster). If this field is
present, the target shall be this cluster on the target endpoint(s).

**`See`**

MatterSpecification.v11.Core § 9.6.5.1.4

#### Inherited from

TypeFromSchema.cluster

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:43

___

### endpoint

• `Optional` **endpoint**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this
field shall NOT be present.

**`See`**

MatterSpecification.v11.Core § 9.6.5.1.3

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:35

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:44

___

### group

• `Optional` **group**: [`GroupId`](../modules/exports_datatype.md#groupid)

This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this
field shall NOT be present.

**`See`**

MatterSpecification.v11.Core § 9.6.5.1.2

#### Inherited from

TypeFromSchema.group

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:28

___

### node

• `Optional` **node**: [`NodeId`](../modules/exports_datatype.md#nodeid)

This field is the remote target node ID. If the Endpoint field is present, this field shall be present.

**`See`**

MatterSpecification.v11.Core § 9.6.5.1.1

#### Inherited from

TypeFromSchema.node

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:21
