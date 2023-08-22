[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / NetworkCommissioning

# Namespace: NetworkCommissioning

[exports/cluster](exports_cluster.md).NetworkCommissioning

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.NetworkCommissioning.Feature.md)
- [NetworkCommissioningStatus](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md)
- [WiFiBand](../enums/exports_cluster.NetworkCommissioning.WiFiBand.md)

### Type Aliases

- [Extension](exports_cluster.NetworkCommissioning.md#extension)

### Variables

- [Base](exports_cluster.NetworkCommissioning.md#base)
- [Cluster](exports_cluster.NetworkCommissioning.md#cluster)
- [Complete](exports_cluster.NetworkCommissioning.md#complete)
- [ThreadNetworkInterfaceComponent](exports_cluster.NetworkCommissioning.md#threadnetworkinterfacecomponent)
- [TlvAddOrUpdateThreadNetworkRequest](exports_cluster.NetworkCommissioning.md#tlvaddorupdatethreadnetworkrequest)
- [TlvAddOrUpdateWiFiNetworkRequest](exports_cluster.NetworkCommissioning.md#tlvaddorupdatewifinetworkrequest)
- [TlvConnectNetworkRequest](exports_cluster.NetworkCommissioning.md#tlvconnectnetworkrequest)
- [TlvConnectNetworkResponse](exports_cluster.NetworkCommissioning.md#tlvconnectnetworkresponse)
- [TlvNetworkConfigResponse](exports_cluster.NetworkCommissioning.md#tlvnetworkconfigresponse)
- [TlvNetworkInfoStruct](exports_cluster.NetworkCommissioning.md#tlvnetworkinfostruct)
- [TlvRemoveNetworkRequest](exports_cluster.NetworkCommissioning.md#tlvremovenetworkrequest)
- [TlvReorderNetworkRequest](exports_cluster.NetworkCommissioning.md#tlvreordernetworkrequest)
- [TlvScanNetworksRequest](exports_cluster.NetworkCommissioning.md#tlvscannetworksrequest)
- [TlvScanNetworksResponse](exports_cluster.NetworkCommissioning.md#tlvscannetworksresponse)
- [TlvThreadInterfaceScanResultStruct](exports_cluster.NetworkCommissioning.md#tlvthreadinterfacescanresultstruct)
- [TlvWiFiInterfaceScanResultStruct](exports_cluster.NetworkCommissioning.md#tlvwifiinterfacescanresultstruct)
- [WiFiNetworkInterfaceComponent](exports_cluster.NetworkCommissioning.md#wifinetworkinterfacecomponent)
- [WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent](exports_cluster.NetworkCommissioning.md#wifinetworkinterfaceorthreadnetworkinterfacecomponent)
- [WiFiSecurityBitmap](exports_cluster.NetworkCommissioning.md#wifisecuritybitmap)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.NetworkCommissioning.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `wiFiNetworkInterface`: ``true``  } \| { `threadNetworkInterface`: ``true``  } ? typeof [`WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent`](exports_cluster.NetworkCommissioning.md#wifinetworkinterfaceorthreadnetworkinterfacecomponent) : {} & `SF` extends { `wiFiNetworkInterface`: ``true``  } ? typeof [`WiFiNetworkInterfaceComponent`](exports_cluster.NetworkCommissioning.md#wifinetworkinterfacecomponent) : {} & `SF` extends { `threadNetworkInterface`: ``true``  } ? typeof [`ThreadNetworkInterfaceComponent`](exports_cluster.NetworkCommissioning.md#threadnetworkinterfacecomponent) : {} & `SF` extends { `threadNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends { `ethernetNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends { `ethernetNetworkInterface`: ``true`` ; `threadNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends { `ethernetNetworkInterface`: ``false`` ; `threadNetworkInterface`: ``false`` ; `wiFiNetworkInterface`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:1508

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `interfaceEnabled`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](exports_cluster.md#attribute)<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](exports_cluster.md#attribute)<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `networks`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all NetworkCommissioning clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:604

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.NetworkCommissioning.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Network Commissioning

Network commissioning is part of the overall Node commissioning. The main goal of Network Commissioning Cluster
is to associate a Node with or manage a Node’s one or more network interfaces. These network interfaces can
include the following types.

  • Wi-Fi (IEEE 802.11-2020)

  • Ethernet (802.3)

  • Thread (802.15.4)

An instance of the Network Commissioning Cluster only applies to a single network interface instance present. An
interface, in this context, is a unique entity that can have an IPv6 address assigned to it and ingress and
egress IP packets.

NetworkCommissioningCluster supports optional features that you can enable with the
NetworkCommissioningCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:1302

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `addOrUpdateThreadNetwork`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `addOrUpdateWiFiNetwork`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `connectNetwork`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `removeNetwork`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `reorderNetwork`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `scanNetworks`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\>  }, {}\>

This cluster supports all NetworkCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:1538

___

### ThreadNetworkInterfaceComponent

• `Const` **ThreadNetworkInterfaceComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `addOrUpdateThreadNetwork`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:1234

___

### TlvAddOrUpdateThreadNetworkRequest

• `Const` **TlvAddOrUpdateThreadNetworkRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:561

___

### TlvAddOrUpdateWiFiNetworkRequest

• `Const` **TlvAddOrUpdateWiFiNetworkRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:512

___

### TlvConnectNetworkRequest

• `Const` **TlvConnectNetworkRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the NetworkCommissioning connectNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.9

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:432

___

### TlvConnectNetworkResponse

• `Const` **TlvConnectNetworkResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Before generating a ConnectNetworkResponse, the server shall:

  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.

  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which
    caused the response to be generated.

  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it
    to null if the ErrorValue is not applicable.

The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of these values:

  • Success: Connection succeeded.

  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the attempt to
    join the network.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • NetworkIdNotFound: The network identifier was not found among the added network configurations in Networks
    attribute.

  • RegulatoryError: Could not connect to a network due to lack of regulatory configuration.

  • UnknownError: An internal error occurred during the operation.

  • Association errors (see also description of errors in Section 11.8.5.3, “NetworkCommissioningStatusEnum”):
    AuthFailure, UnsupportedSecurity, OtherConnectionFailure, IPV6Failed, IPBindFailed

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.10

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:470

___

### TlvNetworkConfigResponse

• `Const` **TlvNetworkConfigResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This response command relates status information for some commands which require it as their response command.
See each individual cluster server command for the situations that may cause a NetworkingStatus different than
Success.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the
NetworkID that was used in the command for which an invocation caused the response to be generated.

The NetworkingStatus field shall indicate the status of the last operation attempting to modify the Networks
attribute configuration, taking one of these values:

  • Success: Operation succeeded.

  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc).

  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section 11.8.6.1,
    “MaxNetworks Attribute”.

  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the added
    network configurations in Networks attribute.

  • UnknownError: An internal error occurred during the operation.

See Section 11.8.7.2.2, “DebugText Field” for usage.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:415

___

### TlvNetworkInfoStruct

• `Const` **TlvNetworkInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:15

___

### TlvRemoveNetworkRequest

• `Const` **TlvRemoveNetworkRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the NetworkCommissioning removeNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:381

___

### TlvReorderNetworkRequest

• `Const` **TlvReorderNetworkRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:502

___

### TlvScanNetworksRequest

• `Const` **TlvScanNetworksRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the NetworkCommissioning scanNetworks command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:114

___

### TlvScanNetworksResponse

• `Const` **TlvScanNetworksResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:264

___

### TlvThreadInterfaceScanResultStruct

• `Const` **TlvThreadInterfaceScanResultStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:238

___

### TlvWiFiInterfaceScanResultStruct

• `Const` **TlvWiFiInterfaceScanResultStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:193

___

### WiFiNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `addOrUpdateWiFiNetwork`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:1157

___

### WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `connectMaxTimeSeconds`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, { `connectNetwork`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
ThreadNetworkInterface.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:757

___

### WiFiSecurityBitmap

• `Const` **WiFiSecurityBitmap**: `Object`

WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the
WiFiInterfaceScanResultStruct.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `unencrypted` | [`BitFlag`](exports_schema.md#bitflag-1) | Supports unencrypted Wi-Fi |
| `wep` | [`BitFlag`](exports_schema.md#bitflag-1) | Supports Wi-Fi using WEP security |
| `wpa2Personal` | [`BitFlag`](exports_schema.md#bitflag-1) | Supports Wi-Fi using WPA2-Personal security |
| `wpa3Personal` | [`BitFlag`](exports_schema.md#bitflag-1) | Supports Wi-Fi using WPA3-Personal security |
| `wpaPersonal` | [`BitFlag`](exports_schema.md#bitflag-1) | Supports Wi-Fi using WPA-Personal security |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/NetworkCommissioningCluster.d.ts:138
