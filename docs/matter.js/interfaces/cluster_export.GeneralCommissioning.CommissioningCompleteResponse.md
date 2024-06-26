[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / CommissioningCompleteResponse

# Interface: CommissioningCompleteResponse

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).CommissioningCompleteResponse

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

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7.2

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:216](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L216)

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7.1

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:209](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L209)
