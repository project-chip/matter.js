[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Enumerations

- [CommissioningStepResultCode](enumerations/CommissioningStepResultCode.md)

## Type Aliases

### CollectedCommissioningData

> **CollectedCommissioningData**: `object`

Data that are collected initially or through the commissioning process and can be used also by other steps.

#### Type declaration

##### basicCommissioningInfo?

> `optional` **basicCommissioningInfo**: [`TypeFromSchema`](../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvBasicCommissioningInfo`](../../../cluster/export/namespaces/GeneralCommissioning/README.md#tlvbasiccommissioninginfo)\>

##### networkFeatures?

> `optional` **networkFeatures**: `object`[]

##### networkStatus?

> `optional` **networkStatus**: `object`[]

##### productId?

> `optional` **productId**: `number`

##### productName?

> `optional` **productName**: `string`

##### rootPartsList?

> `optional` **rootPartsList**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

##### rootServerList?

> `optional` **rootServerList**: [`ClusterId`](../../../datatype/export/README.md#clusterid)[]

##### successfullyConnectedToNetwork?

> `optional` **successfullyConnectedToNetwork**: `boolean`

##### supportsConcurrentConnection?

> `optional` **supportsConcurrentConnection**: `boolean`

##### vendorId?

> `optional` **vendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L101)

***

### CommissioningStep

> **CommissioningStep**: `object`

Definition of one commissioning step
All steps are for execution sorted by stepNumber and subStepNumber

#### Type declaration

##### name

> **name**: `string`

Name of the action or step

##### stepLogic()

> **stepLogic**: () => `Promise`\<[`CommissioningStepResult`](README.md#commissioningstepresult)\>

Logic function to execute

###### Returns

`Promise`\<[`CommissioningStepResult`](README.md#commissioningstepresult)\>

##### stepNumber

> **stepNumber**: `number`

Step Number according to the specs

##### subStepNumber

> **subStepNumber**: `number`

Order of actions within a step

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L86)

***

### CommissioningStepResult

> **CommissioningStepResult**: `object`

Result of a single commissioning step
Breadcrump value is stored for each step for transparency

#### Type declaration

##### breadcrumb

> **breadcrumb**: `number`

##### code

> **code**: [`CommissioningStepResultCode`](enumerations/CommissioningStepResultCode.md)

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L77)

***

### CommissioningSuccessFailureResponse

> **CommissioningSuccessFailureResponse**: `object`

Types representation of a general commissioning response.

#### Type declaration

##### debugText?

> `optional` **debugText**: `string`

##### errorCode

> **errorCode**: `number`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L61)
