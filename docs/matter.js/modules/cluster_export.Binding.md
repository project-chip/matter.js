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

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L123)

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L125)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` = 0x1e; `name`: ``"Binding"`` = "Binding"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.Binding.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L70)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.Binding.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L126)

___

### TlvTargetStruct

• `Const` **TlvTargetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `cluster`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

MatterSpecification.v11.Core § 9.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L26)
