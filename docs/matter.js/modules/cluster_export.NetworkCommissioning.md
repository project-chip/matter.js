[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / NetworkCommissioning

# Namespace: NetworkCommissioning

[cluster/export](cluster_export.md).NetworkCommissioning

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.NetworkCommissioning.Feature.md)
- [NetworkCommissioningStatus](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)
- [WiFiBand](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)

### Interfaces

- [AddOrUpdateThreadNetworkRequest](../interfaces/cluster_export.NetworkCommissioning.AddOrUpdateThreadNetworkRequest.md)
- [AddOrUpdateWiFiNetworkRequest](../interfaces/cluster_export.NetworkCommissioning.AddOrUpdateWiFiNetworkRequest.md)
- [Cluster](../interfaces/cluster_export.NetworkCommissioning.Cluster.md)
- [Complete](../interfaces/cluster_export.NetworkCommissioning.Complete.md)
- [ConnectNetworkRequest](../interfaces/cluster_export.NetworkCommissioning.ConnectNetworkRequest.md)
- [ConnectNetworkResponse](../interfaces/cluster_export.NetworkCommissioning.ConnectNetworkResponse.md)
- [NetworkConfigResponse](../interfaces/cluster_export.NetworkCommissioning.NetworkConfigResponse.md)
- [NetworkInfoStruct](../interfaces/cluster_export.NetworkCommissioning.NetworkInfoStruct.md)
- [RemoveNetworkRequest](../interfaces/cluster_export.NetworkCommissioning.RemoveNetworkRequest.md)
- [ReorderNetworkRequest](../interfaces/cluster_export.NetworkCommissioning.ReorderNetworkRequest.md)
- [ScanNetworksRequest](../interfaces/cluster_export.NetworkCommissioning.ScanNetworksRequest.md)
- [ScanNetworksResponse](../interfaces/cluster_export.NetworkCommissioning.ScanNetworksResponse.md)
- [ThreadInterfaceScanResultStruct](../interfaces/cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md)
- [WiFiInterfaceScanResultStruct](../interfaces/cluster_export.NetworkCommissioning.WiFiInterfaceScanResultStruct.md)

### Variables

