[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema/export](../modules/schema_export.md) / CommissioningFlowType

# Enumeration: CommissioningFlowType

[schema/export](../modules/schema_export.md).CommissioningFlowType

See MatterSpecification.v10.Core § 5.1.3.1 Table 35

## Table of contents

### Enumeration Members

- [Custom](schema_export.CommissioningFlowType.md#custom)
- [Standard](schema_export.CommissioningFlowType.md#standard)
- [UserIntent](schema_export.CommissioningFlowType.md#userintent)

## Enumeration Members

### Custom

• **Custom** = ``2``

Interaction with a vendor-specified means is needed before commissioning.

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L30)

___

### Standard

• **Standard** = ``0``

When not commissioned, the device always enters commissioning mode upon power-up.

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L24)

___

### UserIntent

• **UserIntent** = ``1``

User action required to enter commissioning mode.

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L27)
