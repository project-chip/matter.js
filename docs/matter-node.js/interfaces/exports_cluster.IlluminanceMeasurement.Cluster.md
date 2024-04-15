[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [IlluminanceMeasurement](../modules/exports_cluster.IlluminanceMeasurement.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[IlluminanceMeasurement](../modules/exports_cluster.IlluminanceMeasurement.md).Cluster

Illuminance Measurement

Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.

**`See`**

MatterSpecification.v11.Cluster § 2.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.IlluminanceMeasurement.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.IlluminanceMeasurement.Cluster.md#attributes)
- [base](exports_cluster.IlluminanceMeasurement.Cluster.md#base)
- [commands](exports_cluster.IlluminanceMeasurement.Cluster.md#commands)
- [events](exports_cluster.IlluminanceMeasurement.Cluster.md#events)
- [extensions](exports_cluster.IlluminanceMeasurement.Cluster.md#extensions)
- [features](exports_cluster.IlluminanceMeasurement.Cluster.md#features)
- [id](exports_cluster.IlluminanceMeasurement.Cluster.md#id)
- [name](exports_cluster.IlluminanceMeasurement.Cluster.md#name)
- [revision](exports_cluster.IlluminanceMeasurement.Cluster.md#revision)
- [supportedFeatures](exports_cluster.IlluminanceMeasurement.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.IlluminanceMeasurement.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.IlluminanceMeasurement.Cluster.md#alter)
- [enable](exports_cluster.IlluminanceMeasurement.Cluster.md#enable)
- [set](exports_cluster.IlluminanceMeasurement.Cluster.md#set)
- [with](exports_cluster.IlluminanceMeasurement.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1024``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"IlluminanceMeasurement"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``3``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `lightSensorType`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `maxMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `id`: ``1024`` ; `name`: ``"IlluminanceMeasurement"`` ; `revision`: ``3``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
