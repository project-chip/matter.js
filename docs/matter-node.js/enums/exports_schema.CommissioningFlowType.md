[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / CommissioningFlowType

# Enumeration: CommissioningFlowType

[exports/schema](../modules/exports_schema.md).CommissioningFlowType

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

## Table of contents

### Enumeration Members

- [Custom](exports_schema.CommissioningFlowType.md#custom)
- [Standard](exports_schema.CommissioningFlowType.md#standard)
- [UserIntent](exports_schema.CommissioningFlowType.md#userintent)

## Enumeration Members

### Custom

• **Custom** = ``2``

Interaction with a vendor-specified means is needed before commissioning.

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:16

___

### Standard

• **Standard** = ``0``

When not commissioned, the device always enters commissioning mode upon power-up.

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:12

___

### UserIntent

• **UserIntent** = ``1``

User action required to enter commissioning mode.

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:14
