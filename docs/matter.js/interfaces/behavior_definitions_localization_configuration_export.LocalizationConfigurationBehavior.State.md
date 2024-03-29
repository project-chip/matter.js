[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/localization-configuration/export](../modules/behavior_definitions_localization_configuration_export.md) / [LocalizationConfigurationBehavior](../modules/behavior_definitions_localization_configuration_export.LocalizationConfigurationBehavior.md) / State

# Interface: State

[behavior/definitions/localization-configuration/export](../modules/behavior_definitions_localization_configuration_export.md).[LocalizationConfigurationBehavior](../modules/behavior_definitions_localization_configuration_export.LocalizationConfigurationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_localization_configuration_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [activeLocale](behavior_definitions_localization_configuration_export.LocalizationConfigurationBehavior.State.md#activelocale)
- [supportedLocales](behavior_definitions_localization_configuration_export.LocalizationConfigurationBehavior.State.md#supportedlocales)

## Properties

### activeLocale

• **activeLocale**: `string`

The ActiveLocale attribute shall represent the locale that the Node is currently configured to use when
conveying information. The ActiveLocale attribute shall be a Language Tag as defined by BCP47
[https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute shall have a default value
assigned by the Vendor and shall be a value contained within the SupportedLocales attribute list.

An attempt to write a value to ActiveLocale that is not present in SupportedLocales shall result in a
CONSTRAINT_ERROR error.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.3.4.1

#### Inherited from

StateType.activeLocale

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:38](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L38)

___

### supportedLocales

• **supportedLocales**: `string`[]

The SupportedLocales attribute shall represent a list of locale strings that are valid values for the
ActiveLocale attribute. The list shall NOT contain any duplicate entries. The ordering of items within
the list SHOULD NOT express any meaning.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.3.4.2

#### Inherited from

StateType.supportedLocales

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L51)
