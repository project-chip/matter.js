[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Binding

# Namespace: Binding

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [TargetStruct](interfaces/TargetStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:131

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.binding

> `readonly` **binding**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

Each entry shall represent a binding.

###### See

MatterSpecification.v11.Core § 9.6.6.1

##### id

> `readonly` **id**: `30`

##### name

> `readonly` **name**: `"Binding"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:54

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:134

***

### TlvTargetStruct

> `const` **TlvTargetStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 9.6.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/BindingCluster.d.ts:15
