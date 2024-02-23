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

### Type Aliases

- [Extension](cluster_export.WiFiNetworkDiagnostics.md#extension)

### Variables

- [Base](cluster_export.WiFiNetworkDiagnostics.md#base)
- [Cluster](cluster_export.WiFiNetworkDiagnostics.md#cluster)
- [Complete](cluster_export.WiFiNetworkDiagnostics.md#complete)
- [ErrorCountsComponent](cluster_export.WiFiNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](cluster_export.WiFiNetworkDiagnostics.md#packetcountscomponent)
- [TlvAssociationFailureEvent](cluster_export.WiFiNetworkDiagnostics.md#tlvassociationfailureevent)
- [TlvConnectionStatusEvent](cluster_export.WiFiNetworkDiagnostics.md#tlvconnectionstatusevent)
- [TlvDisconnectionEvent](cluster_export.WiFiNetworkDiagnostics.md#tlvdisconnectionevent)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.WiFiNetworkDiagnostics.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](cluster_export.WiFiNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends \{ `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](cluster_export.WiFiNetworkDiagnostics.md#packetcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:449](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L449)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``54`` = 0x36; `name`: ``"WiFiNetworkDiagnostics"`` = "WiFiNetworkDiagnostics"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:215](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L215)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: {} ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``54`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``54`` = 0x36; `name`: ``"WiFiNetworkDiagnostics"`` = "WiFiNetworkDiagnostics"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.WiFiNetworkDiagnostics.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

WiFi Network Diagnostics

The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Wi-Fi Network Diagnostics
Cluster attempts to centralize all metrics that are relevant to a potential Wi-Fi radio running on a Node.

WiFiNetworkDiagnosticsCluster supports optional features that you can enable with the
WiFiNetworkDiagnosticsCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:426](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L426)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `beaconLostCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `beaconRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `bssid`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentMaxRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetMulticastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetMulticastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetUnicastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetUnicastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rssi`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `events`: \{ `associationFailure`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } = Cluster.events; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``54`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"WiFiNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all WiFiNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:463](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L463)

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `beaconLostCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  }\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:321](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L321)

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `beaconRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  }  }\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:369](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L369)

___

### TlvAssociationFailureEvent

• `Const` **TlvAssociationFailureEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:142](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L142)

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>

Body of the WiFiNetworkDiagnostics connectionStatus event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:188](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L188)

___

### TlvDisconnectionEvent

• `Const` **TlvDisconnectionEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:102](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L102)
