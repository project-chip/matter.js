# @license
# Copyright 2022-2025 Matter.js Authors
# SPDX-License-Identifier: Apache-2.0

# Builds an image capable of running chip-tool and CHIP tests.
#
# Intermediate stages don't focus on optimization but the final image is minimal (relatively speaking).

# TODO - either finish cross compilation, create CI & manifest for amd64 & arm64, or punt.  Current choice: punt

# STAGE 1 - common base image
FROM ubuntu:24.04 AS base

SHELL [ "/bin/bash", "-c" ]

# Quality of life
RUN echo 'PS1="\[\033[01;32m\]matter.js-chip\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m# "' >> /root/.bashrc

# Set timezone to UTC
ENV TZ=Etc/UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install a few packages required by final image and build
RUN --mount=type=cache,sharing=locked,target=/var/cache/apt \
    --mount=type=cache,sharing=locked,target=/var/lib/apt \
    apt-get -qq update && \
    apt-get -qq -y install python3 python-is-python3 libavahi-client3 libglib2.0-0


# STAGE 2 - CHIP source code and build tooling
FROM --platform=$BUILDPLATFORM base AS build

ARG TARGETPLATFORM

# Validate platform (must be amd64 or arm64)
RUN case "${TARGETPLATFORM}" in \
    "linux/amd64"|"linux/arm64") echo "Targeting ${TARGET_PLATFORM}";; \
    "") echo "TARGETPLATFORM not set, please build with buildx";; \
    *) echo "Unsupported platform ${TARGETPLATFORM}";; \
    esac

# Configure for cross compilation
#RUN dpkg --add-architecture arm64
#COPY ubuntu-arm64.sources /etc/apt/sources.list.d

# Install system packages required for build
RUN --mount=type=cache,sharing=locked,target=/var/cache/apt \
    --mount=type=cache,sharing=locked,target=/var/lib/apt \
    apt-get -qq update && \
    apt-get -qq -y install git gcc g++ pkg-config libssl-dev libdbus-1-dev libglib2.0-dev libavahi-client-dev \
        ninja-build python3-venv python3-dev unzip libgirepository1.0-dev libcairo2-dev libreadline-dev python3-pip

# Install x86->arm cross compilers.  Not useful becauserequire installation of lib dependencies which we've not
# implemented
# RUN apt-get -qq -y install gcc-aarch64-linux-gnu g++-aarch64-linux-gnu binutils-aarch64-linux-gnu

# Pull CHIP source code
RUN git clone --depth=1 https://github.com/project-chip/connectedhomeip.git
WORKDIR /connectedhomeip
RUN ./scripts/checkout_submodules.py --shallow --platform linux


# STAGE 3 - build chip-tool and installed python packages
FROM --platform=$BUILDPLATFORM build AS bins

WORKDIR /connectedhomeip

# Reduce build size, saves about 1/3 of final image
RUN sed -i "s/is_debug = true/is_debug = false/" build/config/BUILDCONFIG.gn && \
    sed -i "s/-O2/-Os/" build/config/compiler/BUILD.gn && \
    sed -i "s/strip_symbols = false/strip_symbols = true/" build/config/compiler/compiler.gni

# Build chip-tool
RUN case ${TARGETPLATFORM} in \
    "linux/amd64") \
        source scripts/activate.sh && \
        scripts/build/build_examples.py --target linux-x64-chip-tool-ipv6only-platform-mdns build \
    ;; \
    "linux/arm64") \
        source scripts/activate.sh && \
        scripts/build/build_examples.py --target linux-arm64-chip-tool-ipv6only-platform-mdns /bins build \
    ;; \
    esac
