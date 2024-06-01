[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [schema/export](../README.md) / CommissioningFlowType

# Enumeration: CommissioningFlowType

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

## Enumeration Members

### Custom

> **Custom**: `2`

Interaction with a vendor-specified means is needed before commissioning.

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L30)

***

### Standard

> **Standard**: `0`

When not commissioned, the device always enters commissioning mode upon power-up.

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L24)

***

### UserIntent

> **UserIntent**: `1`

User action required to enter commissioning mode.

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L27)
