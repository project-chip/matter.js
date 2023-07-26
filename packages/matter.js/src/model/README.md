# Matter Object Model

This folder contains an object model that captures Matter semantics as
precisely as possible.  It also includes support logic related to model
manipulation and runtime validation.

Other representations of the Matter data model in matter.js offer similar
representations with a different focus.  The TLV models data with a focus on
serialization and manipulation of instance values.  The Cluster API models
clusters in an operational form and in fact is partially generated from this
model.

All references to *Matter specification* in the object model corpus refer
collectively to
[Matter 1.1 Core Specification](https://csa-iot.org/developer-resource/specifications-download-request/),
[Matter 1.1 Application Cluster Specification](https://csa-iot.org/developer-resource/specifications-download-request/), and
[Matter 1.1 Device Library Specification](https://csa-iot.org/developer-resource/specifications-download-request/).


## Code structure

Subfolders support specific functions:
- [elements/](elements) - types describing the data model
- [models/](models) - classes implementing an operational version of the data model
- [standard/](standard) - the full data model defined by the Matter Specification
- [definitions/](definitions) - support enums and types
- [aspects/](aspects) - parsers and ASTs for fields that utilize domain specific languages
- [logic/](logic) - various algorithms that operate on models

The datatypes in [elements](elements) model Matter elements using TypeScript
types.  _Elements_ are a formal component of the Matter specification that
describe individual structures in the data model.  Our element definitions
are subtypes of [BaseElement](elements/BaseElement.ts).

For each element definition, a class in [models](models) offers a concrete
operational implementation.  This is the API to use if you need to work with
the data model beyond simple data modeling.  Our models are all subtypes of
[Model](models/Model.ts).

[MatterModel](models/MatterModel.ts) is the primary entrypoint to the API.


## Usage

Obtain a working instance of the model:

```ts
import { MatterModel } from "@project-chip/matter.js/model";
const matter = new MatterModel();
```

Retrieve standard definitions from the model:

```ts
import { DatatypeModel, ClusterModel } from "@project-chip/matter.js/model";
const OnOffCluster = matter.get(ClusterModel, "OnOff");
const uint8 = matter.get(DatatypeModel, "uint8");
```

Iterate over attributes of a cluster:

```ts
for (const attribute of OnOffCluster.attributes) {
    // Do something
}
```

## Implementation

The base model includes [global datatypes](elements/Globals.ts) defined by the
Matter specification.  We generate other elements of the
[standard model](standard/Matter.ts) by merging models in the
[top-level models folder](../../../../models).

To recreate the standard model files:

```sh
cd matter.js/tools
npm run generate-model
```

### Spec data model

Input model _[spec.ts](../../../../models/spec.ts)_ is the data model
defined by the Matter specification.

We generate [spec.ts](../../../../models/spec.ts) from the Matter specification
documents.  This ensures our definitions align with the specification and gives
us detailed information unavailable elsewhere.

The spec generator is [generate-spec.ts](../../../../tools/generate-spec.ts).
To run:

```sh
cd matter.js/tools
npm run generate-spec
```

Details we extract from the specification include standard element names, types
and detailed documentation including cross references to specification
documents.  We also extract DSL-based definitions of Matter concepts such as
conformance, constraints, etc.

### CHIP data model

Input model [chip.ts](../../../../models/chip.ts) is the CHIP data
model.  _CHIP_ is [Project CHIP's connectedhomeip repository](https://github.com/project-chip/connectedhomeip/).
At the time of this writing this is the most robust open-source programmatic
definition of Matter elements and serves as a defacto standard for Matter
definitions.

We generate [chip.ts](../../../../models/chip.ts) from
[CHIP definitions](https://github.com/project-chip/connectedhomeip/tree/master/src/app/zap-templates/zcl/data-model).
This ensures our definitions align with CHIP's.

The CHIP generator is [generate-chip](../../../../tools/generate-chip.ts).  To run:

```sh
cd matter.js/tools
npm run generate-chip
```

### Local data model

Input model _[local.ts](../../../../models/local.ts)_ defines elements
that are unavailable (or incorrect) in the other models.  This partial model is
the result of editorial decisions by matter.js contributors.

### Standard (final) data model

Unlike above data models, the _standard data model_ in
[src/model/standard](./standard) is part of the matter.js public API.  This
represents our best attempt at a complete Matter data model.

[generate-model.ts](../../../../tools/generate-model.ts) creates this model by
analyzing and combining elements from the models above.

To update the standard model:

```sh
cd matter.js/tools
npm run generate-model
```

## Cluster generation

One of the ways we use the Matter Object Model is to generate cluster
implementations.

The cluster generator is [generate-cluster.ts](../../../../tools/generate-clusters.ts).
To run:

```sh
cd matter.js/tools
npm run generate
```

Note that this will rebuild the model (above) and the clusters.  If you know
the model is unchanged you can also just generate the clusters:

```sh
cd matter.js/tools
npm run generate-clusters
```

This is generally only useful if you are modifying the cluster generation
code or if you have already generated the model.

## Ensuring correctness

Many of the scripts mentioned above generate models.  It is important that
these models are accurate.

To this end, there is extensive validation that every generator runs before
output.  Validation prints detailed information about the state of every
element in the model.

Each validation error is associated with an error code.  If there are errors,
a summary of the errors is printed at the end of validation.

The final model is also validated during testing by
[MatterTest](../../test/model/standard/MatterTest.ts).

Automatic validation can't find every semantic error but it does ensure the
resulting model is functional.
