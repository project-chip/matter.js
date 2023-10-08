[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PowerSource

# Namespace: PowerSource

[cluster/export](cluster_export.md).PowerSource

## Table of contents

### Enumerations

- [BatApprovedChemistry](../enums/cluster_export.PowerSource.BatApprovedChemistry.md)
- [BatChargeFault](../enums/cluster_export.PowerSource.BatChargeFault.md)
- [BatChargeLevel](../enums/cluster_export.PowerSource.BatChargeLevel.md)
- [BatChargeState](../enums/cluster_export.PowerSource.BatChargeState.md)
- [BatCommonDesignation](../enums/cluster_export.PowerSource.BatCommonDesignation.md)
- [BatFault](../enums/cluster_export.PowerSource.BatFault.md)
- [BatReplaceability](../enums/cluster_export.PowerSource.BatReplaceability.md)
- [Feature](../enums/cluster_export.PowerSource.Feature.md)
- [PowerSourceStatus](../enums/cluster_export.PowerSource.PowerSourceStatus.md)
- [WiredCurrentType](../enums/cluster_export.PowerSource.WiredCurrentType.md)
- [WiredFault](../enums/cluster_export.PowerSource.WiredFault.md)

### Type Aliases

- [Extension](cluster_export.PowerSource.md#extension)

### Variables

- [Base](cluster_export.PowerSource.md#base)
- [BatteryComponent](cluster_export.PowerSource.md#batterycomponent)
- [Cluster](cluster_export.PowerSource.md#cluster)
- [Complete](cluster_export.PowerSource.md#complete)
- [RechargeableComponent](cluster_export.PowerSource.md#rechargeablecomponent)
- [ReplaceableComponent](cluster_export.PowerSource.md#replaceablecomponent)
- [TlvBatChargeFaultChangeEvent](cluster_export.PowerSource.md#tlvbatchargefaultchangeevent)
- [TlvBatFaultChangeEvent](cluster_export.PowerSource.md#tlvbatfaultchangeevent)
- [TlvWiredFaultChangeEvent](cluster_export.PowerSource.md#tlvwiredfaultchangeevent)
- [WiredComponent](cluster_export.PowerSource.md#wiredcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.PowerSource.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `wired`: ``true``  } ? typeof [`WiredComponent`](cluster_export.PowerSource.md#wiredcomponent) : {} & `SF` extends { `battery`: ``true``  } ? typeof [`BatteryComponent`](cluster_export.PowerSource.md#batterycomponent) : {} & `SF` extends { `replaceable`: ``true``  } ? typeof [`ReplaceableComponent`](cluster_export.PowerSource.md#replaceablecomponent) : {} & `SF` extends { `rechargeable`: ``true``  } ? typeof [`RechargeableComponent`](cluster_export.PowerSource.md#rechargeablecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1332

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  } ; `features`: { `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``47`` = 0x2f; `name`: ``"PowerSource"`` = "PowerSource"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all PowerSource clusters.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:899

___

### BatteryComponent

• `Const` **BatteryComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `activeBatFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](cluster_export.md#attribute)<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `batPresent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `batVoltage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>  } ; `events`: { `batFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1061

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: { `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``47`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"PowerSource"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  } ; `features`: { `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``47`` = 0x2f; `name`: ``"PowerSource"`` = "PowerSource"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PowerSource.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Power Source

This cluster is used to describe the configuration and capabilities of a physical power source that provides
power to the Node. In case the Node has multiple power sources, each is described by its own Power Source
cluster. The Power Source Configuration cluster referenced by the Root Node device type for the Node provides
the overview of the power source(s) of the Node.

PowerSourceCluster supports optional features that you can enable with the PowerSourceCluster.with() factory
method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1307

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `activeBatChargeFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `activeBatFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `activeWiredFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `batAnsiDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batApprovedChemistry`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batCapacity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batChargeLevel`: [`Attribute`](cluster_export.md#attribute)<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batChargeState`: [`Attribute`](cluster_export.md#attribute)<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batChargingCurrent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batCommonDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batFunctionalWhileCharging`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batIecDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batPercentRemaining`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batPresent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batQuantity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batReplaceability`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batReplacementDescription`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batReplacementNeeded`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batTimeRemaining`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batTimeToFullCharge`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batVoltage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredCurrentType`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredPresent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `events`: { `batChargeFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: { `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``47`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"PowerSource"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all PowerSource features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1351

___

### RechargeableComponent

• `Const` **RechargeableComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `activeBatChargeFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](cluster_export.md#attribute)<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>  } ; `events`: { `batChargeFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1225

___

### ReplaceableComponent

• `Const` **ReplaceableComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `batAnsiDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1162

___

### TlvBatChargeFaultChangeEvent

• `Const` **TlvBatChargeFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>

Body of the PowerSource batChargeFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.7.3

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:856

___

### TlvBatFaultChangeEvent

• `Const` **TlvBatFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>

Body of the PowerSource batFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.7.2

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:181

___

### TlvWiredFaultChangeEvent

• `Const` **TlvWiredFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>

Body of the PowerSource wiredFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.7.1

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:93

___

### WiredComponent

• `Const` **WiredComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `activeWiredFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\>  } ; `events`: { `wiredFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:968
