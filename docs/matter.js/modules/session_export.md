[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / session/export

# Module: session/export

## Table of contents

### Classes

- [CaseClient](../classes/session_export.CaseClient.md)
- [CaseClientMessenger](../classes/session_export.CaseClientMessenger.md)
- [CaseServer](../classes/session_export.CaseServer.md)
- [CaseServerMessenger](../classes/session_export.CaseServerMessenger.md)
- [NoAssociatedFabricError](../classes/session_export.NoAssociatedFabricError.md)
- [PaseClient](../classes/session_export.PaseClient.md)
- [PaseClientMessenger](../classes/session_export.PaseClientMessenger.md)
- [PaseServer](../classes/session_export.PaseServer.md)
- [PaseServerMessenger](../classes/session_export.PaseServerMessenger.md)
- [SecureSession](../classes/session_export.SecureSession.md)
- [SessionManager](../classes/session_export.SessionManager.md)
- [UnsecureSession](../classes/session_export.UnsecureSession.md)

### Interfaces

- [ResumptionRecord](../interfaces/session_export.ResumptionRecord.md)
- [Session](../interfaces/session_export.Session.md)

### Variables

- [DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS](session_export.md#default_active_retransmission_timeout_ms)
- [DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS](session_export.md#default_idle_retransmission_timeout_ms)
- [DEFAULT\_PASSCODE\_ID](session_export.md#default_passcode_id)
- [DEFAULT\_RETRANSMISSION\_RETRIES](session_export.md#default_retransmission_retries)
- [KDFSR1\_KEY\_INFO](session_export.md#kdfsr1_key_info)
- [KDFSR2\_INFO](session_export.md#kdfsr2_info)
- [KDFSR2\_KEY\_INFO](session_export.md#kdfsr2_key_info)
- [KDFSR3\_INFO](session_export.md#kdfsr3_info)
- [RESUME1\_MIC\_NONCE](session_export.md#resume1_mic_nonce)
- [RESUME2\_MIC\_NONCE](session_export.md#resume2_mic_nonce)
- [SLEEPY\_ACTIVE\_INTERVAL\_MS](session_export.md#sleepy_active_interval_ms)
- [SLEEPY\_ACTIVE\_THRESHOLD\_MS](session_export.md#sleepy_active_threshold_ms)
- [SLEEPY\_IDLE\_INTERVAL\_MS](session_export.md#sleepy_idle_interval_ms)
- [SPAKE\_CONTEXT](session_export.md#spake_context)
- [TBE\_DATA2\_NONCE](session_export.md#tbe_data2_nonce)
- [TBE\_DATA3\_NONCE](session_export.md#tbe_data3_nonce)
- [TlvCaseSigma1](session_export.md#tlvcasesigma1)
- [TlvCaseSigma2](session_export.md#tlvcasesigma2)
- [TlvCaseSigma2Resume](session_export.md#tlvcasesigma2resume)
- [TlvCaseSigma3](session_export.md#tlvcasesigma3)
- [TlvEncryptedDataSigma2](session_export.md#tlvencrypteddatasigma2)
- [TlvEncryptedDataSigma3](session_export.md#tlvencrypteddatasigma3)
- [TlvPasePake1](session_export.md#tlvpasepake1)
- [TlvPasePake2](session_export.md#tlvpasepake2)
- [TlvPasePake3](session_export.md#tlvpasepake3)
- [TlvPbkdfParamRequest](session_export.md#tlvpbkdfparamrequest)
- [TlvPbkdfParamResponse](session_export.md#tlvpbkdfparamresponse)
- [TlvSignedData](session_export.md#tlvsigneddata)
- [UNDEFINED\_NODE\_ID](session_export.md#undefined_node_id)
- [UNICAST\_UNSECURE\_SESSION\_ID](session_export.md#unicast_unsecure_session_id)

### Functions

- [assertSecureSession](session_export.md#assertsecuresession)

## Variables

### DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS

• `Const` **DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS**: ``300``

#### Defined in

[packages/matter.js/src/session/Session.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L12)

___

### DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS

• `Const` **DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS**: ``5000``

#### Defined in

[packages/matter.js/src/session/Session.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L11)

___

### DEFAULT\_PASSCODE\_ID

• `Const` **DEFAULT\_PASSCODE\_ID**: ``0``

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L21)

___

### DEFAULT\_RETRANSMISSION\_RETRIES

• `Const` **DEFAULT\_RETRANSMISSION\_RETRIES**: ``5``

#### Defined in

[packages/matter.js/src/session/Session.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L13)

___

### KDFSR1\_KEY\_INFO

• `Const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L22)

___

### KDFSR2\_INFO

• `Const` **KDFSR2\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L26)

___

### KDFSR2\_KEY\_INFO

• `Const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L23)

___

### KDFSR3\_INFO

• `Const` **KDFSR3\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L27)

___

### RESUME1\_MIC\_NONCE

• `Const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L24)

___

### RESUME2\_MIC\_NONCE

• `Const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L25)

___

### SLEEPY\_ACTIVE\_INTERVAL\_MS

• `Const` **SLEEPY\_ACTIVE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in active mode.

#### Defined in

[packages/matter.js/src/session/Session.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L16)

___

### SLEEPY\_ACTIVE\_THRESHOLD\_MS

• `Const` **SLEEPY\_ACTIVE\_THRESHOLD\_MS**: ``4000``

Minimum amount the node SHOULD stay awake after network activity.

#### Defined in

[packages/matter.js/src/session/Session.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L22)

___

### SLEEPY\_IDLE\_INTERVAL\_MS

• `Const` **SLEEPY\_IDLE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in idle mode.

#### Defined in

[packages/matter.js/src/session/Session.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/Session.ts#L19)

___

### SPAKE\_CONTEXT

• `Const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessenger.ts#L22)

___

### TBE\_DATA2\_NONCE

• `Const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L28)

___

### TBE\_DATA3\_NONCE

• `Const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L29)

___

### TlvCaseSigma1

• `Const` **TlvCaseSigma1**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `destinationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L41)

___

### TlvCaseSigma2

• `Const` **TlvCaseSigma2**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L52)

___

### TlvCaseSigma2Resume

• `Const` **TlvCaseSigma2Resume**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `resumeMic`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L61)

___

### TlvCaseSigma3

• `Const` **TlvCaseSigma3**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:68](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L68)

___

### TlvEncryptedDataSigma2

• `Const` **TlvEncryptedDataSigma2**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:81](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L81)

___

### TlvEncryptedDataSigma3

• `Const` **TlvEncryptedDataSigma3**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L89)

___

### TlvPasePake1

• `Const` **TlvPasePake1**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `x`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessages.ts#L48)

___

### TlvPasePake2

• `Const` **TlvPasePake2**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessages.ts#L53)

___

### TlvPasePake3

• `Const` **TlvPasePake3**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessages.ts#L59)

___

### TlvPbkdfParamRequest

• `Const` **TlvPbkdfParamRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessages.ts#L24)

___

### TlvPbkdfParamResponse

• `Const` **TlvPbkdfParamResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/pase/PaseMessages.ts#L33)

___

### TlvSignedData

• `Const` **TlvSignedData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `peerEcdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/case/CaseMessages.ts#L73)

___

### UNDEFINED\_NODE\_ID

• `Const` **UNDEFINED\_NODE\_ID**: [`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SessionManager.ts#L20)

___

### UNICAST\_UNSECURE\_SESSION\_ID

• `Const` **UNICAST\_UNSECURE\_SESSION\_ID**: ``0``

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SessionManager.ts#L22)

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
| `session` | [`Session`](../interfaces/session_export.Session.md)<`T`\> |
| `errorText?` | `string` |

#### Returns

asserts session is SecureSession<T\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:218](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L218)
