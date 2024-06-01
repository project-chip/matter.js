[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / session/export

# session/export

## Index

### Classes

- [CaseClient](classes/CaseClient.md)
- [CaseClientMessenger](classes/CaseClientMessenger.md)
- [CaseServer](classes/CaseServer.md)
- [CaseServerMessenger](classes/CaseServerMessenger.md)
- [InsecureSession](classes/InsecureSession.md)
- [MaximumPasePairingErrorsReachedError](classes/MaximumPasePairingErrorsReachedError.md)
- [NoAssociatedFabricError](classes/NoAssociatedFabricError.md)
- [PaseClient](classes/PaseClient.md)
- [PaseClientMessenger](classes/PaseClientMessenger.md)
- [PaseServer](classes/PaseServer.md)
- [PaseServerMessenger](classes/PaseServerMessenger.md)
- [SecureSession](classes/SecureSession.md)
- [Session](classes/Session.md)
- [SessionManager](classes/SessionManager.md)

### Interfaces

- [ResumptionRecord](interfaces/ResumptionRecord.md)
- [SessionParameters](interfaces/SessionParameters.md)

## Type Aliases

### SessionParameterOptions

> **SessionParameterOptions**: `Partial`\<[`SessionParameters`](interfaces/SessionParameters.md)\>

#### Source

[packages/matter.js/src/session/Session.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L36)

## Variables

### DEFAULT\_PASSCODE\_ID

> `const` **DEFAULT\_PASSCODE\_ID**: `0` = `0`

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L21)

***

### KDFSR1\_KEY\_INFO

> `const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L20)

***

### KDFSR2\_INFO

> `const` **KDFSR2\_INFO**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L24)

***

### KDFSR2\_KEY\_INFO

> `const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L21)

***

### KDFSR3\_INFO

> `const` **KDFSR3\_INFO**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L25)

***

### MRP\_MAX\_TRANSMISSIONS

> `const` **MRP\_MAX\_TRANSMISSIONS**: `5` = `5`

The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
sees fit.

#### Source

[packages/matter.js/src/session/Session.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L19)

***

### RESUME1\_MIC\_NONCE

> `const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L22)

***

### RESUME2\_MIC\_NONCE

> `const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L23)

***

### SESSION\_ACTIVE\_INTERVAL\_MS

> `const` **SESSION\_ACTIVE\_INTERVAL\_MS**: `500` = `500`

Maximum sleep interval of node when in active mode.

#### Source

[packages/matter.js/src/session/Session.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L22)

***

### SESSION\_ACTIVE\_THRESHOLD\_MS

> `const` **SESSION\_ACTIVE\_THRESHOLD\_MS**: `4000` = `4000`

Minimum amount the node SHOULD stay awake after network activity.

#### Source

[packages/matter.js/src/session/Session.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L28)

***

### SESSION\_IDLE\_INTERVAL\_MS

> `const` **SESSION\_IDLE\_INTERVAL\_MS**: `300` = `300`

Maximum sleep interval of node when in idle mode.

#### Source

[packages/matter.js/src/session/Session.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L25)

***

### SPAKE\_CONTEXT

> `const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Source

[packages/matter.js/src/session/pase/PaseMessenger.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessenger.ts#L22)

***

### TBE\_DATA2\_NONCE

> `const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L26)

***

### TBE\_DATA3\_NONCE

