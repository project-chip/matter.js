[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/session

# exports/session

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

packages/matter.js/dist/esm/session/Session.d.ts:28

## Variables

### DEFAULT\_PASSCODE\_ID

> `const` **DEFAULT\_PASSCODE\_ID**: `0` = `0`

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:11

***

### KDFSR1\_KEY\_INFO

> `const` **KDFSR1\_KEY\_INFO**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:1

***

### KDFSR2\_INFO

> `const` **KDFSR2\_INFO**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:5

***

### KDFSR2\_KEY\_INFO

> `const` **KDFSR2\_KEY\_INFO**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:2

***

### KDFSR3\_INFO

> `const` **KDFSR3\_INFO**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:6

***

### MRP\_MAX\_TRANSMISSIONS

> `const` **MRP\_MAX\_TRANSMISSIONS**: `5` = `5`

The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
sees fit.

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:16

***

### RESUME1\_MIC\_NONCE

> `const` **RESUME1\_MIC\_NONCE**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:3

***

### RESUME2\_MIC\_NONCE

> `const` **RESUME2\_MIC\_NONCE**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:4

***

### SESSION\_ACTIVE\_INTERVAL\_MS

> `const` **SESSION\_ACTIVE\_INTERVAL\_MS**: `500` = `500`

Maximum sleep interval of node when in active mode.

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:18

***

### SESSION\_ACTIVE\_THRESHOLD\_MS

> `const` **SESSION\_ACTIVE\_THRESHOLD\_MS**: `4000` = `4000`

Minimum amount the node SHOULD stay awake after network activity.

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:22

***

### SESSION\_IDLE\_INTERVAL\_MS

> `const` **SESSION\_IDLE\_INTERVAL\_MS**: `300` = `300`

Maximum sleep interval of node when in idle mode.

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:20

***

### SPAKE\_CONTEXT

> `const` **SPAKE\_CONTEXT**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessenger.d.ts:12

***

### TBE\_DATA2\_NONCE

> `const` **TBE\_DATA2\_NONCE**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:7

***

### TBE\_DATA3\_NONCE

> `const` **TBE\_DATA3\_NONCE**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:8

***

### TlvCaseSigma1

> `const` **TlvCaseSigma1**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:10

***

### TlvCaseSigma2

> `const` **TlvCaseSigma2**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:24

***

### TlvCaseSigma2Resume

> `const` **TlvCaseSigma2Resume**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:36

***

### TlvCaseSigma3

> `const` **TlvCaseSigma3**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:42

***

### TlvEncryptedDataSigma2

> `const` **TlvEncryptedDataSigma2**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:53

***

### TlvEncryptedDataSigma3

> `const` **TlvEncryptedDataSigma3**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:60

***

### TlvPasePake1

> `const` **TlvPasePake1**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:49

***

### TlvPasePake2

> `const` **TlvPasePake2**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:53

***

### TlvPasePake3

> `const` **TlvPasePake3**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:58

***

### TlvPbkdfParamRequest

> `const` **TlvPbkdfParamRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:16

***

### TlvPbkdfParamResponse

> `const` **TlvPbkdfParamResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.1.2

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:31

***

### TlvSessionParameters

> `const` **TlvSessionParameters**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v12.Core § 4.11.8

#### Source

packages/matter.js/dist/esm/session/pase/PaseMessages.d.ts:7

***

### TlvSignedData

> `const` **TlvSignedData**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v10.Core § 4.13.2.3

#### Source

packages/matter.js/dist/esm/session/case/CaseMessages.d.ts:46

***

### UNICAST\_UNSECURE\_SESSION\_ID

> `const` **UNICAST\_UNSECURE\_SESSION\_ID**: `0` = `0`

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:15

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:77
