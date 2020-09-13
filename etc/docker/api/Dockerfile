ARG NODE_IMG

FROM $NODE_IMG as npm_cache
WORKDIR /cache

COPY package*.json ./
RUN npm ci --production --no-optional --ddp --ignore-scripts --no-audit

FROM $NODE_IMG

ARG NODE_ENV
ARG NODE_LOG

ENV LANG C.UTF-8
ENV NODE_ENV development
ENV NPM_CONFIG_LOGLEVEL $NODE_LOG

RUN mkdir -p /app && mkdir -p app/db && chown node:node -R /app
WORKDIR /app

USER node

COPY --from=npm_cache /cache ./
COPY dist ./