> `const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L27)

***

### TlvCaseSigma1

> `const` **TlvCaseSigma1**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### destinationId

> **destinationId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### ecdhPublicKey

> **ecdhPublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### random

> **random**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### resumeMic

> **resumeMic**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### resumptionId

> **resumptionId**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### sessionId

> **sessionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### sessionParams

> **sessionParams**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L30)

***

### TlvCaseSigma2

> `const` **TlvCaseSigma2**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### ecdhPublicKey

> **ecdhPublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### encrypted

> **encrypted**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### random

> **random**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### sessionId

> **sessionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### sessionParams

> **sessionParams**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L41)

***

### TlvCaseSigma2Resume

> `const` **TlvCaseSigma2Resume**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### resumeMic

> **resumeMic**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### resumptionId

> **resumptionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### sessionId

> **sessionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L50)

***

### TlvCaseSigma3

> `const` **TlvCaseSigma3**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### encrypted

> **encrypted**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L57)

***

### TlvEncryptedDataSigma2

> `const` **TlvEncryptedDataSigma2**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### intermediateCACert

> **intermediateCACert**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### nodeOpCert

> **nodeOpCert**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### resumptionId

> **resumptionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signature

> **signature**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L70)

***

### TlvEncryptedDataSigma3

> `const` **TlvEncryptedDataSigma3**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### intermediateCACert

> **intermediateCACert**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### nodeOpCert

> **nodeOpCert**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### signature

> **signature**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L78)

***

### TlvPasePake1

> `const` **TlvPasePake1**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Type declaration

##### x

> **x**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/pase/PaseMessages.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessages.ts#L50)

***

### TlvPasePake2

> `const` **TlvPasePake2**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Type declaration

##### verifier

> **verifier**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### y

> **y**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/pase/PaseMessages.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessages.ts#L55)

***

### TlvPasePake3

> `const` **TlvPasePake3**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Type declaration

##### verifier

> **verifier**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/pase/PaseMessages.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessages.ts#L61)

***

### TlvPbkdfParamRequest

> `const` **TlvPbkdfParamRequest**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Type declaration

##### hasPbkdfParameters

> **hasPbkdfParameters**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### passcodeId

> **passcodeId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### random

> **random**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### sessionId

> **sessionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### sessionParams

> **sessionParams**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/session/pase/PaseMessages.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessages.ts#L26)

***

### TlvPbkdfParamResponse

> `const` **TlvPbkdfParamResponse**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Type declaration

##### pbkdfParameters

> **pbkdfParameters**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### peerRandom

> **peerRandom**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### random

> **random**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### sessionId

> **sessionId**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### sessionParams

> **sessionParams**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/session/pase/PaseMessages.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessages.ts#L35)

***

### TlvSessionParameters

> `const` **TlvSessionParameters**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v12.Core § 4.11.8

#### Type declaration

##### activeIntervalMs

> **activeIntervalMs**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

Maximum sleep interval of node when in active mode.

##### activeThresholdMs

> **activeThresholdMs**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

Minimum amount of time the node SHOULD stay active after network activity.

##### idleIntervalMs

> **idleIntervalMs**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

Maximum sleep interval of node when in idle mode.

#### Source

[packages/matter.js/src/session/pase/PaseMessages.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/pase/PaseMessages.ts#L14)

***

### TlvSignedData

> `const` **TlvSignedData**: [`ObjectSchema`](../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Type declaration

##### ecdhPublicKey

> **ecdhPublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### intermediateCACert

> **intermediateCACert**: [`OptionalFieldType`](../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

##### nodeOpCert

> **nodeOpCert**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

##### peerEcdhPublicKey

> **peerEcdhPublicKey**: [`FieldType`](../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

#### Source

[packages/matter.js/src/session/case/CaseMessages.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseMessages.ts#L62)

***

### UNICAST\_UNSECURE\_SESSION\_ID

> `const` **UNICAST\_UNSECURE\_SESSION\_ID**: `0` = `0x0000`

#### Source

[packages/matter.js/src/session/SessionManager.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L25)

## Functions

### assertSecureSession()

> **assertSecureSession**\<`T`\>(`session`, `errorText`?): `asserts session is SecureSession<T>`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](classes/Session.md)\<`T`\> |
| `errorText`? | `string` |

#### Returns

`asserts session is SecureSession<T>`

#### Source

[packages/matter.js/src/session/SecureSession.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L330)
