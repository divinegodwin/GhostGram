import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://dgzqniremyrphlbfabuz.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnenFuaXJlbXlycGhsYmZhYnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NDg5MjMsImV4cCI6MjAxOTUyNDkyM30.A-Mn6fNLw7mu_j_pUrHVyUIFSGDPQypemxI4NIO57m0"

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;