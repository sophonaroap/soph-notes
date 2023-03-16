declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DATABASE_URL: string
			PORT: number
			HOST: string
			NODE_ENV: 'development' | 'production'
			REDIS_HOST: string
			SESSION_SECRET: string
		}
	}
}

export {}