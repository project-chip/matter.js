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

### Interfaces

- [AssociationFailureEvent](../interfaces/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureEvent.md)
- [Cluster](../interfaces/exports_cluster.WiFiNetworkDiagnostics.Cluster.md)
- [Complete](../interfaces/exports_cluster.WiFiNetworkDiagnostics.Complete.md)
- [ConnectionStatusEvent](../interfaces/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatusEvent.md)
- [DisconnectionEvent](../interfaces/exports_cluster.WiFiNetworkDiagnostics.DisconnectionEvent.md)

### Variables

- [Base](exports_cluster.WiFiNetworkDiagnostics.md#base)
- [Cluster](exports_cluster.WiFiNetworkDiagnostics.md#cluster)
- [ClusterInstance](exports_cluster.WiFiNetworkDiagnostics.md#clusterinstance)
- [Complete](exports_cluster.WiFiNetworkDiagnostics.md#complete)
- [CompleteInstance](exports_cluster.WiFiNetworkDiagnostics.md#completeinstance)
- [ErrorCountsComponent](exports_cluster.WiFiNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](exports_cluster.WiFiNetworkDiagnostics.md#packetcountscomponent)
- [TlvAssociationFailureEvent](exports_cluster.WiFiNetworkDiagnostics.md#tlvassociationfailureevent)
- [TlvConnectionStatusEvent](exports_cluster.WiFiNetworkDiagnostics.md#tlvconnectionstatusevent)
- [TlvDisconnectionEvent](exports_cluster.WiFiNetworkDiagnostics.md#tlvdisconnectionevent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `bssid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `rssi`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  } | - |
| `attributes.bssid` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> | The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected. **`See`** MatterSpecification.v11.Core § 11.14.6.1 |
| `attributes.channelNumber` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating on. **`See`** MatterSpecification.v11.Core § 11.14.6.4 |
| `attributes.currentMaxRate` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> | The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in bits-per-second. **`See`** MatterSpecification.v11.Core § 11.14.6.12 |
| `attributes.rssi` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> | The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm. **`See`** MatterSpecification.v11.Core § 11.14.6.5 |
| `attributes.securityType` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> | The SecurityType attribute shall indicate the current type of Wi-Fi security used. **`See`** MatterSpecification.v11.Core § 11.14.6.2 |
| `attributes.wiFiVersion` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\> | The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the table below. **`See`** MatterSpecification.v11.Core § 11.14.6.3 |
| `events` | \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `events.associationFailure` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all internal retries of its supplicant. **`See`** MatterSpecification.v11.Core § 11.14.8.2 |
| `events.connectionStatus` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully associated to a Wi-Fi Access Point. **`See`** MatterSpecification.v11.Core § 11.14.8.3 |
| `events.disconnection` | [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result of de-authenticated or dis-association and indicates the reason. **`See`** MatterSpecification.v11.Core § 11.14.8.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] | This metadata controls which WiFiNetworkDiagnosticsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.errorCounts` | [`BitFlag`](exports_schema.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the Wi-Fi interface. |
| `features.packetCounts` | [`BitFlag`](exports_schema.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface. |
| `id` | ``54`` | - |
| `name` | ``"WiFiNetworkDiagnostics"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:288

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.WiFiNetworkDiagnostics.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:733

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:735

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `rssi`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.WiFiNetworkDiagnostics.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:506

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.WiFiNetworkDiagnostics.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:919

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:921

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `beaconLostCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `beaconRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `bssid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetMulticastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetMulticastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetUnicastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetUnicastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rssi`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.WiFiNetworkDiagnostics.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:739

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: `Object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `beaconLostCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } |
| `attributes.beaconLostCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.overrunCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> |
| `commands` | \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.resetCounts` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:180

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: `Object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `beaconRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.beaconRxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.packetMulticastRxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.packetMulticastTxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.packetUnicastRxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.packetUnicastTxCount` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:225

___

### TlvAssociationFailureEvent

• `Const` **TlvAssociationFailureEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

MatterSpecification.v11.Core § 11.14.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:118

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics connectionStatus event

**`See`**

MatterSpecification.v11.Core § 11.14.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:167

___

### TlvDisconnectionEvent

• `Const` **TlvDisconnectionEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

MatterSpecification.v11.Core § 11.14.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:76
