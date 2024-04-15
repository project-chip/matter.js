[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FanControl

# Namespace: FanControl

[cluster/export](cluster_export.md).FanControl

## Table of contents

### Enumerations

- [FanMode](../enums/cluster_export.FanControl.FanMode.md)
- [FanModeSequence](../enums/cluster_export.FanControl.FanModeSequence.md)
- [Feature](../enums/cluster_export.FanControl.Feature.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.FanControl.Cluster.md)
- [Complete](../interfaces/cluster_export.FanControl.Complete.md)

### Variables

- [Base](cluster_export.FanControl.md#base)
- [Cluster](cluster_export.FanControl.md#cluster)
- [ClusterInstance](cluster_export.FanControl.md#clusterinstance)
- [Complete](cluster_export.FanControl.md#complete)
- [CompleteInstance](cluster_export.FanControl.md#completeinstance)
- [MultiSpeedComponent](cluster_export.FanControl.md#multispeedcomponent)
- [RockSetting](cluster_export.FanControl.md#rocksetting)
- [RockSupport](cluster_export.FanControl.md#rocksupport)
- [RockingComponent](cluster_export.FanControl.md#rockingcomponent)
- [WindComponent](cluster_export.FanControl.md#windcomponent)
- [WindSetting](cluster_export.FanControl.md#windsetting)
- [WindSupport](cluster_export.FanControl.md#windsupport)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all FanControl clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `fanMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } | - |
| `attributes.fanMode` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> | This attribute shall indicate the current speed mode of the fan. This attribute may be written by the client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the table below. **`See`** MatterSpecification.v11.Cluster § 4.4.6.1 |
| `attributes.fanModeSequence` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> | This indicates the fan speed ranges that shall be supported. **`See`** MatterSpecification.v11.Cluster § 4.4.6.2 |
| `attributes.percentCurrent` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan is off. See Section 4.4.6.3.1 for more details. **`See`** MatterSpecification.v11.Cluster § 4.4.6.4 |
| `attributes.percentSetting` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> | This attribute shall indicate the speed setting for the fan. This attribute may be written by the client to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to Off. **`See`** MatterSpecification.v11.Cluster § 4.4.6.3 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] | This metadata controls which FanControlCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `auto`: [`BitFlag`](schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `rocking`: [`BitFlag`](schema_export.md#bitflag) ; `wind`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.auto` | [`BitFlag`](schema_export.md#bitflag) | Auto Automatic mode supported for fan speed |
| `features.multiSpeed` | [`BitFlag`](schema_export.md#bitflag) | MultiSpeed 1-100 speeds |
| `features.rocking` | [`BitFlag`](schema_export.md#bitflag) | Rocking Rocking movement supported |
| `features.wind` | [`BitFlag`](schema_export.md#bitflag) | Wind Wind emulation supported |
| `id` | ``514`` | - |
| `name` | ``"FanControl"`` | - |
| `revision` | ``2`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:269](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L269)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.FanControl.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:369](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L369)

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:371](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L371)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `fanMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `speedCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  }  } = MultiSpeedComponent; `flags`: \{ `multiSpeed`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `rockSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = RockingComponent; `flags`: \{ `rocking`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `windSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  }  } = WindComponent; `flags`: \{ `wind`: ``true`` = true }  }] ; `features`: \{ `auto`: [`BitFlag`](schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `rocking`: [`BitFlag`](schema_export.md#bitflag) ; `wind`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>

**`See`**

[Cluster](cluster_export.FanControl.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:357](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L357)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.FanControl.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:409](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L409)

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:411](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L411)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `fanMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `auto`: [`BitFlag`](schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `rocking`: [`BitFlag`](schema_export.md#bitflag) ; `wind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `percentCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `rockSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rocking`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rockSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rocking`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `speedCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `speedMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `speedSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `multiSpeed`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `windSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wind`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `windSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wind`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `auto`: [`BitFlag`](schema_export.md#bitflag) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag) ; `rocking`: [`BitFlag`](schema_export.md#bitflag) ; `wind`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``514``, ``"ClusterId"``\> = Cluster.id; `name`: ``"FanControl"`` = Cluster.name; `revision`: ``2`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.FanControl.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:379](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L379)

___

### MultiSpeedComponent

• `Const` **MultiSpeedComponent**: `Object`

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `speedCurrent`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.speedCurrent` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.speedMax` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.speedSetting` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L135)

___

### RockSetting

• `Const` **RockSetting**: `Object`

The value of the FanControl rockSetting attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.9

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](schema_export.md#bitflag) |
| `rockRound` | [`BitFlag`](schema_export.md#bitflag) |
| `rockUpDown` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L30)

___

### RockSupport

• `Const` **RockSupport**: `Object`

The value of the FanControl rockSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](schema_export.md#bitflag) |
| `rockRound` | [`BitFlag`](schema_export.md#bitflag) |
| `rockUpDown` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L23)

___

### RockingComponent

• `Const` **RockingComponent**: `Object`

A FanControlCluster supports these elements if it supports feature Rocking.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `rockSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.rockSetting` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.rockSupport` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L168)

___

### WindComponent

• `Const` **WindComponent**: `Object`

A FanControlCluster supports these elements if it supports feature Wind.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `windSetting`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } |
| `attributes.windSetting` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |
| `attributes.windSupport` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L201)

___

### WindSetting

• `Const` **WindSetting**: `Object`

The value of the FanControl windSetting attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.11

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](schema_export.md#bitflag) |
| `sleepWind` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L44)

___

### WindSupport

• `Const` **WindSupport**: `Object`

The value of the FanControl windSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 4.4.6.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](schema_export.md#bitflag) |
| `sleepWind` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L37)
