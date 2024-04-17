[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [FanControl](../modules/cluster_export.FanControl.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[FanControl](../modules/cluster_export.FanControl.md).Cluster

Fan Control

An interface for controlling a fan in a heating/cooling system.

FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 4.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.FanControl.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.FanControl.Cluster.md#attributes)
- [base](cluster_export.FanControl.Cluster.md#base)
- [commands](cluster_export.FanControl.Cluster.md#commands)
- [events](cluster_export.FanControl.Cluster.md#events)
- [extensions](cluster_export.FanControl.Cluster.md#extensions)
- [features](cluster_export.FanControl.Cluster.md#features)
- [id](cluster_export.FanControl.Cluster.md#id)
- [name](cluster_export.FanControl.Cluster.md#name)
- [revision](cluster_export.FanControl.Cluster.md#revision)
- [supportedFeatures](cluster_export.FanControl.Cluster.md#supportedfeatures)
- [unknown](cluster_export.FanControl.Cluster.md#unknown)

### Methods

- [alter](cluster_export.FanControl.Cluster.md#alter)
- [enable](cluster_export.FanControl.Cluster.md#enable)
- [set](cluster_export.FanControl.Cluster.md#set)
- [with](cluster_export.FanControl.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }]

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
| `auto` | [`BitFlag`](../modules/schema_export.md#bitflag) | Auto Automatic mode supported for fan speed |
| `multiSpeed` | [`BitFlag`](../modules/schema_export.md#bitflag) | MultiSpeed 1-100 speeds |
| `rocking` | [`BitFlag`](../modules/schema_export.md#bitflag) | Rocking Rocking movement supported |
| `wind` | [`BitFlag`](../modules/schema_export.md#bitflag) | Wind Wind emulation supported |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``514``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"FanControl"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``2``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `rocking`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `wind`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
