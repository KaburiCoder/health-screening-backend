declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI?: string;
    JWT_KEY?: string;
    ENC_KEY?: string;
    PORT?: string;
  }
}
