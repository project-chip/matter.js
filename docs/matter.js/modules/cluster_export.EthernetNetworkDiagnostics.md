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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.EthernetNetworkDiagnostics.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `packetCounts`: ``true``  } ? typeof [`PacketCountsComponent`](cluster_export.EthernetNetworkDiagnostics.md#packetcountscomponent) : {} & `SF` extends { `errorCounts`: ``true``  } ? typeof [`ErrorCountsComponent`](cluster_export.EthernetNetworkDiagnostics.md#errorcountscomponent) : {} & `SF` extends { `packetCounts`: ``true``  } \| { `errorCounts`: ``true``  } ? typeof [`PacketCountsOrErrorCountsComponent`](cluster_export.EthernetNetworkDiagnostics.md#packetcountsorerrorcountscomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:287](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L287)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `carrierDetect`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all EthernetNetworkDiagnostics clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L113)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `carrierDetect`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.EthernetNetworkDiagnostics.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

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

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:266](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L266)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `collisionCount`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>\> ; `packetRxCount`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>\> ; `packetTxCount`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>\> ; `phyRate`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\> ; `txErrCount`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `errorCounts`: [`BitFlag`](schema_export.md#bitflag-1) ; `packetCounts`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `resetCounts`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>\>  }, {}\>

This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:303](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L303)

___

### ErrorCountsComponent

• `Const` **ErrorCountsComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `collisionCount`: [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L197)

___

### PacketCountsComponent

• `Const` **PacketCountsComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `packetRxCount`: [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](cluster_export.md#attribute)<`number` \| `bigint`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:173](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L173)

___

### PacketCountsOrErrorCountsComponent

• `Const` **PacketCountsOrErrorCountsComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `resetCounts`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.

#### Defined in

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:230](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L230)
