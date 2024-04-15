[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md) / SetRegulatoryConfigResponse

# Interface: SetRegulatoryConfigResponse

[exports/cluster](../modules/exports_cluster.md).[GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md).SetRegulatoryConfigResponse

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.5

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetRegulatoryConfigResponse`](../modules/exports_cluster.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)\>

  ↳ **`SetRegulatoryConfigResponse`**

## Table of contents

### Properties

- [debugText](exports_cluster.GeneralCommissioning.SetRegulatoryConfigResponse.md#debugtext)
- [errorCode](exports_cluster.GeneralCommissioning.SetRegulatoryConfigResponse.md#errorcode)

## Properties

### debugText

• **debugText**: `string`

#### Inherited from

TypeFromSchema.debugText

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:161

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/exports_cluster.GeneralCommissioning.CommissioningError.md)

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:160
