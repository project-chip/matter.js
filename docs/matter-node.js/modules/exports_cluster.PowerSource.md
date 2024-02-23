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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.PowerSource.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `wired`: ``true``  } ? typeof [`WiredComponent`](exports_cluster.PowerSource.md#wiredcomponent) : {} & `SF` extends \{ `battery`: ``true``  } ? typeof [`BatteryComponent`](exports_cluster.PowerSource.md#batterycomponent) : {} & `SF` extends \{ `replaceable`: ``true``  } ? typeof [`ReplaceableComponent`](exports_cluster.PowerSource.md#replaceablecomponent) : {} & `SF` extends \{ `rechargeable`: ``true``  } ? typeof [`RechargeableComponent`](exports_cluster.PowerSource.md#rechargeablecomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1308

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `order`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\>  } ; `features`: \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``47`` ; `name`: ``"PowerSource"`` ; `revision`: ``1``  }\>

These elements and properties are present in all PowerSource clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:726

___

### BatteryComponent

• `Const` **BatteryComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `batFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:886

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PowerSource"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `order`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\>  } ; `features`: \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``47`` ; `name`: ``"PowerSource"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.PowerSource.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

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

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1112

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `activeBatFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `activeWiredFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batChargeLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `battery`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batChargeState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rechargeable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rechargeable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `batPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `batQuantity`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `replaceable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batReplaceability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `battery`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `replaceable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batReplacementNeeded`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `battery`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `batVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `order`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wired`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  }  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `batFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `wiredFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  }  } ; `features`: \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``47`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PowerSource"`` ; `revision`: ``1``  }\>

This cluster supports all PowerSource features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1325

___

### RechargeableComponent

• `Const` **RechargeableComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1033

___

### ReplaceableComponent

• `Const` **ReplaceableComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:977

___

### TlvBatChargeFaultChangeEvent

• `Const` **TlvBatChargeFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the PowerSource batChargeFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.7.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:688

___

### TlvBatFaultChangeEvent

• `Const` **TlvBatFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the PowerSource batFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.7.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:143

___

### TlvWiredFaultChangeEvent

• `Const` **TlvWiredFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the PowerSource wiredFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.7.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:67

___

### WiredComponent

• `Const` **WiredComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:787
