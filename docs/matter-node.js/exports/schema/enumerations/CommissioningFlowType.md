[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/schema](../README.md) / CommissioningFlowType

# Enumeration: CommissioningFlowType

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

## Enumeration Members

### Custom

> **Custom**: `2`

Interaction with a vendor-specified means is needed before commissioning.

#### Source

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:16

***

### Standard

> **Standard**: `0`

When not commissioned, the device always enters commissioning mode upon power-up.

#### Source

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:12

***

### UserIntent

> **UserIntent**: `1`

User action required to enter commissioning mode.

#### Source

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:14
