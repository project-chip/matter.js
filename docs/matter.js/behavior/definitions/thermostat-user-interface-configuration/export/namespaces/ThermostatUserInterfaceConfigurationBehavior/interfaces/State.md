[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/thermostat-user-interface-configuration/export](../../../README.md) / [ThermostatUserInterfaceConfigurationBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### keypadLockout

> **keypadLockout**: [`KeypadLockout`](../../../../../../../cluster/export/namespaces/ThermostatUserInterfaceConfiguration/enumerations/KeypadLockout.md)

The KeypadLockout attribute specifies the level of functionality that is available to the user via the
keypad.

Table 93. KeypadLockout Attribute Values

The interpretation of the various levels is device-dependent.

#### See

MatterSpecification.v11.Cluster § 4.5.5.2

#### Inherited from

`StateType.keypadLockout`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L120)

***

### scheduleProgrammingVisibility?

> `optional` **scheduleProgrammingVisibility**: [`ScheduleProgrammingVisibility`](../../../../../../../cluster/export/namespaces/ThermostatUserInterfaceConfiguration/enumerations/ScheduleProgrammingVisibility.md)

The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming
functionality or menu on a thermostat from a user to prevent local user programming of the weekly
schedule. The schedule programming may still be performed via a remote interface, and the thermostat may
operate in schedule programming mode.

This attribute is designed to prevent local tampering with or disabling of schedules that may have been
programmed by users or service providers via a more capable remote interface. The programming schedule
shall continue to run even though it is not visible to the user locally at the thermostat.

Table 94. ScheduleProgrammingVisibility Attribute Values

#### See

MatterSpecification.v11.Cluster § 4.5.5.3

#### Inherited from

`StateType.scheduleProgrammingVisibility`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L140)

***

### temperatureDisplayMode

> **temperatureDisplayMode**: [`TemperatureDisplayMode`](../../../../../../../cluster/export/namespaces/ThermostatUserInterfaceConfiguration/enumerations/TemperatureDisplayMode.md)

The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat
screen.

Table 92. DisplayMode Attribute Values

#### See

MatterSpecification.v11.Cluster § 4.5.5.1

#### Inherited from

`StateType.temperatureDisplayMode`

#### Source

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L104)
