[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / EthernetNetworkDiagnostics

# Namespace: EthernetNetworkDiagnostics

[cluster/export](cluster_export.md).EthernetNetworkDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.EthernetNetworkDiagnostics.Feature.md)
- [PHYRate](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.EthernetNetworkDiagnostics.Cluster.md)
- [Complete](../interfaces/cluster_export.EthernetNetworkDiagnostics.Complete.md)

### Variables

- [Base](cluster_export.EthernetNetworkDiagnostics.md#base)
- [Cluster](cluster_export.EthernetNetworkDiagnostics.md#cluster)
- [ClusterInstance](cluster_export.EthernetNetworkDiagnostics.md#clusterinstance)
- [Complete](cluster_export.EthernetNetworkDiagnostics.md#complete)
- [CompleteInstance](cluster_export.EthernetNetworkDiagnostics.md#completeinstance)
- [ErrorCountsComponent](cluster_export.EthernetNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](cluster_export.EthernetNetworkDiagnostics.md#packetcountscomponent)
- [PacketCountsOrErrorCountsComponent](cluster_export.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } | - |
| `attributes.carrierDetect` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> | The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the ethernet network interface. A value of null shall indicate that the interface is not currently configured or operational. **`See`** MatterSpecification.v11.Core § 11.15.6.8 |
| `attributes.fullDuplex` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> | The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating mode. A value of null shall indicate that the interface is not currently configured or operational. **`See`** MatterSpecification.v11.Core § 11.15.6.2 |
| `attributes.phyRate` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> | The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer of the Node. A value of null shall indicate that the interface is not currently configured or operational. **`See`** MatterSpecification.v11.Core § 11.15.6.1 |
| `attributes.timeSinceReset` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> | **`See`** MatterSpecification.v11.Core § 11.15.6 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } = PacketCountsComponent; `flags`: \{ `packetCounts`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } = ErrorCountsComponent; `flags`: \{ `errorCounts`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = PacketCountsOrErrorCountsComponent; `flags`: \{ `packetCounts`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = PacketCountsOrErrorCountsComponent; `flags`: \{ `errorCounts`: ``true`` = true }  }] | This metadata controls which EthernetNetworkDiagnosticsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.errorCounts` | [`BitFlag`](schema_export.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface. |
| `features.packetCounts` | [`BitFlag`](schema_export.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the ethernet interface. |
| `id` | ``55`` | - |
| `name` | ``"EthernetNetworkDiagnostics"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L183)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.EthernetNetworkDiagnostics.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:269](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L269)

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:271](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L271)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } = PacketCountsComponent; `flags`: \{ `packetCounts`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } = ErrorCountsComponent; `flags`: \{ `errorCounts`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = PacketCountsOrErrorCountsComponent; `flags`: \{ `packetCounts`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = PacketCountsOrErrorCountsComponent; `flags`: \{ `errorCounts`: ``true`` = true }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``55`` = 0x37; `name`: ``"EthernetNetworkDiagnostics"`` = "EthernetNetworkDiagnostics"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.EthernetNetworkDiagnostics.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:254](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L254)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.EthernetNetworkDiagnostics.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:322](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L322)

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L324)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.EthernetNetworkDiagnostics.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:278](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L278)

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: `Object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `collisionCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  } |
| `attributes.collisionCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `attributes.overrunCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `attributes.txErrCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L102)

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: `Object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `packetRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  } |
| `attributes.packetRxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `attributes.packetTxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L78)

___

### PacketCountsOrErrorCountsComponent

• `Const` **PacketCountsOrErrorCountsComponent**: `Object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.resetCounts` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L135)
