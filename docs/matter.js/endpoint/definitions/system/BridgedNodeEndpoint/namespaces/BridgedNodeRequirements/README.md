[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/system/BridgedNodeEndpoint](../../README.md) / BridgedNodeRequirements

# Namespace: BridgedNodeRequirements

## Variables

### BridgedDeviceBasicInformationServer

> `const` **BridgedDeviceBasicInformationServer**: *typeof* [`BridgedDeviceBasicInformationServer`](../../../../../../behavior/definitions/bridged-device-basic-information/export/namespaces/BridgedDeviceBasicInformationServer/README.md) = `BaseBridgedDeviceBasicInformationServer`

The BridgedDeviceBasicInformation cluster is required by the Matter specification

We provide this alias to the default implementation [BridgedDeviceBasicInformationServer](README.md#bridgeddevicebasicinformationserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L39)

***

### PowerSourceConfigurationServer

> `const` **PowerSourceConfigurationServer**: *typeof* [`PowerSourceConfigurationServer`](../../../../../../behavior/definitions/power-source-configuration/export/classes/PowerSourceConfigurationServer.md) = `BasePowerSourceConfigurationServer`

The PowerSourceConfiguration cluster is optional per the Matter specification

We provide this alias to the default implementation [PowerSourceConfigurationServer](README.md#powersourceconfigurationserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L46)

***

### PowerSourceServer

> `const` **PowerSourceServer**: *typeof* [`PowerSourceServer`](../../../../../../behavior/definitions/power-source/export/classes/PowerSourceServer.md) = `BasePowerSourceServer`

The PowerSource cluster is optional per the Matter specification

We provide this alias to the default implementation [PowerSourceServer](README.md#powersourceserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L53)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.BridgedDeviceBasicInformation

> **BridgedDeviceBasicInformation**: *typeof* [`BridgedDeviceBasicInformationServer`](../../../../../../behavior/definitions/bridged-device-basic-information/export/namespaces/BridgedDeviceBasicInformationServer/README.md) = `BridgedDeviceBasicInformationServer`

##### mandatory.Index

> **Index**: *typeof* [`IndexBehavior`](../../../../../../node/export/-internal-/namespaces/IndexBehavior/README.md) = `IndexBehavior`

##### mandatory.Parts

> **Parts**: *typeof* [`PartsBehavior`](../../../../../../node/export/-internal-/classes/PartsBehavior.md) = `PartsBehavior`

##### optional

> **optional**: `object`

##### optional.PowerSource

> **PowerSource**: *typeof* [`PowerSourceServer`](../../../../../../behavior/definitions/power-source/export/classes/PowerSourceServer.md) = `PowerSourceServer`

##### optional.PowerSourceConfiguration

> **PowerSourceConfiguration**: *typeof* [`PowerSourceConfigurationServer`](../../../../../../behavior/definitions/power-source-configuration/export/classes/PowerSourceConfigurationServer.md) = `PowerSourceConfigurationServer`

#### Source

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L58)
