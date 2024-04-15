[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/thermostat-user-interface-configuration/export](../modules/behavior_definitions_thermostat_user_interface_configuration_export.md) / [ThermostatUserInterfaceConfigurationBehavior](../modules/behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationBehavior.md) / State

# Interface: State

[behavior/definitions/thermostat-user-interface-configuration/export](../modules/behavior_definitions_thermostat_user_interface_configuration_export.md).[ThermostatUserInterfaceConfigurationBehavior](../modules/behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_thermostat_user_interface_configuration_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [keypadLockout](behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationBehavior.State.md#keypadlockout)
- [scheduleProgrammingVisibility](behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationBehavior.State.md#scheduleprogrammingvisibility)
- [temperatureDisplayMode](behavior_definitions_thermostat_user_interface_configuration_export.ThermostatUserInterfaceConfigurationBehavior.State.md#temperaturedisplaymode)

## Properties

### keypadLockout

• **keypadLockout**: [`KeypadLockout`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.KeypadLockout.md)

The KeypadLockout attribute specifies the level of functionality that is available to the user via the
keypad.

Table 93. KeypadLockout Attribute Values

The interpretation of the various levels is device-dependent.

**`See`**

MatterSpecification.v11.Cluster § 4.5.5.2

#### Inherited from

StateType.keypadLockout

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L120)

___

### scheduleProgrammingVisibility

• `Optional` **scheduleProgrammingVisibility**: [`ScheduleProgrammingVisibility`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md)

The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming
functionality or menu on a thermostat from a user to prevent local user programming of the weekly
schedule. The schedule programming may still be performed via a remote interface, and the thermostat may
operate in schedule programming mode.

This attribute is designed to prevent local tampering with or disabling of schedules that may have been
programmed by users or service providers via a more capable remote interface. The programming schedule
shall continue to run even though it is not visible to the user locally at the thermostat.

Table 94. ScheduleProgrammingVisibility Attribute Values

**`See`**

MatterSpecification.v11.Cluster § 4.5.5.3

#### Inherited from

StateType.scheduleProgrammingVisibility

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L140)

___

### temperatureDisplayMode

• **temperatureDisplayMode**: [`TemperatureDisplayMode`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md)

The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat
screen.

Table 92. DisplayMode Attribute Values

**`See`**

MatterSpecification.v11.Cluster § 4.5.5.1

#### Inherited from

StateType.temperatureDisplayMode

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L104)
