[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / WiFiNetworkDiagnostics

# Namespace: WiFiNetworkDiagnostics

[cluster/export](cluster_export.md).WiFiNetworkDiagnostics

## Table of contents

### Enumerations

- [AssociationFailureCause](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)
- [ConnectionStatus](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)
- [Feature](../enums/cluster_export.WiFiNetworkDiagnostics.Feature.md)
- [SecurityType](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md)
- [WiFiVersion](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md)

### Interfaces

- [AssociationFailureEvent](../interfaces/cluster_export.WiFiNetworkDiagnostics.AssociationFailureEvent.md)
- [Cluster](../interfaces/cluster_export.WiFiNetworkDiagnostics.Cluster.md)
- [Complete](../interfaces/cluster_export.WiFiNetworkDiagnostics.Complete.md)
- [ConnectionStatusEvent](../interfaces/cluster_export.WiFiNetworkDiagnostics.ConnectionStatusEvent.md)
- [DisconnectionEvent](../interfaces/cluster_export.WiFiNetworkDiagnostics.DisconnectionEvent.md)

### Variables

- [Base](cluster_export.WiFiNetworkDiagnostics.md#base)
- [Cluster](cluster_export.WiFiNetworkDiagnostics.md#cluster)
- [ClusterInstance](cluster_export.WiFiNetworkDiagnostics.md#clusterinstance)
- [Complete](cluster_export.WiFiNetworkDiagnostics.md#complete)
- [CompleteInstance](cluster_export.WiFiNetworkDiagnostics.md#completeinstance)
- [ErrorCountsComponent](cluster_export.WiFiNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](cluster_export.WiFiNetworkDiagnostics.md#packetcountscomponent)
- [TlvAssociationFailureEvent](cluster_export.WiFiNetworkDiagnostics.md#tlvassociationfailureevent)
- [TlvConnectionStatusEvent](cluster_export.WiFiNetworkDiagnostics.md#tlvconnectionstatusevent)
- [TlvDisconnectionEvent](cluster_export.WiFiNetworkDiagnostics.md#tlvdisconnectionevent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } | - |
| `attributes.bssid` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> | The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently connected. **`See`** MatterSpecification.v11.Core § 11.14.6.1 |
| `attributes.channelNumber` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently operating on. **`See`** MatterSpecification.v11.Core § 11.14.6.4 |
| `attributes.currentMaxRate` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> | The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in bits-per-second. **`See`** MatterSpecification.v11.Core § 11.14.6.12 |
| `attributes.rssi` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> | The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm. **`See`** MatterSpecification.v11.Core § 11.14.6.5 |
| `attributes.securityType` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> | The SecurityType attribute shall indicate the current type of Wi-Fi security used. **`See`** MatterSpecification.v11.Core § 11.14.6.2 |
| `attributes.wiFiVersion` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\> | The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per the table below. **`See`** MatterSpecification.v11.Core § 11.14.6.3 |
| `events` | \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } | - |
| `events.associationFailure` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> | The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all internal retries of its supplicant. **`See`** MatterSpecification.v11.Core § 11.14.8.2 |
| `events.connectionStatus` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> | The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully associated to a Wi-Fi Access Point. **`See`** MatterSpecification.v11.Core § 11.14.8.3 |
| `events.disconnection` | [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> | The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result of de-authenticated or dis-association and indicates the reason. **`See`** MatterSpecification.v11.Core § 11.14.8.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = ErrorCountsComponent; `flags`: \{ `errorCounts`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = PacketCountsComponent; `flags`: \{ `packetCounts`: ``true`` = true }  }] | This metadata controls which WiFiNetworkDiagnosticsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.errorCounts` | [`BitFlag`](schema_export.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the Wi-Fi interface. |
| `features.packetCounts` | [`BitFlag`](schema_export.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface. |
| `id` | ``54`` | - |
| `name` | ``"WiFiNetworkDiagnostics"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L334)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.WiFiNetworkDiagnostics.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:463](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L463)

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:465](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L465)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  } = ErrorCountsComponent; `flags`: \{ `errorCounts`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  } = PacketCountsComponent; `flags`: \{ `packetCounts`: ``true`` = true }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``54`` = 0x36; `name`: ``"WiFiNetworkDiagnostics"`` = "WiFiNetworkDiagnostics"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.WiFiNetworkDiagnostics.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:449](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L449)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.WiFiNetworkDiagnostics.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:526](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L526)

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:528](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L528)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `beaconLostCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `beaconRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetMulticastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetMulticastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetUnicastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetUnicastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``54``, ``"ClusterId"``\> = Cluster.id; `name`: ``"WiFiNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.WiFiNetworkDiagnostics.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:472](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L472)

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: `Object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `beaconLostCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } |
| `attributes.beaconLostCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.overrunCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> |
| `commands` | \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } |
| `commands.resetCounts` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L216)

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: `Object`

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `beaconRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.beaconRxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.packetMulticastRxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.packetMulticastTxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.packetUnicastRxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.packetUnicastTxCount` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:264](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L264)

___

### TlvAssociationFailureEvent

• `Const` **TlvAssociationFailureEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

MatterSpecification.v11.Core § 11.14.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L151)

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>

Body of the WiFiNetworkDiagnostics connectionStatus event

**`See`**

MatterSpecification.v11.Core § 11.14.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L204)

___

### TlvDisconnectionEvent

• `Const` **TlvDisconnectionEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

MatterSpecification.v11.Core § 11.14.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L104)
