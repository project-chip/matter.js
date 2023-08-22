[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / CommissionningFlowType

# Enumeration: CommissionningFlowType

[exports/schema](../modules/exports_schema.md).CommissionningFlowType

See MatterCoreSpecificationV1_0 § 5.1.3.1 Table 35

## Table of contents

### Enumeration Members

- [Custom](exports_schema.CommissionningFlowType.md#custom)
- [Standard](exports_schema.CommissionningFlowType.md#standard)
- [UserIntent](exports_schema.CommissionningFlowType.md#userintent)

## Enumeration Members

### Custom

• **Custom** = ``2``

Interaction with a vendor-specified means is needed before commissioning.

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:15

___

### Standard

• **Standard** = ``0``

When not commissioned, the device always enters commissioning mode upon power-up.

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:11

___

### UserIntent

• **UserIntent** = ``1``

User action required to enter commissioning mode.

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:13
