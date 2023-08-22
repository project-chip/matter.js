[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Cluster

# Interface: Cluster<F, SF, A, C, E\>

[<internal>](../modules/internal_.md).Cluster

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](internal_.Attributes.md) |
| `C` | extends [`Commands`](internal_.Commands.md) |
| `E` | extends [`Events`](internal_.Events.md) |

## Table of contents

### Properties

- [attributes](internal_.Cluster.md#attributes)
- [commands](internal_.Cluster.md#commands)
- [events](internal_.Cluster.md#events)
- [features](internal_.Cluster.md#features)
- [id](internal_.Cluster.md#id)
- [name](internal_.Cluster.md#name)
- [revision](internal_.Cluster.md#revision)
- [supportedFeatures](internal_.Cluster.md#supportedfeatures)
- [unknown](internal_.Cluster.md#unknown)

## Properties

### attributes

• **attributes**: `A`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:216

___

### commands

• **commands**: `C`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:217

___

### events

• **events**: `E`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:218

___

### features

• **features**: `F`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:214

___

### id

• **id**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:211

___

### name

• **name**: `string`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:212

___

### revision

• **revision**: `number`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:213

___

### supportedFeatures

• **supportedFeatures**: `SF`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:215

___

### unknown

• **unknown**: `boolean`

#### Defined in

matter.js/dist/cjs/cluster/Cluster.d.ts:219
