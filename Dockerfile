FROM node:24.22.1-bookworm
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    aws --version
RUN apt update -y
RUN apt install tree
WORKDIR /project
