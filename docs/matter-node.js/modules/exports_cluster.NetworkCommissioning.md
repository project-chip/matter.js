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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.NetworkCommissioning.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `wiFiNetworkInterface`: ``true``  } \| \{ `threadNetworkInterface`: ``true``  } ? typeof [`WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent`](exports_cluster.NetworkCommissioning.md#wifinetworkinterfaceorthreadnetworkinterfacecomponent) : {} & `SF` extends \{ `wiFiNetworkInterface`: ``true``  } ? typeof [`WiFiNetworkInterfaceComponent`](exports_cluster.NetworkCommissioning.md#wifinetworkinterfacecomponent) : {} & `SF` extends \{ `threadNetworkInterface`: ``true``  } ? typeof [`ThreadNetworkInterfaceComponent`](exports_cluster.NetworkCommissioning.md#threadnetworkinterfacecomponent) : {} & `SF` extends \{ `threadNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends \{ `ethernetNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends \{ `ethernetNetworkInterface`: ``true`` ; `threadNetworkInterface`: ``true``  } ? `never` : {} & `SF` extends \{ `ethernetNetworkInterface`: ``false`` ; `threadNetworkInterface`: ``false`` ; `wiFiNetworkInterface`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1688

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](exports_cluster.md#attribute)\<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](exports_cluster.md#attribute)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``49`` ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1``  }\>

These elements and properties are present in all NetworkCommissioning clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:605

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](exports_cluster.md#attribute)\<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](exports_cluster.md#attribute)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``49`` ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.NetworkCommissioning.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1316

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `never`\> ; `connectMaxTimeSeconds`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `eventList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `interfaceEnabled`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](exports_cluster.md#attribute)\<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](exports_cluster.md#attribute)\<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](exports_cluster.md#attribute)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `networks`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `addOrUpdateWiFiNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `connectNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `removeNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `reorderNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scanNetworks`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``49`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1``  }\>

This cluster supports all NetworkCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1718

___

### ThreadNetworkInterfaceComponent

• `Const` **ThreadNetworkInterfaceComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1246

___

### TlvAddOrUpdateThreadNetworkRequest

• `Const` **TlvAddOrUpdateThreadNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:562

___

### TlvAddOrUpdateWiFiNetworkRequest

• `Const` **TlvAddOrUpdateWiFiNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:513

___

### TlvConnectNetworkRequest

• `Const` **TlvConnectNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning connectNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:433

___

### TlvConnectNetworkResponse

• `Const` **TlvConnectNetworkResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:471

___

### TlvNetworkConfigResponse

• `Const` **TlvNetworkConfigResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:416

___

### TlvNetworkInfoStruct

• `Const` **TlvNetworkInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:16

___

### TlvRemoveNetworkRequest

• `Const` **TlvRemoveNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning removeNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:382

___

### TlvReorderNetworkRequest

• `Const` **TlvReorderNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:503

___

### TlvScanNetworksRequest

• `Const` **TlvScanNetworksRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning scanNetworks command

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:115

___

### TlvScanNetworksResponse

• `Const` **TlvScanNetworksResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:265

___

### TlvThreadInterfaceScanResultStruct

• `Const` **TlvThreadInterfaceScanResultStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:239

___

### TlvWiFiInterfaceScanResultStruct

• `Const` **TlvWiFiInterfaceScanResultStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

MatterCoreSpecificationV1_1 § 11.8.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:194

___

### WiFiNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1167

___

### WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](exports_cluster.md#fixedattribute)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
ThreadNetworkInterface.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:764

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

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:139
