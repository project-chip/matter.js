[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / SetRegulatoryConfigResponse

# Interface: SetRegulatoryConfigResponse

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).SetRegulatoryConfigResponse

**`See`**

MatterSpecification.v11.Core § 11.9.6.5

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetRegulatoryConfigResponse`](../modules/cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)\>

  ↳ **`SetRegulatoryConfigResponse`**

## Table of contents

### Properties

- [debugText](cluster_export.GeneralCommissioning.SetRegulatoryConfigResponse.md#debugtext)
- [errorCode](cluster_export.GeneralCommissioning.SetRegulatoryConfigResponse.md#errorcode)

## Properties

### debugText

• **debugText**: `string`

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.5.2

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:191](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L191)

___

### errorCode

• **errorCode**: [`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

**`See`**

MatterSpecification.v11.Core § 11.9.6.5.1

#### Inherited from

TypeFromSchema.errorCode

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:184](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L184)
