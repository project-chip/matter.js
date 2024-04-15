[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md) / ArmFailSafeResponse

# Interface: ArmFailSafeResponse

[exports/cluster](../modules/exports_cluster.md).[GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md).ArmFailSafeResponse

**`See`**

MatterSpecification.v11.Core § 11.9.6.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvArmFailSafeResponse`](../modules/exports_cluster.GeneralCommissioning.md#tlvarmfailsaferesponse)\>

  ↳ **`ArmFailSafeResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.GeneralCommissioning.ArmFailSafeResponse.md#debugtext)
- [errorCode](exports_cluster.GeneralCommissioning.ArmFailSafeResponse.md#errorcode)

## Properties

### debugText

• **debugText**: `string`

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.3.2

#### Inherited from

TypeFromSchema.debugText

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:127

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/exports_cluster.GeneralCommissioning.CommissioningError.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the ArmFailSafe command.

**`See`**

MatterSpecification.v11.Core § 11.9.6.3.1

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:121
