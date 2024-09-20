FROM ubuntu:22.04

SHELL ["/bin/bash", "-c"]

RUN apt-get -qq update
RUN apt-get -qq -y install git gcc g++ pkg-config libssl-dev libdbus-1-dev libglib2.0-dev libavahi-client-dev ninja-build \
    python3-venv python3-dev python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev

RUN git clone --depth=1 https://github.com/project-chip/connectedhomeip.git
WORKDIR /connectedhomeip
RUN ./scripts/checkout_submodules.py --shallow --platform linux

RUN source scripts/activate.sh && gn gen out/host && ninja -C out/host

RUN source scripts/activate.sh && ./scripts/build_python.sh --install_virtual_env /venv

ENV PATH="/venv/bin:$PATH"

RUN apt-get -qq -y install iproute2

WORKDIR /

ENTRYPOINT ["/venv/bin/python3", "-B"]
