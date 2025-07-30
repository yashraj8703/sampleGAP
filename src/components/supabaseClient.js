import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project URL and API Key
const supabaseUrl = 'https://xvkjojamcxqxtsubacbm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2a2pvamFtY3hxeHRzdWJhY2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4ODEzMzMsImV4cCI6MjA2OTQ1NzMzM30.btMfJnblrRLSb-YioSO9jiaH1r7Ge0LrGUrnoMyPNpY'

// Create a client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
