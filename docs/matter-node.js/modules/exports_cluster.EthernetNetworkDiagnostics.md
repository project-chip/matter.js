[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / EthernetNetworkDiagnostics

# Namespace: EthernetNetworkDiagnostics

[exports/cluster](exports_cluster.md).EthernetNetworkDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.EthernetNetworkDiagnostics.Feature.md)
- [PHYRate](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md)

### Type Aliases

- [Extension](exports_cluster.EthernetNetworkDiagnostics.md#extension)

### Variables

- [Base](exports_cluster.EthernetNetworkDiagnostics.md#base)
- [Cluster](exports_cluster.EthernetNetworkDiagnostics.md#cluster)
- [Complete](exports_cluster.EthernetNetworkDiagnostics.md#complete)
- [ErrorCountsComponent](exports_cluster.EthernetNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](exports_cluster.EthernetNetworkDiagnostics.md#packetcountscomponent)
- [PacketCountsOrErrorCountsComponent](exports_cluster.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.EthernetNetworkDiagnostics.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](exports_cluster.EthernetNetworkDiagnostics.md#packetcountscomponent) : {} & `SF` extends \{ `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](exports_cluster.EthernetNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends \{ `packetCounts`: ``true``  } \| \{ `errorCounts`: ``true``  } ? typeof [`PacketCountsOrErrorCountsComponent`](exports_cluster.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:369

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean` \| ``null``, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean` \| ``null``, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:79

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean` \| ``null``, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean` \| ``null``, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.EthernetNetworkDiagnostics.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Ethernet Network Diagnostics

The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may
be used by a Node to assist a user or Administrator in diagnosing potential problems. The Ethernet Network
Diagnostics Cluster attempts to centralize all metrics that are relevant to a potential Ethernet connection to a
Node.

EthernetNetworkDiagnosticsCluster supports optional features that you can enable with the
EthernetNetworkDiagnosticsCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:219

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean` \| ``null``, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`boolean` \| ``null``, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetRxCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetTxCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``55`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>

This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:386

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\>  }  }\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:154

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| `bigint`, `any`\>  }  }\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:132

___

### PacketCountsOrErrorCountsComponent

• `Const` **PacketCountsOrErrorCountsComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  }  }\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:184
