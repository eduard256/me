# Next.js static export served by nginx.
# The site uses `output: 'export'` so `next build` emits a fully static `out/`
# directory — no Node runtime is needed at serve time.

# ---- builder ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies against the lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

# Build the static export.
COPY . .
RUN npm run build

# ---- runner ----
FROM nginx:alpine AS runner

# Static assets only.
COPY --from=builder /app/out /usr/share/nginx/html

# trailingSlash:true in next.config emits folder/index.html, which nginx's
# default config serves correctly. Expose the standard HTTP port.
EXPOSE 80
