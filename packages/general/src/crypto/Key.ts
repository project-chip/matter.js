/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Base64 } from "../codec/Base64Codec.js";
import { DerCodec, DerNode, DerType } from "../codec/DerCodec.js";
import { MatterError, NotImplementedError } from "../MatterError.js";
import { Bytes } from "../util/Bytes.js";
import { ec } from "./Crypto.js";

const {
    numberToBytesBE,
    p256: { ProjectivePoint },
} = ec;

class KeyError extends MatterError {}

const JWK_KEYS = [
    "crv",
    "d",
    "dp",
    "dq",
    "e",
    "ext",
    "k",
    "key_ops",
    "kty",
    "n",
    "oth",
    "p",
    "q",
    "qi",
    "use",
    "x",
    "y",
];

export enum KeyType {
    EC = "EC",
    RSA = "RSA",
    oct = "oct",
}

export enum CurveType {
    p256 = "P-256",
    p384 = "P-384",
    p521 = "P-521",
}

enum Asn1ObjectID {
    ecPublicKey = "2a8648ce3d0201",
    prime256r1 = "2a8648ce3d030107",
    prime384r1 = "0103840022",
    prime521r1 = "0103840023",
}

const CurveLookup = {
    [Asn1ObjectID.prime256r1]: CurveType.p256,
    [Asn1ObjectID.prime384r1]: CurveType.p384,
    [Asn1ObjectID.prime521r1]: CurveType.p521,
};

export type BinaryKeyPair = {
    publicKey: Uint8Array;
    privateKey: Uint8Array;
};

/**
 * Represents a cryptographic key.
 *
 * Models keys as JWK.  Advantages of this format:
 *
 *   - Standard
 *   - Widely supported
 *   - Fully models relevant key types
 *   - Where not supported, extracting constituent parts for translation is trivial
 */
export interface Key extends JsonWebKey {
    /**
     * The key algorithm, alias for JWK "alg" field.
     */
    algorithm?: Key["alg"];

    /**
     * The elliptic curve type, alias for JWK "crv" field.
     */
    curve?: Key["crv"];

    /**
     * The key type, alias for JWK "kty" field.
     */
    type?: Key["kty"];

    /**
     * Operations supported by the key, alias for JWK "key_ops" field.
     */
    operations?: Key["key_ops"];

    /**
     * The private key, alias for JWK "d" field.
     */
    private?: Key["d"];

    /**
     * Indicates whether the private key is extractable, alias for JSK "ext"
     * field.
     */
    extractable?: Key["ext"];

    alg?: string;
    crv?: CurveType;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[]; // Ideally KeyUsage but any value is legal
    kty?: KeyType;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string; // "sig" | "enc" are official values but any value is legal
    x?: string;
    y?: string;

    /**
     * Binary alias to private key field.  Automatically encodes/decodes the
     * base-64 private key.
     */
    privateBits?: Uint8Array;

    /**
     * Binary alias to the x field.  Automatically encodes/decodes the base-64
     * x-point on EC public keys.
     */
    xBits?: Uint8Array;

    /**
     * Binary alias to the y field.  Automatically encodes/decodes the base-64
     * y-point on EC public keys.
     */
    yBits?: Uint8Array;

    /**
     * Import (write-only) of private keys encoded in SEC1 format.
     */
    sec1?: Uint8Array;

    /**
     * Import (write-only) of private keys encoded in PKCS #8 format.
     */
    pkcs8?: Uint8Array;

    /**
     * Import (write-only) of public keys encoded in SPKI format.
     */
    spki?: Uint8Array;

    /**
     * Import/export of EC public key in SEC1/SPKI format.  Maps to x & y
     * fields internally.
     */
    publicBits?: Uint8Array;

    /**
     * Import/export of BinaryKeyPair structure used as an alternate
     * serialization format for legacy reasons.
     */
    keyPairBits?: BinaryKeyPair;

    /**
     * Alias for publicBits that throws if no public key is present.
     */
    publicKey: Uint8Array;

    /**
     * Alias for privateBits that throws if no private key is present.
     */
    privateKey: Uint8Array;

    /**
     * Alias for keyPairBits that throws if a complete key pair is not present.
     */
    keyPair: BinaryKeyPair;
}

/**
 * EC key without private fields.
 */
export interface PublicKey extends Key {
    type: KeyType.EC;
    curve: CurveType;
    x: string;
    y: string;
    xBits: Uint8Array;
    yBits: Uint8Array;
    publicBits: Uint8Array;
}

/**
 * EC key with extractable private fields.
 */
export interface PrivateKey extends PublicKey {
    private: string;
    d: string;
    privateBits: Uint8Array;
    privateKey: Uint8Array;
    keyPair: BinaryKeyPair;
    keyPairBits: BinaryKeyPair;
}

/**
 * Symmetric key.
 */
export interface SymmetricKey extends Key {
    type: KeyType.oct;
    private: string;
    d: string;
}

