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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.WiFiNetworkDiagnostics.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](exports_cluster.WiFiNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends \{ `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](exports_cluster.WiFiNetworkDiagnostics.md#packetcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:705

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `bssid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `rssi`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:177

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `bssid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `rssi`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.WiFiNetworkDiagnostics.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

WiFi Network Diagnostics

The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Wi-Fi Network Diagnostics
Cluster attempts to centralize all metrics that are relevant to a potential Wi-Fi radio running on a Node.

WiFiNetworkDiagnosticsCluster supports optional features that you can enable with the
WiFiNetworkDiagnosticsCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:397

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `beaconLostCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `beaconRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `bssid`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`Uint8Array` \| ``null``, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint` \| ``null``, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetMulticastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetMulticastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetUnicastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `packetUnicastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `rssi`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `securityType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md) \| ``null``, `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md) \| ``null``, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``54`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>

This cluster supports all WiFiNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:718

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `beaconLostCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| `bigint` \| ``null``, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  }\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:300

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `beaconRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  }  }\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:345

___

### TlvAssociationFailureEvent

• `Const` **TlvAssociationFailureEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

MatterCoreSpecificationV1_1 § 11.14.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:109

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics connectionStatus event

**`See`**

MatterCoreSpecificationV1_1 § 11.14.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:151

___

### TlvDisconnectionEvent

• `Const` **TlvDisconnectionEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

MatterCoreSpecificationV1_1 § 11.14.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:74
