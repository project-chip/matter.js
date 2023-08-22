[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ThreadNetworkDiagnostics

# Namespace: ThreadNetworkDiagnostics

[exports/cluster](exports_cluster.md).ThreadNetworkDiagnostics

## Table of contents

### Enumerations

- [ConnectionStatus](../enums/exports_cluster.ThreadNetworkDiagnostics.ConnectionStatus.md)
- [Feature](../enums/exports_cluster.ThreadNetworkDiagnostics.Feature.md)
- [NetworkFault](../enums/exports_cluster.ThreadNetworkDiagnostics.NetworkFault.md)
- [RoutingRole](../enums/exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md)

### Type Aliases

- [Extension](exports_cluster.ThreadNetworkDiagnostics.md#extension)

### Variables

- [Base](exports_cluster.ThreadNetworkDiagnostics.md#base)
- [Cluster](exports_cluster.ThreadNetworkDiagnostics.md#cluster)
- [Complete](exports_cluster.ThreadNetworkDiagnostics.md#complete)
- [ErrorCountsComponent](exports_cluster.ThreadNetworkDiagnostics.md#errorcountscomponent)
- [MacCountsComponent](exports_cluster.ThreadNetworkDiagnostics.md#maccountscomponent)
- [MleCountsComponent](exports_cluster.ThreadNetworkDiagnostics.md#mlecountscomponent)
- [TlvConnectionStatusEvent](exports_cluster.ThreadNetworkDiagnostics.md#tlvconnectionstatusevent)
- [TlvNeighborTableStruct](exports_cluster.ThreadNetworkDiagnostics.md#tlvneighbortablestruct)
- [TlvNetworkFaultChangeEvent](exports_cluster.ThreadNetworkDiagnostics.md#tlvnetworkfaultchangeevent)
- [TlvOperationalDatasetComponents](exports_cluster.ThreadNetworkDiagnostics.md#tlvoperationaldatasetcomponents)
- [TlvRouteTableStruct](exports_cluster.ThreadNetworkDiagnostics.md#tlvroutetablestruct)
- [TlvSecurityPolicy](exports_cluster.ThreadNetworkDiagnostics.md#tlvsecuritypolicy)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.ThreadNetworkDiagnostics.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](exports_cluster.ThreadNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends { `mleCounts`: ``true``  } ? typeof [`MleCountsComponent`](exports_cluster.ThreadNetworkDiagnostics.md#mlecountscomponent) : {} & `SF` extends { `macCounts`: ``true``  } ? typeof [`MacCountsComponent`](exports_cluster.ThreadNetworkDiagnostics.md#maccountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:1783

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `macCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `mleCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `activeNetworkFaults`: [`Attribute`](exports_cluster.md#attribute)<[`NetworkFault`](../enums/exports_cluster.ThreadNetworkDiagnostics.NetworkFault.md)[], `any`\> ; `activeTimestamp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| `bigint` \| ``null``, `any`\> ; `channel`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `channelPage0Mask`: [`Attribute`](exports_cluster.md#attribute)<`Uint8Array` \| ``null``, `any`\> ; `dataVersion`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `delay`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `extendedPanId`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\> ; `leaderRouterId`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `meshLocalPrefix`: [`Attribute`](exports_cluster.md#attribute)<`Uint8Array` \| ``null``, `any`\> ; `neighborTable`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\> ; `networkName`: [`Attribute`](exports_cluster.md#attribute)<`string` \| ``null``, `any`\> ; `operationalDatasetComponents`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) \| ``null``, `any`\> ; `panId`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `partitionId`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `pendingTimestamp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| `bigint` \| ``null``, `any`\> ; `routeTable`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\> ; `routingRole`: [`Attribute`](exports_cluster.md#attribute)<[`RoutingRole`](../enums/exports_cluster.ThreadNetworkDiagnostics.RoutingRole.md) \| ``null``, `any`\> ; `securityPolicy`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) \| ``null``, `any`\> ; `stableDataVersion`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `weighting`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `connectionStatus`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

These elements and properties are present in all ThreadNetworkDiagnostics clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:405

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `macCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `mleCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `macCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `mleCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `connectionStatus`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ThreadNetworkDiagnostics.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `macCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `mleCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Thread Network Diagnostics

The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Thread Network
Diagnostics Cluster attempts to centralize all metrics that are relevant to a potential Thread radio running on
a Node.

ThreadNetworkDiagnosticsCluster supports optional features that you can enable with the
ThreadNetworkDiagnosticsCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.13

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:1249

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `macCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `mleCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `macCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `mleCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `resetCounts`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\>  }, { `connectionStatus`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

This cluster supports all ThreadNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:1798

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `overrunCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint`, `any`\>  }, { `resetCounts`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThreadNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:864

___

### MacCountsComponent

• `Const` **MacCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `rxAddressFilteredCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxBeaconCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxBeaconRequestCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxBroadcastCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxDataCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxDataPollCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxDestAddrFilteredCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxDuplicatedCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxErrFcsCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxErrInvalidScrAddrCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxErrNoFrameCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxErrOtherCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxErrSecCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxErrUnknownNeighborCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxOtherCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxTotalCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `rxUnicastCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txAckRequestedCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txAckedCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txBeaconCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txBeaconRequestCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txBroadcastCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txDataCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txDataPollCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txDirectMaxRetryExpiryCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txErrAbortCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txErrBusyChannelCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txErrCcaCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txIndirectMaxRetryExpiryCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txNoAckRequestedCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txOtherCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txRetryCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txTotalCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `txUnicastCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThreadNetworkDiagnosticsCluster supports these elements if it supports feature MacCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:956

___

### MleCountsComponent

• `Const` **MleCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `attachAttemptCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `betterPartitionAttachAttemptCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `childRoleCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `detachedRoleCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `leaderRoleCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `parentChangeCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `partitionIdChangeCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\> ; `routerRoleCount`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ThreadNetworkDiagnosticsCluster supports these elements if it supports feature MleCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:889

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the ThreadNetworkDiagnostics connectionStatus event

**`See`**

MatterCoreSpecificationV1_1 § 11.13.8.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:346

___

### TlvNeighborTableStruct

• `Const` **TlvNeighborTableStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.13.5.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:47

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the ThreadNetworkDiagnostics networkFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.13.8.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:354

___

### TlvOperationalDatasetComponents

• `Const` **TlvOperationalDatasetComponents**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.13.5.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:231

___

### TlvRouteTableStruct

• `Const` **TlvRouteTableStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table entry
corresponds.

This field shall specify the RLOC16 for the Node for which this route table entry corresponds.

**`See`**

MatterCoreSpecificationV1_1 § 11.13.5.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:155

___

### TlvSecurityPolicy

• `Const` **TlvSecurityPolicy**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.13.5.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:212
