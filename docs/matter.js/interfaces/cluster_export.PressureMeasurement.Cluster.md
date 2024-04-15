[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PressureMeasurement](../modules/cluster_export.PressureMeasurement.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[PressureMeasurement](../modules/cluster_export.PressureMeasurement.md).Cluster

Pressure Measurement

This cluster provides an interface to pressure measurement functionality, including configuration and provision
of notifications of pressure measurements.

PressureMeasurementCluster supports optional features that you can enable with the
PressureMeasurementCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 2.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.PressureMeasurement.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.PressureMeasurement.Cluster.md#attributes)
- [base](cluster_export.PressureMeasurement.Cluster.md#base)
- [commands](cluster_export.PressureMeasurement.Cluster.md#commands)
- [events](cluster_export.PressureMeasurement.Cluster.md#events)
- [extensions](cluster_export.PressureMeasurement.Cluster.md#extensions)
- [features](cluster_export.PressureMeasurement.Cluster.md#features)
- [id](cluster_export.PressureMeasurement.Cluster.md#id)
- [name](cluster_export.PressureMeasurement.Cluster.md#name)
- [revision](cluster_export.PressureMeasurement.Cluster.md#revision)
- [supportedFeatures](cluster_export.PressureMeasurement.Cluster.md#supportedfeatures)
- [unknown](cluster_export.PressureMeasurement.Cluster.md#unknown)

### Methods

- [alter](cluster_export.PressureMeasurement.Cluster.md#alter)
- [enable](cluster_export.PressureMeasurement.Cluster.md#enable)
- [set](cluster_export.PressureMeasurement.Cluster.md#set)
- [with](cluster_export.PressureMeasurement.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }]

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `extended` | [`BitFlag`](../modules/schema_export.md#bitflag) | Extended The cluster is capable of extended range and resolution |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1027``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"PressureMeasurement"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``3``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `maxMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `measuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minMeasuredValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `tolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `minScaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `scale`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `scaledTolerance`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `scaledValue`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = ExtendedComponent; `flags`: \{ `extended`: ``true`` = true }  }] ; `features`: \{ `extended`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1027`` = 0x403; `name`: ``"PressureMeasurement"`` = "PressureMeasurement"; `revision`: ``3`` = 3 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
