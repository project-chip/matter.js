[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md).Cluster

WiFi Network Diagnostics

The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Wi-Fi Network Diagnostics
Cluster attempts to centralize all metrics that are relevant to a potential Wi-Fi radio running on a Node.

WiFiNetworkDiagnosticsCluster supports optional features that you can enable with the
WiFiNetworkDiagnosticsCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.14

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.WiFiNetworkDiagnostics.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#attributes)
- [base](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#base)
- [commands](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#commands)
- [events](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#events)
- [extensions](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#extensions)
- [features](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#features)
- [id](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#id)
- [name](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#name)
- [revision](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#revision)
- [supportedFeatures](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#alter)
- [enable](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#enable)
- [set](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#set)
- [with](exports_cluster.WiFiNetworkDiagnostics.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `associationFailure` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all internal retries of its supplicant. **`See`** MatterSpecification.v11.Core § 11.14.8.2 |
| `connectionStatus` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> | The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is successfully associated to a Wi-Fi Access Point. **`See`** MatterSpecification.v11.Core § 11.14.8.3 |
| `disconnection` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a result of de-authenticated or dis-association and indicates the reason. **`See`** MatterSpecification.v11.Core § 11.14.8.1 |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCounts` | [`BitFlag`](../modules/exports_schema.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the Wi-Fi interface. |
| `packetCounts` | [`BitFlag`](../modules/exports_schema.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``54``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"WiFiNetworkDiagnostics"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `bssid`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`SecurityType`](../enums/exports_cluster.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/exports_cluster.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](exports_tlv.FieldType.md)\<[`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](exports_tlv.FieldType.md)\<[`ConnectionStatus`](../enums/exports_cluster.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `beaconLostCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `beaconRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``54`` ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
