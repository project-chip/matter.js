[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[DiagnosticLogs](../modules/exports_cluster.DiagnosticLogs.md).Cluster

Diagnostic Logs

This Cluster supports an interface to a Node. It provides commands for retrieving unstructured diagnostic logs
from a Node that may be used to aid in diagnostics. It will often be the case that unstructured diagnostic logs
will be Node-wide and not specific to any subset of Endpoints. When present, this Cluster shall be implemented
once for the Node. The Node SHOULD also implement the BDX Initiator and BDX Sender roles as defined in the BDX
Protocol.

NOTE Support for Diagnostic Logs cluster is provisional.

**`See`**

MatterSpecification.v11.Core § 11.10

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.DiagnosticLogs.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.DiagnosticLogs.Cluster.md#attributes)
- [base](exports_cluster.DiagnosticLogs.Cluster.md#base)
- [commands](exports_cluster.DiagnosticLogs.Cluster.md#commands)
- [events](exports_cluster.DiagnosticLogs.Cluster.md#events)
- [extensions](exports_cluster.DiagnosticLogs.Cluster.md#extensions)
- [features](exports_cluster.DiagnosticLogs.Cluster.md#features)
- [id](exports_cluster.DiagnosticLogs.Cluster.md#id)
- [name](exports_cluster.DiagnosticLogs.Cluster.md#name)
- [revision](exports_cluster.DiagnosticLogs.Cluster.md#revision)
- [supportedFeatures](exports_cluster.DiagnosticLogs.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.DiagnosticLogs.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.DiagnosticLogs.Cluster.md#alter)
- [enable](exports_cluster.DiagnosticLogs.Cluster.md#enable)
- [set](exports_cluster.DiagnosticLogs.Cluster.md#set)
- [with](exports_cluster.DiagnosticLogs.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `retrieveLogsRequest` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\> | Reception of this command starts the process of retrieving diagnostic logs from a Node. **`See`** MatterSpecification.v11.Core § 11.10.5.1 |

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``50``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"DiagnosticLogs"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `retrieveLogsRequest`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `intent`: [`FieldType`](exports_tlv.FieldType.md)\<[`Intent`](../enums/exports_cluster.DiagnosticLogs.Intent.md)\> ; `requestedProtocol`: [`FieldType`](exports_tlv.FieldType.md)\<[`TransferProtocol`](../enums/exports_cluster.DiagnosticLogs.TransferProtocol.md)\> ; `transferFileDesignator`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `logContent`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.DiagnosticLogs.Status.md)\> ; `timeSinceBoot`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\> ; `utcTimeStamp`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`number` \| `bigint`\>  }\>, `any`\>  } ; `id`: ``50`` ; `name`: ``"DiagnosticLogs"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
