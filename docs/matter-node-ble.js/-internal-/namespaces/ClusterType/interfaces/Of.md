[**@project-chip/matter-node-ble.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../../globals.md) / [\<internal\>](../../../README.md) / [ClusterType](../README.md) / Of

# Interface: Of\<T\>

A fully typed [ClusterType](../../../README.md#clustertype) for an [Options](../README.md#optionsf) type.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Options`](../README.md#optionsf) |

## Properties

### attributes

> **attributes**: `T`\[`"attributes"`\] *extends* `A` ? [`Merge`](../../../README.md#mergeab)\<`A`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`T`\[`"features"`\] *extends* `object` ? `any`\[`any`\] : `object`\>\> : `object`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `T`\[`"base"`\] *extends* `object` ? `any`\[`any`\] : `undefined`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `T`\[`"commands"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `T`\[`"events"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `T`\[`"extensions"`\] *extends* `object` ? `any`\[`any`\] : `undefined`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `T`\[`"features"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../README.md#brandedtb)\<`T`\[`"id"`\], `"ClusterId"`\>

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `T`\[`"name"`\]

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `T`\[`"revision"`\]

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `T`\[`"supportedFeatures"`\] *extends* `object` ? `any`\[`any`\] : `object`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `T`\[`"unknown"`\] *extends* `boolean` ? `any`\[`any`\] : `false`

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:47
