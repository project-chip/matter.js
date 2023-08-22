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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.PowerSource.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `wired`: ``true``  } ? typeof [`WiredComponent`](cluster_export.PowerSource.md#wiredcomponent) : {} & `SF` extends { `battery`: ``true``  } ? typeof [`BatteryComponent`](cluster_export.PowerSource.md#batterycomponent) : {} & `SF` extends { `replaceable`: ``true``  } ? typeof [`ReplaceableComponent`](cluster_export.PowerSource.md#replaceablecomponent) : {} & `SF` extends { `rechargeable`: ``true``  } ? typeof [`RechargeableComponent`](cluster_export.PowerSource.md#rechargeablecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1338](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1338)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all PowerSource clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:908](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L908)

___

### BatteryComponent

• `Const` **BatteryComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `activeBatFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](cluster_export.md#attribute)<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `batPresent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `batVoltage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `batFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\>  }\>

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1070](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1070)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PowerSource.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

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

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1316](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1316)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `activeBatChargeFaults`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\>\> ; `activeBatFaults`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\>\> ; `activeWiredFaults`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\>\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `batAnsiDesignation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\>\> ; `batApprovedChemistry`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\>\> ; `batCapacity`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>\> ; `batChargeLevel`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\>\> ; `batChargeState`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\>\> ; `batChargingCurrent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `batCommonDesignation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\>\> ; `batFunctionalWhileCharging`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>\> ; `batIecDesignation`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\>\> ; `batPercentRemaining`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `batPresent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\>\> ; `batQuantity`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `batReplaceability`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\>\> ; `batReplacementDescription`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\>\> ; `batReplacementNeeded`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\>\> ; `batTimeRemaining`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `batTimeToFullCharge`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `batVoltage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `description`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `order`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](cluster_export.md#attribute)<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\> ; `wiredAssessedCurrent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `wiredAssessedInputFrequency`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `wiredAssessedInputVoltage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `wiredCurrentType`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\>\> ; `wiredMaximumCurrent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>\> ; `wiredNominalVoltage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>\> ; `wiredPresent`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `battery`: [`BitFlag`](schema_export.md#bitflag-1) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag-1) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag-1) ; `wired`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, {}, { `batChargeFaultChange`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\>\> ; `batFaultChange`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\>\> ; `wiredFaultChange`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\>\>  }\>

This cluster supports all PowerSource features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1357](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1357)

___

### RechargeableComponent

• `Const` **RechargeableComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `activeBatChargeFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](cluster_export.md#attribute)<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `batChargeFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\>  }\>

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1234](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1234)

___

### ReplaceableComponent

• `Const` **ReplaceableComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `batAnsiDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`string`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1171](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1171)

___

### TlvBatChargeFaultChangeEvent

• `Const` **TlvBatChargeFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>

Body of the PowerSource batChargeFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:865](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L865)

___

### TlvBatFaultChangeEvent

• `Const` **TlvBatFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>

Body of the PowerSource batFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L190)

___

### TlvWiredFaultChangeEvent

• `Const` **TlvWiredFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>

Body of the PowerSource wiredFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:102](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L102)

___

### WiredComponent

• `Const` **WiredComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `activeWiredFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`boolean`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `wiredFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\>  }\>

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:977](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L977)
