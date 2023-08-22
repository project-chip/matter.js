[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/session

# Module: exports/session

## Table of contents

### Classes

- [CaseClient](../classes/exports_session.CaseClient.md)
- [CaseClientMessenger](../classes/exports_session.CaseClientMessenger.md)
- [CaseServer](../classes/exports_session.CaseServer.md)
- [CaseServerMessenger](../classes/exports_session.CaseServerMessenger.md)
- [NoAssociatedFabricError](../classes/exports_session.NoAssociatedFabricError.md)
- [PaseClient](../classes/exports_session.PaseClient.md)
- [PaseClientMessenger](../classes/exports_session.PaseClientMessenger.md)
- [PaseServer](../classes/exports_session.PaseServer.md)
- [PaseServerMessenger](../classes/exports_session.PaseServerMessenger.md)
- [SecureSession](../classes/exports_session.SecureSession.md)
- [SessionManager](../classes/exports_session.SessionManager.md)
- [UnsecureSession](../classes/exports_session.UnsecureSession.md)

### Interfaces

- [ResumptionRecord](../interfaces/exports_session.ResumptionRecord.md)
- [Session](../interfaces/exports_session.Session.md)

### Variables

- [DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS](exports_session.md#default_active_retransmission_timeout_ms)
- [DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS](exports_session.md#default_idle_retransmission_timeout_ms)
- [DEFAULT\_PASSCODE\_ID](exports_session.md#default_passcode_id)
- [DEFAULT\_RETRANSMISSION\_RETRIES](exports_session.md#default_retransmission_retries)
- [KDFSR1\_KEY\_INFO](exports_session.md#kdfsr1_key_info)
- [KDFSR2\_INFO](exports_session.md#kdfsr2_info)
- [KDFSR2\_KEY\_INFO](exports_session.md#kdfsr2_key_info)
- [KDFSR3\_INFO](exports_session.md#kdfsr3_info)
- [RESUME1\_MIC\_NONCE](exports_session.md#resume1_mic_nonce)
- [RESUME2\_MIC\_NONCE](exports_session.md#resume2_mic_nonce)
- [SLEEPY\_ACTIVE\_INTERVAL\_MS](exports_session.md#sleepy_active_interval_ms)
- [SLEEPY\_ACTIVE\_THRESHOLD\_MS](exports_session.md#sleepy_active_threshold_ms)
- [SLEEPY\_IDLE\_INTERVAL\_MS](exports_session.md#sleepy_idle_interval_ms)
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
- [TlvSignedData](exports_session.md#tlvsigneddata)
- [UNDEFINED\_NODE\_ID](exports_session.md#undefined_node_id)
- [UNICAST\_UNSECURE\_SESSION\_ID](exports_session.md#unicast_unsecure_session_id)

### Functions

- [assertSecureSession](exports_session.md#assertsecuresession)

## Variables

### DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS

• `Const` **DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS**: ``300``

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:10

___

### DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS

• `Const` **DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS**: ``5000``

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:9

___

### DEFAULT\_PASSCODE\_ID

• `Const` **DEFAULT\_PASSCODE\_ID**: ``0``

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessenger.d.ts:11

___

### DEFAULT\_RETRANSMISSION\_RETRIES

• `Const` **DEFAULT\_RETRANSMISSION\_RETRIES**: ``5``

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:11

___

### KDFSR1\_KEY\_INFO

• `Const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:1

___

### KDFSR2\_INFO

• `Const` **KDFSR2\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:5

___

### KDFSR2\_KEY\_INFO

• `Const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:2

___

### KDFSR3\_INFO

• `Const` **KDFSR3\_INFO**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:6

___

### RESUME1\_MIC\_NONCE

• `Const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:3

___

### RESUME2\_MIC\_NONCE

• `Const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:4

___

### SLEEPY\_ACTIVE\_INTERVAL\_MS

• `Const` **SLEEPY\_ACTIVE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in active mode.

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:13

___

### SLEEPY\_ACTIVE\_THRESHOLD\_MS

• `Const` **SLEEPY\_ACTIVE\_THRESHOLD\_MS**: ``4000``

Minimum amount the node SHOULD stay awake after network activity.

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:17

___

### SLEEPY\_IDLE\_INTERVAL\_MS

• `Const` **SLEEPY\_IDLE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in idle mode.

#### Defined in

packages/matter.js/dist/cjs/session/Session.d.ts:15

___

### SPAKE\_CONTEXT

• `Const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessenger.d.ts:12

___

### TBE\_DATA2\_NONCE

• `Const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:7

___

### TBE\_DATA3\_NONCE

• `Const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:8

___

### TlvCaseSigma1

• `Const` **TlvCaseSigma1**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:10

___

### TlvCaseSigma2

• `Const` **TlvCaseSigma2**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:25

___

### TlvCaseSigma2Resume

• `Const` **TlvCaseSigma2Resume**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:38

___

### TlvCaseSigma3

• `Const` **TlvCaseSigma3**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:44

___

### TlvEncryptedDataSigma2

• `Const` **TlvEncryptedDataSigma2**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:55

___

### TlvEncryptedDataSigma3

• `Const` **TlvEncryptedDataSigma3**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:62

___

### TlvPasePake1

• `Const` **TlvPasePake1**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.1.2

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessages.d.ts:36

___

### TlvPasePake2

• `Const` **TlvPasePake2**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.1.2

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessages.d.ts:40

___

### TlvPasePake3

• `Const` **TlvPasePake3**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.1.2

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessages.d.ts:45

___

### TlvPbkdfParamRequest

• `Const` **TlvPbkdfParamRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.1.2

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessages.d.ts:7

___

### TlvPbkdfParamResponse

• `Const` **TlvPbkdfParamResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.1.2

#### Defined in

packages/matter.js/dist/cjs/session/pase/PaseMessages.d.ts:20

___

### TlvSignedData

• `Const` **TlvSignedData**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_0 § 4.13.2.3

#### Defined in

packages/matter.js/dist/cjs/session/case/CaseMessages.d.ts:48

___

### UNDEFINED\_NODE\_ID

• `Const` **UNDEFINED\_NODE\_ID**: [`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/cjs/session/SessionManager.d.ts:14

___

### UNICAST\_UNSECURE\_SESSION\_ID

• `Const` **UNICAST\_UNSECURE\_SESSION\_ID**: ``0``

#### Defined in

packages/matter.js/dist/cjs/session/SessionManager.d.ts:15

## Functions

### assertSecureSession

▸ **assertSecureSession**<`T`\>(`session`, `errorText?`): asserts session is SecureSession<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/exports_session.Session.md)<`T`\> |
| `errorText?` | `string` |

#### Returns

asserts session is SecureSession<T\>

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:61
