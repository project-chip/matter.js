[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](exports_protocol.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [CommissioningStepResultCode](../enums/exports_protocol._internal_.CommissioningStepResultCode.md)

### Type Aliases

- [CommissioningStepResult](exports_protocol._internal_.md#commissioningstepresult)

## Type Aliases

### CommissioningStepResult

Ƭ **CommissioningStepResult**: `Object`

Result of a single commissioning step
Breadcrump value is stored for each step for transparency

#### Type declaration

| Name | Type |
| :------ | :------ |
| `breadcrumb` | `number` |
| `code` | [`CommissioningStepResultCode`](../enums/exports_protocol._internal_.CommissioningStepResultCode.md) |

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:43
