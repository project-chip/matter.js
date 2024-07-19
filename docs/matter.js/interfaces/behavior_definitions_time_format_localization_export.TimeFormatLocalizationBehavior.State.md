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

MatterSpecification.v11.Core § 11.4.6.1

#### Inherited from

StateType.hourFormat

#### Defined in

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:169](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L169)
