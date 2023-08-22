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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.EthernetNetworkDiagnostics.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](exports_cluster.EthernetNetworkDiagnostics.md#packetcountscomponent) : {} & `SF` extends { `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](exports_cluster.EthernetNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends { `packetCounts`: ``true``  } \| { `errorCounts`: ``true``  } ? typeof [`PacketCountsOrErrorCountsComponent`](exports_cluster.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:295

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `carrierDetect`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`boolean` \| ``null``, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`boolean` \| ``null``, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md) \| ``null``, `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| `bigint`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:78

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.EthernetNetworkDiagnostics.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

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

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:206

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `resetCounts`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\>  }, {}\>

This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:312

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `collisionCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:145

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `packetRxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:125

___

### PacketCountsOrErrorCountsComponent

• `Const` **PacketCountsOrErrorCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `resetCounts`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/EthernetNetworkDiagnosticsCluster.d.ts:173
