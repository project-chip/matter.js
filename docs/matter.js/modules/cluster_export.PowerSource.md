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

### Interfaces

- [BatChargeFaultChangeEvent](../interfaces/cluster_export.PowerSource.BatChargeFaultChangeEvent.md)
- [BatFaultChangeEvent](../interfaces/cluster_export.PowerSource.BatFaultChangeEvent.md)
- [Cluster](../interfaces/cluster_export.PowerSource.Cluster.md)
- [Complete](../interfaces/cluster_export.PowerSource.Complete.md)
- [WiredFaultChangeEvent](../interfaces/cluster_export.PowerSource.WiredFaultChangeEvent.md)

### Variables

- [Base](cluster_export.PowerSource.md#base)
- [BatteryComponent](cluster_export.PowerSource.md#batterycomponent)
- [Cluster](cluster_export.PowerSource.md#cluster)
- [ClusterInstance](cluster_export.PowerSource.md#clusterinstance)
- [Complete](cluster_export.PowerSource.md#complete)
- [CompleteInstance](cluster_export.PowerSource.md#completeinstance)
- [RechargeableComponent](cluster_export.PowerSource.md#rechargeablecomponent)
- [ReplaceableComponent](cluster_export.PowerSource.md#replaceablecomponent)
- [TlvBatChargeFaultChangeEvent](cluster_export.PowerSource.md#tlvbatchargefaultchangeevent)
- [TlvBatFaultChangeEvent](cluster_export.PowerSource.md#tlvbatfaultchangeevent)
- [TlvWiredFaultChangeEvent](cluster_export.PowerSource.md#tlvwiredfaultchangeevent)
- [WiredComponent](cluster_export.PowerSource.md#wiredcomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all PowerSource clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `order`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  } | - |
| `attributes.description` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> | This attribute shall provide a user-facing description of this source, used to distinguish it from other power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used to convey information such as battery form factor, or chemistry. **`See`** MatterSpecification.v11.Core § 11.7.6.3 |
| `attributes.order` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> | This attribute shall indicate the relative preference with which the Node will select this source to provide power. A source with a lower order shall be selected by the Node to provide power before any other source with a higher order, if the lower order source is available (see Status). Note, Order is read-only and therefore NOT intended to allow clients control over power source selection. **`See`** MatterSpecification.v11.Core § 11.7.6.2 |
| `attributes.status` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\> | This attribute shall indicate the participation of this power source in providing power to the Node as specified in PowerSourceStatusEnum. **`See`** MatterSpecification.v11.Core § 11.7.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\>  }  } = WiredComponent; `flags`: \{ `wired`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `batFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\>  }  } = BatteryComponent; `flags`: \{ `battery`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>  }  } = ReplaceableComponent; `flags`: \{ `replaceable`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\>  }  } = RechargeableComponent; `flags`: \{ `rechargeable`: ``true`` = true }  }] | This metadata controls which PowerSourceCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `battery`: [`BitFlag`](schema_export.md#bitflag) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag) ; `wired`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.battery` | [`BitFlag`](schema_export.md#bitflag) | Battery A battery power source |
| `features.rechargeable` | [`BitFlag`](schema_export.md#bitflag) | Rechargeable A rechargeable battery power source (requires Battery feature) |
| `features.replaceable` | [`BitFlag`](schema_export.md#bitflag) | Replaceable A replaceable battery power source (requires Battery feature) |
| `features.wired` | [`BitFlag`](schema_export.md#bitflag) | Wired A wired power source |
| `id` | ``47`` | - |
| `name` | ``"PowerSource"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1251)

___

### BatteryComponent

• `Const` **BatteryComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.activeBatFaults` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> |
| `attributes.batChargeLevel` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> |
| `attributes.batPercentRemaining` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.batPresent` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> |
| `attributes.batReplaceability` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> |
| `attributes.batReplacementNeeded` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> |
| `attributes.batTimeRemaining` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.batVoltage` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `events` | \{ `batFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\>  } |
| `events.batFaultChange` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:980](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L980)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.PowerSource.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1346](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1346)

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1348](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1348)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `order`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `any`\>  }  } = WiredComponent; `flags`: \{ `wired`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `activeBatFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> ; `batChargeLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> ; `batReplaceability`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> ; `batReplacementNeeded`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `batFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `any`\>  }  } = BatteryComponent; `flags`: \{ `battery`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>  }  } = ReplaceableComponent; `flags`: \{ `replaceable`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...[]\>  }\>, `any`\>  }  } = RechargeableComponent; `flags`: \{ `rechargeable`: ``true`` = true }  }] ; `features`: \{ `battery`: [`BitFlag`](schema_export.md#bitflag) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag) ; `wired`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``47`` = 0x2f; `name`: ``"PowerSource"`` = "PowerSource"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.PowerSource.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1331](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1331)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.PowerSource.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1489](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1489)

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1491](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1491)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `rechargeable`: `boolean` = true }]  } ; `activeBatFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `battery`: `boolean` = true }]  } ; `activeWiredFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  } ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `replaceable`: `boolean` = true }]  } ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `replaceable`: `boolean` = true }]  } ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `replaceable`: `boolean` = true }]  } ; `batChargeLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeLevel`](../enums/cluster_export.PowerSource.BatChargeLevel.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `battery`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batChargeState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rechargeable`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `rechargeable`: `boolean` = true }]  } ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `replaceable`: `boolean` = true }]  } ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `rechargeable`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `replaceable`: `boolean` = true }]  } ; `batPercentRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `battery`: `boolean` = true }]  } ; `batPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `battery`: `boolean` = true }]  } ; `batQuantity`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `replaceable`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batReplaceability`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`BatReplaceability`](../enums/cluster_export.PowerSource.BatReplaceability.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `battery`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `replaceable`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batReplacementNeeded`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `battery`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `batTimeRemaining`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `battery`: `boolean` = true }]  } ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `rechargeable`: `boolean` = true }]  } ; `batVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `battery`: `boolean` = true }]  } ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `description`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `battery`: [`BitFlag`](schema_export.md#bitflag) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag) ; `wired`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `order`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `status`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`PowerSourceStatus`](../enums/cluster_export.PowerSource.PowerSourceStatus.md), `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  } ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  } ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  } ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wired`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  } ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  } ; `wiredPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  }  } ; `events`: \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `rechargeable`: `boolean` = true }]  } ; `batFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `battery`: `boolean` = true }]  } ; `wiredFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `wired`: `boolean` = true }]  }  } ; `features`: \{ `battery`: [`BitFlag`](schema_export.md#bitflag) ; `rechargeable`: [`BitFlag`](schema_export.md#bitflag) ; `replaceable`: [`BitFlag`](schema_export.md#bitflag) ; `wired`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``47``, ``"ClusterId"``\> = Cluster.id; `name`: ``"PowerSource"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.PowerSource.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1357](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1357)

___

### RechargeableComponent

• `Const` **RechargeableComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeBatChargeFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> ; `batChargeState`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> ; `batChargingCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `batFunctionalWhileCharging`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `batTimeToFullCharge`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.activeBatChargeFaults` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[], `any`\> |
| `attributes.batChargeState` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`BatChargeState`](../enums/cluster_export.PowerSource.BatChargeState.md), `any`\> |
| `attributes.batChargingCurrent` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.batFunctionalWhileCharging` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> |
| `attributes.batTimeToFullCharge` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `events` | \{ `batChargeFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\>  } |
| `events.batChargeFaultChange` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1144)

