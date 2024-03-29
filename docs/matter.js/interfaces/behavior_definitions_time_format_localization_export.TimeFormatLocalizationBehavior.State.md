[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/time-format-localization/export](../modules/behavior_definitions_time_format_localization_export.md) / [TimeFormatLocalizationBehavior](../modules/behavior_definitions_time_format_localization_export.TimeFormatLocalizationBehavior.md) / State

# Interface: State

[behavior/definitions/time-format-localization/export](../modules/behavior_definitions_time_format_localization_export.md).[TimeFormatLocalizationBehavior](../modules/behavior_definitions_time_format_localization_export.TimeFormatLocalizationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_time_format_localization_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [hourFormat](behavior_definitions_time_format_localization_export.TimeFormatLocalizationBehavior.State.md#hourformat)

## Properties

### hourFormat

• **hourFormat**: ``null`` \| [`HourFormat`](../enums/cluster_export.TimeFormatLocalization.HourFormat.md)

The HourFormat attribute shall represent the format that the Node is currently configured to use when
conveying the hour unit of time. If provided, this value shall take priority over any unit

implied through the ActiveLocale Attribute.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.4.6.1

#### Inherited from

StateType.hourFormat

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:170](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L170)
