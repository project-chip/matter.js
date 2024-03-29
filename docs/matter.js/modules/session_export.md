[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / session/export

# Module: session/export

## Table of contents

### Classes

- [CaseClient](../classes/session_export.CaseClient.md)
- [CaseClientMessenger](../classes/session_export.CaseClientMessenger.md)
- [CaseServer](../classes/session_export.CaseServer.md)
- [CaseServerMessenger](../classes/session_export.CaseServerMessenger.md)
- [InsecureSession](../classes/session_export.InsecureSession.md)
- [MaximumPasePairingErrorsReachedError](../classes/session_export.MaximumPasePairingErrorsReachedError.md)
- [NoAssociatedFabricError](../classes/session_export.NoAssociatedFabricError.md)
- [PaseClient](../classes/session_export.PaseClient.md)
- [PaseClientMessenger](../classes/session_export.PaseClientMessenger.md)
- [PaseServer](../classes/session_export.PaseServer.md)
- [PaseServerMessenger](../classes/session_export.PaseServerMessenger.md)
- [SecureSession](../classes/session_export.SecureSession.md)
- [Session](../classes/session_export.Session.md)
- [SessionManager](../classes/session_export.SessionManager.md)

### Interfaces

- [ResumptionRecord](../interfaces/session_export.ResumptionRecord.md)
- [SessionParameters](../interfaces/session_export.SessionParameters.md)

### Type Aliases

- [SessionParameterOptions](session_export.md#sessionparameteroptions)

### Variables

- [DEFAULT\_PASSCODE\_ID](session_export.md#default_passcode_id)
- [KDFSR1\_KEY\_INFO](session_export.md#kdfsr1_key_info)
- [KDFSR2\_INFO](session_export.md#kdfsr2_info)
- [KDFSR2\_KEY\_INFO](session_export.md#kdfsr2_key_info)
- [KDFSR3\_INFO](session_export.md#kdfsr3_info)
- [MRP\_MAX\_TRANSMISSIONS](session_export.md#mrp_max_transmissions)
- [RESUME1\_MIC\_NONCE](session_export.md#resume1_mic_nonce)
- [RESUME2\_MIC\_NONCE](session_export.md#resume2_mic_nonce)
- [SESSION\_ACTIVE\_INTERVAL\_MS](session_export.md#session_active_interval_ms)
- [SESSION\_ACTIVE\_THRESHOLD\_MS](session_export.md#session_active_threshold_ms)
- [SESSION\_IDLE\_INTERVAL\_MS](session_export.md#session_idle_interval_ms)
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
- [TlvSessionParameters](session_export.md#tlvsessionparameters)
- [TlvSignedData](session_export.md#tlvsigneddata)
- [UNICAST\_UNSECURE\_SESSION\_ID](session_export.md#unicast_unsecure_session_id)

### Functions

- [assertSecureSession](session_export.md#assertsecuresession)

## Type Aliases

### SessionParameterOptions

Ƭ **SessionParameterOptions**: `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\>

#### Defined in

[packages/matter.js/src/session/Session.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/Session.ts#L36)

## Variables

### DEFAULT\_PASSCODE\_ID

• `Const` **DEFAULT\_PASSCODE\_ID**: ``0``

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessenger.ts#L21)

___

### KDFSR1\_KEY\_INFO

• `Const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:23](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L23)

___

### KDFSR2\_INFO

• `Const` **KDFSR2\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L27)

___

### KDFSR2\_KEY\_INFO

• `Const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:24](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L24)

___

### KDFSR3\_INFO

• `Const` **KDFSR3\_INFO**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:28](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L28)

___

### MRP\_MAX\_TRANSMISSIONS

• `Const` **MRP\_MAX\_TRANSMISSIONS**: ``5``

The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
sees fit.

#### Defined in

[packages/matter.js/src/session/Session.ts:19](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/Session.ts#L19)

___

### RESUME1\_MIC\_NONCE

• `Const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:25](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L25)

___

### RESUME2\_MIC\_NONCE

• `Const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:26](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L26)

___

### SESSION\_ACTIVE\_INTERVAL\_MS

• `Const` **SESSION\_ACTIVE\_INTERVAL\_MS**: ``500``

Maximum sleep interval of node when in active mode.

#### Defined in

[packages/matter.js/src/session/Session.ts:22](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/Session.ts#L22)

___

### SESSION\_ACTIVE\_THRESHOLD\_MS

• `Const` **SESSION\_ACTIVE\_THRESHOLD\_MS**: ``4000``

Minimum amount the node SHOULD stay awake after network activity.

#### Defined in

[packages/matter.js/src/session/Session.ts:28](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/Session.ts#L28)

___

### SESSION\_IDLE\_INTERVAL\_MS

• `Const` **SESSION\_IDLE\_INTERVAL\_MS**: ``300``

Maximum sleep interval of node when in idle mode.

#### Defined in

[packages/matter.js/src/session/Session.ts:25](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/Session.ts#L25)

___

### SPAKE\_CONTEXT

• `Const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/pase/PaseMessenger.ts:22](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessenger.ts#L22)

___

### TBE\_DATA2\_NONCE

• `Const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:29](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L29)

___

### TBE\_DATA3\_NONCE

• `Const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:30](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L30)

___

### TlvCaseSigma1

• `Const` **TlvCaseSigma1**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `destinationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `resumeMic`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `resumptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sessionParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `activeIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `activeThresholdMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `idleIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:33](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L33)

___

### TlvCaseSigma2

• `Const` **TlvCaseSigma2**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sessionParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `activeIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `activeThresholdMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `idleIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L44)

___

### TlvCaseSigma2Resume

• `Const` **TlvCaseSigma2Resume**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `resumeMic`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:53](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L53)

___

### TlvCaseSigma3

• `Const` **TlvCaseSigma3**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `encrypted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:60](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L60)

___

### TlvEncryptedDataSigma2

• `Const` **TlvEncryptedDataSigma2**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `resumptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:73](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L73)

___

### TlvEncryptedDataSigma3

• `Const` **TlvEncryptedDataSigma3**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:81](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L81)

___

### TlvPasePake1

• `Const` **TlvPasePake1**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `x`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessages.ts#L51)

___

### TlvPasePake2

• `Const` **TlvPasePake2**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `y`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:56](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessages.ts#L56)

___

### TlvPasePake3

• `Const` **TlvPasePake3**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `verifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:62](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessages.ts#L62)

___

### TlvPbkdfParamRequest

• `Const` **TlvPbkdfParamRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `hasPbkdfParameters`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `passcodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sessionParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `activeIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `activeThresholdMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `idleIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessages.ts#L27)

___

### TlvPbkdfParamResponse

• `Const` **TlvPbkdfParamResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `pbkdfParameters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>\> ; `peerRandom`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `random`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `sessionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `sessionParams`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `activeIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `activeThresholdMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `idleIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.1.2

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessages.ts#L36)

___

### TlvSessionParameters

• `Const` **TlvSessionParameters**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `activeIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `activeThresholdMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `idleIntervalMs`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\>  }\>

**`See`**

MatterCoreSpecificationV1_2 § 4.11.8

#### Defined in

[packages/matter.js/src/session/pase/PaseMessages.ts:15](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/pase/PaseMessages.ts#L15)

___

### TlvSignedData

• `Const` **TlvSignedData**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `ecdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `intermediateCACert`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nodeOpCert`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `peerEcdhPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 4.13.2.3

#### Defined in

[packages/matter.js/src/session/case/CaseMessages.ts:65](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/case/CaseMessages.ts#L65)

___

### UNICAST\_UNSECURE\_SESSION\_ID

• `Const` **UNICAST\_UNSECURE\_SESSION\_ID**: ``0``

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:24](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/SessionManager.ts#L24)

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
| `session` | [`Session`](../classes/session_export.Session.md)\<`T`\> |
| `errorText?` | `string` |

#### Returns

asserts session is SecureSession\<T\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:314](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/session/SecureSession.ts#L314)
