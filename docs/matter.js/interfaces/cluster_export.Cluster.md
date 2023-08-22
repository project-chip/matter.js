[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / Cluster

# Interface: Cluster<F, SF, A, C, E\>

[cluster/export](../modules/cluster_export.md).Cluster

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](cluster_export.Attributes.md) |
| `C` | extends [`Commands`](cluster_export.Commands.md) |
| `E` | extends [`Events`](cluster_export.Events.md) |

## Table of contents

### Properties

- [attributes](cluster_export.Cluster.md#attributes)
- [commands](cluster_export.Cluster.md#commands)
- [events](cluster_export.Cluster.md#events)
- [features](cluster_export.Cluster.md#features)
- [id](cluster_export.Cluster.md#id)
- [name](cluster_export.Cluster.md#name)
- [revision](cluster_export.Cluster.md#revision)
- [supportedFeatures](cluster_export.Cluster.md#supportedfeatures)
- [unknown](cluster_export.Cluster.md#unknown)

## Properties

### attributes

• **attributes**: `A`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:812](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L812)

___

### commands

• **commands**: `C`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:813](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L813)

___

### events

• **events**: `E`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:814](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L814)

___

### features

• **features**: `F`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:810](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L810)

___

### id

• **id**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:807](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L807)

___

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:808](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L808)

___

### revision

• **revision**: `number`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:809](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L809)

___

### supportedFeatures

• **supportedFeatures**: `SF`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:811](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L811)

___

### unknown

• **unknown**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:815](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L815)
