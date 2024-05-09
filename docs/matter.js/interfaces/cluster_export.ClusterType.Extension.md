[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ClusterType](../modules/cluster_export.ClusterType.md) / Extension

# Interface: Extension\<F\>

[cluster/export](../modules/cluster_export.md).[ClusterType](../modules/cluster_export.ClusterType.md).Extension

Matter clusters support named "features" that enable sets of optional functionality.

There is not a 1:1 mapping between features and cluster elements.  Some elements are enabled only when specific
features are enabled or disabled in combination.

Further, some features are mutually exclusive and thus do not generate a valid cluster when used in combination.

This type describes a feature combination and how it alters a cluster. ClusterComposer uses this metadata to
generate clusters based on selected features.

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) = {} |

## Table of contents

### Properties

- [component](cluster_export.ClusterType.Extension.md#component)
- [flags](cluster_export.ClusterType.Extension.md#flags)

## Properties

### component

• **component**: ``false`` \| `Partial`\<[`Elements`](cluster_export.ClusterType.Elements.md)\>

The elements to inject if the flags match active features.  If the component is "false" the cluster cannot be
instantiated with the feature combination.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:287](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L287)

___

### flags

• **flags**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\>

Flags indicating the features for which this extension applies.

For each feature the flag is a tri-state component:

  - true = feature is required to enable extension

  - false = extension cannot be enabled if feature is enabled

  - undefined = feature is not irrelevant for the extension

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L281)
