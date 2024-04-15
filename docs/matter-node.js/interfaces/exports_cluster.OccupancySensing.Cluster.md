[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OccupancySensing](../modules/exports_cluster.OccupancySensing.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[OccupancySensing](../modules/exports_cluster.OccupancySensing.md).Cluster

Occupancy Sensing

Attributes and commands for configuring occupancy sensing, and reporting occupancy status.

**`See`**

MatterSpecification.v11.Cluster § 2.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.OccupancySensing.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.OccupancySensing.Cluster.md#attributes)
- [base](exports_cluster.OccupancySensing.Cluster.md#base)
- [commands](exports_cluster.OccupancySensing.Cluster.md#commands)
- [events](exports_cluster.OccupancySensing.Cluster.md#events)
- [extensions](exports_cluster.OccupancySensing.Cluster.md#extensions)
- [features](exports_cluster.OccupancySensing.Cluster.md#features)
- [id](exports_cluster.OccupancySensing.Cluster.md#id)
- [name](exports_cluster.OccupancySensing.Cluster.md#name)
- [revision](exports_cluster.OccupancySensing.Cluster.md#revision)
- [supportedFeatures](exports_cluster.OccupancySensing.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.OccupancySensing.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.OccupancySensing.Cluster.md#alter)
- [enable](exports_cluster.OccupancySensing.Cluster.md#enable)
- [set](exports_cluster.OccupancySensing.Cluster.md#set)
- [with](exports_cluster.OccupancySensing.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1030``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"OccupancySensing"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pir`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `ultrasonic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
