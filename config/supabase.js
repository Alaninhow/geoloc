import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://coqerwlmmccliqexofvz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcWVyd2xtbWNjbGlxZXhvZnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzQ4NzIsImV4cCI6MjA3Nzg1MDg3Mn0.FBfQeGzR1TGFXKxhjQQso3PpY3dLAM8eNNxfQxSNDYo'

export const supabase = createClient(supabaseUrl, supabaseKey)