___

### ReplaceableComponent

• `Const` **ReplaceableComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `batAnsiDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batApprovedChemistry`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> ; `batCapacity`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `batCommonDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> ; `batIecDesignation`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `batQuantity`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `batReplacementDescription`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>  } |
| `attributes.batAnsiDesignation` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> |
| `attributes.batApprovedChemistry` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](../enums/cluster_export.PowerSource.BatApprovedChemistry.md), `any`\> |
| `attributes.batCapacity` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.batCommonDesignation` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`BatCommonDesignation`](../enums/cluster_export.PowerSource.BatCommonDesignation.md), `any`\> |
| `attributes.batIecDesignation` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> |
| `attributes.batQuantity` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.batReplacementDescription` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1081](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1081)

___

### TlvBatChargeFaultChangeEvent

• `Const` **TlvBatChargeFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatChargeFault`](../enums/cluster_export.PowerSource.BatChargeFault.md)[]\>  }\>

Body of the PowerSource batChargeFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:847](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L847)

___

### TlvBatFaultChangeEvent

• `Const` **TlvBatFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BatFault`](../enums/cluster_export.PowerSource.BatFault.md)[]\>  }\>

Body of the PowerSource batFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L165)

___

### TlvWiredFaultChangeEvent

• `Const` **TlvWiredFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>

Body of the PowerSource wiredFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.7.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L70)

___

### WiredComponent

• `Const` **WiredComponent**: `Object`

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `activeWiredFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> ; `wiredAssessedCurrent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredAssessedInputFrequency`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredAssessedInputVoltage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `wiredCurrentType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> ; `wiredMaximumCurrent`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredNominalVoltage`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `wiredPresent`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\>  } |
| `attributes.activeWiredFaults` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[], `any`\> |
| `attributes.wiredAssessedCurrent` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.wiredAssessedInputFrequency` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.wiredAssessedInputVoltage` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.wiredCurrentType` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WiredCurrentType`](../enums/cluster_export.PowerSource.WiredCurrentType.md), `any`\> |
| `attributes.wiredMaximumCurrent` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.wiredNominalVoltage` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |
| `attributes.wiredPresent` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> |
| `events` | \{ `wiredFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\>  } |
| `events.wiredFaultChange` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`WiredFault`](../enums/cluster_export.PowerSource.WiredFault.md)[]\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:887](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L887)
