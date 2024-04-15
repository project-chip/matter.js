[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Binding](../modules/exports_cluster.Binding.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[Binding](../modules/exports_cluster.Binding.md).Cluster

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

MatterSpecification.v11.Core § 9.6

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.Binding.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.Binding.Cluster.md#attributes)
- [base](exports_cluster.Binding.Cluster.md#base)
- [commands](exports_cluster.Binding.Cluster.md#commands)
- [events](exports_cluster.Binding.Cluster.md#events)
- [extensions](exports_cluster.Binding.Cluster.md#extensions)
- [features](exports_cluster.Binding.Cluster.md#features)
- [id](exports_cluster.Binding.Cluster.md#id)
- [name](exports_cluster.Binding.Cluster.md#name)
- [revision](exports_cluster.Binding.Cluster.md#revision)
- [supportedFeatures](exports_cluster.Binding.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.Binding.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.Binding.Cluster.md#alter)
- [enable](exports_cluster.Binding.Cluster.md#enable)
- [set](exports_cluster.Binding.Cluster.md#set)
- [with](exports_cluster.Binding.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``30``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"Binding"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `binding`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `cluster`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `group`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `node`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[], `any`\>  } ; `id`: ``30`` ; `name`: ``"Binding"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
