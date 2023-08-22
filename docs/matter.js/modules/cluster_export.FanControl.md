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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.FanControl.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `multiSpeed`: ``true``  } ? typeof [`MultiSpeedComponent`](cluster_export.FanControl.md#multispeedcomponent) : {} & `SF` extends { `rocking`: ``true``  } ? typeof [`RockingComponent`](cluster_export.FanControl.md#rockingcomponent) : {} & `SF` extends { `wind`: ``true``  } ? typeof [`WindComponent`](cluster_export.FanControl.md#windcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:382](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L382)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all FanControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:177](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L177)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.FanControl.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Fan Control

An interface for controlling a fan in a heating/cooling system.

FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:361](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L361)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `fanMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanMode`](../enums/cluster_export.FanControl.FanMode.md), `any`\> ; `fanModeSequence`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`FanModeSequence`](../enums/cluster_export.FanControl.FanModeSequence.md), `any`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `percentCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `percentSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `rockSetting`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `rockSupport`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `speedCurrent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `speedMax`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `speedSetting`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>\> ; `windSetting`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\> ; `windSupport`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `auto`: [`BitFlag`](schema_export.md#bitflag-1) ; `multiSpeed`: [`BitFlag`](schema_export.md#bitflag-1) ; `rocking`: [`BitFlag`](schema_export.md#bitflag-1) ; `wind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, {}, {}\>

This cluster supports all FanControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:399](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L399)

___

### MultiSpeedComponent

• `Const` **MultiSpeedComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `speedCurrent`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `speedMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `speedSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A FanControlCluster supports these elements if it supports feature MultiSpeed.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:255](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L255)

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

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L123)

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

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L116)

___

### RockingComponent

• `Const` **RockingComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `rockSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `rockSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `rockLeftRight`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockRound`: [`BitFlag`](schema_export.md#bitflag-1) ; `rockUpDown`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A FanControlCluster supports these elements if it supports feature Rocking.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:288](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L288)

___

### WindComponent

• `Const` **WindComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `windSetting`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `windSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `naturalWind`: [`BitFlag`](schema_export.md#bitflag-1) ; `sleepWind`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A FanControlCluster supports these elements if it supports feature Wind.

#### Defined in

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:321](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L321)

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

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:137](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L137)

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

[packages/matter.js/src/cluster/definitions/FanControlCluster.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FanControlCluster.ts#L130)
