import * as yup from 'yup';
import * as dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production':'.env.development'
})

export const {
    TEST_URL,
    TEST_DIR
} = yup.object({
    // port: yup.number().integer().default(3000),
    TEST_URL: yup.string().default(''),
    TEST_DIR: yup.string().default('')
}).validateSync(process.env)