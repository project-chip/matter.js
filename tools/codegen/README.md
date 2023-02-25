## Matter Protobuf Generator

The Matter SDK contains tools to generate arbitrary code from the XML Schema
Definitions for the cluster library, device types, and general data model.
The `matter_idl_plugin` directory defines such a code generator for creating a
matter.js TlvSchema representation of all the Matter clusters.

To execute the code generator, follow these steps:

1. `export MATTER_SDK=<location of connectedhomeip repo>`
2. `pushd $MATTER_SDK`
3. `source ./scripts/activate.sh`
4. `popd`
5. `./gen.sh`

The output will go into a `out` subdirectory.
