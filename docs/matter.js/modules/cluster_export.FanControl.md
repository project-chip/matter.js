[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FanControl

# Namespace: FanControl

[cluster/export](cluster_export.md).FanControl

## Table of contents

### Enumerations

- [FanMode](../enums/cluster_export.FanControl.FanMode.md)
- [FanModeSequence](../enums/cluster_export.FanControl.FanModeSequence.md)
- [Feature](../enums/cluster_export.FanControl.Feature.md)

### Type Aliases

- [Extension](cluster_export.FanControl.md#extension)

### Variables

- [Base](cluster_export.FanControl.md#base)
- [Cluster](cluster_export.FanControl.md#cluster)
- [Complete](cluster_export.FanControl.md#complete)
- [MultiSpeedComponent](cluster_export.FanControl.md#multispeedcomponent)
- [RockSetting](cluster_export.FanControl.md#rocksetting)
- [RockSupport](cluster_export.FanControl.md#rocksupport)
- [RockingComponent](cluster_export.FanControl.md#rockingcomponent)
- [WindComponent](cluster_export.FanControl.md#windcomponent)
- [WindSetting](cluster_export.FanControl.md#windsetting)
- [WindSupport](cluster_export.FanControl.md#windsupport)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.FanControl.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `multiSpeed`: ``true``  } ? typeof [`MultiSpeedComponent`](cluster_export.FanControl.md#multispeedcomponent) : {} & `SF` extends { `rocking`: ``true``  } ? typeof [`RockingComponent`](cluster_export.FanControl.md#rockingcomponent) : {} & `SF` extends { `wind`: ``true``  } ? typeof [`WindComponent`](cluster_export.FanControl.md#windcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:377](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L377)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  } ; `features`: { `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>

These elements and properties are present in all FanControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:169](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L169)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: { `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``514`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"FanControl"`` ; `revision`: ``2`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  } ; `features`: { `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``514`` = 0x202; `name`: ``"FanControl"`` = "FanControl"; `revision`: ``2`` = 2 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.FanControl.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Fan Control

An interface for controlling a fan in a heating/cooling system.

FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:353](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L353)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `rockSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rockSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `speedCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `speedMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `speedSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `windSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `windSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: { `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``514`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"FanControl"`` = Cluster.name; `revision`: ``2`` = Cluster.revision }\>

This cluster supports all FanControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:394](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L394)

___

### MultiSpeedComponent

• `Const` **MultiSpeedComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `speedCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }  }\>

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:247](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L247)

___

### RockSetting

• `Const` **RockSetting**: `Object`

The value of the FanControl rockSetting attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.9

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rockRound` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rockUpDown` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:115](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L115)

___

### RockSupport

• `Const` **RockSupport**: `Object`

The value of the FanControl rockSupport attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rockLeftRight` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rockRound` | [`BitFlag`](schema_export.md#bitflag-1) |
| `rockUpDown` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:108](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L108)

___

### RockingComponent

• `Const` **RockingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `rockSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }  }\>

A FanControlCluster supports these elements if it supports feature Rocking.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:280](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L280)

___

### WindComponent

• `Const` **WindComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `windSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }  }\>

A FanControlCluster supports these elements if it supports feature Wind.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:313](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L313)

___

### WindSetting

• `Const` **WindSetting**: `Object`

The value of the FanControl windSetting attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.11

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](schema_export.md#bitflag-1) |
| `sleepWind` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:129](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L129)

___

### WindSupport

• `Const` **WindSupport**: `Object`

The value of the FanControl windSupport attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4.6.10

#### Type declaration

| Name | Type |
| :------ | :------ |
| `naturalWind` | [`BitFlag`](schema_export.md#bitflag-1) |
| `sleepWind` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:122](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L122)
