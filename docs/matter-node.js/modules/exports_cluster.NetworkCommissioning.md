[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / NetworkCommissioning

# Namespace: NetworkCommissioning

[exports/cluster](exports_cluster.md).NetworkCommissioning

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.NetworkCommissioning.Feature.md)
- [NetworkCommissioningStatus](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md)
- [WiFiBand](../enums/exports_cluster.NetworkCommissioning.WiFiBand.md)

### Interfaces

- [AddOrUpdateThreadNetworkRequest](../interfaces/exports_cluster.NetworkCommissioning.AddOrUpdateThreadNetworkRequest.md)
- [AddOrUpdateWiFiNetworkRequest](../interfaces/exports_cluster.NetworkCommissioning.AddOrUpdateWiFiNetworkRequest.md)
- [Cluster](../interfaces/exports_cluster.NetworkCommissioning.Cluster.md)
- [Complete](../interfaces/exports_cluster.NetworkCommissioning.Complete.md)
- [ConnectNetworkRequest](../interfaces/exports_cluster.NetworkCommissioning.ConnectNetworkRequest.md)
- [ConnectNetworkResponse](../interfaces/exports_cluster.NetworkCommissioning.ConnectNetworkResponse.md)
- [NetworkConfigResponse](../interfaces/exports_cluster.NetworkCommissioning.NetworkConfigResponse.md)
- [NetworkInfoStruct](../interfaces/exports_cluster.NetworkCommissioning.NetworkInfoStruct.md)
- [RemoveNetworkRequest](../interfaces/exports_cluster.NetworkCommissioning.RemoveNetworkRequest.md)
- [ReorderNetworkRequest](../interfaces/exports_cluster.NetworkCommissioning.ReorderNetworkRequest.md)
- [ScanNetworksRequest](../interfaces/exports_cluster.NetworkCommissioning.ScanNetworksRequest.md)
- [ScanNetworksResponse](../interfaces/exports_cluster.NetworkCommissioning.ScanNetworksResponse.md)
- [ThreadInterfaceScanResultStruct](../interfaces/exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md)
- [WiFiInterfaceScanResultStruct](../interfaces/exports_cluster.NetworkCommissioning.WiFiInterfaceScanResultStruct.md)

### Variables

- [Base](exports_cluster.NetworkCommissioning.md#base)
- [Cluster](exports_cluster.NetworkCommissioning.md#cluster)
- [ClusterInstance](exports_cluster.NetworkCommissioning.md#clusterinstance)
- [Complete](exports_cluster.NetworkCommissioning.md#complete)
- [CompleteInstance](exports_cluster.NetworkCommissioning.md#completeinstance)
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

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all NetworkCommissioning clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } | - |
| `attributes.interfaceEnabled` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> | This attribute shall indicate whether the associated network interface is enabled or not. By default all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true). It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which is used to write the value. In that case, it is possible that the Administrator would have to await expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”). It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled, an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the cable shall NOT re-enable the interface. On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster instances with InterfaceEnabled set to true. **`See`** MatterSpecification.v11.Core § 11.8.6.5 |
| `attributes.lastConnectErrorValue` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute shall be set to null. If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus attribute, then this field shall be set to null. This attribute is present to assist with error recovery during Network commissioning and to assist in non-concurrent networking commissioning flows. **`See`** MatterSpecification.v11.Core § 11.8.6.8 |
| `attributes.lastNetworkId` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> | This attribute shall indicate the NetworkID used in the last attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute shall be set to null. If a network configuration is removed from the Networks attribute using the RemoveNetwork command after a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node. This attribute is present to assist with error recovery during Network commissioning and to assist in non-concurrent networking commissioning flows. **`See`** MatterSpecification.v11.Core § 11.8.6.7 |
| `attributes.lastNetworkingStatus` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> | This attribute shall indicate the status of the last attempt either scan or connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute shall be set to null. This attribute is present to assist with error recovery during Network commissioning and to assist in non-concurrent networking commissioning flows. **`See`** MatterSpecification.v11.Core § 11.8.6.6 |
| `attributes.maxNetworks` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> | This shall indicate the maximum number of network configuration entries that can be added, based on available device resources. The length of the Networks attribute list shall be less than or equal to this value. **`See`** MatterSpecification.v11.Core § 11.8.6.1 |
| `attributes.networks` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | This attribute shall indicate the network configurations that are usable on the network interface represented by this cluster server instance. The order of configurations in the list reflects precedence. That is, any time the Node attempts to connect to the network it shall attempt to do so using the configurations in Networks Attribute in the order as they appear in the list. The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork and ReorderNetwork commands. In other words, the list shall be stable over time, unless mutated externally. Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to those Cluster instances. **`See`** MatterSpecification.v11.Core § 11.8.6.2 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `threadNetworkInterface`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `threadNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `threadNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `ethernetNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `ethernetNetworkInterface`: ``true`` ; `threadNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `ethernetNetworkInterface`: ``false`` ; `threadNetworkInterface`: ``false`` ; `wiFiNetworkInterface`: ``false``  }  }] | This metadata controls which NetworkCommissioningCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.ethernetNetworkInterface` | [`BitFlag`](exports_schema.md#bitflag) | EthernetNetworkInterface Ethernet related features |
| `features.threadNetworkInterface` | [`BitFlag`](exports_schema.md#bitflag) | ThreadNetworkInterface Thread related features |
| `features.wiFiNetworkInterface` | [`BitFlag`](exports_schema.md#bitflag) | WiFiNetworkInterface Wi-Fi related features |
| `id` | ``49`` | - |
| `name` | ``"NetworkCommissioning"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1285

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.NetworkCommissioning.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:3560

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:3562

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `threadNetworkInterface`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `threadNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `threadNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `ethernetNetworkInterface`: ``true`` ; `wiFiNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `ethernetNetworkInterface`: ``true`` ; `threadNetworkInterface`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `ethernetNetworkInterface`: ``false`` ; `threadNetworkInterface`: ``false`` ; `wiFiNetworkInterface`: ``false``  }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``49`` ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.NetworkCommissioning.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:2413

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.NetworkCommissioning.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:4070

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:4072

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `interfaceEnabled`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`NetworkCommissioningStatus`](../enums/exports_cluster.NetworkCommissioning.NetworkCommissioningStatus.md) \| ``null``, `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `connectNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `removeNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `reorderNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `scanNetworks`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean`  }, \{ `threadNetworkInterface`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``49`` ; `name`: ``"NetworkCommissioning"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.NetworkCommissioning.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:3566

___

### ThreadNetworkInterfaceComponent

• `Const` **ThreadNetworkInterfaceComponent**: `Object`

A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.addOrUpdateThreadNetwork` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1209

