[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ProxyDiscovery](../modules/exports_cluster.ProxyDiscovery.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ProxyDiscovery](../modules/exports_cluster.ProxyDiscovery.md).Cluster

Proxy Discovery

This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery
& Assignment Flow”.

**`See`**

MatterSpecification.v11.Core § 9.15.13

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.ProxyDiscovery.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.ProxyDiscovery.Cluster.md#attributes)
- [base](exports_cluster.ProxyDiscovery.Cluster.md#base)
- [commands](exports_cluster.ProxyDiscovery.Cluster.md#commands)
- [events](exports_cluster.ProxyDiscovery.Cluster.md#events)
- [extensions](exports_cluster.ProxyDiscovery.Cluster.md#extensions)
- [features](exports_cluster.ProxyDiscovery.Cluster.md#features)
- [id](exports_cluster.ProxyDiscovery.Cluster.md#id)
- [name](exports_cluster.ProxyDiscovery.Cluster.md#name)
- [revision](exports_cluster.ProxyDiscovery.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ProxyDiscovery.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ProxyDiscovery.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.ProxyDiscovery.Cluster.md#alter)
- [enable](exports_cluster.ProxyDiscovery.Cluster.md#enable)
- [set](exports_cluster.ProxyDiscovery.Cluster.md#set)
- [with](exports_cluster.ProxyDiscovery.Cluster.md#with)

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
| `proxyDiscoverRequest` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | **`See`** MatterSpecification.v11.Core § 9.15.13.5 |

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

• **id**: [`Branded`](../modules/util_export.md#branded)\<``67``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"ProxyDiscovery"``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `proxyDiscoverRequest`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``67`` ; `name`: ``"ProxyDiscovery"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
