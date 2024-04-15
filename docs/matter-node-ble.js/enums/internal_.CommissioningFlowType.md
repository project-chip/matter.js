[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / CommissioningFlowType

# Enumeration: CommissioningFlowType

[\<internal\>](../modules/internal_.md).CommissioningFlowType

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

## Table of contents

### Enumeration Members

- [Custom](internal_.CommissioningFlowType.md#custom)
- [Standard](internal_.CommissioningFlowType.md#standard)
- [UserIntent](internal_.CommissioningFlowType.md#userintent)

## Enumeration Members

### Custom

• **Custom** = ``2``

Interaction with a vendor-specified means is needed before commissioning.

#### Defined in

matter.js/dist/esm/schema/PairingCodeSchema.d.ts:16

___

### Standard

• **Standard** = ``0``

When not commissioned, the device always enters commissioning mode upon power-up.

#### Defined in

matter.js/dist/esm/schema/PairingCodeSchema.d.ts:12

___

### UserIntent

• **UserIntent** = ``1``

User action required to enter commissioning mode.

#### Defined in

matter.js/dist/esm/schema/PairingCodeSchema.d.ts:14
