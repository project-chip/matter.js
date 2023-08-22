[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / PowerSource

# Namespace: PowerSource

[exports/cluster](exports_cluster.md).PowerSource

## Table of contents

### Enumerations

- [BatApprovedChemistry](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md)
- [BatChargeFault](../enums/exports_cluster.PowerSource.BatChargeFault.md)
- [BatChargeLevel](../enums/exports_cluster.PowerSource.BatChargeLevel.md)
- [BatChargeState](../enums/exports_cluster.PowerSource.BatChargeState.md)
- [BatCommonDesignation](../enums/exports_cluster.PowerSource.BatCommonDesignation.md)
- [BatFault](../enums/exports_cluster.PowerSource.BatFault.md)
- [BatReplaceability](../enums/exports_cluster.PowerSource.BatReplaceability.md)
- [Feature](../enums/exports_cluster.PowerSource.Feature.md)
- [PowerSourceStatus](../enums/exports_cluster.PowerSource.PowerSourceStatus.md)
- [WiredCurrentType](../enums/exports_cluster.PowerSource.WiredCurrentType.md)
- [WiredFault](../enums/exports_cluster.PowerSource.WiredFault.md)

### Type Aliases

- [Extension](exports_cluster.PowerSource.md#extension)

### Variables

- [Base](exports_cluster.PowerSource.md#base)
- [BatteryComponent](exports_cluster.PowerSource.md#batterycomponent)
- [Cluster](exports_cluster.PowerSource.md#cluster)
- [Complete](exports_cluster.PowerSource.md#complete)
- [RechargeableComponent](exports_cluster.PowerSource.md#rechargeablecomponent)
- [ReplaceableComponent](exports_cluster.PowerSource.md#replaceablecomponent)
- [TlvBatChargeFaultChangeEvent](exports_cluster.PowerSource.md#tlvbatchargefaultchangeevent)
- [TlvBatFaultChangeEvent](exports_cluster.PowerSource.md#tlvbatfaultchangeevent)
- [TlvWiredFaultChangeEvent](exports_cluster.PowerSource.md#tlvwiredfaultchangeevent)
- [WiredComponent](exports_cluster.PowerSource.md#wiredcomponent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.PowerSource.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `wired`: ``true``  } ? typeof [`WiredComponent`](exports_cluster.PowerSource.md#wiredcomponent) : {} & `SF` extends { `battery`: ``true``  } ? typeof [`BatteryComponent`](exports_cluster.PowerSource.md#batterycomponent) : {} & `SF` extends { `replaceable`: ``true``  } ? typeof [`ReplaceableComponent`](exports_cluster.PowerSource.md#replaceablecomponent) : {} & `SF` extends { `rechargeable`: ``true``  } ? typeof [`RechargeableComponent`](exports_cluster.PowerSource.md#rechargeablecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:1221

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `description`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`string`, `any`\> ; `order`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `status`: [`Attribute`](exports_cluster.md#attribute)<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all PowerSource clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:725

___

### BatteryComponent

• `Const` **BatteryComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `activeBatFaults`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](exports_cluster.md#attribute)<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `batPresent`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `batVoltage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `batFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:876

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PowerSource.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Power Source

This cluster is used to describe the configuration and capabilities of a physical power source that provides
power to the Node. In case the Node has multiple power sources, each is described by its own Power Source
cluster. The Power Source Configuration cluster referenced by the Root Node device type for the Node provides
the overview of the power source(s) of the Node.

PowerSourceCluster supports optional features that you can enable with the PowerSourceCluster.with() factory
method.

**`See`**

MatterCoreSpecificationV1_1 § 11.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:1094

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `battery`: [`BitFlag`](exports_schema.md#bitflag-1) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wired`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, { `batChargeFaultChange`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `batFaultChange`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `wiredFaultChange`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\>  }\>

This cluster supports all PowerSource features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:1238

___

### RechargeableComponent

• `Const` **RechargeableComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `activeBatChargeFaults`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](exports_cluster.md#attribute)<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `batChargeFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:1018

___

### ReplaceableComponent

• `Const` **ReplaceableComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `batAnsiDesignation`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`string`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:964

___

### TlvBatChargeFaultChangeEvent

• `Const` **TlvBatChargeFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the PowerSource batChargeFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.7.7.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:687

___

### TlvBatFaultChangeEvent

• `Const` **TlvBatFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the PowerSource batFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.7.7.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:142

___

### TlvWiredFaultChangeEvent

• `Const` **TlvWiredFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the PowerSource wiredFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.7.7.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:66

___

### WiredComponent

• `Const` **WiredComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `activeWiredFaults`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`boolean`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `wiredFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:780
