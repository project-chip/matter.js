[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ClusterType

# Interface: ClusterType

A "cluster" is a grouping of related functionality that a Matter endpoint supports.

ClusterType describes the functionality of a specific type of cluster.

## Extends

- [`Identity`](../namespaces/ClusterType/interfaces/Identity.md).[`Features`](../namespaces/ClusterType/interfaces/Features.md)\<[`BitSchema`](../../schema/README.md#bitschema)\>.[`Elements`](../namespaces/ClusterType/interfaces/Elements.md)

## Constructors

## Properties

### attributes

> `readonly` **attributes**: [`ElementSet`](../namespaces/ClusterType/README.md#elementsett)\<[`Attribute`](../namespaces/ClusterType/README.md#attribute)\>

Attributes supported by the cluster.

#### Inherited from

[`Elements`](../namespaces/ClusterType/interfaces/Elements.md).[`attributes`](../namespaces/ClusterType/interfaces/Elements.md#attributes)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:81

***

### base?

> `optional` `readonly` **base**: [`ClusterType`](ClusterType.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Inherited from

[`Features`](../namespaces/ClusterType/interfaces/Features.md).[`base`](../namespaces/ClusterType/interfaces/Features.md#base)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:110

***

### commands

> `readonly` **commands**: [`ElementSet`](../namespaces/ClusterType/README.md#elementsett)\<[`Command`](../namespaces/ClusterType/README.md#command)\>

Commands supported by the cluster.

#### Inherited from

[`Elements`](../namespaces/ClusterType/interfaces/Elements.md).[`commands`](../namespaces/ClusterType/interfaces/Elements.md#commands)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:85

***

### events

> `readonly` **events**: [`ElementSet`](../namespaces/ClusterType/README.md#elementsett)\<[`Event`](../namespaces/ClusterType/README.md#event)\>

Events supported by the cluster.

#### Inherited from

[`Elements`](../namespaces/ClusterType/interfaces/Elements.md).[`events`](../namespaces/ClusterType/interfaces/Elements.md#events)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:89

***

### extensions?

> `optional` `readonly` **extensions**: readonly [`Extension`](../namespaces/ClusterType/interfaces/Extension.md)\<[`BitSchema`](../../schema/README.md#bitschema)\>[]

Metadata controlling how enabled features affect cluster structure.

#### Inherited from

[`Features`](../namespaces/ClusterType/interfaces/Features.md).[`extensions`](../namespaces/ClusterType/interfaces/Features.md#extensions)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:106

***

### features

> `readonly` **features**: [`BitSchema`](../../schema/README.md#bitschema)

Features the cluster may support.

#### Inherited from

[`Features`](../namespaces/ClusterType/interfaces/Features.md).[`features`](../namespaces/ClusterType/interfaces/Features.md#features)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:98

***

### id

> `readonly` **id**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Inherited from

[`Identity`](../namespaces/ClusterType/interfaces/Identity.md).[`id`](../namespaces/ClusterType/interfaces/Identity.md#id)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:66

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`Identity`](../namespaces/ClusterType/interfaces/Identity.md).[`name`](../namespaces/ClusterType/interfaces/Identity.md#name)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:67

***

### revision

> `readonly` **revision**: `number`

#### Inherited from

[`Identity`](../namespaces/ClusterType/interfaces/Identity.md).[`revision`](../namespaces/ClusterType/interfaces/Identity.md#revision)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:68

***

### supportedFeatures

> `readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<[`BitSchema`](../../schema/README.md#bitschema)\>

Features the cluster does support.

#### Inherited from

[`Features`](../namespaces/ClusterType/interfaces/Features.md).[`supportedFeatures`](../namespaces/ClusterType/interfaces/Features.md#supportedfeatures)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:102

***

### unknown

> `readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Inherited from

[`Features`](../namespaces/ClusterType/interfaces/Features.md).[`unknown`](../namespaces/ClusterType/interfaces/Features.md#unknown)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:118
