[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / CommissioningCompleteResponse

# Interface: CommissioningCompleteResponse

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).CommissioningCompleteResponse

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCommissioningCompleteResponse`](../modules/cluster_export.GeneralCommissioning.md#tlvcommissioningcompleteresponse)\>

  ↳ **`CommissioningCompleteResponse`**

## Table of contents

### Properties

- [debugText](cluster_export.GeneralCommissioning.CommissioningCompleteResponse.md#debugtext)
- [errorCode](cluster_export.GeneralCommissioning.CommissioningCompleteResponse.md#errorcode)

## Properties

### debugText

• **debugText**: `string`

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L207)

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L206)
