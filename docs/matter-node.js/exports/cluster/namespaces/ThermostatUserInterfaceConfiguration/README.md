[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ThermostatUserInterfaceConfiguration

# Namespace: ThermostatUserInterfaceConfiguration

## Index

### Enumerations

- [KeypadLockout](enumerations/KeypadLockout.md)
- [ScheduleProgrammingVisibility](enumerations/ScheduleProgrammingVisibility.md)
- [TemperatureDisplayMode](enumerations/TemperatureDisplayMode.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.d.ts:125

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.keypadLockout

> `readonly` **keypadLockout**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`KeypadLockout`](enumerations/KeypadLockout.md), `any`\>

The KeypadLockout attribute specifies the level of functionality that is available to the user via the
keypad.

Table 93. KeypadLockout Attribute Values

The interpretation of the various levels is device-dependent.

###### See

MatterSpecification.v11.Cluster § 4.5.5.2

##### attributes.scheduleProgrammingVisibility

> `readonly` **scheduleProgrammingVisibility**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](enumerations/ScheduleProgrammingVisibility.md), `any`\>

The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming
functionality or menu on a thermostat from a user to prevent local user programming of the weekly
schedule. The schedule programming may still be performed via a remote interface, and the thermostat may
operate in schedule programming mode.

This attribute is designed to prevent local tampering with or disabling of schedules that may have been
programmed by users or service providers via a more capable remote interface. The programming schedule
shall continue to run even though it is not visible to the user locally at the thermostat.

Table 94. ScheduleProgrammingVisibility Attribute Values

###### See

MatterSpecification.v11.Cluster § 4.5.5.3

##### attributes.temperatureDisplayMode

> `readonly` **temperatureDisplayMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TemperatureDisplayMode`](enumerations/TemperatureDisplayMode.md), `any`\>

The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat
screen.

Table 92. DisplayMode Attribute Values

###### See

MatterSpecification.v11.Cluster § 4.5.5.1

##### id

> `readonly` **id**: `516`

##### name

> `readonly` **name**: `"ThermostatUserInterfaceConfiguration"`

##### revision

> `readonly` **revision**: `2`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.d.ts:75

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.d.ts:128
