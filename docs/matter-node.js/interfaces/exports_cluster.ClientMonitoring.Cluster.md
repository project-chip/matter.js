[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ClientMonitoring](../modules/exports_cluster.ClientMonitoring.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ClientMonitoring](../modules/exports_cluster.ClientMonitoring.md).Cluster

Client Monitoring

Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.ClientMonitoring.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.ClientMonitoring.Cluster.md#attributes)
- [base](exports_cluster.ClientMonitoring.Cluster.md#base)
- [commands](exports_cluster.ClientMonitoring.Cluster.md#commands)
- [events](exports_cluster.ClientMonitoring.Cluster.md#events)
- [extensions](exports_cluster.ClientMonitoring.Cluster.md#extensions)
- [features](exports_cluster.ClientMonitoring.Cluster.md#features)
- [id](exports_cluster.ClientMonitoring.Cluster.md#id)
- [name](exports_cluster.ClientMonitoring.Cluster.md#name)
- [revision](exports_cluster.ClientMonitoring.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ClientMonitoring.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ClientMonitoring.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.ClientMonitoring.Cluster.md#alter)
- [enable](exports_cluster.ClientMonitoring.Cluster.md#enable)
- [set](exports_cluster.ClientMonitoring.Cluster.md#set)
- [with](exports_cluster.ClientMonitoring.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

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
| `registerClientMonitoring` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> |
| `stayAwakeRequest` | [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> |
| `unregisterClientMonitoring` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> |

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

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``4166``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"ClientMonitoring"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](exports_tlv.FieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\> ; `iCid`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
