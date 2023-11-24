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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.WiFiNetworkDiagnostics.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](cluster_export.WiFiNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends { `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](cluster_export.WiFiNetworkDiagnostics.md#packetcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:449](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L449)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `bssid`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: { `associationFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  } ; `features`: { `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``54`` = 0x36; `name`: ``"WiFiNetworkDiagnostics"`` = "WiFiNetworkDiagnostics"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all WiFiNetworkDiagnostics clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:215](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L215)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `bssid`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: { `associationFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  } ; `features`: { `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``54`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"WiFiNetworkDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `bssid`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `currentMaxRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number` \| `bigint`, `any`\> ; `rssi`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `events`: { `associationFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  } ; `features`: { `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``54`` = 0x36; `name`: ``"WiFiNetworkDiagnostics"`` = "WiFiNetworkDiagnostics"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.WiFiNetworkDiagnostics.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

WiFi Network Diagnostics

The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be
used by a Node to assist a user or Administrator in diagnosing potential problems. The Wi-Fi Network Diagnostics
Cluster attempts to centralize all metrics that are relevant to a potential Wi-Fi radio running on a Node.

WiFiNetworkDiagnosticsCluster supports optional features that you can enable with the
WiFiNetworkDiagnosticsCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:426](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L426)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `beaconLostCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `beaconRxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `bssid`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `Uint8Array`, `any`\> ; `channelNumber`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentMaxRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number` \| `bigint`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetMulticastRxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetMulticastTxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetUnicastRxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetUnicastTxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `rssi`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `securityType`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`SecurityType`](../enums/cluster_export.WiFiNetworkDiagnostics.SecurityType.md), `any`\> ; `wiFiVersion`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`WiFiVersion`](../enums/cluster_export.WiFiNetworkDiagnostics.WiFiVersion.md), `any`\>  } ; `commands`: { `resetCounts`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `events`: { `associationFailure`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `connectionStatus`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>, `any`\> ; `disconnection`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  } = Cluster.events; `features`: { `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``54`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"WiFiNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all WiFiNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:463](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L463)

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `beaconLostCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `overrunCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number` \| `bigint`, `any`\>  } ; `commands`: { `resetCounts`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }  }\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:321](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L321)

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `beaconRxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `packetMulticastRxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `packetMulticastTxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `packetUnicastRxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `packetUnicastTxCount`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }  }\>

A WiFiNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:369](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L369)

___

### TlvAssociationFailureEvent

• `Const` **TlvAssociationFailureEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `associationFailureCause`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:142](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L142)

___

### TlvConnectionStatusEvent

• `Const` **TlvConnectionStatusEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `connectionStatus`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ConnectionStatus`](../enums/cluster_export.WiFiNetworkDiagnostics.ConnectionStatus.md)\>  }\>

Body of the WiFiNetworkDiagnostics connectionStatus event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:188](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L188)

___

### TlvDisconnectionEvent

• `Const` **TlvDisconnectionEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `reasonCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the WiFiNetworkDiagnostics disconnection event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.14.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:102](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L102)
