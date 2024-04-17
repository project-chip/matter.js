[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md) / CommissioningCompleteResponse

# Interface: CommissioningCompleteResponse

[exports/cluster](../modules/exports_cluster.md).[GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md).CommissioningCompleteResponse

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCommissioningCompleteResponse`](../modules/exports_cluster.GeneralCommissioning.md#tlvcommissioningcompleteresponse)\>

  ↳ **`CommissioningCompleteResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.GeneralCommissioning.CommissioningCompleteResponse.md#debugtext)
- [errorCode](exports_cluster.GeneralCommissioning.CommissioningCompleteResponse.md#errorcode)

## Properties

### debugText

• **debugText**: `string`

#### Inherited from

TypeFromSchema.debugText

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:183

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/exports_cluster.GeneralCommissioning.CommissioningError.md)

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:182