___

### TlvAddOrUpdateThreadNetworkRequest

• `Const` **TlvAddOrUpdateThreadNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:652

___

### TlvAddOrUpdateWiFiNetworkRequest

• `Const` **TlvAddOrUpdateWiFiNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:596

___

### TlvConnectNetworkRequest

• `Const` **TlvConnectNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning connectNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:466

___

### TlvConnectNetworkResponse

• `Const` **TlvConnectNetworkResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

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

MatterSpecification.v11.Core § 11.8.7.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:511

___

### TlvNetworkConfigResponse

• `Const` **TlvNetworkConfigResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

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

MatterSpecification.v11.Core § 11.8.7.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:417

___

### TlvNetworkInfoStruct

• `Const` **TlvNetworkInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

**`See`**

MatterSpecification.v11.Core § 11.8.5.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:679

___

### TlvRemoveNetworkRequest

• `Const` **TlvRemoveNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning removeNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:376

___

### TlvReorderNetworkRequest

• `Const` **TlvReorderNetworkRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:579

___

### TlvScanNetworksRequest

• `Const` **TlvScanNetworksRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the NetworkCommissioning scanNetworks command

**`See`**

MatterSpecification.v11.Core § 11.8.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:18

___

### TlvScanNetworksResponse

• `Const` **TlvScanNetworksResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:246

___

### TlvThreadInterfaceScanResultStruct

• `Const` **TlvThreadInterfaceScanResultStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:213

___

### TlvWiFiInterfaceScanResultStruct

• `Const` **TlvWiFiInterfaceScanResultStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:161

___

### WiFiNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceComponent**: `Object`

A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.addOrUpdateWiFiNetwork` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:1130

___

### WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent**: `Object`

A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
ThreadNetworkInterface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.connectMaxTimeSeconds` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.scanMaxTimeSeconds` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `connectNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `reorderNetwork`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `scanNetworks`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.connectNetwork` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.removeNetwork` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.reorderNetwork` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `commands.scanNetworks` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:727

___

### WiFiSecurityBitmap

• `Const` **WiFiSecurityBitmap**: `Object`

WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the
WiFiInterfaceScanResultStruct.

**`See`**

MatterSpecification.v11.Core § 11.8.5.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `unencrypted` | [`BitFlag`](exports_schema.md#bitflag) | Supports unencrypted Wi-Fi |
| `wep` | [`BitFlag`](exports_schema.md#bitflag) | Supports Wi-Fi using WEP security |
| `wpa2Personal` | [`BitFlag`](exports_schema.md#bitflag) | Supports Wi-Fi using WPA2-Personal security |
| `wpa3Personal` | [`BitFlag`](exports_schema.md#bitflag) | Supports Wi-Fi using WPA3-Personal security |
| `wpaPersonal` | [`BitFlag`](exports_schema.md#bitflag) | Supports Wi-Fi using WPA-Personal security |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:106
