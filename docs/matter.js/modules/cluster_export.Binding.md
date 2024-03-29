[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Binding

# Namespace: Binding

[cluster/export](cluster_export.md).Binding

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.Binding.Cluster.md)
- [TargetStruct](../interfaces/cluster_export.Binding.TargetStruct.md)

### Variables

- [Cluster](cluster_export.Binding.md#cluster)
- [ClusterInstance](cluster_export.Binding.md#clusterinstance)
- [Complete](cluster_export.Binding.md#complete)
- [TlvTargetStruct](cluster_export.Binding.md#tlvtargetstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Binding.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:124](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L124)

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:126](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L126)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` = 0x1e; `name`: ``"Binding"`` = "Binding"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.Binding.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:71](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L71)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.Binding.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:127](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L127)

___

### TlvTargetStruct

• `Const` **TlvTargetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `cluster`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L27)
