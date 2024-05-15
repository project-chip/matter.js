[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](exports_certificate.md) / X962

# Namespace: X962

[exports/certificate](exports_certificate.md).X962

## Table of contents

### Variables

- [EcdsaWithSHA256](exports_certificate.X962.md#ecdsawithsha256)

### Functions

- [PublicKeyEcPrime256v1](exports_certificate.X962.md#publickeyecprime256v1)

## Variables

### EcdsaWithSHA256

• `Const` **EcdsaWithSHA256**: `any`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:25

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
| `bytes` | \{ `_bytes`: `Uint8Array` ; `_padding`: `number` ; `_tag`: `number`  } |
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

packages/matter.js/dist/esm/certificate/CertificateDerTypes.d.ts:8
