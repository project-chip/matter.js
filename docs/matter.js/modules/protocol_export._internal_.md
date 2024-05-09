[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](protocol_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [CommissioningStepResultCode](../enums/protocol_export._internal_.CommissioningStepResultCode.md)

### Type Aliases

- [CollectedCommissioningData](protocol_export._internal_.md#collectedcommissioningdata)
- [CommissioningStep](protocol_export._internal_.md#commissioningstep)
- [CommissioningStepResult](protocol_export._internal_.md#commissioningstepresult)
- [CommissioningSuccessFailureResponse](protocol_export._internal_.md#commissioningsuccessfailureresponse)

## Type Aliases

### CollectedCommissioningData

Ƭ **CollectedCommissioningData**: `Object`

Data that are collected initially or through the commissioning process and can be used also by other steps.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basicCommissioningInfo?` | [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvBasicCommissioningInfo`](cluster_export.GeneralCommissioning.md#tlvbasiccommissioninginfo)\> |
| `networkFeatures?` | \{ `endpointId`: `number` ; `value`: [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof [`features`](../interfaces/cluster_export.NetworkCommissioning.Complete.md#features)\>  }[] |
| `networkStatus?` | \{ `endpointId`: `number` ; `value`: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvNetworkInfoStruct`](cluster_export.NetworkCommissioning.md#tlvnetworkinfostruct)\>[]  }[] |
| `productId?` | `number` |
| `productName?` | `string` |
| `rootPartsList?` | [`EndpointNumber`](datatype_export.md#endpointnumber)[] |
| `rootServerList?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| `successfullyConnectedToNetwork?` | `boolean` |
| `supportsConcurrentConnection?` | `boolean` |
| `vendorId?` | [`VendorId`](datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L101)

___

### CommissioningStep

Ƭ **CommissioningStep**: `Object`

Definition of one commissioning step
All steps are for execution sorted by stepNumber and subStepNumber

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the action or step |
| `stepLogic` | () => `Promise`\<[`CommissioningStepResult`](protocol_export._internal_.md#commissioningstepresult)\> | - |
| `stepNumber` | `number` | Step Number according to the specs |
| `subStepNumber` | `number` | Order of actions within a step |

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L86)

___

### CommissioningStepResult

Ƭ **CommissioningStepResult**: `Object`

Result of a single commissioning step
Breadcrump value is stored for each step for transparency

#### Type declaration

| Name | Type |
| :------ | :------ |
| `breadcrumb` | `number` |
| `code` | [`CommissioningStepResultCode`](../enums/protocol_export._internal_.CommissioningStepResultCode.md) |

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L77)

___

### CommissioningSuccessFailureResponse

Ƭ **CommissioningSuccessFailureResponse**: `Object`

Types representation of a general commissioning response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debugText?` | `string` |
| `errorCode` | `number` |

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L61)
