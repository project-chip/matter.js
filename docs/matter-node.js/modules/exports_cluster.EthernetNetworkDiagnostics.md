[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / EthernetNetworkDiagnostics

# Namespace: EthernetNetworkDiagnostics

[exports/cluster](exports_cluster.md).EthernetNetworkDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.EthernetNetworkDiagnostics.Feature.md)
- [PHYRate](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.EthernetNetworkDiagnostics.Cluster.md)
- [Complete](../interfaces/exports_cluster.EthernetNetworkDiagnostics.Complete.md)

### Variables

- [Base](exports_cluster.EthernetNetworkDiagnostics.md#base)
- [Cluster](exports_cluster.EthernetNetworkDiagnostics.md#cluster)
- [ClusterInstance](exports_cluster.EthernetNetworkDiagnostics.md#clusterinstance)
- [Complete](exports_cluster.EthernetNetworkDiagnostics.md#complete)
- [CompleteInstance](exports_cluster.EthernetNetworkDiagnostics.md#completeinstance)
- [ErrorCountsComponent](exports_cluster.EthernetNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](exports_cluster.EthernetNetworkDiagnostics.md#packetcountscomponent)
- [PacketCountsOrErrorCountsComponent](exports_cluster.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `carrierDetect`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } | - |
| `attributes.carrierDetect` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> | The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the ethernet network interface. A value of null shall indicate that the interface is not currently configured or operational. **`See`** MatterSpecification.v11.Core § 11.15.6.8 |
| `attributes.fullDuplex` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> | The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating mode. A value of null shall indicate that the interface is not currently configured or operational. **`See`** MatterSpecification.v11.Core § 11.15.6.2 |
| `attributes.phyRate` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> | The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer of the Node. A value of null shall indicate that the interface is not currently configured or operational. **`See`** MatterSpecification.v11.Core § 11.15.6.1 |
| `attributes.timeSinceReset` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> | **`See`** MatterSpecification.v11.Core § 11.15.6 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] | This metadata controls which EthernetNetworkDiagnosticsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.errorCounts` | [`BitFlag`](exports_schema.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface. |
| `features.packetCounts` | [`BitFlag`](exports_schema.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the ethernet interface. |
| `id` | ``55`` | - |
| `name` | ``"EthernetNetworkDiagnostics"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:157

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.EthernetNetworkDiagnostics.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:495

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:497

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.EthernetNetworkDiagnostics.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:321

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.EthernetNetworkDiagnostics.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:703

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:705

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`boolean` \| ``null``, `any`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `phyRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.EthernetNetworkDiagnostics.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:501

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: `Object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `collisionCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } |
| `attributes.collisionCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `attributes.overrunCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `attributes.txErrCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:82

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: `Object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `packetRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  } |
| `attributes.packetRxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> |
| `attributes.packetTxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:60

___

### PacketCountsOrErrorCountsComponent

• `Const` **PacketCountsOrErrorCountsComponent**: `Object`

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.resetCounts` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:112
