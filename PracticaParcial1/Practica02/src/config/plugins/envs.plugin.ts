import 'dotenv/config'
import * as env from 'env-var'

export const envs = { 
    DATABASE_URL: env.get('DATABASE_URL').required().asString(),
    PORT: env.get('PORT').required().asPortNumber(),
}