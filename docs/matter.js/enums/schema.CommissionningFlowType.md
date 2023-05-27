[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema](../modules/schema.md) / CommissionningFlowType

# Enumeration: CommissionningFlowType

[schema](../modules/schema.md).CommissionningFlowType

See [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 5.1.3.1 Table 35

## Table of contents

### Enumeration Members

- [Custom](schema.CommissionningFlowType.md#custom)
- [Standard](schema.CommissionningFlowType.md#standard)
- [UserIntent](schema.CommissionningFlowType.md#userintent)

## Enumeration Members

### Custom

• **Custom** = ``2``

Interaction with a vendor-specified means is needed before commissioning.

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L24)

___

### Standard

• **Standard** = ``0``

When uncommissioned, the device always enters commissioning mode upon power-up.

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L18)

___

### UserIntent

• **UserIntent** = ``1``

User action required to enter commissioning mode.

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L21)
