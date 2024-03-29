[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Binding](../modules/cluster_export.Binding.md) / TargetStruct

# Interface: TargetStruct

[cluster/export](../modules/cluster_export.md).[Binding](../modules/cluster_export.Binding.md).TargetStruct

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvTargetStruct`](../modules/cluster_export.Binding.md#tlvtargetstruct)\>

  ↳ **`TargetStruct`**

## Table of contents

### Properties

- [cluster](cluster_export.Binding.TargetStruct.md#cluster)
- [endpoint](cluster_export.Binding.TargetStruct.md#endpoint)
- [fabricIndex](cluster_export.Binding.TargetStruct.md#fabricindex)
- [group](cluster_export.Binding.TargetStruct.md#group)
- [node](cluster_export.Binding.TargetStruct.md#node)

## Properties

### cluster

• `Optional` **cluster**: [`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>

This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is
present, the client cluster shall also exist on this endpoint (with this Binding cluster). If this field is
present, the target shall be this cluster on the target endpoint(s).

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1.4

#### Inherited from

TypeFromSchema.cluster

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:58](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L58)

___

### endpoint

• `Optional` **endpoint**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this
field shall NOT be present.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1.3

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L49)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:60](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L60)

___

### group

• `Optional` **group**: [`GroupId`](../modules/datatype_export.md#groupid)

This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this
field shall NOT be present.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1.2

#### Inherited from

TypeFromSchema.group

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:41](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L41)

___

### node

• `Optional` **node**: [`NodeId`](../modules/datatype_export.md#nodeid)

This field is the remote target node ID. If the Endpoint field is present, this field shall be present.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1.1

#### Inherited from

TypeFromSchema.node

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:33](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L33)