RUN cp out/*/chip-tool out

# Build python wheels
RUN scripts/build_python.sh --chip_mdns platform


# STAGE 4 - install into final destination
FROM bins AS install

# Install external python dependencies
RUN pip install --break-system-packages -r src/python_testing/requirements.txt
RUN pip install --break-system-packages -r scripts/tests/requirements.txt

# Install CHIP wheels globally
RUN find out -name \*.whl | xargs pip install --break-system-packages --upgrade


# STAGE 5 - extract CHIP subset required for runtime
FROM base AS final

# Install some runtime-only packages
RUN --mount=type=cache,sharing=locked,target=/var/cache/apt \
    --mount=type=cache,sharing=locked,target=/var/lib/apt \
    apt-get -qq update && \
    apt-get -qq -y install avahi-daemon avahi-utils iproute2 less vim wget

LABEL org.opencontainers.image.title="matter.js CHIP tooling build"
LABEL org.opencontainers.image.url=https://github.com/matter-js/matter.js-chip
LABEL org.opencontainers.image.source=https://github.com/project-chip/matter.js/tree/main/packages/testing/chip

RUN rm -rf bin.usr-is-merged boot home media mnt opt sbin.usr-is-merged srv 

# chip-tool binary
COPY --from=install /connectedhomeip/out/chip-tool /bin/chip-tool

# Installed python packages
COPY --from=install /usr/lib/python3/dist-packages /usr/lib/python3/dist-packages
COPY --from=install /usr/local/lib /usr/local/lib

# Other python packages CHIP has scattered randomly and adds to path in relative_importer.py
WORKDIR /usr/local/lib/python3.12/dist-packages
COPY --from=build /connectedhomeip/scripts/tests/chiptest chiptest
COPY --from=build /connectedhomeip/scripts/py_matter_idl/matter_idl matter_idl
COPY --from=build /connectedhomeip/scripts/py_matter_yamltests/matter_yamltests matter_yamltests
COPY --from=build /connectedhomeip/examples/chip-tool/py_matter_chip_tool_adapter/matter_chip_tool_adapter matter_chip_tool_adapter
COPY --from=build /connectedhomeip/examples/placeholder/py_matter_placeholder_adapter/matter_placeholder_adapter matter_placeholder_adapter
COPY --from=build /connectedhomeip/src/controller/python/py_matter_yamltest_repl_adapter/matter_yamltest_repl_adapter matter_yamltest_repl_adapter

# Link various bits to original connectedhomeip locations for discovery and/or convenience
RUN ln -s "$(realpath chip/testing/data_model)" /data_model
RUN mkdir -p /scripts/tests
RUN ln -s "$(realpath chiptest)" /scripts/tests/chiptest
RUN mkdir -p /scripts/py_matter_yamltests
RUN ln -s "$(realpath matter_yamltests)" /scripts/py_matter_yamltests/matter_yamltests

# YAML test logic
WORKDIR /
COPY --from=build /connectedhomeip/scripts/tests/chipyaml /scripts/tests/chipyaml

# Ensure python logic can find the data model (spec_parsing.yaml looks for "scraper_version" but the wheels don't
# include it)
ENV PW_PROJECT_ROOT=/
RUN touch /data_model/master/scraper_version

# YAML tests of course use a different data model
COPY --from=build /connectedhomeip/src/app/zap-templates/zcl/data-model/chip \
    /src/app/zap-templates/zcl/data-model/chip

# Tests
COPY --from=build /connectedhomeip/src/python_testing /src/python_testing
COPY --from=build /connectedhomeip/src/app/tests/suites /src/app/tests/suites

# Development certs
COPY --from=build /connectedhomeip/credentials/development/paa-root-certs /credentials/development/paa-root-certs
COPY --from=build /connectedhomeip/credentials/development/cd-certs /credentials/development/cd-certs

RUN mkdir /run/dbus

# Summarize tests for efficient metadata load at runtime
COPY generate-test-descriptor /bin/generate-test-descriptor
RUN generate-test-descriptor > /lib/test-descriptor.json

# Include CHIP SHA for diagnostic purposes
COPY --from=build /connectedhomeip/.git/refs/heads/master /etc/chip-version
