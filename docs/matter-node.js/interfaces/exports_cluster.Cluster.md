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

packages/matter.js/dist/esm/cluster/Cluster.d.ts:232

___

### commands

• **commands**: `C`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:233

___

### events

• **events**: `E`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:234

___

### features

• **features**: `F`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:230

___

### id

• **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:227

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:228

___

### revision

• **revision**: `number`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:229

___

### supportedFeatures

• **supportedFeatures**: `SF`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:231

___

### unknown

• **unknown**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:235
