[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Descriptor](../modules/cluster_export.Descriptor.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[Descriptor](../modules/cluster_export.Descriptor.md).Cluster

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

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.Descriptor.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.Descriptor.Cluster.md#attributes)
- [base](cluster_export.Descriptor.Cluster.md#base)
- [commands](cluster_export.Descriptor.Cluster.md#commands)
- [events](cluster_export.Descriptor.Cluster.md#events)
- [extensions](cluster_export.Descriptor.Cluster.md#extensions)
- [features](cluster_export.Descriptor.Cluster.md#features)
- [id](cluster_export.Descriptor.Cluster.md#id)
- [name](cluster_export.Descriptor.Cluster.md#name)
- [revision](cluster_export.Descriptor.Cluster.md#revision)
- [supportedFeatures](cluster_export.Descriptor.Cluster.md#supportedfeatures)
- [unknown](cluster_export.Descriptor.Cluster.md#unknown)

### Methods

- [alter](cluster_export.Descriptor.Cluster.md#alter)
- [enable](cluster_export.Descriptor.Cluster.md#enable)
- [set](cluster_export.Descriptor.Cluster.md#set)
- [with](cluster_export.Descriptor.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``29``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"Descriptor"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `clientList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\<`number`\>\> ; `revision`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](cluster_export.Attribute.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
