[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/session

# Module: exports/session

## Table of contents

### Modules

- [\<internal\>](exports_session._internal_.md)

### Classes

- [CaseClient](../classes/exports_session.CaseClient.md)
- [CaseClientMessenger](../classes/exports_session.CaseClientMessenger.md)
- [CaseServer](../classes/exports_session.CaseServer.md)
- [CaseServerMessenger](../classes/exports_session.CaseServerMessenger.md)
- [InsecureSession](../classes/exports_session.InsecureSession.md)
- [MaximumPasePairingErrorsReachedError](../classes/exports_session.MaximumPasePairingErrorsReachedError.md)
- [NoAssociatedFabricError](../classes/exports_session.NoAssociatedFabricError.md)
- [PaseClient](../classes/exports_session.PaseClient.md)
- [PaseClientMessenger](../classes/exports_session.PaseClientMessenger.md)
- [PaseServer](../classes/exports_session.PaseServer.md)
- [PaseServerMessenger](../classes/exports_session.PaseServerMessenger.md)
- [SecureSession](../classes/exports_session.SecureSession.md)
- [Session](../classes/exports_session.Session.md)
- [SessionManager](../classes/exports_session.SessionManager.md)

### Interfaces

- [ResumptionRecord](../interfaces/exports_session.ResumptionRecord.md)
- [SessionParameters](../interfaces/exports_session.SessionParameters.md)

### Type Aliases

- [SessionParameterOptions](exports_session.md#sessionparameteroptions)

### Variables

- [DEFAULT\_PASSCODE\_ID](exports_session.md#default_passcode_id)
- [KDFSR1\_KEY\_INFO](exports_session.md#kdfsr1_key_info)
- [KDFSR2\_INFO](exports_session.md#kdfsr2_info)
- [KDFSR2\_KEY\_INFO](exports_session.md#kdfsr2_key_info)
- [KDFSR3\_INFO](exports_session.md#kdfsr3_info)
- [MRP\_MAX\_TRANSMISSIONS](exports_session.md#mrp_max_transmissions)
- [RESUME1\_MIC\_NONCE](exports_session.md#resume1_mic_nonce)
- [RESUME2\_MIC\_NONCE](exports_session.md#resume2_mic_nonce)
- [SESSION\_ACTIVE\_INTERVAL\_MS](exports_session.md#session_active_interval_ms)
- [SESSION\_ACTIVE\_THRESHOLD\_MS](exports_session.md#session_active_threshold_ms)
- [SESSION\_IDLE\_INTERVAL\_MS](exports_session.md#session_idle_interval_ms)
- [SPAKE\_CONTEXT](exports_session.md#spake_context)
- [TBE\_DATA2\_NONCE](exports_session.md#tbe_data2_nonce)
- [TBE\_DATA3\_NONCE](exports_session.md#tbe_data3_nonce)
- [TlvCaseSigma1](exports_session.md#tlvcasesigma1)
- [TlvCaseSigma2](exports_session.md#tlvcasesigma2)
- [TlvCaseSigma2Resume](exports_session.md#tlvcasesigma2resume)
- [TlvCaseSigma3](exports_session.md#tlvcasesigma3)
- [TlvEncryptedDataSigma2](exports_session.md#tlvencrypteddatasigma2)
- [TlvEncryptedDataSigma3](exports_session.md#tlvencrypteddatasigma3)
- [TlvPasePake1](exports_session.md#tlvpasepake1)
- [TlvPasePake2](exports_session.md#tlvpasepake2)
- [TlvPasePake3](exports_session.md#tlvpasepake3)
- [TlvPbkdfParamRequest](exports_session.md#tlvpbkdfparamrequest)
- [TlvPbkdfParamResponse](exports_session.md#tlvpbkdfparamresponse)
- [TlvSessionParameters](exports_session.md#tlvsessionparameters)
- [TlvSignedData](exports_session.md#tlvsigneddata)
- [UNICAST\_UNSECURE\_SESSION\_ID](exports_session.md#unicast_unsecure_session_id)

### Functions

- [assertSecureSession](exports_session.md#assertsecuresession)

## Type Aliases

### SessionParameterOptions

Ƭ **SessionParameterOptions**: `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\>

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:28

## Variables

### DEFAULT\_PASSCODE\_ID

• `Const` **DEFAULT\_PASSCODE\_ID**: ``0``

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:11

___

### KDFSR1\_KEY\_INFO

• `Const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:1

___

### KDFSR2\_INFO

• `Const` **KDFSR2\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:5

___

### KDFSR2\_KEY\_INFO

• `Const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:2

___

### KDFSR3\_INFO

• `Const` **KDFSR3\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:6

___

### MRP\_MAX\_TRANSMISSIONS

• `Const` **MRP\_MAX\_TRANSMISSIONS**: ``5``

The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
sees fit.

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:16

___

### RESUME1\_MIC\_NONCE

• `Const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:3

___

### RESUME2\_MIC\_NONCE

• `Const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:4

___

### SESSION\_ACTIVE\_INTERVAL\_MS

• `Const` **SESSION\_ACTIVE\_INTERVAL\_MS**: ``500``

Maximum sleep interval of node when in active mode.

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:18

___

### SESSION\_ACTIVE\_THRESHOLD\_MS

• `Const` **SESSION\_ACTIVE\_THRESHOLD\_MS**: ``4000``

Minimum amount the node SHOULD stay awake after network activity.

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:22

___

### SESSION\_IDLE\_INTERVAL\_MS

• `Const` **SESSION\_IDLE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in idle mode.

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:20

___

### SPAKE\_CONTEXT

• `Const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:12

___

### TBE\_DATA2\_NONCE

• `Const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:7

___

### TBE\_DATA3\_NONCE

• `Const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:8

___

### TlvCaseSigma1

• `Const` **TlvCaseSigma1**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:10

___

### TlvCaseSigma2

• `Const` **TlvCaseSigma2**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:24

___

### TlvCaseSigma2Resume

• `Const` **TlvCaseSigma2Resume**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:36

___

### TlvCaseSigma3

• `Const` **TlvCaseSigma3**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:42

___

### TlvEncryptedDataSigma2

• `Const` **TlvEncryptedDataSigma2**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:53

___

### TlvEncryptedDataSigma3

• `Const` **TlvEncryptedDataSigma3**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:60

___

### TlvPasePake1

• `Const` **TlvPasePake1**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.1.2

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:49

___

### TlvPasePake2

• `Const` **TlvPasePake2**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.1.2

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:53

___

### TlvPasePake3

• `Const` **TlvPasePake3**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.1.2

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:58

___

### TlvPbkdfParamRequest

• `Const` **TlvPbkdfParamRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.1.2

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:16

___

### TlvPbkdfParamResponse

• `Const` **TlvPbkdfParamResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.1.2

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:31

___

### TlvSessionParameters

• `Const` **TlvSessionParameters**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v12.Core § 4.11.8

#### Defined in

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:7

___

### TlvSignedData

• `Const` **TlvSignedData**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v10.Core § 4.13.2.3

#### Defined in

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:46

___

### UNICAST\_UNSECURE\_SESSION\_ID

• `Const` **UNICAST\_UNSECURE\_SESSION\_ID**: ``0``

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:14

## Functions

### assertSecureSession

▸ **assertSecureSession**\<`T`\>(`session`, `errorText?`): asserts session is SecureSession\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../classes/exports_session.Session.md)\<`T`\> |
| `errorText?` | `string` |

#### Returns

asserts session is SecureSession\<T\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:72