function checkDerVersion(type: string, node: DerNode | undefined, version: number) {
    const derVersion =
        node && node._tag === DerType.Integer && node._bytes && node._bytes.length === 1 && node._bytes[0];

    if (derVersion !== version) {
        throw new KeyError(`${type} key version mismatch`);
    }
}

function getDerObjectID(type: string, node?: DerNode) {
    const id = node && node._tag === DerType.ObjectIdentifier && node._bytes?.length > 1 && node._bytes;

    if (id) return id;

    throw new KeyError(`Missing object in ${type} key`);
}

function getDerCurve(type: string, node?: DerNode) {
    const oid = getDerObjectID(type, node);
    const curve = (<any>CurveLookup)[Bytes.toHex(oid)];
    if (curve) return curve;
    throw new KeyError(`Unsupported ${type} EC curve`);
}

function getDerKey(type: string, node?: DerNode, derType: DerType = DerType.OctetString) {
    const key = node && node._tag === derType && node._bytes?.length > 1 && node._bytes;

    if (key) return key;

    throw new MatterError(`Missing ${type} key node`);
}

// These are private members of Key, each implementing a key import field
namespace Translators {
    // Import SEC1 private key
    export const sec1 = {
        set: function (this: Key, input: Uint8Array) {
            const decoded = DerCodec.decode(input);

            // Version
            const versionNode = decoded?._elements?.[0];
            checkDerVersion("SEC 1", versionNode, 1);

            // Curve
            const curveNode = decoded?._elements?.[2]?._elements?.[0];
            const curve = getDerCurve("SEC 1", curveNode);

            // Key
            const keyNode = decoded?._elements?.[1];
            const key = getDerKey("SEC 1", keyNode);

            this.type = KeyType.EC;
            this.curve = curve;
            this.privateBits = key;
        },

        get: function () {
            throw new NotImplementedError("SEC1 export not implemented");
        },
    };

    // Import PKCS8 private key
    export const pkcs8 = {
        set: function (this: Key, input: Uint8Array) {
            const outer = DerCodec.decode(input);

            // Version
            const version = outer?._elements?.[0];
            checkDerVersion("PKCS #8", version, 0);

            // Algorithm
            const algorithmElements = outer?._elements?.[1]?._elements;
            const algorithm = getDerObjectID("PKCS #8", algorithmElements?.[0]);
            if (Bytes.toHex(algorithm) !== Asn1ObjectID.ecPublicKey) {
                throw new KeyError("Unsupported PKCS #8 decryption algorithm");
            }

            // Curve
            const curve = getDerCurve("PKCS #8", algorithmElements?.[1]);

            // Private key
            const innerBytes = outer?._elements?.[2]._bytes;
            if (innerBytes === undefined || innerBytes === null) {
                throw new KeyError("Invalid PKCS #8 key");
            }
            const inner = DerCodec.decode(innerBytes);
            const key = getDerKey("PKCS #8", inner?._elements?.[1]);

            this.type = KeyType.EC;
            this.curve = curve;
            this.privateBits = key;
        },

        get: function () {
            throw new NotImplementedError("PKCS #8 export not implemented");
        },
    };

    // Import SPKI public key
    export const spki = {
        set: function (this: Key, input: Uint8Array) {
            const decoded = DerCodec.decode(input);

            const algorithmElements = decoded?._elements?.[0]?._elements;

            // Algorithm
            const algorithm = getDerObjectID("SPKI", algorithmElements?.[0]);
            if (Bytes.toHex(algorithm) !== Asn1ObjectID.ecPublicKey) {
                throw new KeyError("Unsupported SPKI decryption algorithm");
            }

            // Curve
            const curve = getDerCurve("SPKI", algorithmElements?.[1]);

            // Key
            const key = getDerKey("SPKI", decoded?._elements?.[1], DerType.BitString);

            this.type = KeyType.EC;
            this.curve = curve;
            this.publicBits = key;
        },

        get: function () {
            throw new NotImplementedError("SPKI export not implemented");
        },
    };

    // Import public key bytes in SEC1/SPKI format
    export const publicBits = {
        set: function (this: Key, input: Uint8Array) {
            if (!(input.length % 2)) {
                throw new KeyError("Invalid public key encoding");
            }

            switch (input[0]) {
                case 2:
                case 3:
                    throw new KeyError("Unsupported public key compression");

                case 4:
                    break;

                case 5:
                    throw new KeyError("Illegal public key format specifier");
            }

            const coordinateLength = (input.length - 1) / 2;

            inferCurve(this, coordinateLength);

            this.type = KeyType.EC;
            this.xBits = input.slice(1, coordinateLength + 1);
            this.yBits = input.slice(coordinateLength + 1);
        },

        get: function (this: Key) {
            if (this.xBits === undefined || this.yBits === undefined) {
                return undefined;
            }

            return new Uint8Array([0x04, ...this.xBits, ...this.yBits]);
        },
    };

