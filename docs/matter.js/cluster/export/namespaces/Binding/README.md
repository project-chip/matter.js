[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Binding

# Namespace: Binding

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [TargetStruct](interfaces/TargetStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L123)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.binding

> `readonly` **binding**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

Each entry shall represent a binding.

###### See

MatterSpecification.v11.Core § 9.6.6.1

##### id

> `readonly` **id**: `30` = `0x1e`

##### name

> `readonly` **name**: `"Binding"` = `"Binding"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L70)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L126)

***

### TlvTargetStruct

> `const` **TlvTargetStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 9.6.5.1

#### Type declaration

##### cluster

> **cluster**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`ClusterId`](../../../../datatype/export/README.md#clusterid)\>

This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is
present, the client cluster shall also exist on this endpoint (with this Binding cluster). If this field is
present, the target shall be this cluster on the target endpoint(s).

###### See

MatterSpecification.v11.Core § 9.6.5.1.4

##### endpoint

> **endpoint**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)\>

This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this
field shall NOT be present.

###### See

MatterSpecification.v11.Core § 9.6.5.1.3

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### group

> **group**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this
field shall NOT be present.

###### See

MatterSpecification.v11.Core § 9.6.5.1.2

##### node

> **node**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

This field is the remote target node ID. If the Endpoint field is present, this field shall be present.

###### See

MatterSpecification.v11.Core § 9.6.5.1.1

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L26)
