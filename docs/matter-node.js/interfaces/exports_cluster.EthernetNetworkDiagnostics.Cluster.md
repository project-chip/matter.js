[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [EthernetNetworkDiagnostics](../modules/exports_cluster.EthernetNetworkDiagnostics.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[EthernetNetworkDiagnostics](../modules/exports_cluster.EthernetNetworkDiagnostics.md).Cluster

Ethernet Network Diagnostics

The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may
be used by a Node to assist a user or Administrator in diagnosing potential problems. The Ethernet Network
Diagnostics Cluster attempts to centralize all metrics that are relevant to a potential Ethernet connection to a
Node.

EthernetNetworkDiagnosticsCluster supports optional features that you can enable with the
EthernetNetworkDiagnosticsCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.15

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.EthernetNetworkDiagnostics.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#attributes)
- [base](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#base)
- [commands](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#commands)
- [events](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#events)
- [extensions](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#extensions)
- [features](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#features)
- [id](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#id)
- [name](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#name)
- [revision](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#revision)
- [supportedFeatures](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#alter)
- [enable](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#enable)
- [set](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#set)
- [with](exports_cluster.EthernetNetworkDiagnostics.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }]

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
| `errorCounts` | [`BitFlag`](../modules/exports_schema.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface. |
| `packetCounts` | [`BitFlag`](../modules/exports_schema.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the ethernet interface. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"EthernetNetworkDiagnostics"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `packetCounts`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  }  } ; `flags`: \{ `errorCounts`: ``true``  }  }] ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``55`` ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
