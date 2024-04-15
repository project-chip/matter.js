[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Descriptor](../modules/exports_cluster.Descriptor.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[Descriptor](../modules/exports_cluster.Descriptor.md).Cluster

Descriptor

NOTE The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a
node, its endpoints and clusters.

This cluster describes an endpoint instance on the node, independently from other endpoints, but also allows
composition of endpoints to conform to complex device type patterns.

This cluster supports a list of one or more device type identifiers that represent conformance to device type
specifications.

The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a composed device
type.

**`See`**

MatterSpecification.v11.Core § 9.5

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.Descriptor.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.Descriptor.Cluster.md#attributes)
- [base](exports_cluster.Descriptor.Cluster.md#base)
- [commands](exports_cluster.Descriptor.Cluster.md#commands)
- [events](exports_cluster.Descriptor.Cluster.md#events)
- [extensions](exports_cluster.Descriptor.Cluster.md#extensions)
- [features](exports_cluster.Descriptor.Cluster.md#features)
- [id](exports_cluster.Descriptor.Cluster.md#id)
- [name](exports_cluster.Descriptor.Cluster.md#name)
- [revision](exports_cluster.Descriptor.Cluster.md#revision)
- [supportedFeatures](exports_cluster.Descriptor.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.Descriptor.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.Descriptor.Cluster.md#alter)
- [enable](exports_cluster.Descriptor.Cluster.md#enable)
- [set](exports_cluster.Descriptor.Cluster.md#set)
- [with](exports_cluster.Descriptor.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``29``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"Descriptor"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `deviceType`: [`FieldType`](exports_tlv.FieldType.md)\<[`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` ; `name`: ``"Descriptor"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
