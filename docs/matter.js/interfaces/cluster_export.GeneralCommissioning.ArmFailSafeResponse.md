[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / ArmFailSafeResponse

# Interface: ArmFailSafeResponse

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).ArmFailSafeResponse

**`See`**

MatterSpecification.v11.Core § 11.9.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvArmFailSafeResponse`](../modules/cluster_export.GeneralCommissioning.md#tlvarmfailsaferesponse)\>

  ↳ **`ArmFailSafeResponse`**

## Table of contents

### Properties

- [debugText](cluster_export.GeneralCommissioning.ArmFailSafeResponse.md#debugtext)
- [errorCode](cluster_export.GeneralCommissioning.ArmFailSafeResponse.md#errorcode)

## Properties

### debugText

• **debugText**: `string`

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.3.2

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L148)

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the ArmFailSafe command.

**`See`**

MatterSpecification.v11.Core § 11.9.6.3.1

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L141)