    // Import/export from BinaryKeyPair
    export const keyPairBits = {
        set: function (this: Key, keyPair: BinaryKeyPair) {
            this.publicBits = keyPair.publicKey;
            this.privateBits = keyPair.privateKey;
        },

        get: function (this: Key): BinaryKeyPair | undefined {
            const publicBits = this.publicBits;
            const privateBits = this.privateBits;
            if (publicBits === undefined || privateBits === undefined) {
                return;
            }
            return {
                publicKey: publicBits,
                privateKey: privateBits,
            };
        },
    };
}

enum Aliases {
    algorithm = "alg",
    curve = "crv",
    type = "kty",
    operations = "key_ops",
    private = "d",
    extractable = "ext",
}

enum Base64Codecs {
    privateBits = "d",
    xBits = "x",
    yBits = "y",
}

enum AssertedAliases {
    publicKey = "publicBits",
    privateKey = "privateBits",
    keyPair = "keyPairBits",
}

function inferCurve(key: Key, bytes: number) {
    if (!key.curve) {
        // Guess curve based on key length
        switch (bytes) {
            case 66:
                key.curve = CurveType.p521;
                break;

            case 48:
                key.curve = CurveType.p384;
                break;

            case 32:
                key.curve = CurveType.p256;
                break;

            default:
                throw new KeyError(`Cannot infer named curve from key length ${bytes}`);
        }
    }
}

/**
 * Generic key factory.
 */
export function Key(properties: Partial<Key>) {
    const that = {} as Key;

    // Assign base JWK properties.  All other properties are some form of alias
    for (const key of JWK_KEYS) {
        if ((properties as any)[key] !== undefined) (that as any)[key] = (properties as any)[key];
    }
    function assign(name: string) {
        const d = Object.getOwnPropertyDescriptor(properties, name);
        if (d && d.value !== undefined) {
            (that as any)[name] = d.value;
        }
    }

    // We implement the following in reverse-priority order

    // Aliases map a readable name to the cryptic JWK equivalent
    Object.entries(Aliases).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => that[target],
            set: value => (that[target] = value),
        });
        assign(alias);
    });

    // Codecs allow for binary read/write on base-64 fields
    Object.entries(Base64Codecs).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => that[target] !== undefined && Base64.decode(that[target]),
            set: value => (that[target] = value === undefined ? undefined : Base64.encode(value, true)),
        });
        assign(alias);
    });

    // Importers translate external formats
    Object.entries(Translators).forEach(([name, translator]) => {
        Object.defineProperty(that, name, translator as any);
    });

    // Import invocation after all initializations due to dependencies
    Object.keys(Translators).forEach(name => assign(name));

    // Asserted aliases
    Object.entries(AssertedAliases).forEach(([alias, target]) => {
        Object.defineProperty(that, alias, {
            get: () => {
                const result = that[target];
                if (result === undefined) {
                    throw new KeyError(`Key field ${target} is not defined`);
                }
                return result;
            },

            set: (value: any) => {
                that[target] = value;
            },
        });

        assign(alias);
    });

    /** Compute public point from private EC key */
    function derivePublicFromPrivate() {
        if (that.type !== KeyType.EC) throw new KeyError("EC key type required to compute public point");
        if (!that.private) throw new KeyError("EC private key required to compute public point");

        const crv = that.crv;
        let keyLength: number;

        switch (crv) {
            case CurveType.p256:
                keyLength = 32;
                // We can add the other point types easily by exposing more from @noble/curves
                // case CurveType.p384:
                // case CurveType.p521:
                break;

            default:
                throw new KeyError(`Unsupported elliptic curve ${crv}`);
        }

        // Compute
        const ecKey = ProjectivePoint.fromPrivateKey(that.privateKey);

        // Install
        that.xBits = numberToBytesBE(ecKey.x, keyLength);
        that.yBits = numberToBytesBE(ecKey.y, keyLength);
    }

    if (that.type === KeyType.EC) {
        if (that.d) {
            inferCurve(that, that.privateKey.length);
        } else if (that.xBits) {
            inferCurve(that, that.xBits.length);
        }

        if (that.d && (!that.x || !that.y)) {
            derivePublicFromPrivate();
        }
    }

    return that;
}

/**
 * Private key factory.
 */
export function PrivateKey(privateKey: Uint8Array | BinaryKeyPair, options?: Partial<Key>) {
    let priv, pub;
    if (ArrayBuffer.isView(privateKey)) {
        priv = privateKey;
    } else {
        priv = privateKey.privateKey;
        pub = privateKey.publicKey;
    }
    return Key({
        type: KeyType.EC,
        privateKey: priv,
        publicKey: pub,
        ...options,
    }) as PrivateKey;
}

/**
 * Public key factory.
 */
export function PublicKey(publicKey: Uint8Array, options?: Partial<Key>) {
    return Key({
        type: KeyType.EC,
        publicKey,
        ...options,
    }) as PublicKey;
}

/**
 * Symmetric key factory.
 */
export function SymmetricKey(privateKey: Uint8Array, options?: Partial<Key>) {
    return Key({
        type: KeyType.oct,
        privateKey: privateKey,
        ...options,
    });
}
