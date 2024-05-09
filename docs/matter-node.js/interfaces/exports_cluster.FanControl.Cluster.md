[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [FanControl](../modules/exports_cluster.FanControl.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[FanControl](../modules/exports_cluster.FanControl.md).Cluster

Fan Control

An interface for controlling a fan in a heating/cooling system.

FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 4.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.FanControl.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.FanControl.Cluster.md#attributes)
- [base](exports_cluster.FanControl.Cluster.md#base)
- [commands](exports_cluster.FanControl.Cluster.md#commands)
- [events](exports_cluster.FanControl.Cluster.md#events)
- [extensions](exports_cluster.FanControl.Cluster.md#extensions)
- [features](exports_cluster.FanControl.Cluster.md#features)
- [id](exports_cluster.FanControl.Cluster.md#id)
- [name](exports_cluster.FanControl.Cluster.md#name)
- [revision](exports_cluster.FanControl.Cluster.md#revision)
- [supportedFeatures](exports_cluster.FanControl.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.FanControl.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.FanControl.Cluster.md#alter)
- [enable](exports_cluster.FanControl.Cluster.md#enable)
- [set](exports_cluster.FanControl.Cluster.md#set)
- [with](exports_cluster.FanControl.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `auto` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Auto Automatic mode supported for fan speed |
| `multiSpeed` | [`BitFlag`](../modules/exports_schema.md#bitflag) | MultiSpeed 1-100 speeds |
| `rocking` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Rocking Rocking movement supported |
| `wind` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Wind Wind emulation supported |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``514``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"FanControl"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``2``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanMode`](../enums/exports_cluster.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`FanModeSequence`](../enums/exports_cluster.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `multiSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockRound`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rockUpDown`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `rocking`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `sleepWind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }  } ; `flags`: \{ `wind`: ``true``  }  }] ; `features`: \{ `auto`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `multiSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `rocking`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `wind`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``514`` ; `name`: ``"FanControl"`` ; `revision`: ``2``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
