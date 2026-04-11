/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TELEMETRY_API_URL: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
