[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](certificate_export.md) / X962

# Namespace: X962

[certificate/export](certificate_export.md).X962

## Table of contents

### Variables

- [EcdsaWithSHA256](certificate_export.X962.md#ecdsawithsha256)

### Functions

- [PublicKeyEcPrime256v1](certificate_export.X962.md#publickeyecprime256v1)

## Variables

### EcdsaWithSHA256

• `Const` **EcdsaWithSHA256**: `any`

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:28](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L28)

## Functions

### PublicKeyEcPrime256v1

▸ **PublicKeyEcPrime256v1**(`key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bytes` | \{ `_bytes`: `Uint8Array` = data; `_padding`: `number` = padding; `_tag`: `number`  } |
| `bytes._bytes` | `Uint8Array` |
| `bytes._padding` | `number` |
| `bytes._tag` | `number` |
| `type` | \{ `algorithm`: \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  } ; `curve`: \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  }  } |
| `type.algorithm` | \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  } |
| `type.algorithm._bytes` | `Uint8Array` |
| `type.algorithm._tag` | `number` |
| `type.curve` | \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  } |
| `type.curve._bytes` | `Uint8Array` |
| `type.curve._tag` | `number` |

#### Defined in

[packages/matter.js/src/certificate/CertificateDerTypes.ts:21](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/certificate/CertificateDerTypes.ts#L21)
