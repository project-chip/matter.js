[**@project-chip/matter-node-ble.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../../globals.md) / [\<internal\>](../../../README.md) / [ClusterType](../README.md) / Extension

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
| `F` *extends* [`BitSchema`](../../../README.md#bitschema) | `object` |

## Properties

### component

> **component**: `false` \| `Partial`\<[`Elements`](Elements.md)\>

The elements to inject if the flags match active features.  If the component is "false" the cluster cannot be
instantiated with the feature combination.

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:212

***

### flags

> **flags**: [`TypeFromPartialBitSchema`](../../../README.md#typefrompartialbitschemat)\<`F`\>

Flags indicating the features for which this extension applies.

For each feature the flag is a tri-state component:

  - true = feature is required to enable extension

  - false = extension cannot be enabled if feature is enabled

  - undefined = feature is not irrelevant for the extension

#### Source

matter.js/dist/esm/cluster/ClusterType.d.ts:207
