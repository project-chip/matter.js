[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ClusterType](../README.md) / Extension

# Interface: Extension\<F\>

Matter clusters support named "features" that enable sets of optional functionality.

There is not a 1:1 mapping between features and cluster elements.  Some elements are enabled only when specific
features are enabled or disabled in combination.

Further, some features are mutually exclusive and thus do not generate a valid cluster when used in combination.

This type describes a feature combination and how it alters a cluster. ClusterComposer uses this metadata to
generate clusters based on selected features.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../../../../schema/export/README.md#bitschema) | `object` |

## Properties

### component

> **component**: `false` \| `Partial`\<[`Elements`](Elements.md)\>

The elements to inject if the flags match active features.  If the component is "false" the cluster cannot be
instantiated with the feature combination.

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:291](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L291)

***

### flags

> **flags**: [`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\>

Flags indicating the features for which this extension applies.

For each feature the flag is a tri-state component:

  - true = feature is required to enable extension

  - false = extension cannot be enabled if feature is enabled

  - undefined = feature is not irrelevant for the extension

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:285](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L285)
