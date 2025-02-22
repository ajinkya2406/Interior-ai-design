import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-room-design_owner:npg_tlzoYBi6V4UW@ep-super-sound-a5t5b7gm-pooler.us-east-2.aws.neon.tech/ai-room-design?sslmode=require',
  },
});
