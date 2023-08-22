[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Binding

# Namespace: Binding

[cluster/export](cluster_export.md).Binding

## Table of contents

### Variables

- [Cluster](cluster_export.Binding.md#cluster)
- [TlvTargetStruct](cluster_export.Binding.md#tlvtargetstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `binding`: [`WritableFabricScopedAttribute`](cluster_export.md#writablefabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Binding

NOTE

This scope of this document is the Binding cluster as part of the Cluster Library. The Binding cluster is meant
to replace the support from the Zigbee Device Object (ZDO) for supporting the binding table.

A binding represents a persistent relationship between an endpoint and one or more other local or remote
endpoints. A binding does not require that the relationship exists. It is up to the node application to set up
the relationship.

A binding is used to inform a client endpoint of one or more targets for a potential interaction. For example: a
light switch that controls one or more light bulbs, needs to be told the nodes and endpoints of the bulbs, or
told a group in which the bulbs are members. For example: A client that needs to subscribe to an occupancy
sensor, needs to know the node and endpoint of the sensor.

In such cases, a binding is used to direct a local endpoint to a target. The existence of the Binding cluster on
the client endpoint, allows the creation of one or more binding entries (bindings) in the Binding cluster.

Each binding indicates another endpoint or cluster on another endpoint. Multiple bindings are allowed, depending
on the interaction.

A binding is either a unicast binding, where the target is a single endpoint on a single node, or a groupcast
binding, where the target is a group, which may indicate multiple endpoints on multiple nodes. The binding may
also target a single cluster on the target endpoint(s).

When a client cluster requires a target for an interaction, the Binding cluster shall exist on the same endpoint.

Once a binding entry is created on the Binding cluster, the client endpoint may initiate interactions to the
binding target.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.6

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L93)

___

### TlvTargetStruct

• `Const` **TlvTargetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](datatype_export.md#clusterid)\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `group`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `node`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L23)
