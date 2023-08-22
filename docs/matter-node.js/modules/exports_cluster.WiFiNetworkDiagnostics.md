[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / WiFiNetworkDiagnostics

# Namespace: WiFiNetworkDiagnostics

[exports/cluster](exports_cluster.md).WiFiNetworkDiagnostics

## Table of contents

### Enumerations

- [AssociationFailureCause](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)
- [ConnectionStatus](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)
- [Feature](../enums/exports_cluster.WiFiNetworkDiagnostics.Feature.md)
- [SecurityType](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md)
- [WiFiVersion](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md)

### Type Aliases

- [Extension](exports_cluster.WiFiNetworkDiagnostics.md#extension)

### Variables

- [Base](exports_cluster.WiFiNetworkDiagnostics.md#base)
- [Cluster](exports_cluster.WiFiNetworkDiagnostics.md#cluster)
- [Complete](exports_cluster.WiFiNetworkDiagnostics.md#complete)
- [ErrorCountsComponent](exports_cluster.WiFiNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](exports_cluster.WiFiNetworkDiagnostics.md#packetcountscomponent)
- [TlvAssociationFailureEvent](exports_cluster.WiFiNetworkDiagnostics.md#tlvassociationfailureevent)
- [TlvConnectionStatusEvent](exports_cluster.WiFiNetworkDiagnostics.md#tlvconnectionstatusevent)
- [TlvDisconnectionEvent](exports_cluster.WiFiNetworkDiagnostics.md#tlvdisconnectionevent)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.WiFiNetworkDiagnostics.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](exports_cluster.WiFiNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends { `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](exports_cluster.WiFiNetworkDiagnostics.md#packetcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:542

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `bssid`: [`Attribute`](exports_cluster.md#attribute)<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| `bigint` \| ``null``, `any`\> ; `rssi`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](exports_cluster.md#attribute)<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.md#attribute)<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `associationFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:176

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `associationFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.WiFiNetworkDiagnostics.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

WiFi Network Diagnostics

The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Wi-Fi Network Diagnostics
Cluster attempts to centralize all metrics that are relevant to a potential Wi-Fi radio running on a Node.

WiFiNetworkDiagnosticsCluster supports optional features that you can enable with the
WiFiNetworkDiagnosticsCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.14

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:384

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag-1) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `resetCounts`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>\>  }, { `associationFailure`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

This cluster supports all WiFiNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:555

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `beaconLostCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| `bigint` \| ``null``, `any`\>  }, { `resetCounts`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:292

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `beaconRxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:334

___

### TlvAssociationFailureEvent

• `Const` **TlvAssociationFailureEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

MatterCoreSpecificationV1_1 § 11.14.8.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:108

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics connectionStatus event

**`See`**

MatterCoreSpecificationV1_1 § 11.14.8.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:150

___

### TlvDisconnectionEvent

• `Const` **TlvDisconnectionEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

MatterCoreSpecificationV1_1 § 11.14.8.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:73
