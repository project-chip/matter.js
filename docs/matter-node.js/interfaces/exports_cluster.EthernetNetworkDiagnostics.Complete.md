[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [EthernetNetworkDiagnostics](../modules/exports_cluster.EthernetNetworkDiagnostics.md) / Complete

# Interface: Complete

[exports/cluster](../modules/exports_cluster.md).[EthernetNetworkDiagnostics](../modules/exports_cluster.EthernetNetworkDiagnostics.md).Complete

This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/exports_cluster.EthernetNetworkDiagnostics.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](exports_cluster.EthernetNetworkDiagnostics.Complete.md#attributes)
- [base](exports_cluster.EthernetNetworkDiagnostics.Complete.md#base)
- [commands](exports_cluster.EthernetNetworkDiagnostics.Complete.md#commands)
- [events](exports_cluster.EthernetNetworkDiagnostics.Complete.md#events)
- [extensions](exports_cluster.EthernetNetworkDiagnostics.Complete.md#extensions)
- [features](exports_cluster.EthernetNetworkDiagnostics.Complete.md#features)
- [id](exports_cluster.EthernetNetworkDiagnostics.Complete.md#id)
- [name](exports_cluster.EthernetNetworkDiagnostics.Complete.md#name)
- [revision](exports_cluster.EthernetNetworkDiagnostics.Complete.md#revision)
- [supportedFeatures](exports_cluster.EthernetNetworkDiagnostics.Complete.md#supportedfeatures)
- [unknown](exports_cluster.EthernetNetworkDiagnostics.Complete.md#unknown)

### Methods

- [alter](exports_cluster.EthernetNetworkDiagnostics.Complete.md#alter)
- [enable](exports_cluster.EthernetNetworkDiagnostics.Complete.md#enable)
- [set](exports_cluster.EthernetNetworkDiagnostics.Complete.md#set)
- [with](exports_cluster.EthernetNetworkDiagnostics.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resetCounts` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } |

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

• **extensions**: `undefined`

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\>, ``"ClusterId"``\>

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.Attribute.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)[], `never`\> ; `carrierDetect`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `clusterRevision`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `never`\> ; `collisionCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `eventList`: [`Attribute`](exports_cluster.Attribute.md)\<[`EventId`](../modules/exports_datatype.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `never`\> ; `fullDuplex`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `boolean`, `any`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)[], `never`\> ; `overrunCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetRxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `packetTxCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `phyRate`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`PHYRate`](../enums/exports_cluster.EthernetNetworkDiagnostics.PHYRate.md), `any`\> ; `timeSinceReset`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\> ; `txErrCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number` \| `bigint`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `commands`: \{ `resetCounts`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `packetCounts`: `boolean`  }, \{ `errorCounts`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  }  } ; `features`: \{ `errorCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `packetCounts`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``55``, ``"ClusterId"``\> ; `name`: ``"EthernetNetworkDiagnostics"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