- [Base](cluster_export.NetworkCommissioning.md#base)
- [Cluster](cluster_export.NetworkCommissioning.md#cluster)
- [ClusterInstance](cluster_export.NetworkCommissioning.md#clusterinstance)
- [Complete](cluster_export.NetworkCommissioning.md#complete)
- [CompleteInstance](cluster_export.NetworkCommissioning.md#completeinstance)
- [ThreadNetworkInterfaceComponent](cluster_export.NetworkCommissioning.md#threadnetworkinterfacecomponent)
- [TlvAddOrUpdateThreadNetworkRequest](cluster_export.NetworkCommissioning.md#tlvaddorupdatethreadnetworkrequest)
- [TlvAddOrUpdateWiFiNetworkRequest](cluster_export.NetworkCommissioning.md#tlvaddorupdatewifinetworkrequest)
- [TlvConnectNetworkRequest](cluster_export.NetworkCommissioning.md#tlvconnectnetworkrequest)
- [TlvConnectNetworkResponse](cluster_export.NetworkCommissioning.md#tlvconnectnetworkresponse)
- [TlvNetworkConfigResponse](cluster_export.NetworkCommissioning.md#tlvnetworkconfigresponse)
- [TlvNetworkInfoStruct](cluster_export.NetworkCommissioning.md#tlvnetworkinfostruct)
- [TlvRemoveNetworkRequest](cluster_export.NetworkCommissioning.md#tlvremovenetworkrequest)
- [TlvReorderNetworkRequest](cluster_export.NetworkCommissioning.md#tlvreordernetworkrequest)
- [TlvScanNetworksRequest](cluster_export.NetworkCommissioning.md#tlvscannetworksrequest)
- [TlvScanNetworksResponse](cluster_export.NetworkCommissioning.md#tlvscannetworksresponse)
- [TlvThreadInterfaceScanResultStruct](cluster_export.NetworkCommissioning.md#tlvthreadinterfacescanresultstruct)
- [TlvWiFiInterfaceScanResultStruct](cluster_export.NetworkCommissioning.md#tlvwifiinterfacescanresultstruct)
- [WiFiNetworkInterfaceComponent](cluster_export.NetworkCommissioning.md#wifinetworkinterfacecomponent)
- [WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent](cluster_export.NetworkCommissioning.md#wifinetworkinterfaceorthreadnetworkinterfacecomponent)
- [WiFiSecurityBitmap](cluster_export.NetworkCommissioning.md#wifisecuritybitmap)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all NetworkCommissioning clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } | - |
| `attributes.interfaceEnabled` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> | This attribute shall indicate whether the associated network interface is enabled or not. By default all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true). It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which is used to write the value. In that case, it is possible that the Administrator would have to await expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”). It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled, an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the cable shall NOT re-enable the interface. On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster instances with InterfaceEnabled set to true. **`See`** MatterSpecification.v11.Core § 11.8.6.5 |
| `attributes.lastConnectErrorValue` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute shall be set to null. If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus attribute, then this field shall be set to null. This attribute is present to assist with error recovery during Network commissioning and to assist in non-concurrent networking commissioning flows. **`See`** MatterSpecification.v11.Core § 11.8.6.8 |
| `attributes.lastNetworkId` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> | This attribute shall indicate the NetworkID used in the last attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute shall be set to null. If a network configuration is removed from the Networks attribute using the RemoveNetwork command after a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node. This attribute is present to assist with error recovery during Network commissioning and to assist in non-concurrent networking commissioning flows. **`See`** MatterSpecification.v11.Core § 11.8.6.7 |
| `attributes.lastNetworkingStatus` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> | This attribute shall indicate the status of the last attempt either scan or connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute shall be set to null. This attribute is present to assist with error recovery during Network commissioning and to assist in non-concurrent networking commissioning flows. **`See`** MatterSpecification.v11.Core § 11.8.6.6 |
| `attributes.maxNetworks` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> | This shall indicate the maximum number of network configuration entries that can be added, based on available device resources. The length of the Networks attribute list shall be less than or equal to this value. **`See`** MatterSpecification.v11.Core § 11.8.6.1 |
| `attributes.networks` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\> | This attribute shall indicate the network configurations that are usable on the network interface represented by this cluster server instance. The order of configurations in the list reflects precedence. That is, any time the Node attempts to connect to the network it shall attempt to do so using the configurations in Networks Attribute in the order as they appear in the list. The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork and ReorderNetwork commands. In other words, the list shall be stable over time, unless mutated externally. Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to those Cluster instances. **`See`** MatterSpecification.v11.Core § 11.8.6.2 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>[]\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] | This metadata controls which NetworkCommissioningCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.ethernetNetworkInterface` | [`BitFlag`](schema_export.md#bitflag) | EthernetNetworkInterface Ethernet related features |
| `features.threadNetworkInterface` | [`BitFlag`](schema_export.md#bitflag) | ThreadNetworkInterface Thread related features |
| `features.wiFiNetworkInterface` | [`BitFlag`](schema_export.md#bitflag) | WiFiNetworkInterface Wi-Fi related features |
| `id` | ``49`` | - |
| `name` | ``"NetworkCommissioning"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1052](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1052)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.NetworkCommissioning.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1253](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1253)

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1255)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...[]\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  } = WiFiNetworkInterfaceComponent; `flags`: \{ `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  }  } = ThreadNetworkInterfaceComponent; `flags`: \{ `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `threadNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `wiFiNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``true`` = true; `threadNetworkInterface`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `ethernetNetworkInterface`: ``false`` = false; `threadNetworkInterface`: ``false`` = false; `wiFiNetworkInterface`: ``false`` = false }  }] ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``49`` = 0x31; `name`: ``"NetworkCommissioning"`` = "NetworkCommissioning"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.NetworkCommissioning.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1229)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.NetworkCommissioning.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1314](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1314)

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1316)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `interfaceEnabled`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`boolean`, `any`\> ; `lastConnectErrorValue`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `lastNetworkId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `lastNetworkingStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md), `any`\> ; `maxNetworks`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `networks`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: ... ; `extendedAddress`: ... ; `extendedPanId`: ... ; `lqi`: ... ; `networkName`: ... ; `panId`: ... ; `rssi`: ... ; `version`: ...  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: ... ; `channel`: ... ; `rssi`: ... ; `security`: ... ; `ssid`: ... ; `wiFiBand`: ...  }\>[]\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `wiFiNetworkInterface`: `boolean` = true }, \{ `threadNetworkInterface`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `ethernetNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `threadNetworkInterface`: [`BitFlag`](schema_export.md#bitflag) ; `wiFiNetworkInterface`: [`BitFlag`](schema_export.md#bitflag)  } = Base.features; `id`: ``49`` = Base.id; `name`: ``"NetworkCommissioning"`` = Base.name; `revision`: ``1`` = Base.revision }\>

**`See`**

[Complete](cluster_export.NetworkCommissioning.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1262](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1262)

___

### ThreadNetworkInterfaceComponent

• `Const` **ThreadNetworkInterfaceComponent**: `Object`

A NetworkCommissioningCluster supports these elements if it supports feature ThreadNetworkInterface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `addOrUpdateThreadNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  } |
| `commands.addOrUpdateThreadNetwork` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:991](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L991)

___

### TlvAddOrUpdateThreadNetworkRequest

• `Const` **TlvAddOrUpdateThreadNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning addOrUpdateThreadNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:633](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L633)

___

### TlvAddOrUpdateWiFiNetworkRequest

• `Const` **TlvAddOrUpdateWiFiNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning addOrUpdateWiFiNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:574](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L574)

___

### TlvConnectNetworkRequest

• `Const` **TlvConnectNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning connectNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.9

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:440](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L440)

___

### TlvConnectNetworkResponse

• `Const` **TlvConnectNetworkResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:486](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L486)

___

### TlvNetworkConfigResponse

• `Const` **TlvNetworkConfigResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:389](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L389)

___

### TlvNetworkInfoStruct

• `Const` **TlvNetworkInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `connected`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks attribute.

**`See`**

MatterSpecification.v11.Core § 11.8.5.4

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:662](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L662)

___

### TlvRemoveNetworkRequest

• `Const` **TlvRemoveNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the NetworkCommissioning removeNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:347](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L347)

___

### TlvReorderNetworkRequest

• `Const` **TlvReorderNetworkRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the NetworkCommissioning reorderNetwork command

**`See`**

MatterSpecification.v11.Core § 11.8.7.11

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:556](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L556)

___

### TlvScanNetworksRequest

• `Const` **TlvScanNetworksRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>

Input to the NetworkCommissioning scanNetworks command

**`See`**

MatterSpecification.v11.Core § 11.8.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L28)

___

### TlvScanNetworksResponse

• `Const` **TlvScanNetworksResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](schema_export.md#bitflag) ; `wep`: [`BitFlag`](schema_export.md#bitflag) ; `wpa2Personal`: [`BitFlag`](schema_export.md#bitflag) ; `wpa3Personal`: [`BitFlag`](schema_export.md#bitflag) ; `wpaPersonal`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>

This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
operation was successful.

Results are valid only if NetworkingStatus is Success.

Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
NetworkingStatus matching the response.

**`See`**

MatterSpecification.v11.Core § 11.8.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:266](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L266)

___

### TlvThreadInterfaceScanResultStruct

• `Const` **TlvThreadInterfaceScanResultStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.6

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:230](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L230)

___

### TlvWiFiInterfaceScanResultStruct

• `Const` **TlvWiFiInterfaceScanResultStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `unencrypted`: [`BitFlag`](schema_export.md#bitflag) ; `wep`: [`BitFlag`](schema_export.md#bitflag) ; `wpa2Personal`: [`BitFlag`](schema_export.md#bitflag) ; `wpa3Personal`: [`BitFlag`](schema_export.md#bitflag) ; `wpaPersonal`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>

WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.5

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L196)

___

### WiFiNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceComponent**: `Object`

A NetworkCommissioningCluster supports these elements if it supports feature WiFiNetworkInterface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `addOrUpdateWiFiNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\>  } |
| `commands.addOrUpdateWiFiNetwork` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:959](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L959)

___

### WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent

• `Const` **WiFiNetworkInterfaceOrThreadNetworkInterfaceComponent**: `Object`

A NetworkCommissioningCluster supports these elements if it supports features WiFiNetworkInterface or
ThreadNetworkInterface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `connectMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `scanMaxTimeSeconds`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.connectMaxTimeSeconds` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `attributes.scanMaxTimeSeconds` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `connectNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `removeNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `reorderNetwork`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> ; `scanNetworks`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>, `any`\>  } |
| `commands.connectNetwork` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `errorValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> |
| `commands.removeNetwork` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> |
| `commands.reorderNetwork` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `networkId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `networkIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>, `any`\> |
| `commands.scanNetworks` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `networkingStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\> ; `threadScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `extendedAddress`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `extendedPanId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `lqi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `networkName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `panId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `version`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>[]\> ; `wiFiScanResults`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `channel`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `rssi`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `security`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<...\>\> ; `ssid`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `wiFiBand`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`WiFiBand`](../enums/cluster_export.NetworkCommissioning.WiFiBand.md)\>  }\>[]\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:712](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L712)

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
| `unencrypted` | [`BitFlag`](schema_export.md#bitflag) | Supports unencrypted Wi-Fi |
| `wep` | [`BitFlag`](schema_export.md#bitflag) | Supports Wi-Fi using WEP security |
| `wpa2Personal` | [`BitFlag`](schema_export.md#bitflag) | Supports Wi-Fi using WPA2-Personal security |
| `wpa3Personal` | [`BitFlag`](schema_export.md#bitflag) | Supports Wi-Fi using WPA3-Personal security |
| `wpaPersonal` | [`BitFlag`](schema_export.md#bitflag) | Supports Wi-Fi using WPA-Personal security |

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L131)
