[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaPlayback](../modules/exports_cluster.MediaPlayback.md) / Feature

# Enumeration: Feature

[exports/cluster](../modules/exports_cluster.md).[MediaPlayback](../modules/exports_cluster.MediaPlayback.md).Feature

These are optional features supported by MediaPlaybackCluster.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.10.2

## Table of contents

### Enumeration Members

- [AdvancedSeek](exports_cluster.MediaPlayback.Feature.md#advancedseek)
- [VariableSpeed](exports_cluster.MediaPlayback.Feature.md#variablespeed)

## Enumeration Members

### AdvancedSeek

• **AdvancedSeek** = ``"AdvancedSeek"``

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:173

___

### VariableSpeed

• **VariableSpeed** = ``"VariableSpeed"``

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/MediaPlaybackCluster.d.ts:179
