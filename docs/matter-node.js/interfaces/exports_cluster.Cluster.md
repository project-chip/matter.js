[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / Cluster

# Interface: Cluster<F, SF, A, C, E\>

[exports/cluster](../modules/exports_cluster.md).Cluster

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](exports_cluster.Commands.md) |
| `E` | extends [`Events`](exports_cluster.Events.md) |

## Table of contents

### Properties

- [attributes](exports_cluster.Cluster.md#attributes)
- [commands](exports_cluster.Cluster.md#commands)
- [events](exports_cluster.Cluster.md#events)
- [features](exports_cluster.Cluster.md#features)
- [id](exports_cluster.Cluster.md#id)
- [name](exports_cluster.Cluster.md#name)
- [revision](exports_cluster.Cluster.md#revision)
- [supportedFeatures](exports_cluster.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.Cluster.md#unknown)

## Properties

### attributes

• **attributes**: `A`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:216

___

### commands

• **commands**: `C`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:217

___

### events

• **events**: `E`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:218

___

### features

• **features**: `F`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:214

___

### id

• **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:211

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:212

___

### revision

• **revision**: `number`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:213

___

### supportedFeatures

• **supportedFeatures**: `SF`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:215

___

### unknown

• **unknown**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:219
