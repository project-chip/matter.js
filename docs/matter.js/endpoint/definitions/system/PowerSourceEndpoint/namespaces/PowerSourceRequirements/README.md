[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/system/PowerSourceEndpoint](../../README.md) / PowerSourceRequirements

# Namespace: PowerSourceRequirements

## Variables

### PowerSourceServer

> `const` **PowerSourceServer**: *typeof* [`PowerSourceServer`](../../../../../../behavior/definitions/power-source/export/classes/PowerSourceServer.md) = `BasePowerSourceServer`

The PowerSource cluster is required by the Matter specification

We provide this alias to the default implementation [PowerSourceServer](README.md#powersourceserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts#L28)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object`

##### mandatory.PowerSource

> **PowerSource**: *typeof* [`PowerSourceServer`](../../../../../../behavior/definitions/power-source/export/classes/PowerSourceServer.md) = `PowerSourceServer`

#### Source

[packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts#L33)
