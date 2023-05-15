[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / session

# Module: session

## Table of contents

### Classes

- [CaseClient](../classes/session.CaseClient.md)
- [CaseClientMessenger](../classes/session.CaseClientMessenger.md)
- [CaseServer](../classes/session.CaseServer.md)
- [CaseServerMessenger](../classes/session.CaseServerMessenger.md)
- [PaseClient](../classes/session.PaseClient.md)
- [PaseClientMessenger](../classes/session.PaseClientMessenger.md)
- [PaseServer](../classes/session.PaseServer.md)
- [PaseServerMessenger](../classes/session.PaseServerMessenger.md)
- [SecureSession](../classes/session.SecureSession.md)
- [SessionManager](../classes/session.SessionManager.md)
- [UnsecureSession](../classes/session.UnsecureSession.md)

### Interfaces

- [ResumptionRecord](../interfaces/session.ResumptionRecord.md)
- [Session](../interfaces/session.Session.md)

### Variables

- [DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS](session.md#default_active_retransmission_timeout_ms)
- [DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS](session.md#default_idle_retransmission_timeout_ms)
- [DEFAULT\_PASSCODE\_ID](session.md#default_passcode_id)
- [DEFAULT\_RETRANSMISSION\_RETRIES](session.md#default_retransmission_retries)
- [KDFSR1\_KEY\_INFO](session.md#kdfsr1_key_info)
- [KDFSR2\_INFO](session.md#kdfsr2_info)
- [KDFSR2\_KEY\_INFO](session.md#kdfsr2_key_info)
- [KDFSR3\_INFO](session.md#kdfsr3_info)
- [RESUME1\_MIC\_NONCE](session.md#resume1_mic_nonce)
- [RESUME2\_MIC\_NONCE](session.md#resume2_mic_nonce)
- [SLEEPY\_ACTIVE\_INTERVAL\_MS](session.md#sleepy_active_interval_ms)
- [SLEEPY\_ACTIVE\_THRESHOLD\_MS](session.md#sleepy_active_threshold_ms)
- [SLEEPY\_IDLE\_INTERVAL\_MS](session.md#sleepy_idle_interval_ms)
- [SPAKE\_CONTEXT](session.md#spake_context)
- [TBE\_DATA2\_NONCE](session.md#tbe_data2_nonce)
- [TBE\_DATA3\_NONCE](session.md#tbe_data3_nonce)
- [TlvCaseSigma1](session.md#tlvcasesigma1)
- [TlvCaseSigma2](session.md#tlvcasesigma2)
- [TlvCaseSigma2Resume](session.md#tlvcasesigma2resume)
- [TlvCaseSigma3](session.md#tlvcasesigma3)
- [TlvEncryptedDataSigma2](session.md#tlvencrypteddatasigma2)
- [TlvEncryptedDataSigma3](session.md#tlvencrypteddatasigma3)
- [TlvPasePake1](session.md#tlvpasepake1)
- [TlvPasePake2](session.md#tlvpasepake2)
- [TlvPasePake3](session.md#tlvpasepake3)
- [TlvPbkdfParamRequest](session.md#tlvpbkdfparamrequest)
- [TlvPbkdfParamResponse](session.md#tlvpbkdfparamresponse)
- [TlvSignedData](session.md#tlvsigneddata)
- [UNDEFINED\_NODE\_ID](session.md#undefined_node_id)
- [UNICAST\_UNSECURE\_SESSION\_ID](session.md#unicast_unsecure_session_id)

## Variables

### DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS

• `Const` **DEFAULT\_ACTIVE\_RETRANSMISSION\_TIMEOUT\_MS**: ``300``

#### Defined in

[packages/matter.js/src/session/Session.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L11)

___

### DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS

• `Const` **DEFAULT\_IDLE\_RETRANSMISSION\_TIMEOUT\_MS**: ``5000``

#### Defined in

[packages/matter.js/src/session/Session.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L10)

___

### DEFAULT\_PASSCODE\_ID

• `Const` **DEFAULT\_PASSCODE\_ID**: ``0``

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L15)

___

### DEFAULT\_RETRANSMISSION\_RETRIES

• `Const` **DEFAULT\_RETRANSMISSION\_RETRIES**: ``5``

#### Defined in

[packages/matter.js/src/session/Session.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L12)

___

### KDFSR1\_KEY\_INFO

• `Const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L17)

___

### KDFSR2\_INFO

• `Const` **KDFSR2\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L21)

___

### KDFSR2\_KEY\_INFO

• `Const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L18)

___

### KDFSR3\_INFO

• `Const` **KDFSR3\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L22)

___

### RESUME1\_MIC\_NONCE

• `Const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L19)

___

### RESUME2\_MIC\_NONCE

• `Const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L20)

___

### SLEEPY\_ACTIVE\_INTERVAL\_MS

• `Const` **SLEEPY\_ACTIVE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in active mode.

#### Defined in

[packages/matter.js/src/session/Session.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L15)

___

### SLEEPY\_ACTIVE\_THRESHOLD\_MS

• `Const` **SLEEPY\_ACTIVE\_THRESHOLD\_MS**: ``4000``

Minimum amount the node SHOULD stay awake after network activity.

#### Defined in

[packages/matter.js/src/session/Session.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L21)

___

### SLEEPY\_IDLE\_INTERVAL\_MS

• `Const` **SLEEPY\_IDLE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in idle mode.

#### Defined in

[packages/matter.js/src/session/Session.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/Session.ts#L18)

___

### SPAKE\_CONTEXT

• `Const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessenger.ts#L16)

___

### TBE\_DATA2\_NONCE

• `Const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L23)

___

### TBE\_DATA3\_NONCE

• `Const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L24)

___

### TlvCaseSigma1

• `Const` **TlvCaseSigma1**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `destinationId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L36)

___

### TlvCaseSigma2

• `Const` **TlvCaseSigma2**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `mrpParams`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L47)

___

### TlvCaseSigma2Resume

• `Const` **TlvCaseSigma2Resume**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `resumeMic`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L56)

___

### TlvCaseSigma3

• `Const` **TlvCaseSigma3**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `encrypted`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L63)

___

### TlvEncryptedDataSigma2

• `Const` **TlvEncryptedDataSigma2**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L76)

___

### TlvEncryptedDataSigma3

• `Const` **TlvEncryptedDataSigma3**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:84](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L84)

___

### TlvPasePake1

• `Const` **TlvPasePake1**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `x`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessages.ts#L45)

___

### TlvPasePake2

• `Const` **TlvPasePake2**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessages.ts#L50)

___

### TlvPasePake3

• `Const` **TlvPasePake3**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `verifier`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessages.ts#L56)

___

### TlvPbkdfParamRequest

• `Const` **TlvPbkdfParamRequest**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `passcodeId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessages.ts#L24)

___

### TlvPbkdfParamResponse

• `Const` **TlvPbkdfParamResponse**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `mrpParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `activeRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `idleRetransTimeoutMs`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](tlv.md#typefromfields)<{ `iterations`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/pase/PaseMessages.ts#L33)

___

### TlvSignedData

• `Const` **TlvSignedData**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\> ; `peerEcdhPublicKey`: [`FieldType`](../interfaces/tlv.FieldType.md)<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:68](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/case/CaseMessages.ts#L68)

___

### UNDEFINED\_NODE\_ID

• `Const` **UNDEFINED\_NODE\_ID**: [`NodeId`](../classes/datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L17)

___

### UNICAST\_UNSECURE\_SESSION\_ID

• `Const` **UNICAST\_UNSECURE\_SESSION\_ID**: ``0``

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L19)
