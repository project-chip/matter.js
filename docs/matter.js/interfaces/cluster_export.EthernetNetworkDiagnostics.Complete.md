[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [EthernetNetworkDiagnostics](../modules/cluster_export.EthernetNetworkDiagnostics.md) / Complete

# Interface: Complete

[cluster/export](../modules/cluster_export.md).[EthernetNetworkDiagnostics](../modules/cluster_export.EthernetNetworkDiagnostics.md).Complete

This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/cluster_export.EthernetNetworkDiagnostics.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](cluster_export.EthernetNetworkDiagnostics.Complete.md#attributes)
- [base](cluster_export.EthernetNetworkDiagnostics.Complete.md#base)
- [commands](cluster_export.EthernetNetworkDiagnostics.Complete.md#commands)
- [events](cluster_export.EthernetNetworkDiagnostics.Complete.md#events)
- [extensions](cluster_export.EthernetNetworkDiagnostics.Complete.md#extensions)
- [features](cluster_export.EthernetNetworkDiagnostics.Complete.md#features)
- [id](cluster_export.EthernetNetworkDiagnostics.Complete.md#id)
- [name](cluster_export.EthernetNetworkDiagnostics.Complete.md#name)
- [revision](cluster_export.EthernetNetworkDiagnostics.Complete.md#revision)
- [supportedFeatures](cluster_export.EthernetNetworkDiagnostics.Complete.md#supportedfeatures)
- [unknown](cluster_export.EthernetNetworkDiagnostics.Complete.md#unknown)

### Methods

- [alter](cluster_export.EthernetNetworkDiagnostics.Complete.md#alter)
- [enable](cluster_export.EthernetNetworkDiagnostics.Complete.md#enable)
- [set](cluster_export.EthernetNetworkDiagnostics.Complete.md#set)
- [with](cluster_export.EthernetNetworkDiagnostics.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resetCounts` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCounts` | [`BitFlag`](../modules/schema_export.md#bitflag) | ErrorCounts Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface. |
| `packetCounts` | [`BitFlag`](../modules/schema_export.md#bitflag) | PacketCounts Node makes available the counts for the number of received and transmitted packets on the ethernet interface. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"EthernetNetworkDiagnostics"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.Attribute.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `eventList`: [`Attribute`](cluster_export.Attribute.md)\<[`EventId`](../modules/datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](cluster_export.Attribute.md)\<[`CommandId`](../modules/datatype_export.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/cluster_export.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](cluster_export.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean` = true }, \{ `errorCounts`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> = Cluster.id; `name`: ``"EthernetNetworkDiagnostics"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
