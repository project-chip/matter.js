[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BallastConfiguration](../modules/exports_cluster.BallastConfiguration.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[BallastConfiguration](../modules/exports_cluster.BallastConfiguration.md).Cluster

Ballast Configuration

Attributes and commands for configuring a lighting ballast.

**`See`**

MatterSpecification.v11.Cluster § 3.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.BallastConfiguration.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.BallastConfiguration.Cluster.md#attributes)
- [base](exports_cluster.BallastConfiguration.Cluster.md#base)
- [commands](exports_cluster.BallastConfiguration.Cluster.md#commands)
- [events](exports_cluster.BallastConfiguration.Cluster.md#events)
- [extensions](exports_cluster.BallastConfiguration.Cluster.md#extensions)
- [features](exports_cluster.BallastConfiguration.Cluster.md#features)
- [id](exports_cluster.BallastConfiguration.Cluster.md#id)
- [name](exports_cluster.BallastConfiguration.Cluster.md#name)
- [revision](exports_cluster.BallastConfiguration.Cluster.md#revision)
- [supportedFeatures](exports_cluster.BallastConfiguration.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.BallastConfiguration.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.BallastConfiguration.Cluster.md#alter)
- [enable](exports_cluster.BallastConfiguration.Cluster.md#enable)
- [set](exports_cluster.BallastConfiguration.Cluster.md#set)
- [with](exports_cluster.BallastConfiguration.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``769``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"BallastConfiguration"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``4``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lampFailure`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
