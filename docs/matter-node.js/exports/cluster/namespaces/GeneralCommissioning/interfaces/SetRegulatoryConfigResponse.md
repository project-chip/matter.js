[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralCommissioning](../README.md) / SetRegulatoryConfigResponse

# Interface: SetRegulatoryConfigResponse

## See

MatterSpecification.v11.Core § 11.9.6.5

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSetRegulatoryConfigResponse`](../README.md#tlvsetregulatoryconfigresponse)\>

## Properties

### debugText

> **debugText**: `string`

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

#### See

MatterSpecification.v11.Core § 11.9.6.5.2

#### Inherited from

`TypeFromSchema.debugText`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:167

***

### errorCode

> **errorCode**: [`CommissioningError`](../enumerations/CommissioningError.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

#### See

MatterSpecification.v11.Core § 11.9.6.5.1

#### Inherited from

`TypeFromSchema.errorCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:161
