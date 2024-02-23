[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / EthernetNetworkDiagnostics

# Namespace: EthernetNetworkDiagnostics

[cluster/export](cluster_export.md).EthernetNetworkDiagnostics

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.EthernetNetworkDiagnostics.Feature.md)
- [PHYRate](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md)

### Type Aliases

- [Extension](cluster_export.EthernetNetworkDiagnostics.md#extension)

### Variables

- [Base](cluster_export.EthernetNetworkDiagnostics.md#base)
- [Cluster](cluster_export.EthernetNetworkDiagnostics.md#cluster)
- [Complete](cluster_export.EthernetNetworkDiagnostics.md#complete)
- [ErrorCountsComponent](cluster_export.EthernetNetworkDiagnostics.md#errorcountscomponent)
- [PacketCountsComponent](cluster_export.EthernetNetworkDiagnostics.md#packetcountscomponent)
- [PacketCountsOrErrorCountsComponent](cluster_export.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.EthernetNetworkDiagnostics.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](cluster_export.EthernetNetworkDiagnostics.md#packetcountscomponent) : {} & `SF` extends \{ `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](cluster_export.EthernetNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends \{ `packetCounts`: ``true``  } \| \{ `errorCounts`: ``true``  } ? typeof [`PacketCountsOrErrorCountsComponent`](cluster_export.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:283](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L283)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``55`` = 0x37; `name`: ``"EthernetNetworkDiagnostics"`` = "EthernetNetworkDiagnostics"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:99](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L99)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``55`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``55`` = 0x37; `name`: ``"EthernetNetworkDiagnostics"`` = "EthernetNetworkDiagnostics"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.EthernetNetworkDiagnostics.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Ethernet Network Diagnostics

The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may
be used by a Node to assist a user or Administrator in diagnosing potential problems. The Ethernet Network
Diagnostics Cluster attempts to centralize all metrics that are relevant to a potential Ethernet connection to a
Node.

EthernetNetworkDiagnosticsCluster supports optional features that you can enable with the
EthernetNetworkDiagnosticsCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.15

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:252](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L252)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``55`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:299](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L299)

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `collisionCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  }  }\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:183](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L183)

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `packetRxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\>  }  }\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:159](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L159)

___

### PacketCountsOrErrorCountsComponent

• `Const` **PacketCountsOrErrorCountsComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `resetCounts`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  }  }\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:216](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L216)
