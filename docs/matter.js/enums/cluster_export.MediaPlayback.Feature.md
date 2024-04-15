[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [MediaPlayback](../modules/cluster_export.MediaPlayback.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[MediaPlayback](../modules/cluster_export.MediaPlayback.md).Feature

These are optional features supported by MediaPlaybackCluster.

**`See`**

MatterSpecification.v11.Cluster § 6.10.2

## Table of contents

### Enumeration Members

- [AdvancedSeek](cluster_export.MediaPlayback.Feature.md#advancedseek)
- [VariableSpeed](cluster_export.MediaPlayback.Feature.md#variablespeed)

## Enumeration Members

### AdvancedSeek

• **AdvancedSeek** = ``"AdvancedSeek"``

AdvancedSeek

Enables clients to implement more advanced media seeking behavior in their user interface, such as for
example a "seek bar". Adds support for Attributes and Commands related to advanced seek support

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L395)

___

### VariableSpeed

• **VariableSpeed** = ``"VariableSpeed"``

VariableSpeed

Support for commands to support variable speed playback on media that supports it.

#### Defined in

[packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts:402](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/MediaPlaybackCluster.ts#L402)
