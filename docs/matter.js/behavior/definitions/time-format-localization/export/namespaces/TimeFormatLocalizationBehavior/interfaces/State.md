[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/time-format-localization/export](../../../README.md) / [TimeFormatLocalizationBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### hourFormat

> **hourFormat**: `null` \| [`HourFormat`](../../../../../../../cluster/export/namespaces/TimeFormatLocalization/enumerations/HourFormat.md)

The HourFormat attribute shall represent the format that the Node is currently configured to use when
conveying the hour unit of time. If provided, this value shall take priority over any unit

implied through the ActiveLocale Attribute.

#### See

MatterSpecification.v11.Core § 11.4.6.1

#### Inherited from

`StateType.hourFormat`

#### Source

[packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/TimeFormatLocalizationCluster.ts#L169)
