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

### Interfaces

- [BatChargeFaultChangeEvent](../interfaces/exports_cluster.PowerSource.BatChargeFaultChangeEvent.md)
- [BatFaultChangeEvent](../interfaces/exports_cluster.PowerSource.BatFaultChangeEvent.md)
- [Cluster](../interfaces/exports_cluster.PowerSource.Cluster.md)
- [Complete](../interfaces/exports_cluster.PowerSource.Complete.md)
- [WiredFaultChangeEvent](../interfaces/exports_cluster.PowerSource.WiredFaultChangeEvent.md)

### Variables

- [Base](exports_cluster.PowerSource.md#base)
- [BatteryComponent](exports_cluster.PowerSource.md#batterycomponent)
- [Cluster](exports_cluster.PowerSource.md#cluster)
- [ClusterInstance](exports_cluster.PowerSource.md#clusterinstance)
- [Complete](exports_cluster.PowerSource.md#complete)
- [CompleteInstance](exports_cluster.PowerSource.md#completeinstance)
- [RechargeableComponent](exports_cluster.PowerSource.md#rechargeablecomponent)
- [ReplaceableComponent](exports_cluster.PowerSource.md#replaceablecomponent)
- [TlvBatChargeFaultChangeEvent](exports_cluster.PowerSource.md#tlvbatchargefaultchangeevent)
- [TlvBatFaultChangeEvent](exports_cluster.PowerSource.md#tlvbatfaultchangeevent)
- [TlvWiredFaultChangeEvent](exports_cluster.PowerSource.md#tlvwiredfaultchangeevent)
- [WiredComponent](exports_cluster.PowerSource.md#wiredcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PowerSource clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `order`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\>  } | - |
| `attributes.description` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> | This attribute shall provide a user-facing description of this source, used to distinguish it from other power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used to convey information such as battery form factor, or chemistry. **`See`** MatterSpecification.v11.Core § 11.7.6.3 |
| `attributes.order` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | This attribute shall indicate the relative preference with which the Node will select this source to provide power. A source with a lower order shall be selected by the Node to provide power before any other source with a higher order, if the lower order source is available (see Status). Note, Order is read-only and therefore NOT intended to allow clients control over power source selection. **`See`** MatterSpecification.v11.Core § 11.7.6.2 |
| `attributes.status` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\> | This attribute shall indicate the participation of this power source in providing power to the Node as specified in PowerSourceStatusEnum. **`See`** MatterSpecification.v11.Core § 11.7.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `wired`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `batFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `battery`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\>  }  } ; `flags`: \{ `replaceable`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `rechargeable`: ``true``  }  }] | This metadata controls which PowerSourceCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.battery` | [`BitFlag`](exports_schema.md#bitflag) | Battery A battery power source |
| `features.rechargeable` | [`BitFlag`](exports_schema.md#bitflag) | Rechargeable A rechargeable battery power source (requires Battery feature) |
| `features.replaceable` | [`BitFlag`](exports_schema.md#bitflag) | Replaceable A replaceable battery power source (requires Battery feature) |
| `features.wired` | [`BitFlag`](exports_schema.md#bitflag) | Wired A wired power source |
| `id` | ``47`` | - |
| `name` | ``"PowerSource"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1064

___

### BatteryComponent

• `Const` **BatteryComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.activeBatFaults` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> |
| `attributes.batChargeLevel` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> |
| `attributes.batPercentRemaining` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.batPresent` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> |
| `attributes.batReplaceability` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> |
| `attributes.batReplacementNeeded` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> |
| `attributes.batTimeRemaining` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.batVoltage` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `events` | \{ `batFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.batFaultChange` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:817

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.PowerSource.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1844

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1846

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `order`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `wired`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `batFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `battery`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\>  }  } ; `flags`: \{ `replaceable`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `rechargeable`: ``true``  }  }] ; `features`: \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``47`` ; `name`: ``"PowerSource"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.PowerSource.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1449

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.PowerSource.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:2194

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:2196

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `activeBatFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatFault`](../enums/exports_cluster.PowerSource.BatFault.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `activeWiredFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batChargeLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeLevel`](../enums/exports_cluster.PowerSource.BatChargeLevel.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `battery`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batChargeState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rechargeable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `rechargeable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `replaceable`: `boolean`  }]  } ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `batPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `batQuantity`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `replaceable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batReplaceability`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`BatReplaceability`](../enums/exports_cluster.PowerSource.BatReplaceability.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `battery`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `replaceable`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batReplacementNeeded`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `battery`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `batVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `order`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`PowerSourceStatus`](../enums/exports_cluster.PowerSource.PowerSourceStatus.md), `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wired`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  } ; `wiredPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  }  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `rechargeable`: `boolean`  }]  } ; `batFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `battery`: `boolean`  }]  } ; `wiredFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `wired`: `boolean`  }]  }  } ; `features`: \{ `battery`: [`BitFlag`](exports_schema.md#bitflag) ; `rechargeable`: [`BitFlag`](exports_schema.md#bitflag) ; `replaceable`: [`BitFlag`](exports_schema.md#bitflag) ; `wired`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"PowerSource"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.PowerSource.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:1850

___

### RechargeableComponent

• `Const` **RechargeableComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.activeBatChargeFaults` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BatChargeFault`](../enums/exports_cluster.PowerSource.BatChargeFault.md)[], `any`\> |
| `attributes.batChargeState` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`BatChargeState`](../enums/exports_cluster.PowerSource.BatChargeState.md), `any`\> |
| `attributes.batChargingCurrent` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.batFunctionalWhileCharging` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> |
| `attributes.batTimeToFullCharge` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `events` | \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.batChargeFaultChange` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:964

___

### ReplaceableComponent

• `Const` **ReplaceableComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } |
| `attributes.batAnsiDesignation` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> |
| `attributes.batApprovedChemistry` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/exports_cluster.PowerSource.BatApprovedChemistry.md), `any`\> |
| `attributes.batCapacity` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.batCommonDesignation` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/exports_cluster.PowerSource.BatCommonDesignation.md), `any`\> |
| `attributes.batIecDesignation` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> |
| `attributes.batQuantity` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.batReplacementDescription` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:908

___

### TlvBatChargeFaultChangeEvent

• `Const` **TlvBatChargeFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the PowerSource batChargeFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:683

___

### TlvBatFaultChangeEvent

• `Const` **TlvBatFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the PowerSource batFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:131

___

### TlvWiredFaultChangeEvent

• `Const` **TlvWiredFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the PowerSource wiredFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:48

___

### WiredComponent

• `Const` **WiredComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.activeWiredFaults` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`WiredFault`](../enums/exports_cluster.PowerSource.WiredFault.md)[], `any`\> |
| `attributes.wiredAssessedCurrent` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.wiredAssessedInputFrequency` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.wiredAssessedInputVoltage` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.wiredCurrentType` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WiredCurrentType`](../enums/exports_cluster.PowerSource.WiredCurrentType.md), `any`\> |
| `attributes.wiredMaximumCurrent` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.wiredNominalVoltage` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.wiredPresent` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> |
| `events` | \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.wiredFaultChange` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/PowerSourceCluster.d.ts:718
