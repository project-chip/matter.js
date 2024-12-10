# matter.js CHIP container

This is the source for **ghcr.io/matter-js/chip** published here: https://github.com/matter-js/matter.js-chip

## Usage

The matter.js test harness pulls this image automatically when running CHIP tests.

This directory contains additional helper scripts:

* [build](./build) builds the image
* [rebuild](./rebuild) builds the image from scratch
* [shell](./shell) starts an interactive bash shell inside a local container
* [tool](./tool) runs chip-tool inside a local container
* [publish](./publish) pushes the image to GHCR with "latest" tag
* [pull](./pull) pulls the image from GHCR

The container currently requires host networking and access to a local Avahi for MDNS.  In the future we will run Avahi
in a utility container and convert to a bridge network.

## Building

The [Dockerfile](./Dockerfile) implements a multistage buildx that produces a relatively lightweight final image with
chip-tool and [connectedhomeip](https://github.com/project-chip/connectedhomeip) certification tests.

Run [build](./build) to build.

See [publish](./publish) for details on how to push updated images.

We currently build for **linux/amd64** and use emulation on Arm Macs.  x86 is appropriate for GitHub CI. Building for
Arm under emulation is way to slow and running under emulation on MacOS works fine.

Cross-compilation is theoretically possible with chip tooling.  Patient volunteers with buildx, gn and ninja experience
welcome. 😉
