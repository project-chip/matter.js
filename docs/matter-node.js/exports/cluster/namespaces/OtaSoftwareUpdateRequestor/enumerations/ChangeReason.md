[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / ChangeReason

# Enumeration: ChangeReason

## See

MatterSpecification.v11.Core § 11.19.7.4.15

## Enumeration Members

### DelayByProvider

> **DelayByProvider**: `4`

The reason for a state change is a request by the OTA Provider to wait.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:132

***

### Failure

> **Failure**: `2`

The reason for a state change is the failure of a prior operation.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:124

***

### Success

> **Success**: `1`

The reason for a state change is the success of a prior operation.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:120

***

### TimeOut

> **TimeOut**: `3`

The reason for a state change is a time-out.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:128

***

### Unknown

> **Unknown**: `0`

The reason for a state change is unknown.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:116
